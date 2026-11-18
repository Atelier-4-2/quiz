/**
 * Anki-style SM-2 Spaced Repetition System (SRS) + Goal-Date Scheduling
 */
(function (global) {
  const STORAGE_KEY_V2 = "atelier42_quiz_srs_v2";
  const LEGACY_KEY_V1 = "atelier42_histoire_30_v1";
  const CUSTOM_DECKS_KEY = "atelier42_custom_decks_v1";
  const ACTIVE_DECK_KEY = "atelier42_active_deck_v1";
  const DECK_GOALS_KEY = "atelier42_deck_goals_v1";
  const DAY_MS = 24 * 60 * 60 * 1000;

  function loadAllProgress() {
    let data = {};
    try {
      data = JSON.parse(localStorage.getItem(STORAGE_KEY_V2) || "{}");
    } catch {
      data = {};
    }

    // Migrate legacy Histoire v1 progress once if not yet migrated
    try {
      const legacyRaw = localStorage.getItem(LEGACY_KEY_V1);
      if (legacyRaw && !data._migratedV1) {
        const legacy = JSON.parse(legacyRaw);
        const now = Date.now();
        Object.keys(legacy).forEach((id) => {
          const key = `histoire-30:${id}`;
          if (!data[key]) {
            const st = legacy[id];
            if (st === "mastered") {
              data[key] = { status: "mastered", ease: 2.5, interval: 6, reps: 2, dueDate: now + 6 * DAY_MS, lastReviewed: now };
            } else if (st === "review") {
              data[key] = { status: "review", ease: 2.3, interval: 0, reps: 0, dueDate: now, lastReviewed: now };
            }
          }
        });
        data._migratedV1 = true;
        saveAllProgress(data);
      }
    } catch {}

    return data;
  }

  function saveAllProgress(data) {
    try {
      localStorage.setItem(STORAGE_KEY_V2, JSON.stringify(data));
    } catch {}
  }

  function cardKey(deckId, cardId) {
    return `${deckId}:${cardId}`;
  }

  function getCardRecord(progress, deckId, cardId) {
    const rec = progress[cardKey(deckId, cardId)];
    if (!rec) {
      return { status: "new", ease: 2.5, interval: 0, reps: 0, dueDate: 0, lastReviewed: 0 };
    }
    return rec;
  }

  function getDeckGoal(deckId) {
    try {
      const goals = JSON.parse(localStorage.getItem(DECK_GOALS_KEY) || "{}");
      return goals[deckId] || "";
    } catch {
      return "";
    }
  }

  function setDeckGoal(deckId, dateStr) {
    try {
      const goals = JSON.parse(localStorage.getItem(DECK_GOALS_KEY) || "{}");
      if (dateStr) goals[deckId] = dateStr;
      else delete goals[deckId];
      localStorage.setItem(DECK_GOALS_KEY, JSON.stringify(goals));
    } catch {}
  }

  function getDaysRemaining(targetDateStr, now = Date.now()) {
    if (!targetDateStr) return null;
    const parts = targetDateStr.split("-").map(Number);
    if (parts.length !== 3 || parts.some(isNaN)) return null;
    const target = new Date(parts[0], parts[1] - 1, parts[2], 23, 59, 59, 999);
    const today = new Date(now);
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0);
    const diff = Math.ceil((target.getTime() - todayStart.getTime()) / DAY_MS);
    return Math.max(1, diff);
  }

  /**
   * SM-2 calculation with optional targetDate compression
   * quality: 1 (Again/다시), 2 (Hard/어려움), 3 (Good/알맞음), 4 (Easy/쉬움)
   */
  function computeNextReview(rec, quality, now = Date.now(), targetDateStr = null) {
    let ease = rec.ease || 2.5;
    let interval = rec.interval || 0;
    let reps = rec.reps || 0;
    let status = "review";

    if (quality === 1) {
      reps = 0;
      interval = 0;
      ease = Math.max(1.3, ease - 0.2);
      status = "review";
    } else if (quality === 2) {
      reps = Math.max(1, reps);
      interval = interval === 0 ? 1 : Math.max(1, Math.round(interval * 1.2));
      ease = Math.max(1.3, ease - 0.15);
      status = interval >= 4 ? "mastered" : "review";
    } else if (quality === 3) {
      if (reps === 0) interval = 1;
      else if (reps === 1) interval = 6;
      else interval = Math.round(interval * ease);
      reps += 1;
      status = interval >= 1 ? "mastered" : "review";
    } else if (quality === 4) {
      if (reps === 0) interval = 4;
      else if (reps === 1) interval = 10;
      else interval = Math.round(interval * ease * 1.3);
      reps += 1;
      ease = ease + 0.15;
      status = "mastered";
    }

    // Compress interval so every card is reviewed before the target date
    if (targetDateStr && quality >= 2) {
      const daysRem = getDaysRemaining(targetDateStr, now);
      if (daysRem !== null) {
        if (daysRem <= 1) {
          interval = quality === 2 ? 0 : 1;
        } else {
          const cap = Math.max(1, Math.min(daysRem - 1, Math.floor(daysRem * 0.65)));
          interval = Math.min(interval, cap);
        }
      }
    }

    return {
      status,
      ease: Number(ease.toFixed(2)),
      interval,
      reps,
      dueDate: interval === 0 ? now : now + interval * DAY_MS,
      lastReviewed: now
    };
  }

  function formatInterval(days) {
    if (days <= 0) return "오늘";
    if (days === 1) return "1일";
    if (days < 30) return `${days}일`;
    const months = Math.round(days / 30);
    return `${months}개월`;
  }

  function isDue(rec, now = Date.now()) {
    if (!rec || rec.status === "new") return true;
    return (rec.dueDate || 0) <= now;
  }

  function getStudyPlan(deck, progress, targetDateStr, now = Date.now()) {
    const daysRemaining = getDaysRemaining(targetDateStr, now);
    let dueCount = 0;
    let newCount = 0;
    let masteredCount = 0;

    deck.cards.forEach((c) => {
      const rec = getCardRecord(progress, deck.id, c.id);
      if (rec.status === "new") newCount += 1;
      if (rec.status === "mastered") masteredCount += 1;
      if (isDue(rec, now)) dueCount += 1;
    });

    const dailyRecommended = daysRemaining
      ? Math.ceil(dueCount / Math.max(1, daysRemaining))
      : dueCount;

    return {
      targetDate: targetDateStr,
      daysRemaining,
      totalCards: deck.cards.length,
      masteredCount,
      dueCount,
      newCount,
      dailyRecommended
    };
  }

  function loadCustomDecks() {
    try {
      const list = JSON.parse(localStorage.getItem(CUSTOM_DECKS_KEY) || "[]");
      return Array.isArray(list) ? list : [];
    } catch {
      return [];
    }
  }

  function saveCustomDecks(decks) {
    try {
      localStorage.setItem(CUSTOM_DECKS_KEY, JSON.stringify(decks));
    } catch {}
  }

  function getActiveDeckId(defaultId) {
    try {
      return localStorage.getItem(ACTIVE_DECK_KEY) || defaultId;
    } catch {
      return defaultId;
    }
  }

  function setActiveDeckId(deckId) {
    try {
      localStorage.setItem(ACTIVE_DECK_KEY, deckId);
    } catch {}
  }

  global.AtelierSRS = {
    loadAllProgress,
    saveAllProgress,
    cardKey,
    getCardRecord,
    getDeckGoal,
    setDeckGoal,
    getDaysRemaining,
    computeNextReview,
    formatInterval,
    isDue,
    getStudyPlan,
    loadCustomDecks,
    saveCustomDecks,
    getActiveDeckId,
    setActiveDeckId
  };
})(window);
