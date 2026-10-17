import type { NobelPrizeItem, FlowNode } from '../types/nobel';

export const NOBEL_PRIZES: NobelPrizeItem[] = [
  // 1. 물리학 - 1901
  {
    id: 'phys-1901',
    year: 1901,
    domain: 'physics',
    domainKo: '물리학',
    categoryCluster: '전자기파와 미지의 방사선 탐구',
    titleKo: '엑스선(X-ray)의 발견과 전자기 방사선 연구',
    titleEn: 'Discovery of the remarkable rays subsequently named after him (X-rays)',
    laureates: [
      {
        nameKo: '빌헬름 콘라트 뢴트겐',
        nameEn: 'Wilhelm Conrad Röntgen',
        affiliation: '뮌헨 대학교 (University of Munich)',
        country: '독일'
      }
    ],
    abstract: '본 연구는 크룩스 음극선관 방전 실험 중 차광된 흑색 마분지를 투과하여 바륨 백금시안화물 형광 스크린을 감응시키는 미지의 전자기 복사선(X-ray)을 최초로 관측하고 규명하였다. 뢴트겐은 이 투과선이 유리, 알루미늄, 인체 연조직을 쉽게 관통하되 골격과 같은 고밀도 물질에서는 뚜렷한 감쇄를 나타냄을 체계적인 사진 건판 건조법을 통해 입증하였다. 이는 가시광선과 자외선의 파장보다 훨씬 짧은 극한의 고에너지 전자기파가 물질과 상호작용하는 근원 메커니즘을 최초로 실증한 물리학적 성과이다.',
    impact: '뢴트겐의 X선 발견은 수술 없이 체내 내부 골격과 병변을 직접 관측할 수 있는 진단 방사선학(Diagnostic Radiology)을 창시함으로써 20세기 임상의학의 패러다임을 근본적으로 전환하였다. 기초과학적으로는 앙리 베크렐의 방사능 발견과 마리 퀴리의 라듐 연구를 직접적으로 촉발하였으며, 막스 폰 라우에와 브래그 부자의 X선 회절(XRD) 기술로 이어져 훗날 DNA 이중나선 구조 및 단백질 입체구조를 결정하는 현대 결정학의 토대가 되었다. 인류 문명은 이 발견으로 비파괴 검사, 공항 보안 검색, 분자 결정학이라는 새로운 산업 및 학문적 도구를 획득하였다.',
    laureateProfile: '빌헬름 콘라트 뢴트겐(1845~1923)은 독일의 실험물리학자로 뷔르츠부르크 대학교 및 뮌헨 대학교 교수로 재직하며 정밀 측정과 기체 및 결정의 열역학적 물성을 천착하였다. 1895년 전자기 방전관 연구 도중 우연성을 통찰력 있는 실험 프로토콜로 전환하여 엑스선을 포착하였으며, 첫 번째 노벨 물리학상 수상자로 선정되었다. 그는 인류의 복지를 위해 엑스선에 대한 어떠한 특허도 출원하지 않고 연구 결과를 학계에 완전 공개한 청렴하고 헌신적인 과학자의 표상으로 존경받는다.',
    flowNodeId: 'node-phys-1',
    keywords: ['X선', '방사선', '음극선', '결정학', '의료영상']
  },
  // 2. 생리의학 - 1901
  {
    id: 'med-1901',
    year: 1901,
    domain: 'medicine',
    domainKo: '생리의학',
    categoryCluster: '혈청 치료학과 항체 면역학의 창시',
    titleKo: '디프테리아 항독소 혈청 요법 개발',
    titleEn: 'Work on serum therapy, especially against diphtheria',
    laureates: [
      {
        nameKo: '에밀 아돌프 폰 베링',
        nameEn: 'Emil Adolf von Behring',
        affiliation: '마르부르크 대학교 (Marburg University)',
        country: '독일'
      }
    ],
    abstract: '본 연구는 디프테리아 및 파상풍 세균이 분비하는 치명적 외독소를 약화시켜 동물에 접종함으로써 체내에서 특이적 방어 물질(항독소, antitoxin)이 유도됨을 입증하고 이를 치료 혈청으로 정제하였다. 폰 베링은 면역된 동물의 무세포 혈청을 감염된 개체에 투여할 때 독소를 직접 중화하여 극적인 치료 및 예방 효과를 거둘 수 있음을 보였으며, 이는 체액성 면역(Humoral Immunity) 반응의 실체와 수동면역(Passive Immunity)의 치료적 유효성을 과학적으로 증명한 최초의 임상적 성과이다.',
    impact: '폰 베링의 혈청 치료법은 당시 유아 치사율이 50%를 상회하여 ‘어린이의 목을 조르는 악마’로 불리던 디프테리아의 사망률을 10% 이하로 급감시키며 전 세계 수백만 어린이의 생명을 구원하였다. 나아가 파울 에를리히의 측쇄설(Side-chain theory)과 화학요법 연구로 연결되어 현대 면역학, 항체 치료제, 백신 접종 프로토콜의 학문적 초석을 놓았다. 이 기술은 전시 군인들의 파상풍 파국의 방지는 물론, 현대에 이르러 항혈청제 및 단클론항체 바이오의약품 산업 전반의 직계 조상이 되었다.',
    laureateProfile: '에밀 폰 베링(1854~1917)은 독일의 생리학자이자 군의관 출신 의학자로, 로베르트 코흐 연구소 및 마르부르크 대학교 교수로 재직하며 미생물 독소와 혈청 치료를 개척하였다. 키타사토 시바사부로와의 협력 연구를 통해 면역 혈청의 작용 기전을 규명하여 제1회 노벨 생리의학상을 단독 수상하였다. 이후 베링베르케(Behringwerke) 연구소를 설립하여 혈청 및 백신의 대량 생산 및 품질 표준화 공정을 확립하는 등 산학협력의 기틀을 다졌다.',
    flowNodeId: 'node-med-1',
    keywords: ['디프테리아', '혈청치료', '체액면역', '항체', '수동면역']
  },
  // 3. 화학 - 1911 (마리 퀴리)
  {
    id: 'chem-1911',
    year: 1911,
    domain: 'chemistry',
    domainKo: '화학',
    categoryCluster: '방사성 원소의 분리와 핵화학의 태동',
    titleKo: '라듐 및 폴로늄 발견과 방사성 원소 화학적 특성 규명',
    titleEn: 'Discovery of the elements radium and polonium, by the isolation of radium',
    laureates: [
      {
        nameKo: '마리 퀴리',
        nameEn: 'Marie Curie',
        affiliation: '소르본 대학교 (Sorbonne University)',
        country: '폴란드 / 프랑스'
      }
    ],
    abstract: '본 연구는 수 톤 분량의 피치블렌드(우라늄 광석) 잔사를 정밀 분별결정법(Fractional Crystallization)과 전기화학적 분리 기술을 통해 처리하여 미지의 초방사성 원소 폴로늄(Po)과 라듐(Ra)을 순수 단리하는 데 성공하였다. 퀴리는 라듐 순수 금속을 분리하고 그 원자량을 226.45로 정확히 결정하였으며, 방사능이 분자 간 결합이 아닌 원자 자체의 붕괴에서 비롯되는 고유한 성질임을 실험적으로 확증하여 원소의 불변성이라는 고전 화학관을 해체하였다.',
    impact: '마리 퀴리의 연구는 고전 원자론의 한계를 깨고 원자핵 물리학과 방사화학(Radiochemistry)이라는 새로운 학문 분야를 개척하였다. 라듐에서 방출되는 강력한 알파선은 어니스트 러더퍼드가 원자핵의 존재를 발견하는 핵심 도구가 되었으며, 암세포를 선택적으로 파괴하는 방사선 치료(Curietherapy)의 근간을 제공하였다. 또한 과학사상 최초의 2개 분야(1903년 물리, 1911년 화학) 노벨상 수상이자 여성 과학자의 불멸의 이정표로서 현대 과학계의 젠더 장벽을 허무는 데 지대한 영감을 제공하였다.',
    laureateProfile: '마리 퀴리(1867~1934, 본명 마리아 살로메아 스크워도프스카)는 폴란드 바르샤바 출신의 물리학자이자 화학자이다. 파리 소르본 대학교에서 박사학위를 취득하고 동 대학 최초의 여성 교수가 되었다. 남편 피에르 퀴리와 함께 방사능 연구에 평생을 바쳤으며, 1차 세계대전 중에는 이동식 엑스선 차량(Petites Curies)을 직접 운전하며 백만 명 이상의 부상병을 치료하였다. 피폭의 위험 속에서도 연구를 지속하다 재생불량성 빈혈로 영면하였다.',
    flowNodeId: 'node-chem-1',
    keywords: ['라듐', '폴로늄', '방사능', '핵화학', '분별결정법']
  },
  // 4. 물리학 - 1921 (아인슈타인)
  {
    id: 'phys-1921',
    year: 1921,
    domain: 'physics',
    domainKo: '물리학',
    categoryCluster: '빛의 양자화와 초기 양자물리학',
    titleKo: '광전효과 법칙의 발견과 광양자 가설',
    titleEn: 'Services to Theoretical Physics, and especially for his discovery of the law of the photoelectric effect',
    laureates: [
      {
        nameKo: '알베르트 아인슈타인',
        nameEn: 'Albert Einstein',
        affiliation: '카이저 빌헬름 물리연구소 (Kaiser Wilhelm Institute)',
        country: '독일 / 스위스'
      }
    ],
    abstract: '본 연구는 맥스웰의 고전 전자기파 이론으로는 설명할 수 없었던 광전효과(금속 표면에 빛을 쬘 때 즉각적으로 전자가 방출되는 현상)를 플랑크의 에너지 양자 개념을 확장하여 명쾌하게 규명하였다. 아인슈타인은 빛이 연속적인 파동일 뿐만 아니라 주파수($\nu$)에 비례하는 불연속적 에너지 덩어리($E=h\nu$)인 ‘광양자(Photon)’의 흐름으로 구성된다고 제안하였으며, 전자의 최대 운동에너지가 빛의 세기가 아닌 진동수에만 의존함을 나타내는 광전 방정식을 유도하였다.',
    impact: '광양자설은 200여 년간 지배해 온 빛의 단순 파동설을 뒤흔들며 ‘파동-입자 이중성(Wave-Particle Duality)’이라는 현대 양자역학의 핵심 철학을 태동시켰다. 이는 루이 드 브로이의 물질파 가설과 슈뢰딩거의 파동방정식 수립에 결정적 도화선이 되었다. 공학적으로는 태양광 발전 패널, 디지털카메라의 CCD/CMOS 이미지 센서, 야간 투시장치, 레이저 및 광섬유 통신 등 현대 전자기술과 신재생에너지 인프라의 모든 광전변환 장치가 바로 이 원리에 기반한다.',
    laureateProfile: '알베르트 아인슈타인(1879~1955)은 인류 역사상 가장 위대한 이론물리학자 중 한 명이다. 1905년 스위스 특허청 재직 시절 광전효과, 브라운 운동, 특수상대성이론, 질량-에너지 등가원리($E=mc^2$)라는 혁명적 4대 논문을 발표하였다. 이후 1915년 일반상대성이론을 완성하여 시공간과 중력에 대한 우주론적 관점을 재정의하였다. 나치 집권 후 미국 프린스턴 고등연구소로 망명하여 통일장 이론과 평화주의 운동에 헌신하였다.',
    flowNodeId: 'node-phys-2',
    keywords: ['광전효과', '광자', '양자화', '플랑크상수', '파동입자이중성']
  },
  // 5. 생리의학 - 1945 (페니실린)
  {
    id: 'med-1945',
    year: 1945,
    domain: 'medicine',
    domainKo: '생리의학',
    categoryCluster: '항생물질과 감염병 퇴치 혁명',
    titleKo: '페니실린의 발견과 감염병 치료 효과 규명',
    titleEn: 'Discovery of penicillin and its curative effect in various infectious diseases',
    laureates: [
      {
        nameKo: '알렉산더 플레밍',
        nameEn: 'Alexander Fleming',
        affiliation: '런던 대학교 (London University)',
        country: '영국'
      },
      {
        nameKo: '에른스트 보리스 체인',
        nameEn: 'Ernst Boris Chain',
        affiliation: '옥스퍼드 대학교 (Oxford University)',
        country: '영국'
      },
      {
        nameKo: '하워드 월터 플로리',
        nameEn: 'Howard Walter Florey',
        affiliation: '옥스퍼드 대학교 (Oxford University)',
        country: '호주 / 영국'
      }
    ],
    abstract: '본 연구는 푸른곰팡이(Penicillium notatum) 배양 여과액에서 포도상구균 등 그람양성 세균의 증식을 강력히 억제하는 활성 물질 ‘페니실린’을 발견하고(플레밍), 이를 극미량 상태에서 안정적으로 분리·정제 및 농축하여 동물 및 인체 임상 감염 치료에 성공하였다(플로리, 체인). 페니실린은 세균의 세포벽 합성에 필수적인 펩티도글리칸 교차결합 효소(트랜스펩티다아제)를 선택적으로 저해하여 인체 세포에는 독성을 주지 않고 병원균만을 용균(Bacteriolysis)시키는 작용 기전을 갖는다.',
    impact: '페니실린은 인류 역사상 최초의 광범위 천연 항생제로서 제2차 세계대전 당시 전장 상처 감염과 폐렴, 패혈증, 매독 등으로 사망하던 수천만 명의 생명을 구원하였다. 이후 스트렙토마이신, 테트라사이클린 등 연쇄적인 항생제 개발 붐을 촉발하여 결핵과 장티푸스 등 고대 이래 인류를 위협하던 치명적 감염병을 정복 가능한 질환으로 전락시켰다. 인류의 평균 기대수명을 20년 이상 연장시키는 데 기여한 단일 최대 의학적 발견으로 평가받는다.',
    laureateProfile: '알렉산더 플레밍(1881~1955)은 스코틀랜드 출신의 미생물학자로 라이소자임과 페니실린을 발견하였다. 하워드 플로리(1898~1968, 호주 출신 병리학자)와 에른스트 체인(1906~1979, 독일계 영국 생화학자)은 옥스퍼드 연구팀을 이끌어 화학적 분리공정과 대량 발효 생산 시스템을 확립하였다. 이 세 학자의 협업은 발견-정제-임상화로 이어지는 현대 중개연구(Translational Research)의 교과서적 표본이다.',
    flowNodeId: 'node-med-2',
    keywords: ['페니실린', '항생제', '세포벽합성저해', '감염병', '화학요법']
  },
  // 6. 물리학 - 1956 (트랜지스터)
  {
    id: 'phys-1956',
    year: 1956,
    domain: 'physics',
    domainKo: '물리학',
    categoryCluster: '고체물리학과 정보통명 혁명',
    titleKo: '반도체 연구 및 트랜지스터 효과의 발견',
    titleEn: 'Researches on semiconductors and their discovery of the transistor effect',
    laureates: [
      {
        nameKo: '윌리엄 쇼클리',
        nameEn: 'William B. Shockley',
        affiliation: '벨 연구소 / 쇼클리 반도체 연구소',
        country: '미국'
      },
      {
        nameKo: '존 바딘',
        nameEn: 'John Bardeen',
        affiliation: '일리노이 대학교 (University of Illinois)',
        country: '미국'
      },
      {
        nameKo: '월터 브래튼',
        nameEn: 'Walter H. Brattain',
        affiliation: '벨 연구소 (Bell Telephone Laboratories)',
        country: '미국'
      }
    ],
    abstract: '본 연구는 게르마늄(Ge) 및 실리콘(Si) 반도체 결정 내 전하 수송자(전자와 정공)의 거동 및 표면 준위 상태를 규명하고, 점접촉형(Point-contact) 및 접합형(Junction) 고체 3단자 증폭 소자인 트랜지스터를 구현하였다. 바딘과 브래튼은 반도체 표면의 전하 장벽을 제어하는 점접촉 효과를 실증하였으며, 쇼클리는 n-p-n 접합 이론과 소수 반송자 주입 이론을 수립하여 진공관의 열음극 가열 없이 고체 내 전자 전도만으로 신호의 선형 증폭과 고속 스위칭이 가능함을 증명하였다.',
    impact: '트랜지스터는 부피가 크고 부서지기 쉬우며 발열이 심했던 진공관을 완전히 대체하며 전자기학의 소형화·고신뢰성 혁명을 이끌었다. 이는 이후 잭 킬비의 집적회로(IC), 마이크로프로세서, 메모리 반도체로 직결되어 개인용 컴퓨터(PC), 스마트폰, 인터넷, 현대 인공지능(AI) 하드웨어에 이르는 디지털 정보 문명의 물리적 하부구조를 형성하였다. 20세기 인류 문명을 농경·산업 사회에서 정보화 사회로 전환시킨 기술사적 분기점이다.',
    laureateProfile: '윌리엄 쇼클리(1910~1989), 존 바딘(1908~1991), 월터 브래튼(1902~1987)은 전설적인 벨 연구소의 연구진이었다. 특히 존 바딘은 훗날 초전도 현상의 미시적 메커니즘을 설명한 BCS 이론으로 1972년 노벨 물리학상을 또다시 수상하며 물리학 분야 사상 유일무이한 노벨상 2회 수상자로 역사에 기록되었다. 쇼클리는 실리콘밸리의 모태가 된 연구소를 설립하여 반도체 산업 생태계 태동에 기여하였다.',
    flowNodeId: 'node-phys-3',
    keywords: ['트랜지스터', '반도체', '실리콘밸리', '집적회로', '고체물리']
  },
  // 7. 생리의학 - 1962 (DNA 이중나선)
  {
    id: 'med-1962',
    year: 1962,
    domain: 'medicine',
    domainKo: '생리의학',
    categoryCluster: '분자생물학과 유전정보 암호 해독',
    titleKo: '핵산 분자구조(DNA 이중나선) 및 생체 유전정보 전달 기전 규명',
    titleEn: 'Discoveries concerning the molecular structure of nucleic acids and its significance for information transfer in living material',
    laureates: [
      {
        nameKo: '프랜시스 크릭',
        nameEn: 'Francis Crick',
        affiliation: 'MRC 분자생물학 연구소 (Cambridge)',
        country: '영국'
      },
      {
        nameKo: '제임스 왓슨',
        nameEn: 'James Watson',
        affiliation: '하버드 대학교 (Harvard University)',
        country: '미국'
      },
      {
        nameKo: '모리스 윌킨스',
        nameEn: 'Maurice Wilkins',
        affiliation: '런던 킹스 칼리지 (King’s College London)',
        country: '뉴질랜드 / 영국'
      }
    ],
    abstract: '본 연구는 로절린드 프랭클린과 윌킨스의 고해상도 X선 회절 데이터(Photo 51)와 샤가프의 염기 비율 법칙을 종합하여 데옥시리보핵산(DNA)이 역평행(Antiparallel) 2중 나선 구조를 이루고 있음을 규명하였다. 아데닌(A)은 티민(T)과, 구아닌(G)은 시토신(C)과 상보적 수소결합을 형성한다는 입체화학 모델을 제안함으로써, 염기서열 자체가 유전 암호를 저장하고 한쪽 가닥이 주형이 되어 완벽한 자가 복제(Semi-conservative replication)가 일어나는 분자 메커니즘을 규명하였다.',
    impact: 'DNA 이중나선 구조의 규명은 생물학을 형태학적·세포학적 관찰 과학에서 분자 수준의 메커니즘을 규명하는 정밀 정보과학(분자생물학)으로 격상시켰다. 센트럴 도그마(DNA $\rightarrow$ RNA $\rightarrow$ 단백질), 유전암호 코돈 해독, 유전자 재조합 기술, 인간 게놈 프로젝트(HGP), 현대 유전자가위(CRISPR)에 이르는 모든 현대 생명과학과 바이오테크놀로지 산업이 이 단일 구조 모델에서 잉태되었다.',
    laureateProfile: '제임스 왓슨(1928~)은 조류학에서 출발해 유전학에 매료된 미국 생물학자이며, 프랜시스 크릭(1916~2004)은 물리학에서 생물학으로 전향한 영국의 이론생물학자였다. 케임브리지 캐번디시 연구소에서 조우한 두 사람은 탁월한 분자 모델링 직관으로 세기의 구조를 완성하였다. 모리스 윌킨스(1916~2004)는 생체 분자의 물리적 구조 측정을 이끌었으나, 핵심 X선 데이터를 생산한 로절린드 프랭클린의 기여가 사후에 재평가되었다.',
    flowNodeId: 'node-med-3',
    keywords: ['DNA이중나선', '상보적염기결합', '분자생물학', '유전정보', 'X선회절']
  },
  // 8. 경제학 - 1970 (새뮤얼슨)
  {
    id: 'econ-1970',
    year: 1970,
    domain: 'economics',
    domainKo: '경제학',
    categoryCluster: '신고전파 종합과 수리경제학의 정립',
    titleKo: '정적·동적 경제이론의 발전 및 과학적 분석 수준 제고',
    titleEn: 'Work through which he has developed static and dynamic economic theory and actively contributed to raising the level of analysis in economic science',
    laureates: [
      {
        nameKo: '폴 새뮤얼슨',
        nameEn: 'Paul A. Samuelson',
        affiliation: 'MIT (Massachusetts Institute of Technology)',
        country: '미국'
      }
    ],
    abstract: '본 연구는 고전파 미시경제학과 케인스 거시경제학을 수학적 최적화 원리와 동태적 균형 분석으로 통합한 ‘신고전파 종합(Neoclassical Synthesis)’을 완성하였다. 새뮤얼슨은 수학적 미적분학과 변분법을 도입하여 소비자 행동론(현시선호이론), 무역이론(스톨퍼-새뮤얼슨 정리, 팩터 가격 균등화 정리), 공공재 최적 공급 이론을 엄밀한 수식 체계로 공리화하였으며, 비교정학(Comparative Statics)의 대응 원리를 확립하여 경제 변수의 균형 안정성을 증명하였다.',
    impact: '새뮤얼슨의 업적은 언어적·철학적 담론에 머물던 근대 경제학을 엄밀한 수학적 연역과 정량적 검증이 가능한 현대 사회과학의 정점으로 변모시켰다. 그가 저술한 명저 《경제학(Economics)》은 수십 년간 전 세계 수천만 명의 학생과 정책 입안자에게 표준 교과서로 활용되며 20세기 전후 자본주의 혼합경제의 사상적 기틀을 형성하였다. 현대 계량경제학 및 중앙은행 통화·재정 정책 모형의 수리적 뼈대가 그의 분석 틀 위에 구축되었다.',
    laureateProfile: '폴 새뮤얼슨(1915~2009)은 미국 경제학자로 시카고 대학을 졸업하고 하버드에서 박사학위를 취득한 뒤 MIT를 세계 최고의 경제학 메카로 변모시켰다. 1947년 발표한 기념비적 저작 《경제분석의 기초(Foundations of Economic Analysis)》를 통해 경제학 전 분야의 수학적 토대를 구축하였으며, 미국인 최초로 노벨 경제학상을 수상하였다. 케네디 및 존슨 행정부의 경제 자문위원으로도 활동하며 현실 경제정책에 깊은 족적을 남겼다.',
    flowNodeId: 'node-econ-1',
    keywords: ['수리경제학', '신고전파종합', '현시선호이론', '공공재', '국제무역이론']
  },
  // 9. 경제학 - 1974 (하이에크)
  {
    id: 'econ-1974',
    year: 1974,
    domain: 'economics',
    domainKo: '경제학',
    categoryCluster: '오스트리아 학파와 자유시장 정보 메커니즘',
    titleKo: '화폐 및 경제변동 이론과 제도적 상호의존성 분석',
    titleEn: 'Pioneering work in the theory of money and economic fluctuations and for penetrating analysis of the interdependence of economic, social and institutional phenomena',
    laureates: [
      {
        nameKo: '프리드리히 아우구스트 폰 하이에크',
        nameEn: 'Friedrich August von Hayek',
        affiliation: '프라이부르크 대학교 (University of Freiburg)',
        country: '오스트리아 / 영국'
      },
      {
        nameKo: '군나르 뮈르달',
        nameEn: 'Gunnar Myrdal',
        affiliation: '스톡홀름 대학교 (Stockholm University)',
        country: '스웨덴'
      }
    ],
    abstract: '본 연구는 자본 구조의 복합성과 화폐 신용 팽창이 야기하는 경기변동 사이클(오스트리아 경기변동 이론)을 분석하고, 중앙 집중적 계획경제가 본질적으로 직면하는 ‘지식의 문제(Knowledge Problem)’를 규명하였다. 하이에크는 사회에 흩어져 있는 암묵적이고 파편화된 정보를 전달하고 자원을 가장 효율적으로 배분하는 유일한 탈중앙화 메커니즘이 바로 ‘가격 체계(Price Mechanism)’임을 증명하여 사회주의 계산 논쟁의 종지부를 찍었다.',
    impact: '하이에크의 가격 신호 이론과 정부 개입의 한계에 대한 경고는 1970년대 케인스주의가 스태그플레이션으로 한계에 부딪혔을 때 대안 경제 철학으로 급부상하였다. 이는 마거릿 대처의 대처리즘, 로널드 레이건의 레이거노믹스로 이어지는 신자유주의(Neoliberalism) 정책 전환의 이론적 지주가 되었으며, 동구권 사회주의 계획경제의 붕괴를 학술적으로 예견한 사상적 이정표가 되었다. 나아가 현대 블록체인 및 탈중앙화 정보 네트워크 이론에도 심대한 영향을 주었다.',
    laureateProfile: '프리드리히 하이에크(1899~1992)는 오스트리아 학파를 대표하는 경제학자이자 법철학자, 정치철학자이다. 런던 정경대(LSE), 시카고 대학교 등에서 교편을 잡았으며, 케인스와의 치열한 논쟁으로 명성을 떨쳤다. 1944년 출간한 《노예의 길(The Road to Serfdom)》을 통해 전체주의적 통제사회의 위험성을 역설하고 개인의 자유와 법치를 옹호한 20세기 최고의 자유주의 사상가이다.',
    flowNodeId: 'node-econ-2',
    keywords: ['자유시장', '가격기구', '자생적질서', '지식의문제', '오스트리아학파']
  },
  // 10. 화학 - 1993 (PCR)
  {
    id: 'chem-1993',
    year: 1993,
    domain: 'chemistry',
    domainKo: '화학',
    categoryCluster: '유전체 증폭 및 생명공학 도구 혁명',
    titleKo: '중합효소 연쇄반응(PCR) 기술 개발',
    titleEn: 'Invention of the polymerase chain reaction (PCR) method',
    laureates: [
      {
        nameKo: '캐리 멀리스',
        nameEn: 'Kary B. Mullis',
        affiliation: '세터스 코퍼레이션 (Cetus Corporation)',
        country: '미국'
      }
    ],
    abstract: '본 연구는 내열성 DNA 중합효소(Taq polymerase)와 특이적 프라이머 쌍을 이용하여 미량의 특정 표적 DNA 염기서열을 시험관 내에서 지수함수적으로 수십억 배 증폭하는 중합효소 연쇄반응(Polymerase Chain Reaction, PCR) 기술을 발명하였다. 변성(Denaturation), 결합(Annealing), 신장(Extension)의 3단계 열순환 프로토콜을 자동화함으로써, 단 하나의 분자 수준 DNA로부터도 수 시간 내에 분석 가능한 양의 유전 물질을 복제할 수 있는 분자생물학적 혁신을 이룩하였다.',
    impact: 'PCR 기술은 생명과학 실험실의 연구 방식을 근본적으로 탈바꿈시켰을 뿐만 아니라, 법의학 유전자 감식(DNA 핑거프린팅), 유전질환 조기 진단, 고생물 화석 유전자 분석 등 인류 사회 전반에 엄청난 변혁을 가져왔다. 특히 2020년 전 세계를 강타한 코로나19(COVID-19) 팬데믹 당시 확진 판정의 골드 스탠더드로 사용된 RT-PCR 검사는 바로 이 원리에 기초한다. 현대 유전자 합성 및 바이오테크 산업 전체가 PCR 기술의 기반 위에 서 있다.',
    laureateProfile: '캐리 멀리스(1944~2019)는 미국의 생화학자로 캘리포니아 버클리 대학교에서 박사학위를 취득한 뒤 바이오기업 세터스에서 올리고뉴클레오티드 합성을 연구하였다. 1983년 캘리포니아 북부 고속도로를 야간 운전하던 중 영감을 얻어 PCR 개념을 창안하였다. 파격적이고 독창적인 사고방식의 과학자로, 그의 아이디어는 제약 생태계의 판도를 바꾼 가장 극적인 단일 발명으로 꼽힌다.',
    flowNodeId: 'node-chem-2',
    keywords: ['PCR', '유전자증폭', 'Taq중합효소', '법의학', '분자진단']
  },
  // 11. 경제학 - 1994 (내시 균형)
  {
    id: 'econ-1994',
    year: 1994,
    domain: 'economics',
    domainKo: '경제학',
    categoryCluster: '게임이론과 전략적 상호작용 분석',
    titleKo: '비협조 게임이론에서의 균형점(내시 균형) 분석',
    titleEn: 'Pioneering analysis of equilibria in the theory of non-cooperative games',
    laureates: [
      {
        nameKo: '존 포브스 내시 주니어',
        nameEn: 'John F. Nash Jr.',
        affiliation: '프린스턴 대학교 (Princeton University)',
        country: '미국'
      },
      {
        nameKo: '존 하사니',
        nameEn: 'John C. Harsanyi',
        affiliation: 'UC 버클리 (University of California, Berkeley)',
        country: '미국'
      },
      {
        nameKo: '라인하르트 젤텐',
        nameEn: 'Reinhard Selten',
        affiliation: '본 대학교 (University of Bonn)',
        country: '독일'
      }
    ],
    abstract: '본 연구는 상호 의존적인 전략적 상황에서 각 경기자가 상대방의 최적 전략을 주어진 것으로 보고 자신의 보수를 극대화할 때 발생하는 비협조 게임의 안정적 균형 상태인 ‘내시 균형(Nash Equilibrium)’의 존재를 브라우어/카쿠타니 부동점 정리를 통해 수학적으로 증명하였다. 상대방의 전략 변경이 없는 한 어떤 경기자도 일방적으로 자신의 전략을 바꿀 유인이 없는 균형 개념을 정립함으로써 상호작용적 의사결정 모델링의 보편적 해를 제시하였다.',
    impact: '내시 균형은 완전경쟁과 독점이라는 양극단 위주였던 기존 시장 분석을 넘어, 현실 세계의 과점 시장, 가격 경쟁, 담합, 국가 간 군비 경쟁, 통신 주파수 경매 설계, 환경 협약에 이르는 전략적 상호작용 전반을 분석하는 표준 문법이 되었다. 경제학뿐만 아니라 정치외교학(냉전 억지 전략), 진화생물학(진화적으로 안정된 전략, ESS), 컴퓨터공학(네트워크 라우팅 및 다중 에이전트 AI)에 심대한 분석 도구를 제공하였다.',
    laureateProfile: '존 내시(1928~2015)는 천재적인 미국 수학자로 22세의 나이에 단 27쪽짜리 프린스턴 박사학위 논문으로 게임이론의 혁명을 일으켰다. 이후 30여 년간 심각한 조현병을 앓았으나 불굴의 의지와 아내 알리시아의 헌신으로 기적적으로 회복하였으며, 그의 생애는 영화 《뷰티풀 마인드(A Beautiful Mind)》로 널리 알려졌다. 하사니(불완전 정보 게임 정립) 및 젤텐(부분게임 완전균형 정립)과 공동 수상하였다.',
    flowNodeId: 'node-econ-3',
    keywords: ['게임이론', '내시균형', '비협조게임', '전략적상호작용', '부동점정리']
  },
  // 12. 화학 - 2019 (리튬이온 배터리)
  {
    id: 'chem-2019',
    year: 2019,
    domain: 'chemistry',
    domainKo: '화학',
    categoryCluster: '전기화학과 휴대용 에너지 저장 혁명',
    titleKo: '리튬이온 배터리 개발과 모바일 에너지 저장 혁신',
    titleEn: 'Development of lithium-ion batteries',
    laureates: [
      {
        nameKo: '존 구디너프',
        nameEn: 'John B. Goodenough',
        affiliation: '텍사스 대학교 오스틴 (UT Austin)',
        country: '미국'
      },
      {
        nameKo: 'M. 스탠리 휘팅엄',
        nameEn: 'M. Stanley Whittingham',
        affiliation: '빙엄턴 대학교 (Binghamton University)',
        country: '영국 / 미국'
      },
      {
        nameKo: '요시노 아키라',
        nameEn: 'Akira Yoshino',
        affiliation: '메이조 대학교 / 아사히 카세이',
        country: '일본'
      }
    ],
    abstract: '본 연구는 리튬 이온($Li^+$)이 양극과 음극 사이의 층상 결정 구조 내부를 가역적으로 삽입·탈리(Intercalation)하는 전기화학 메커니즘을 밝혀내고 상용화 가능한 고에너지 밀도 2차전지를 개발하였다. 휘팅엄은 이황화티타늄 음극 개념을 개척하였고, 구디너프는 코발트산리튬($LiCoO_2$) 양극재를 발명하여 전압을 4V 수준으로 2배 격상시켰으며, 요시노는 탄소재 음극을 결합하고 안전 멤브레인을 고안하여 폭발 위험이 없는 현대 리튬이온 배터리의 프로토타입을 완성하였다.',
    impact: '리튬이온 배터리는 화석연료에 묶여 있던 전자제품을 무선화(Wireless)·모바일화하여 스마트폰, 노트북, 태블릿 등 현대 휴대용 디지털 문명을 탄생시킨 원동력이다. 나아가 전기자동차(EV)의 대중화와 태양광·풍력 등 신재생에너지 전력망의 에너지 저장 장치(ESS) 핵심 부품으로 자리 잡아, 기후 위기 극복과 탈탄소 화석연료 제로 사회로 나아가는 인류 에너지 패러다임 전환의 물질적 기반을 제공하였다.',
    laureateProfile: '존 구디너프(1922~2023)는 97세의 나이로 최고령 노벨상 수상자가 되었으며 100세까지 연구를 지속한 고체물리학의 거목이다. 스탠리 휘팅엄(1941~)은 엑손(Exxon)에서 원천 삽입 화학을 정초하였고, 요시노 아키라(1948~)는 일본 화학기업에서 실제 상용 리튬이온 배터리의 양산 안전성을 완성한 기업 연구원의 모범 사례이다.',
    flowNodeId: 'node-chem-3',
    keywords: ['리튬이온배터리', '에너지저장', '삽입화학', '탈탄소', '전기자동차']
  },
  // 13. 화학 - 2020 (CRISPR 유전자가위)
  {
    id: 'chem-2020',
    year: 2020,
    domain: 'chemistry',
    domainKo: '화학',
    categoryCluster: '정밀 유전체 교정과 생명공학의 미래',
    titleKo: '크리스퍼 유전자 가위(CRISPR-Cas9) 게놈 편집 기법 개발',
    titleEn: 'Development of a method for genome editing',
    laureates: [
      {
        nameKo: '에마뉘엘 샤르팡티에',
        nameEn: 'Emmanuelle Charpentier',
        affiliation: '막스 플랑크 병원체 병리학 연구소',
        country: '프랑스'
      },
      {
        nameKo: '제니퍼 다우드나',
        nameEn: 'Jennifer A. Doudna',
        affiliation: 'UC 버클리 (University of California, Berkeley)',
        country: '미국'
      }
    ],
    abstract: '본 연구는 세균이 바이러스 침입에 대항하는 적응면역 시스템에서 유래한 CRISPR-Cas9 복합체를 재설계하여, 원하는 특정 DNA 염기서열을 단일 가이드 RNA(sgRNA)로 정밀 유도해 절단하는 맞춤형 유전체 편집 기술을 확립하였다. 기존의 복잡한 단백질 조작(ZFN, TALEN)과 달리 20개 염기서열의 합성 RNA 교체만으로 살아있는 세포의 유전체를 초정밀하게 교정·삽입·삭제할 수 있는 혁신적인 분자 메커니즘을 규명하였다.',
    impact: 'CRISPR-Cas9은 생명과학 역사상 가장 강력하고 직관적인 유전자 교정 도구로 평가받는다. 난치성 유전질환(겸상적혈구 빈혈증, 근이영양증 등)의 근본적 유전자 치료 임상, 맞춤형 면역세포 치료제 개발, 기후변화에 저항하는 슈퍼 작물 육종 등 농학·의학·생물학 전반을 근본적으로 뒤바꾸었다. 생명체의 유전 암호를 인간이 자의적으로 재작성할 수 있게 됨에 따라 생명윤리와 규제 정책에 대한 전 지구적 화두를 던졌다.',
    laureateProfile: '에마뉘엘 샤르팡티에(1968~)는 프랑스 출신의 미생물학자·생화학자로 화농성 연쇄상구균의 tracrRNA 메커니즘을 밝혀냈다. 제니퍼 다우드나(1964~)는 미국 구조생물학자로 RNA 생화학의 세계적 석학이다. 두 여성 과학자의 국경을 초월한 연구 협력은 화학상 119년 역사상 최초로 여성 듀오의 공동 단독 수상이라는 과학사적 기념비를 세웠다.',
    flowNodeId: 'node-chem-4',
    keywords: ['크리스퍼', 'CRISPR-Cas9', '유전자가위', '유전체편집', '분자의학']
  },
  // 14. 생리의학 - 2023 (mRNA 백신)
  {
    id: 'med-2023',
    year: 2023,
    domain: 'medicine',
    domainKo: '생리의학',
    categoryCluster: '합성 생물학과 전염병 대응 mRNA 혁명',
    titleKo: '코로나19 mRNA 백신 개발을 가능케 한 뉴클레오시드 염기 변형 연구',
    titleEn: 'Discoveries concerning nucleoside base modifications that enabled the development of effective mRNA vaccines against COVID-19',
    laureates: [
      {
        nameKo: '카탈린 카리코',
        nameEn: 'Katalin Karikó',
        affiliation: '세게드 대학교 / 펜실베이니아 대학교',
        country: '헝가리 / 미국'
      },
      {
        nameKo: '드루 와이스먼',
        nameEn: 'Drew Weissman',
        affiliation: '펜실베이니아 대학교 (University of Pennsylvania)',
        country: '미국'
      }
    ],
    abstract: '본 연구는 시험관에서 합성된 체외 전사 mRNA(in vitro transcribed mRNA)를 체내에 투여할 때 발생하는 치명적인 선천성 면역 거부 반응(Toll-like 수용체 활성화)과 분해를 방지하는 분자적 해법을 규명하였다. 카리코와 와이스먼은 우라실(U) 염기를 변형된 슈도유리딘($\Psi$, pseudouridine)으로 치환함으로써 면역계의 공격을 회피하고 세포 내에서 표적 항원 단백질(스파이크 단백질)의 번역 효율을 수천 배 향상시키는 뉴클레오시드 변형 메커니즘을 확립하였다.',
    impact: '이 원천 기술은 2020년 미증유의 코로나19(COVID-19) 팬데믹 사태 당시, 통상 10년 이상 소요되던 백신 개발 기간을 유전자 염기서열 해독 후 단 11개월 만에 상용화로 단축시킨 화이자-바이온텍 및 모더나 mRNA 백신의 결정적 기초가 되었다. 전 세계 수천만 명의 조기 사망을 막고 인류의 경제·사회적 일상을 복원하는 데 결정적으로 기여하였으며, 향후 개인 맞춤형 항암 백신과 희귀 난치병 치료의 차세대 플랫폼으로 확장되고 있다.',
    laureateProfile: '카탈린 카리코(1955~)는 헝가리 출신의 생화학자로 30여 년간 연구비 삭감과 직급 강등의 역경 속에서도 mRNA 치료제 개발이라는 한 우물을 판 입지전적 인물이다. 면역학자인 드루 와이스먼(1959~)과 펜실베이니아 대학교 복사기 앞에서 우연히 만나 융합 연구를 시작하였으며, 불굴의 과학적 집념이 인류를 팬데믹의 위기에서 구원한 감동적인 스토리로 전 세계에 귀감이 되었다.',
    flowNodeId: 'node-med-4',
    keywords: ['mRNA백신', '슈도유리딘', '코로나19', '면역회피', '항원번역']
  },
  // 15. 물리학 - 2024 (인공신경망 물리)
  {
    id: 'phys-2024',
    year: 2024,
    domain: 'physics',
    domainKo: '물리학',
    categoryCluster: '통계물리학과 인공신경망·머신러닝의 융합',
    titleKo: '인공신경망 머신러닝의 기초가 된 물리적 모델(홉필드 네트워크 & 볼츠만 머신) 창안',
    titleEn: 'Foundational discoveries and inventions that enable machine learning with artificial neural networks',
    laureates: [
      {
        nameKo: '존 J. 홉필드',
        nameEn: 'John J. Hopfield',
        affiliation: '프린스턴 대학교 (Princeton University)',
        country: '미국'
      },
      {
        nameKo: '제프리 E. 힌턴',
        nameEn: 'Geoffrey E. Hinton',
        affiliation: '토론토 대학교 (University of Toronto)',
        country: '영국 / 캐나다'
      }
    ],
    abstract: '본 연구는 통계물리학의 스핀 유리(Spin Glass) 및 볼츠만 분포 이론을 정보처리에 융합하여 인공신경망의 패턴 저장과 자율 학습 원리를 구축하였다. 홉필드는 물리적 에너지 함수를 기반으로 불완전한 입력으로부터 원래의 기억을 복원하는 연상 기억 모델(Hopfield Network)을 제안하였고, 힌턴은 이를 확률적 은닉층 구조로 확장한 볼츠만 머신(Boltzmann Machine)을 개발하여 현대 딥러닝(Deep Learning)의 표현 학습 및 역전파 알고리즘의 통계역학적 토대를 완성하였다.',
    impact: '물리학의 기초 이론이 현대 컴퓨터과학의 인공지능(AI) 혁명으로 직결된 역사적 전환점을 상징한다. 힌턴의 딥러닝 연구는 대규모 언어 모델(LLM), 생성형 AI, 컴퓨터 비전뿐 아니라, 복잡한 양자 상태 계산, 단백질 접힘 예측(AlphaFold), 신물질 설계 등 현대 과학 연구 자체의 방법론을 가속화하는 최첨단 무기로 진화하였다. 인공지능이 독립된 공학을 넘어 현대 기초과학의 핵심 도구로 편입되었음을 선언한 사건이다.',
    laureateProfile: '존 홉필드(1933~)는 이론생물학과 응집물질물리학을 넘나든 미국의 물리석학이다. ‘딥러닝의 대부’로 불리는 제프리 힌턴(1947~)은 에든버러 대학교에서 인공지능 박사를 취득한 뒤 수십 년의 ‘AI 겨울’을 뚫고 합성곱 신경망(CNN)과 심층 신뢰망 연구를 관철하였다. 튜링상(2018)에 이어 노벨 물리학상까지 석권하며 현대 문명에 가장 큰 지적 충격을 준 연구자로 우뚝 섰다.',
    flowNodeId: 'node-phys-4',
    keywords: ['인공신경망', '머신러닝', '딥러닝', '통계물리', '볼츠만머신']
  },
  // 16. 경제학 - 2024 (제도경제학)
  {
    id: 'econ-2024',
    year: 2024,
    domain: 'economics',
    domainKo: '경제학',
    categoryCluster: '제도경제학과 국가 번영의 기원',
    titleKo: '사회적 제도의 형성과 그것이 국가 간 번영에 미치는 영향 규명',
    titleEn: 'Studies of how institutions are formed and affect prosperity',
    laureates: [
      {
        nameKo: '다론 아세모글루',
        nameEn: 'Daron Acemoglu',
        affiliation: 'MIT (Massachusetts Institute of Technology)',
        country: '튀르키예 / 미국'
      },
      {
        nameKo: '사이먼 존슨',
        nameEn: 'Simon Johnson',
        affiliation: 'MIT (Massachusetts Institute of Technology)',
        country: '영국 / 미국'
      },
      {
        nameKo: '제임스 A. 로빈슨',
        nameEn: 'James A. Robinson',
        affiliation: '시카고 대학교 (University of Chicago)',
        country: '영국 / 미국'
      }
    ],
    abstract: '본 연구는 식민지 개척 역사에서의 정착민 사망률이라는 독창적인 도구변수(Instrumental Variable) 실증 기법을 활용하여, 국가 간 빈부 격차를 결정하는 근본 원인이 지리적 요인이나 문화가 아닌 ‘정치·경제 제도(Institutions)’의 성격임을 입증하였다. 사유재산권 보장과 법치를 통해 대중의 경제 참여를 독려하는 ‘포용적 제도(Inclusive Institutions)’는 지속 가능한 기술 혁신과 경제 성장을 낳는 반면, 소수 엘리트가 부를 독점하는 ‘착취적 제도(Extractive Institutions)’는 장기적 정체와 빈곤을 초래함을 정밀한 역사·경제학적 데이터로 증명하였다.',
    impact: '이 연구는 명저 《국가는 왜 실패하는가(Why Nations Fail)》로 대중에게 널리 알려졌으며, 전 세계 개발원조 기구(세계은행, IMF)와 각국 정부의 국가 발전 전략 수립에 지대한 패러다임 전환을 야기하였다. 원조 자금 투입보다 투명한 거버넌스, 법치, 민주주의 제도 구축이 국가의 부를 이루는 핵심 선결 과제임을 경제학적으로 증명함으로써, 현대 민주주의와 인권이 단순한 도덕적 가치를 넘어 국가 경제 번영의 핵심 엔진임을 선언하였다.',
    laureateProfile: '다론 아세모글루(1967~)는 현 세대 가장 논문 인용 빈도가 높은 세계 최고의 경제학자 중 한 명으로, 기술 진보와 불평등, 노동경제학을 아우른다. 사이먼 존슨(1963~)은 IMF 수석 이코노미스트를 지낸 금융 거시경제 전문가이며, 제임스 로빈슨(1960~)은 라틴아메리카와 아프리카의 현장 필드 연구에 정통한 정치경제학자이다. 세 학자의 수십 년에 걸친 유기적 협력 연구는 현대 사회과학 협업의 모범으로 평가받는다.',
    flowNodeId: 'node-econ-4',
    keywords: ['제도경제학', '포용적제도', '국가번영', '실증분석', '거버넌스']
  }
];

