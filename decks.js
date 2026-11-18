/**
 * Built-in Decks & Card Schema Helpers
 */
(function (global) {
  const HISTOIRE_PROJECTS = [
      {"id": 1, "chapter": "#1 Crise du Mouvement moderne", "name": "Pruitt-Igoe Housing", "architect": "Minoru Yamasaki", "location": "États-Unis", "year": "1950", "desc": "Grand ensemble de logements sociaux aux États-Unis. Application radicale du fonctionnalisme. Dégradation rapide et abandon. Démolition en 1972. Symbole de l'échec du modernisme.", "koTip": "미국 대규모 사회주택 · 기능주의의 급진적 적용 · 빠른 노후화와 방치 · 1972년 철거 · 모더니즘 실패의 상징. ⚠ 슬라이드 연도 2개: 1950(제목) / 1972(사진 캡션 = 철거). 시험엔 1950, 철거 1972 같이 쓰기.", "img": "images/01.jpg?v=2"},
      {"id": 2, "chapter": "#1 Crise du Mouvement moderne", "name": "Robin Hood Gardens", "architect": "Alison et Peter Smithson", "location": "", "year": "1972", "desc": "Projet de logement social expérimental. Introduction des « streets in the sky ». Tentative d'humaniser le modernisme. Résultats mitigés. Démolition récente.", "koTip": "실험적 사회주택 · '하늘 길(streets in the sky)' 도입 · 모더니즘을 인간적으로 만들려는 시도 · 결과는 엇갈림 · 최근 철거. 건축가 슬라이드: 영국인, Team 10 멤버.", "img": "images/02.jpg?v=2"},
      {"id": 3, "chapter": "#1 Crise du Mouvement moderne", "name": "Byker Wall", "architect": "Ralph Erskine", "location": "", "year": "1982", "desc": "Projet de logement social participatif. Intégration des habitants dans le processus. Architecture adaptée au contexte local. Alternative au grand ensemble. Projet plus durable socialement.", "koTip": "주민 참여형 사회주택 · 주민을 설계 과정에 포함 · 지역 맥락에 맞춘 건축 · 거대 단지의 대안. 건축가 슬라이드: 스웨덴-영국 건축가, 기후와 주민에 주목.", "img": "images/03.jpg?v=2"},
      {"id": 4, "chapter": "#1 Crise du Mouvement moderne", "name": "Espaces d'Abraxas", "architect": "Ricardo Bofill", "location": "France", "year": "1983", "desc": "Projet de logement monumental en France. Réintroduction de formes classiques. Critique du fonctionnalisme. Architecture comme décor. Ambiguïté entre utopie et spectacle.", "koTip": "프랑스의 기념비적 주거 · 고전 형태의 재도입 · 기능주의 비판 · '무대 장치'로서의 건축 · 유토피아와 스펙터클 사이. Bofill = Walden 7(1975)과 구분.", "img": "images/04.jpg?v=2"},
      {"id": 5, "chapter": "#1 Crise du Mouvement moderne", "name": "Habitat 67", "architect": "Moshe Safdie", "location": "", "year": "1967", "desc": "Prototype de logement modulaire expérimental. Réponse critique aux grands ensembles modernes. Recherche d'une densité compatible avec la qualité de vie. Diffusion internationale d'un modèle alternatif.", "koTip": "실험적 모듈러 주거 프로토타입 · 근대 거대 단지에 대한 비판적 답 · 삶의 질과 양립하는 밀도 · 대안 모델의 국제적 확산. 이름의 67 = 연도 1967.", "img": "images/05.jpg?v=2"},
      {"id": 6, "chapter": "#1 Crise du Mouvement moderne", "name": "Siedlung Halen", "architect": "Atelier 5", "location": "Suisse", "year": "1961", "desc": "Projet de logement en Suisse. Densité et intégration paysagère. Échelle humaine. Alternative au grand ensemble. Projet durable dans le temps.", "koTip": "스위스의 주거 단지 · 밀도 + 풍경 통합 · 인간적 스케일 · 거대 단지의 대안 · 오래 지속되는 프로젝트. Atelier 5 = 스위스 건축가 집단.", "img": "images/06.jpg?v=2"},
      {"id": 7, "chapter": "#1 Crise du Mouvement moderne", "name": "PREVI Housing", "architect": "Aldo van Eyck, James Stirling, Atelier 5, Georges Candilis, Charles Correa", "location": "Pérou", "year": "1970", "desc": "Projet expérimental au Pérou. Participation internationale. Logement évolutif. Adaptation aux habitants. Critique du modèle standardisé.", "koTip": "페루의 실험 프로젝트 · 국제적 참여(여러 건축가) · 진화형(évolutif) 주거 · 주민에 맞춤 · 표준화 모델 비판.", "img": "images/07.jpg?v=2"},
      {"id": 8, "chapter": "#1 Crise du Mouvement moderne", "name": "La Grande Motte", "architect": "Jean Balladur", "location": "", "year": "1970", "desc": "Station balnéaire planifiée. Architecture répétitive et iconique. Critique du modernisme touristique. Uniformisation des formes. Projet massif.", "koTip": "계획된 해변 휴양지 · 반복적이고 아이코닉한 건축 · 관광 모더니즘 비판 · 형태의 획일화 · 거대 프로젝트. 건축가 슬라이드: 프랑스인, 연속(sérielle) 건축, 후기 모더니즘.", "img": "images/08.jpg?v=2"},
      {"id": 9, "chapter": "#1 Crise du Mouvement moderne", "name": "Nakagin Capsule Tower", "architect": "Kisho Kurokawa", "location": "", "year": "1972", "desc": "Projet métaboliste. Modules remplaçables. Vision évolutive de la ville. Critique indirecte du modernisme figé. Expérimentation radicale.", "koTip": "메타볼리즘 프로젝트 · 교체 가능한 모듈 · 진화하는 도시 비전 · 굳어진 모더니즘에 대한 간접 비판. ⚠ 슬라이드 오타 'Nagakin' → 정확히는 Nakagin.", "img": "images/09.jpg?v=2"},
      {"id": 10, "chapter": "#2 Postmodernismes", "name": "Guild House", "architect": "Robert Venturi", "location": "", "year": "1963", "desc": "Logement pour personnes âgées. Façade volontairement banale. Référence ironique au modernisme. Usage du symbole (antenne TV). Projet critique fondateur.", "koTip": "노인 주거 · 일부러 평범한 정면 · 모더니즘에 대한 아이러니 · 상징 사용(TV 안테나) · 포스트모던의 출발점. ⚠ 슬라이드 오타 'Venutri' → Venturi.", "img": "images/10.jpg?v=2"},
      {"id": 11, "chapter": "#2 Postmodernismes", "name": "Piazza d'Italia", "architect": "Charles Moore", "location": "", "year": "1978", "desc": "Espace public scénographique. Références explicites à l'Antiquité. Usage de couleurs et d'effets décoratifs. Architecture ludique. Dimension narrative.", "koTip": "무대 같은 공공 공간 · 고대(고전)에 대한 노골적 인용 · 색과 장식 효과 · 장난스러운 건축 · 이야기가 있는 공간.", "img": "images/11.jpg?v=2"},
      {"id": 12, "chapter": "#2 Postmodernismes", "name": "Teatro del Mondo", "architect": "Aldo Rossi", "location": "", "year": "1980", "desc": "Théâtre flottant temporaire. Formes archétypales simples. Référence à la mémoire urbaine. Projet à forte dimension symbolique. Architecture comme artefact.", "koTip": "물에 뜨는 임시 극장 · 단순한 원형(archétype) 형태 · 도시의 기억 · 강한 상징성 · 오브제로서의 건축.", "img": "images/12.jpg?v=2"},
      {"id": 13, "chapter": "#2 Postmodernismes", "name": "Sony Tower", "architect": "Philip Johnson et John Burgee", "location": "", "year": "1984", "desc": "Gratte-ciel iconique. Sommet en forme de fronton. Référence historique explicite. Architecture-signe. Projet médiatique.", "koTip": "아이코닉한 고층 빌딩 · 꼭대기가 박공(fronton) 모양 · 노골적 역사 인용 · '간판(signe)' 건축. ⚠ Sony Tower = AT&T Building 같은 건물. 슬라이드 오타 'Philipp' → Philip Johnson.", "img": "images/13.jpg?v=2"},
      {"id": 14, "chapter": "#2 Postmodernismes", "name": "Walden 7", "architect": "Ricardo Bofill", "location": "", "year": "1975", "desc": "Ensemble de logements expérimental. Organisation labyrinthique. Référence aux formes traditionnelles méditerranéennes. Couleur et monumentalité. Alternative au modernisme.", "koTip": "실험적 집합주택 · 미로 같은 구성 · 지중해 전통 형태 참조 · 색과 기념비성 · 모더니즘의 대안. Bofill = Abraxas(1983)와 구분.", "img": "images/14.jpg?v=2"},
      {"id": 15, "chapter": "#2 Postmodernismes", "name": "Kanchanjunga Apartments", "architect": "Charles Correa", "location": "Inde", "year": "1983", "desc": "Immeuble résidentiel en Inde. Adaptation au climat tropical. Réinterprétation du logement moderne. Hybridation entre modernisme et tradition.", "koTip": "인도의 주거 빌딩 · 열대 기후 적응 · 근대 주거의 재해석 · 모더니즘과 전통의 혼합. Correa = Gandhi Smarak(1963)와 구분.", "img": "images/15.jpg?v=2"},
      {"id": 16, "chapter": "#3 Régionalisme critique", "name": "New Gourna Village", "architect": "Hassan Fathy", "location": "", "year": "1970", "desc": "Village en terre crue. Techniques vernaculaires. Adaptation climatique. Architecture sociale. Refus du modernisme importé.", "koTip": "흙벽돌(terre crue) 마을 · 토착 기술 · 기후 적응 · 사회적 건축 · 수입된 모더니즘 거부. 건축가 슬라이드: 이집트인, 지역주의의 창시자. ⚠ 슬라이드는 1970 (실제 건설은 더 이른 시기).", "img": "images/16.jpg?v=2"},
      {"id": 17, "chapter": "#3 Régionalisme critique", "name": "Säynätsalo Town Hall", "architect": "Alvar Aalto", "location": "", "year": "1952", "desc": "Bâtiment civique en brique. Organisation autour d'une cour. Relation au paysage. Échelle humaine. Modernité organique.", "koTip": "벽돌로 된 시청 · 안뜰(cour) 중심 구성 · 풍경과의 관계 · 인간적 스케일 · 유기적 모더니티. 건축가 슬라이드: 핀란드인, 비판적 지역주의의 선구자.", "img": "images/17.jpg?v=2"},
      {"id": 18, "chapter": "#3 Régionalisme critique", "name": "Azuma House", "architect": "Tadao Ando", "location": "", "year": "1976", "desc": "Maison en béton introvertie. Cour centrale ouverte au ciel. Travail sur lumière et vide. Relation intérieure/extérieure. Minimalisme contextuel.", "koTip": "안으로 닫힌 콘크리트 주택 · 하늘로 열린 중앙 안뜰 · 빛과 비움 · 안과 밖의 관계 · 맥락적 미니멀리즘.", "img": "images/18.jpg?v=2"},
      {"id": 19, "chapter": "#3 Régionalisme critique", "name": "St Benedict Chapel", "architect": "Peter Zumthor", "location": "", "year": "1989", "desc": "Église en bois intégrée au paysage alpin. Matériaux locaux. Relation forte au site. Architecture sensorielle. Forme compacte.", "koTip": "알프스 풍경에 녹아든 나무 교회 · 지역 재료 · 대지와의 강한 관계 · 감각적 건축 · 작고 단단한 형태. (= Chapelle Saint-Benoît)", "img": "images/19.jpg?v=2"},
      {"id": 20, "chapter": "#3 Régionalisme critique", "name": "Assemblée nationale du Koweït", "architect": "Jørn Utzon", "location": "", "year": "1972", "desc": "Inspirée de formes vernaculaires. Adaptation au climat désertique. Réinterprétation du modernisme. Projet situé hors d'Europe. Exemple d'hybridation culturelle.", "koTip": "토착 형태에서 영감 · 사막 기후 적응 · 모더니즘의 재해석 · 유럽 밖 프로젝트 · 문화적 혼합의 예. Utzon = 덴마크 건축가.", "img": "images/20.jpg?v=2"},
      {"id": 21, "chapter": "#3 Régionalisme critique", "name": "Parlement du Bangladesh", "architect": "Louis Kahn", "location": "", "year": "1982", "desc": "Projet monumental sur des formes géométriques simples. Travail sur la lumière et la matière. Adaptation au climat tropical. Architecture transformée par son contexte. Symbole politique.", "koTip": "단순한 기하 형태의 기념비적 프로젝트 · 빛과 재료 · 열대 기후 적응 · 맥락에 의해 변한 건축 · 정치적 상징.", "img": "images/21.jpg?v=2"},
      {"id": 22, "chapter": "#3 Régionalisme critique", "name": "FAU USP", "architect": "João Batista Vilanova Artigas", "location": "São Paulo", "year": "1972", "desc": "École d'architecture à São Paulo. Grand espace libre central. Structure en béton. Architecture sociale. Modernité critique.", "koTip": "상파울루의 건축학교 · 넓게 비운 중앙 공간 · 콘크리트 구조 · 사회적 건축 · 비판적 모더니티. ⚠ 슬라이드에 'architecte argentin'이라고 써 있지만 Artigas는 브라질 사람.", "img": "images/22.jpg?v=2"},
      {"id": 23, "chapter": "#4 Modernités tropicales", "name": "Gandhi Smarak Sangrahalaya", "architect": "Charles Correa", "location": "Inde", "year": "1963", "desc": "Musée pavillonnaire en Inde. Organisation ouverte et fragmentée. Ventilation naturelle. Usage de matériaux locaux. Architecture climatique exemplaire.", "koTip": "인도의 파빌리온형 박물관 · 열리고 분절된 구성 · 자연 환기 · 지역 재료 · 모범적인 기후 건축. ⚠ 사진 캡션 철자 'Sanghahalaya'. Correa = Kanchanjunga(1983)와 구분.", "img": "images/23.jpg?v=2"},
      {"id": 24, "chapter": "#4 Modernités tropicales", "name": "MASP", "architect": "Lina Bo Bardi", "location": "São Paulo", "year": "1968", "desc": "Musée suspendu. Structure radicale. Espace public libre. Architecture sociale. Icône brésilienne.", "koTip": "매달린 미술관 · 급진적 구조 · 비워 둔 공공 공간 · 사회적 건축 · 브라질의 아이콘. 건축가 슬라이드: 이탈리아-브라질 건축가.", "img": "images/24.jpg?v=2"},
      {"id": 25, "chapter": "#4 Modernités tropicales", "name": "IIM Bangalore", "architect": "Balkrishna Doshi", "location": "", "year": "1983", "desc": "Campus structuré par des cours. Circulations ombragées. Adaptation au climat tropical. Référence aux villes traditionnelles. Architecture comme système.", "koTip": "안뜰(cour)로 짜인 캠퍼스 · 그늘진 동선 · 열대 기후 적응 · 전통 도시 참조 · 시스템으로서의 건축. 건축가 슬라이드: 인도인, Le Corbusier의 옛 협력자.", "img": "images/25.jpg?v=2"},
      {"id": 26, "chapter": "#4 Modernités tropicales", "name": "Kandalama Hotel", "architect": "Geoffrey Bawa", "location": "", "year": "1983", "desc": "Hôtel intégré dans la jungle. Fusion architecture / paysage. Ventilation naturelle. Usage de matériaux locaux. Archétype du tropical modernism.", "koTip": "정글 속에 들어간 호텔 · 건축과 풍경의 융합 · 자연 환기 · 지역 재료 · 열대 모더니즘의 원형. 건축가 슬라이드: 스리랑카, 열대 모더니즘의 개척자.", "img": "images/26.jpg?v=2"},
      {"id": 27, "chapter": "#5 Métabolisme japonais", "name": "Sky House", "architect": "Kiyonori Kikutake", "location": "", "year": "1958", "desc": "Plateforme libre surélevée. Les espaces servis peuvent être ajoutés au fil du temps. Introduit très tôt l'idée d'une architecture transformable. Fonctionne comme un prototype domestique du métabolisme. Il fait entrer la croissance dans l'espace de l'habitat.", "koTip": "들어 올린 자유로운 바닥판 · 필요한 공간을 시간에 따라 추가 · 변형 가능한 건축을 아주 일찍 제시 · 메타볼리즘의 주거 프로토타입. 30개 중 가장 이른 연도(1958).", "img": "images/27.jpg?v=2"},
      {"id": 28, "chapter": "#5 Métabolisme japonais", "name": "Yamanashi Broadcasting Center", "architect": "Kenzo Tange", "location": "", "year": "1967", "desc": "Bâtiment organisé autour de noyaux verticaux. Les plateaux et les volumes peuvent théoriquement être prolongés ou transformés. Le projet exprime clairement l'idée de structure-support.", "koTip": "수직 코어(noyaux) 중심으로 짜인 건물 · 바닥판과 볼륨을 이론상 늘리거나 바꿀 수 있음 · '구조-지지체' 개념을 분명히 보여줌. ⚠ 비교 슬라이드의 'Yamanashi Press Center'와 같은 건물.", "img": "images/28.jpg?v=2"},
      {"id": 29, "chapter": "#7 Néo-capitales", "name": "Brasília", "architect": "Lucio Costa et Oscar Niemeyer", "location": "", "year": "1960", "desc": "Ville planifiée ex nihilo. Organisation en axe monumental. Zoning fonctionnel. Projet politique national. Icône du modernisme mondial.", "koTip": "백지에서 계획한 도시 · 기념비적 축 구성 · 기능별 구역(zoning) · 국가 정치 프로젝트 · 세계 모더니즘의 아이콘. 사진 캡션: 'Plan pilote _ Lucio Costa & Oscar Niemeyer'.", "img": "images/29.jpg?v=2"},
      {"id": 30, "chapter": "#7 Néo-capitales", "name": "Chandigarh Capitol Complex", "architect": "Le Corbusier", "location": "Pendjab", "year": "1963", "desc": "Capitale du Pendjab. Architecture monumentale. Organisation institutionnelle. Modernisme exporté. Symbole d'un État postcolonial.", "koTip": "펀자브의 주도 · 기념비적 건축 · 제도(기관) 중심 구성 · 수출된 모더니즘 · 탈식민 국가의 상징. ⚠ 제목은 1963, 사진 캡션은 'Chandigarh (1965)'. 건축가 슬라이드: Pierre Jeanneret와 함께 작업.", "img": "images/30.jpg?v=2"}
    ];

  const HISTOIRE_PAIRS = [
      {"title": "1. 같은 연도 함정 (연도 문제!)", "body": "1972 = Robin Hood Gardens · Nakagin · Koweït · FAU USP (+ Pruitt-Igoe 철거) / 1983 = Abraxas · Kanchanjunga · IIM Bangalore · Kandalama / 1970 = PREVI · La Grande Motte · New Gourna / 1963 = Guild House · Gandhi Smarak · Chandigarh / 1984 = Sony Tower"},
      {"title": "2. Ricardo Bofill 2개", "body": "Walden 7 (1975) = 미로형, 지중해 형태 vs Espaces d'Abraxas (1983) = 프랑스, 고전 형태, 무대 장치"},
      {"title": "3. Charles Correa 3개", "body": "Gandhi Smarak Sangrahalaya (1963) = 파빌리온형 박물관 vs Kanchanjunga Apartments (1983) = 열대 기후 주거 빌딩 (+ PREVI 1970 참여 건축가 중 1명)"},
      {"title": "4. Atelier 5 2개", "body": "Siedlung Halen (1961) = 스위스 주거 단지 · PREVI (1970) = 페루, 참여 건축가 중 하나"},
      {"title": "5. São Paulo 2개", "body": "MASP (1968) = Lina Bo Bardi, 매달린 미술관 vs FAU USP (1972) = Vilanova Artigas, 건축학교, 중앙의 큰 빈 공간"},
      {"title": "6. 메타볼리즘 3개", "body": "Sky House (1958) = Kikutake, 들어 올린 바닥판 · Yamanashi (1967) = Kenzo Tange, 수직 코어 · Nakagin (1972) = Kurokawa, 교체 가능한 모듈"},
      {"title": "7. 의사당 2개", "body": "Koweït (1972) = Jørn Utzon, 토착 형태 + 사막 기후 vs Bangladesh (1982) = Louis Kahn, 단순 기하 형태 + 빛"},
      {"title": "8. 영국 사회주택 2개", "body": "Robin Hood Gardens (1972) = Smithson, streets in the sky vs Byker Wall (1982) = Erskine, 주민 참여"},
      {"title": "9. 계획 수도 2개", "body": "Brasília (1960) = Lucio Costa & Oscar Niemeyer vs Chandigarh (1963) = Le Corbusier"},
      {"title": "10. 슬라이드 비교 (#1)", "body": "Pruitt-Igoe / Byker Wall = 실패 vs 참여 · Nakagin / PREVI = 모듈 vs 참여 · Halen / Grande Motte = 통합 vs 표준화"}
    ];

  function mapHistoireCard(p) {
    return {
      id: String(p.id),
      chapter: p.chapter,
      front: p.name,
      back: p.architect,
      sub: p.year,
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
      title: 'Histoire de l\'architecture',
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
