import type { NobelPrizeItem, FlowNode } from '../types/nobel';
import nobelFullJson from './nobelFullData.json';

export const NOBEL_PRIZES: NobelPrizeItem[] = nobelFullJson as NobelPrizeItem[];

// 흐름도 노드 데이터 (위에서 아래로 흐르는 엔지니어링 박스 그래프용)
export const FLOW_NODES: FlowNode[] = [
  // 종합 흐름도 노드 (과학기술 중심, 경제학 선택 연계)
  {
    id: 'flow-all-1',
    domain: 'all',
    era: '1900 ~ 1920s: 고전 체계의 붕괴와 근대 과학의 태동',
    title: '원자 내부와 시공간의 발견, 그리고 질병과의 싸움',
    description: 'X선·방사능의 발견으로 원자 불변설이 붕괴하고, 아인슈타인의 광양자설로 양자물리학이 시작되었습니다. 의학에서는 혈청 치료를 통해 인류 최초로 병원체 독소를 제어하기 시작했습니다.',
    keyMilestones: [
      '1901 뢴트겐: X선 발견 및 전자기 방사선 포착',
      '1901 폰 베링: 디프테리아 항독소 혈청 요법',
      '1901 반트 호프: 화학동역학 및 삼투압 법칙',
      '1911 마리 퀴리: 라듐·폴로늄 분리와 방사화학 정립',
      '1921 아인슈타인: 광전효과와 빛의 양자화'
    ],
    nextNodes: ['flow-all-2'],
    prizeIds: ['phys-1901', 'med-1901', 'chem-1901', 'chem-1911', 'phys-1921']
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
    era: '물리화학 및 방사화학 태동기 (1900~1910s)',
    title: '삼투압, 반응속도론 및 방사성 원소의 분리',
    description: '반트 호프의 화학동역학과 삼투압 법칙으로 화학이 정밀 물리과학으로 전환되었고, 마리 퀴리가 라듐과 폴로늄을 단리하여 원소 붕괴의 방사화학 지평을 열었습니다.',
    keyMilestones: ['1901 반트 호프: 화학동역학 & 삼투압', '1911 마리 퀴리: 라듐과 폴로늄 분리'],
    nextNodes: ['flow-chem-2'],
    prizeIds: ['chem-1901', 'chem-1911']
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
