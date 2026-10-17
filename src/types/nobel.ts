export type DomainType = 'physics' | 'chemistry' | 'medicine' | 'economics';

export interface NobelPrizeItem {
  id: string;
  year: number;
  domain: DomainType;
  domainKo: string;
  categoryCluster: string; // 연구 흐름 클러스터
  titleKo: string;
  titleEn: string;
  laureates: {
    nameKo: string;
    nameEn: string;
    affiliation: string;
    country: string;
  }[];
  // 1단계: 논문 초록 분량의 수상 연구 요약 (Abstract)
  abstract: string;
  // 2단계: 동일 분량의 시사점과 영향 (Implications & Impact)
  impact: string;
  // 3단계: 동일 분량의 수상자/팀 프로파일 및 주요 연구분야 (Profile & Research Field)
  laureateProfile: string;
  // 상호 연계 링크 (흐름도 노드 ID 등)
  flowNodeId?: string;
  keywords: string[];
}

export interface FlowNode {
  id: string;
  domain: DomainType | 'all';
  era: string; // 예: "1900-1920s 태동기"
  title: string;
  description: string;
  keyMilestones: string[];
  nextNodes: string[]; // 연결선 대상 ID
  prizeIds: string[]; // 관련 노벨상 ID 링크
}
