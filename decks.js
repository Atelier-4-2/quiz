/**
 * Built-in Decks & Card Schema Helpers
 */
(function (global) {
  const HISTOIRE_PROJECTS = [
      { id: 1, chapter: "#1 Crise du Mouvement moderne", name: "Pruitt-Igoe", architect: "Minoru Yamasaki", location: "St. Louis, États-Unis", year: "1950 (슬라이드), démolition 1972", desc: "Grand ensemble de logements sociaux, application radicale du fonctionnalisme. Dégradation rapide, démoli en 1972 : symbole de l'échec du modernisme.", koTip: "기능주의의 급진적 적용 → 빠른 노후화 → 1972년 폭파 철거 (모더니즘 실패의 상징).", img: "images/01.jpg" },
      { id: 2, chapter: "#1 Crise du Mouvement moderne", name: "Robin Hood Gardens", architect: "Alison & Peter Smithson (Team 10)", location: "Londres, Poplar", year: "1972", desc: "Logement social expérimental, « streets in the sky ». Tentative d'humaniser le modernisme, résultats mitigés, démoli récemment.", koTip: "Smithson 부부 (Team 10) · '하늘 길(streets in the sky)' · Byker Wall과 구분!", img: "images/02.jpg" },
      { id: 3, chapter: "#1 Crise du Mouvement moderne", name: "Byker Wall", architect: "Ralph Erskine", location: "Newcastle, Royaume-Uni", year: "1982", desc: "Logement social participatif : les habitants intègrent le processus. Architecture adaptée au contexte local (climat), alternative au grand ensemble.", koTip: "주민 참여형(participatif) + 북쪽 바람 막는 긴 벽(기후 적응).", img: "images/03.jpg" },
      { id: 4, chapter: "#1 Crise du Mouvement moderne", name: "Espaces d'Abraxas", architect: "Ricardo Bofill (Taller de Arquitectura)", location: "Noisy-le-Grand, France", year: "1983", desc: "Logement monumental, réintroduction de formes classiques. Critique du fonctionnalisme, architecture comme décor, ambiguïté entre utopie et spectacle.", koTip: "파리 근교(Noisy-le-Grand), 고전 기둥·아치 형태의 거대 기념비적 주거 (Walden 7과 구분!).", img: "images/04.jpg" },
      { id: 5, chapter: "#1 Crise du Mouvement moderne", name: "Habitat 67", architect: "Moshe Safdie", location: "Montréal, Canada (Expo 67)", year: "1967", desc: "Prototype de logement modulaire expérimental. Réponse critique aux grands ensembles : densité compatible avec la qualité de vie.", koTip: "몬트리올 엑스포 67 · 프리패브 모듈러 적층 주거.", img: "images/05.jpg" },
      { id: 6, chapter: "#1 Crise du Mouvement moderne", name: "Siedlung Halen", architect: "Atelier 5", location: "près de Berne, Suisse", year: "1961", desc: "Logement dense intégré au paysage (pente, forêt), échelle humaine. Alternative au grand ensemble, projet durable dans le temps.", koTip: "베른 근처 경사지·숲에 통합된 고밀 저층 주거, 인간적 스케일.", img: "images/06.jpg" },
      { id: 7, chapter: "#1 Crise du Mouvement moderne", name: "PREVI", architect: "concours international (Aldo van Eyck, James Stirling, Atelier 5, Georges Candilis, Charles Correa…)", location: "Lima, Pérou", year: "1970", desc: "Projet expérimental de logement évolutif : les habitants agrandissent leur maison. Critique du modèle standardisé.", koTip: "국제 공모 · 거주자가 스스로 증축하는 진화형(évolutif) 주거.", img: "images/07.jpg" },
      { id: 8, chapter: "#1 Crise du Mouvement moderne", name: "La Grande Motte", architect: "Jean Balladur", location: "Hérault (Languedoc), France", year: "1970", desc: "Station balnéaire planifiée (Mission Racine), pyramides répétitives et iconiques. Modernisme touristique tardif, logique sérielle et économique.", koTip: "Mission Racine 계획 휴양 도시 · 반복되는 피라미드 매스.", img: "images/08.jpg" },
      { id: 9, chapter: "#1 Crise du Mouvement moderne", name: "Nakagin Capsule Tower", architect: "Kisho Kurokawa", location: "Tokyo (Ginza)", year: "1972 (démolie en 2022)", desc: "Projet métaboliste : capsules d'habitation remplaçables fixées sur deux noyaux. Vision évolutive de la ville. Démolie en 2022.", koTip: "교체 가능한 캡슐 + 2개의 코어 (메타볼리즘, 2022년 철거).", img: "images/09.jpg" },
      { id: 10, chapter: "#2 Postmodernismes", name: "Guild House", architect: "Robert Venturi (& John Rauch)", location: "Philadelphie, États-Unis", year: "1963", desc: "Logement pour personnes âgées, façade volontairement banale, antenne TV comme symbole. Référence ironique au modernisme : projet critique fondateur (« decorated shed »).", koTip: "노인 주거 · 의도적으로 평범한 입면 + TV 안테나 상징 ('decorated shed').", img: "images/10.jpg" },
      { id: 11, chapter: "#2 Postmodernismes", name: "Piazza d'Italia", architect: "Charles Moore", location: "La Nouvelle-Orléans, États-Unis", year: "1978", desc: "Espace public scénographique pour la communauté italienne. Colonnes et arcs antiques en néon et inox, couleurs : architecture ludique et narrative.", koTip: "이탈리아계 커뮤니티 광장 · 네온·스테인리스로 재해석한 고전 기둥과 아치.", img: "images/11.jpg" },
      { id: 12, chapter: "#2 Postmodernismes", name: "Teatro del Mondo", architect: "Aldo Rossi", location: "Venise (Biennale 1980)", year: "1980", desc: "Théâtre flottant temporaire en bois sur une barge. Formes archétypales simples, mémoire urbaine de Venise : architecture comme artefact.", koTip: "베니스 비엔날레 수상 목조 가설 극장 · 원형적 형태와 도시의 기억.", img: "images/12.jpg" },
      { id: 13, chapter: "#2 Postmodernismes", name: "Sony Tower (AT&T Building)", architect: "Philip Johnson & John Burgee", location: "New York, Madison Avenue", year: "1984", desc: "Gratte-ciel au sommet en fronton brisé « Chippendale ». Citation historique explicite, architecture-signe, postmodernisme corporate.", koTip: "치펜데일(Chippendale) 부서진 박공 지붕 · 기업형 포스트모더니즘.", img: "images/13.jpg" },
      { id: 14, chapter: "#2 Postmodernismes", name: "Walden 7", architect: "Ricardo Bofill", location: "Sant Just Desvern, près de Barcelone", year: "1975", desc: "Logements expérimentaux, organisation labyrinthique autour de cours. Référence aux formes méditerranéennes, couleur et monumentalité.", koTip: "바르셀로나 근교 · 붉은 미로형 중정 집합주택 (Abraxas보다 먼저, 1975).", img: "images/14.jpg" },
      { id: 15, chapter: "#2 Postmodernismes", name: "Kanchanjunga Apartments", architect: "Charles Correa", location: "Mumbai, Inde", year: "1983", desc: "Tour de logements adaptée au climat tropical : jardins suspendus à double hauteur, orientation ouest. Hybridation modernisme / tradition (véranda).", koTip: "뭄바이 고층 주거 · 2층 높이 공중 정원(베란다의 현대적 번역) · 서향 바람.", img: "images/15.jpg" },
      { id: 16, chapter: "#3 Régionalisme critique", name: "New Gourna", architect: "Hassan Fathy", location: "Gourna, près de Louxor, Égypte", year: "1970 (슬라이드)", desc: "Village en terre crue, voûtes et coupoles nubiennes. Techniques vernaculaires, adaptation climatique, architecture sociale, refus du modernisme importé.", koTip: "생흙(흙벽돌) + 누비아식 볼트·돔 · 수입 모더니즘 거부.", img: "images/16.jpg" },
      { id: 17, chapter: "#3 Régionalisme critique", name: "Hôtel de ville de Säynätsalo", architect: "Alvar Aalto", location: "Säynätsalo, Finlande", year: "1952", desc: "Bâtiment civique en brique organisé autour d'une cour surélevée. Relation au paysage, échelle humaine, modernité organique : précurseur du régionalisme critique.", koTip: "벽돌 시청사 + 들어 올려진 중정 · 비판적 지역주의의 선구자.", img: "images/17.jpg" },
      { id: 18, chapter: "#3 Régionalisme critique", name: "Azuma House (Row House Sumiyoshi)", architect: "Tadao Ando", location: "Osaka, Japon", year: "1976", desc: "Maison en béton introvertie, cour centrale ouverte au ciel. Travail sur la lumière et le vide, minimalisme contextuel.", koTip: "노출 콘크리트 · 외부에 닫히고 하늘로 열린 중정(빛과 비움).", img: "images/18.jpg" },
      { id: 19, chapter: "#3 Régionalisme critique", name: "Chapelle Saint-Benoît", architect: "Peter Zumthor", location: "Sumvitg, Grisons, Suisse", year: "1989", desc: "Église en bois (plan en goutte d'eau) intégrée au paysage alpin. Matériaux locaux, forme compacte, architecture sensorielle.", koTip: "물방울 평면 목조 예배당 · 알프스 지역 재료와 감각적 건축.", img: "images/19.jpg" },
      { id: 20, chapter: "#3 Régionalisme critique", name: "Assemblée nationale du Koweït", architect: "Jørn Utzon", location: "Koweït City", year: "1972 (슬라이드; achevée 1982)", desc: "Inspirée de formes vernaculaires (tente, souk), grande toiture-auvent. Adaptation au climat désertique, hybridation culturelle hors d'Europe.", koTip: "유촌(Utzon) · 베두인 텐트·수크(시장)에서 영감 받은 거대 캐노피 지붕.", img: "images/20.jpg" },
      { id: 21, chapter: "#3 Régionalisme critique", name: "Parlement du Bangladesh (Jatiya Sangsad)", architect: "Louis Kahn", location: "Dacca, Bangladesh", year: "1982", desc: "Projet monumental de formes géométriques simples (cercles, triangles évidés). Lumière et matière, adaptation au climat tropical, symbole politique.", koTip: "루이스 칸 · 물 위의 기념비적 콘크리트 매스, 원·삼각형 개구부.", img: "images/21.jpg" },
      { id: 22, chapter: "#3 Régionalisme critique", name: "FAU-USP", architect: "João Batista Vilanova Artigas", location: "São Paulo, Brésil", year: "1972 (슬라이드; projet 1961–69)", desc: "École d'architecture : grand espace libre central sous un toit en béton, rampes. Architecture sociale, modernité critique.", koTip: "⚠ 슬라이드에 'argentin' 오타가 있지만 Artigas는 브라질(brésilien) 건축가! 거대 콘크리트 지붕 아래 열린 학교.", img: "images/22.jpg" },
      { id: 23, chapter: "#4 Modernités tropicales", name: "Gandhi Smarak Sangrahalaya", architect: "Charles Correa", location: "Ahmedabad (ashram Sabarmati), Inde", year: "1963", desc: "Musée pavillonnaire, modules carrés ouverts et fragmentés autour d'un bassin. Ventilation naturelle, brique et tuiles locales : architecture climatique exemplaire.", koTip: "분절된 정사각형 파빌리온 + 수공간 + 자연 환기 (박물관).", img: "images/23.jpg" },
      { id: 24, chapter: "#4 Modernités tropicales", name: "MASP", architect: "Lina Bo Bardi", location: "São Paulo, Avenida Paulista", year: "1968", desc: "Musée suspendu entre deux portiques rouges, grande portée. Le rez-de-chaussée reste un espace public libre : architecture sociale, icône brésilienne.", koTip: "빨간 포르티코(기둥) 2개에 매달린 미술관 · 1층을 완전한 공공 광장으로 비움.", img: "images/24.jpg" },
      { id: 25, chapter: "#4 Modernités tropicales", name: "IIM Bangalore", architect: "Balkrishna Doshi", location: "Bangalore, Inde", year: "1983", desc: "Campus structuré par des cours et des circulations ombragées (pergolas). Adaptation au climat tropical, référence aux villes traditionnelles : architecture comme système.", koTip: "중정과 그늘진 동선(퍼골라)으로 엮인 캠퍼스 · 전통 도시 구조 참조.", img: "images/25.jpg" },
      { id: 26, chapter: "#4 Modernités tropicales", name: "Kandalama Hotel", architect: "Geoffrey Bawa", location: "Dambulla, Sri Lanka", year: "1983 (슬라이드; ouvert 1994)", desc: "Hôtel intégré dans la jungle et la falaise, couvert de végétation. Fusion architecture / paysage, ventilation naturelle : archétype du tropical modernism.", koTip: "절벽과 정글에 스며든 호텔 · 식생 피복 + 자연 환기.", img: "images/26.jpg" },
      { id: 27, chapter: "#5 Métabolisme japonais", name: "Sky House", architect: "Kiyonori Kikutake", location: "Tokyo", year: "1958", desc: "Plateforme libre surélevée sur quatre voiles ; les espaces servis (« move-nets ») s'ajoutent au fil du temps. Prototype domestique du métabolisme.", koTip: "4개 벽체 위에 들어 올린 주거 + 교체 가능한 'move-nets'.", img: "images/27.jpg" },
      { id: 28, chapter: "#5 Métabolisme japonais", name: "Yamanashi Broadcasting Center", architect: "Kenzo Tange", location: "Kofu, Japon", year: "1967", desc: "Bâtiment organisé autour de noyaux verticaux (cylindres) ; plateaux pouvant être prolongés. Idée de structure-support.", koTip: "원통형 수직 코어들 사이에 바닥판을 끼워 확장 가능하게 만든 구조.", img: "images/28.jpg" },
      { id: 29, chapter: "#7 Néo-capitales", name: "Brasília", architect: "Lúcio Costa (Plano Piloto) & Oscar Niemeyer (bâtiments)", location: "Brésil (plateau central)", year: "1960", desc: "Ville planifiée ex nihilo, axe monumental + axes résidentiels (forme d'avion/croix). Zoning fonctionnel, projet politique national, icône du modernisme mondial.", koTip: "백지 위 계획 수도 (비행기/십자 형태 Plano Piloto) · Costa(도시계획) + Niemeyer(건물).", img: "images/29.jpg" },
      { id: 30, chapter: "#7 Néo-capitales", name: "Chandigarh (Capitol Complex)", architect: "Le Corbusier (avec Pierre Jeanneret)", location: "Chandigarh, Pendjab, Inde", year: "1963 (Capitol, slide) ; 1965", desc: "Capitale du Pendjab après la Partition. Architecture monumentale en béton, modernisme exporté : symbole d'un État postcolonial (Nehru).", koTip: "인도 분리독립 후 펀자브 주도 · 네루의 탈식민 국가 상징 · 노출 콘크리트 기념비성.", img: "images/30.jpg" }
    ];

  const HISTOIRE_PAIRS = [
      { title: "1. Ricardo Bofill 2개", body: "Walden 7 (1975, 바르셀로나 근교, 미로형 붉은 집합주택) vs Espaces d'Abraxas (1983, 파리 근교 Noisy-le-Grand, 고전 기둥 모양 거대 주거)" },
      { title: "2. Charles Correa 2개", body: "Gandhi Smarak Sangrahalaya (1963, 아메다바드, 열린 정사각형 파빌리온 박물관) vs Kanchanjunga Apartments (1983, 뭄바이 타워, 2층 높이 테라스)" },
      { title: "3. São Paulo 2개", body: "MASP (1968, Lina Bo Bardi, 빨간 기둥에 매단 미술관) vs FAU-USP (1972 slide, Artigas, 거대 콘크리트 지붕 아래 열린 건축학교)" },
      { title: "4. 일본 메타볼리즘 3인방", body: "원통 코어 = Kenzo Tange (Yamanashi, 1967) · 캡슐 = Kisho Kurokawa (Nakagin, 1972) · 들어 올린 집 = Kiyonori Kikutake (Sky House, 1958)" },
      { title: "5. 국회 의사당 2개", body: "Koweït = Jørn Utzon (1972 slide, 텐트·수크 같은 큰 지붕) vs Bangladesh = Louis Kahn (1982, 원·삼각형으로 뚫린 벽, 물 위)" },
      { title: "6. 영국 집합주택 2개", body: "하늘 길(streets in the sky) = Alison & Peter Smithson (Robin Hood Gardens, 1972) vs 주민 참여 + 긴 벽 = Ralph Erskine (Byker Wall, 1982)" }
    ];

  function mapHistoireCard(p) {
    return {
      id: String(p.id),
      chapter: p.chapter,
      front: p.name,
      back: p.architect,
      sub: `${p.location} · ${p.year}`,
      desc: p.desc,
      koTip: p.koTip || '',
      img: p.img || '',
      // Legacy architecture-specific fields for rich Quiz & Exam modes
      name: p.name,
      architect: p.architect,
      location: p.location,
      year: p.year
    };
  }

  const BUILTIN_DECKS = [
    {
      id: 'histoire-30',
      title: 'Histoire de l\'architecture (30)',
      subtitle: '건축사 30개 주요 프로젝트',
      kind: 'architecture',
      builtin: true,
      hasPhotoMode: true,
      hasExamMode: true,
      pairs: HISTOIRE_PAIRS,
      cards: HISTOIRE_PROJECTS.map(mapHistoireCard)
    }
  ];

  /**
   * Parse Quizlet-style pasted text:
   * Each line: Front [Tab or ; or -] Back ([| or ::] Hint/Tip)
   */
  function parseBulkText(text, defaultChapter = '일반') {
    const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    const cards = [];
    lines.forEach((line, idx) => {
      let parts = null;
      if (line.includes('\t')) parts = line.split('\t');
      else if (line.includes(';')) parts = line.split(';');
      else if (line.includes(' - ')) parts = line.split(' - ');
      else if (line.includes(' : ')) parts = line.split(' : ');
      if (!parts || parts.length < 2) return;

      const front = parts[0].trim();
      const backAndTip = parts.slice(1).join(' ').trim();
      let back = backAndTip;
      let koTip = '';
      if (backAndTip.includes('|')) {
        const subParts = backAndTip.split('|');
        back = subParts[0].trim();
        koTip = subParts.slice(1).join('|').trim();
      }
      if (!front || !back) return;
      cards.push({
        id: `c_${Date.now()}_${idx}`,
        chapter: defaultChapter,
        front,
        back,
        sub: '',
        desc: back,
        koTip,
        img: ''
      });
    });
    return cards;
  }

  global.AtelierDecks = {
    BUILTIN_DECKS,
    parseBulkText
  };
})(window);