// 흐름도 노드 데이터 (위에서 아래로 흐르는 엔지니어링 박스 그래프용)
export const FLOW_NODES: FlowNode[] = [
  // 종합 흐름도 노드
  {
    id: 'flow-all-1',
    domain: 'all',
    era: '1900 ~ 1920s: 고전 체계의 붕괴와 근대 과학의 태동',
    title: '원자 내부와 시공간의 발견, 그리고 질병과의 싸움',
    description: 'X선·방사능의 발견으로 원자 불변설이 붕괴하고, 아인슈타인의 광양자설로 양자물리학이 시작되었습니다. 의학에서는 혈청 치료를 통해 인류 최초로 병원체 독소를 제어하기 시작했습니다.',
    keyMilestones: [
      '1901 뢴트겐: X선 발견 및 전자기 방사선 포착',
      '1901 폰 베링: 디프테리아 항독소 혈청 요법',
      '1911 마리 퀴리: 라듐·폴로늄 분리와 방사화학 정립',
      '1921 아인슈타인: 광전효과와 빛의 양자화'
    ],
    nextNodes: ['flow-all-2'],
    prizeIds: ['phys-1901', 'med-1901', 'chem-1911', 'phys-1921']
  },
  {
    id: 'flow-all-2',
    domain: 'all',
    era: '1930 ~ 1960s: 정보화의 씨앗과 생명 암호의 해독',
    title: '항생제 혁명, 트랜지스터 탄생, DNA 이중나선',
    description: '인류의 수명을 획기적으로 연장시킨 페니실린의 대량 생산, 디지털 전자 문명을 연 벨 연구소의 트랜지스터 발명, 생명 유전 정보의 본질을 분자 수준에서 규명한 DNA 이중나선 발견이 일어난 황금기입니다.',
    keyMilestones: [
      '1945 플레밍 외: 페니실린 발견 및 항생제 혁명',
      '1956 쇼클리 외: 고체 반도체 트랜지스터 발명',
      '1962 왓슨 & 크릭 외: DNA 이중나선 구조 규명'
    ],
    nextNodes: ['flow-all-3'],
    prizeIds: ['med-1945', 'phys-1956', 'med-1962']
  },
  {
    id: 'flow-all-3',
    domain: 'all',
    era: '1970 ~ 1990s: 수리·제도적 시장 분석과 생명공학 도구화',
    title: '현대 경제학의 공리화, 게임이론, 유전자 증폭(PCR)',
    description: '새뮤얼슨의 수리경제학 및 하이에크의 자유시장 메커니즘, 존 내시의 게임이론으로 인간 상호작용이 정밀 과학화되었고, 생명과학에서는 PCR 기술 발명으로 유전물질 분석의 대중화가 열렸습니다.',
    keyMilestones: [
      '1970 새뮤얼슨: 신고전파 종합 수리경제학',
      '1974 하이에크: 가격 체계와 분산 지식 메커니즘',
      '1993 캐리 멀리스: PCR 유전자 증폭 기술',
      '1994 존 내시 외: 비협조 게임의 내시 균형'
    ],
    nextNodes: ['flow-all-4'],
    prizeIds: ['econ-1970', 'econ-1974', 'chem-1993', 'econ-1994']
  },
  {
    id: 'flow-all-4',
    domain: 'all',
    era: '2010s ~ 현재: 모바일 전력망, 유전자 교정, 인공지능의 시대',
    title: '탈탄소 배터리, 크리스퍼 유전자가위, 딥러닝과 포용적 제도',
    description: '리튬이온 배터리로 모바일/친환경 사회가 완성되고, 크리스퍼와 mRNA 백신으로 인간이 유전자를 직접 제어하며, 물리학 기반 머신러닝이 인공지능 시대를 견인하고 있습니다.',
    keyMilestones: [
      '2019 구디너프 외: 리튬이온 배터리 상용화',
      '2020 다우드나 외: 크리스퍼 Cas9 유전자가위',
      '2023 카리코 외: 팬데믹을 극복한 mRNA 백신 기술',
      '2024 홉필드 & 힌턴: 통계물리 기반 인공신경망 머신러닝',
      '2024 아세모글루 외: 국가 번영을 결정하는 포용적 제도'
    ],
    nextNodes: [],
    prizeIds: ['chem-2019', 'chem-2020', 'med-2023', 'phys-2024', 'econ-2024']
  },

  // 1. 물리학 전용 흐름도
  {
    id: 'flow-phys-1',
    domain: 'physics',
    era: '20세기 초 (1900~1920s)',
    title: '미지의 방사선과 양자 가설의 출현',
    description: 'X선의 발견으로 눈에 보이지 않던 전자기 스펙트럼이 확장되었고, 아인슈타인은 광전효과를 통해 에너지가 양자화된 덩어리(광자)로 거동함을 증명했습니다.',
    keyMilestones: ['1901 뢴트겐: X선 발견', '1921 아인슈타인: 광전효과 법칙'],
    nextNodes: ['flow-phys-2'],
    prizeIds: ['phys-1901', 'phys-1921']
  },
  {
    id: 'flow-phys-2',
    domain: 'physics',
    era: '20세기 중반 (1950s)',
    title: '고체물리학과 전자공학의 탄생',
    description: '양자역학의 결정 격자 이론이 반도체 연구로 결실을 맺으며, 진공관을 대체하는 증폭·스위칭 소자 트랜지스터가 발명되어 디지털 혁명이 시작되었습니다.',
    keyMilestones: ['1956 쇼클리·바딘·브래튼: 트랜지스터 효과'],
    nextNodes: ['flow-phys-3'],
    prizeIds: ['phys-1956']
  },
  {
    id: 'flow-phys-3',
    domain: 'physics',
    era: '21세기 현대 (2020s~)',
    title: '통계물리학과 인공신경망의 융합',
    description: '자성체 스핀 유리 모델과 통계 열역학의 볼츠만 분포가 컴퓨터의 연상 기억 및 심층 신경망 학습으로 이어져 오늘날 인공지능(AI) 혁명의 근간이 되었습니다.',
    keyMilestones: ['2024 홉필드 & 힌턴: 머신러닝의 물리적 기초'],
    nextNodes: [],
    prizeIds: ['phys-2024']
  },

  // 2. 화학 전용 흐름도
  {
    id: 'flow-chem-1',
    domain: 'chemistry',
    era: '방사화학 태동기 (1910s)',
    title: '방사성 원소와 원자 붕괴의 발견',
    description: '마리 퀴리가 라듐과 폴로늄을 분리함으로써, 원소가 다른 원소로 붕괴될 수 있다는 방사화학의 새로운 지평이 열렸습니다.',
    keyMilestones: ['1911 마리 퀴리: 라듐과 폴로늄의 분리'],
    nextNodes: ['flow-chem-2'],
    prizeIds: ['chem-1911']
  },
  {
    id: 'flow-chem-2',
    domain: 'chemistry',
    era: '분자생물학 도구 혁신기 (1990s)',
    title: '시험관 내 DNA 증폭 혁명 (PCR)',
    description: '화학적 효소 반응과 열순환 프로토콜을 결합한 캐리 멀리스의 PCR 기법은 미량의 유전 물질을 무한히 복제할 수 있는 분자 도구를 선사했습니다.',
    keyMilestones: ['1993 캐리 멀리스: PCR 기술'],
    nextNodes: ['flow-chem-3'],
    prizeIds: ['chem-1993']
  },
  {
    id: 'flow-chem-3',
    domain: 'chemistry',
    era: '현대 소재 및 정밀 편집 (2010s~)',
    title: '에너지 저장(배터리)과 유전자 가위',
    description: '리튬이온을 가역적으로 저장하는 인터칼레이션 화학으로 모바일 전기 시대를 열었고, 크리스퍼 Cas9 단백질-RNA 복합체로 유전체 정밀 절단 기술을 완성했습니다.',
    keyMilestones: ['2019 구디너프 외: 리튬이온 배터리', '2020 다우드나 외: 크리스퍼 Cas9'],
    nextNodes: [],
    prizeIds: ['chem-2019', 'chem-2020']
  },

  // 3. 생리의학 전용 흐름도
  {
    id: 'flow-med-1',
    domain: 'medicine',
    era: '체액 면역과 항생제 발견기 (1900~1940s)',
    title: '병원균 독소 억제와 기적의 치료제 탄생',
    description: '디프테리아 항독소 혈청을 통해 체액성 면역의 실체가 규명되었고, 곰팡이 유래 물질인 페니실린의 발견으로 인류는 세균 감염과의 전쟁에서 첫 승리를 거두었습니다.',
    keyMilestones: ['1901 폰 베링: 디프테리아 혈청 치료', '1945 플레밍 외: 페니실린 발견'],
    nextNodes: ['flow-med-2'],
    prizeIds: ['med-1901', 'med-1945']
  },
  {
    id: 'flow-med-2',
    domain: 'medicine',
    era: '분자유전학 정립기 (1960s)',
    title: 'DNA 이중나선과 센트럴 도그마',
    description: '왓슨과 크릭이 DNA 구조를 밝혀냄으로써 유전 정보가 어떻게 염기쌍으로 암호화되고 다음 세대로 복제되는지 분자적 메커니즘이 확립되었습니다.',
    keyMilestones: ['1962 왓슨 & 크릭 외: DNA 분자구조 규명'],
    nextNodes: ['flow-med-3'],
    prizeIds: ['med-1962']
  },
  {
    id: 'flow-med-3',
    domain: 'medicine',
    era: '합성 생물학 및 팬데믹 대응기 (2020s~)',
    title: 'mRNA 염기 변형과 신속 면역 플랫폼',
    description: '슈도유리딘 염기 변형을 통해 체내 면역 거부를 회피한 합성 mRNA는 수일 만에 설계하여 수억 명을 보호할 수 있는 차세대 백신 시대를 열었습니다.',
    keyMilestones: ['2023 카리코 & 와이스먼: mRNA 백신 기초 기술'],
    nextNodes: [],
    prizeIds: ['med-2023']
  },

  // 4. 경제학 전용 흐름도
  {
    id: 'flow-econ-1',
    domain: 'economics',
    era: '수리경제학과 시장 체계의 기초 (1970s)',
    title: '신고전파 종합과 자생적 시장 질서',
    description: '새뮤얼슨은 수학적 미적분학으로 경제 이론을 과학화하였으며, 하이에크는 분산된 지식을 조율하는 가격 기구의 독보적 효율성을 역설했습니다.',
    keyMilestones: ['1970 새뮤얼슨: 수리경제학 정립', '1974 하이에크: 가격 기구와 지식의 분산'],
    nextNodes: ['flow-econ-2'],
    prizeIds: ['econ-1970', 'econ-1974']
  },
  {
    id: 'flow-econ-2',
    domain: 'economics',
    era: '전략적 상호작용의 과학 (1990s)',
    title: '비협조 게임이론과 내시 균형',
    description: '존 내시는 완전경쟁 시장의 가정을 넘어 과점 및 전략적 선택 상황에서 경기자들이 도달하는 균형점을 수학적으로 증명하여 사회과학의 문법을 바꿨습니다.',
    keyMilestones: ['1994 존 내시 외: 내시 균형'],
    nextNodes: ['flow-econ-3'],
    prizeIds: ['econ-1994']
  },
  {
    id: 'flow-econ-3',
    domain: 'economics',
    era: '실증 분석과 제도적 기원 (2020s~)',
    title: '국가 번영을 좌우하는 포용적 제도',
    description: '자연실험과 도구변수 실증 기법을 통해, 지리나 인종이 아닌 권력 분립과 재산권 보장을 담은 ‘포용적 제도’가 지속적 번영의 본질임을 밝혔습니다.',
    keyMilestones: ['2024 아세모글루 외: 제도의 형성과 번영'],
    nextNodes: [],
    prizeIds: ['econ-2024']
  }
];
