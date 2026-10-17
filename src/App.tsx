import React, { useState, useEffect, useMemo } from 'react';
import { NOBEL_PRIZES, FLOW_NODES } from './data/nobelData';
import type { DomainType } from './types/nobel';
import { NobelCard } from './components/NobelCard';
import { IndexScrubber } from './components/IndexScrubber';
import { FlowDiagram } from './components/FlowDiagram';
import { 
  Atom, 
  FlaskConical, 
  Dna, 
  TrendingUp, 
  Layers, 
  Clock, 
  GitFork,
  Search,
  Sparkles
} from 'lucide-react';


type ViewMode = 'timeline' | 'domain-group' | 'flow-all' | 'flow-physics' | 'flow-chemistry' | 'flow-medicine' | 'flow-economics';

export const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('timeline');
  const [selectedDomain, setSelectedDomain] = useState<DomainType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeYear, setActiveYear] = useState<number>(1901);

  // 연도별 앵커 목록 (좌측 인덱스 스크러버용)
  const eraAnchors = useMemo(() => [
    { label: '1901년', year: 1901 },
    { label: '1920s', year: 1920 },
    { label: '1945년', year: 1945 },
    { label: '1960s', year: 1960 },
    { label: '1970s', year: 1970 },
    { label: '1990s', year: 1990 },
    { label: '2020s', year: 2020 },
  ], []);

  // 필터링된 노벨상 리스트
  const filteredPrizes = useMemo(() => {
    return NOBEL_PRIZES.filter((item) => {
      const matchDomain = selectedDomain === 'all' || item.domain === selectedDomain;
      const matchSearch =
        searchQuery.trim() === '' ||
        item.titleKo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryCluster.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.laureates.some(l => l.nameKo.includes(searchQuery) || l.nameEn.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.keywords.some(kw => kw.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchDomain && matchSearch;
    }).sort((a, b) => a.year - b.year);
  }, [selectedDomain, searchQuery]);

  // 스크롤 감지하여 현재 보이는 연도 인덱스 계산
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('[id^="prize-"]');
      let currentYear = 1901;
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          const match = card.id.match(/\d{4}/);
          if (match) currentYear = parseInt(match[0], 10);
        }
      });
      setActiveYear(currentYear);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 특정 연도로 부드럽게 점프
  const handleSelectYear = (targetYear: number) => {
    const closest = filteredPrizes.reduce((prev, curr) => 
      Math.abs(curr.year - targetYear) < Math.abs(prev.year - targetYear) ? curr : prev
    , filteredPrizes[0]);

    if (closest) {
      const elem = document.getElementById(`prize-${closest.id}`);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveYear(closest.year);
      }
    }
  };

  // 특정 연구상으로 점프
  const handleSelectPrizeFromFlow = (prizeId: string) => {
    setViewMode('timeline');
    setTimeout(() => {
      const elem = document.getElementById(`prize-${prizeId}`);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  };

  // 흐름도 페이지 네비게이션 렌더링
  if (viewMode.startsWith('flow-')) {
    const targetDomain = viewMode.replace('flow-', '') as DomainType | 'all';
    const targetNodes = FLOW_NODES.filter(n => n.domain === targetDomain);

    const titleMap: Record<string, { title: string; desc: string }> = {
      all: {
        title: '인류 과학·경제학 종합 연구 흐름도',
        desc: '1901년부터 현대까지 개별 연구를 축약하거나 생략하지 않고, 시대별 패러다임과 학문 융합 묶음(Cluster)이 어떻게 다음 시대를 촉발했는지 위에서 아래로 조망합니다.'
      },
      physics: {
        title: '물리학 연구 흐름도: 원자에서 AI까지',
        desc: 'X선과 빛의 양자화로부터 출발해 고체물리학과 트랜지스터 혁명을 거쳐, 현대 복잡계 통계물리와 인공신경망 딥러닝으로 이어지는 물리학의 궤적입니다.'
      },
      chemistry: {
        title: '화학 연구 흐름도: 원소 분리에서 분자 편집까지',
        desc: '방사성 원소 분리에서 시작해 분자 증폭 도구인 PCR을 거쳐, 탈탄소 리튬이온 배터리와 유전체 가위(CRISPR)로 진화한 물질 탐구의 역사입니다.'
      },
      medicine: {
        title: '생리의학 연구 흐름도: 감염병 극복에서 합성생물학까지',
        desc: '디프테리아 혈청 치료와 페니실린으로 감염병에 대항하고, DNA 이중나선으로 유전 암호를 규명하여, 오늘날 mRNA 백신으로 꽃피운 생명과학의 흐름입니다.'
      },
      economics: {
        title: '경제학 연구 흐름도: 수리모형에서 제도와 번영까지',
        desc: '수리적 신고전파 종합과 분산 가격 기구, 전략적 게임이론의 내시 균형을 거쳐, 국가 번영의 근원인 포용적 제도를 규명한 경제학의 진화입니다.'
      }
    };

    const currentMeta = titleMap[targetDomain] || titleMap.all;

    return (
      <div className="min-h-screen bg-[#070A12] text-slate-100 pb-16">
        <FlowDiagram
          nodes={targetNodes}
          domainTitle={currentMeta.title}
          domainDescription={currentMeta.desc}
          onSelectPrize={handleSelectPrizeFromFlow}
          onBackToTimeline={() => setViewMode('timeline')}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070A12] text-slate-100 pb-20 relative">
      {/* 1. 상단 고정 모바일 헤더 */}
      <header className="sticky top-0 z-40 bg-[#070A12]/95 backdrop-blur-md border-b border-slate-800/80 px-4 py-3">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <h1 className="text-base font-black tracking-tight text-white m-0">노벨 사이언스 연대기</h1>
            </div>
            <p className="text-[10px] text-slate-400 m-0">인류 과학업적 & 경제학상 마일스톤</p>
          </div>

          {/* 종합 흐름도 바로가기 하이퍼링크 버튼 */}
          <button
            onClick={() => setViewMode('flow-all')}
            className="flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg bg-cyan-950/80 text-cyan-300 border border-cyan-800 hover:bg-cyan-900 transition-colors"
          >
            <GitFork className="w-3.5 h-3.5" />
            <span>종합 흐름도</span>
          </button>
        </div>

        {/* 2. 분야별 흐름도 하이퍼링크 바 */}
        <div className="max-w-md mx-auto mt-2 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] overflow-x-auto no-scrollbar gap-1">
          <span className="text-slate-500 shrink-0 font-medium mr-1">흐름도:</span>
          <button
            onClick={() => setViewMode('flow-physics')}
            className="px-2 py-0.5 rounded bg-blue-950/60 text-blue-300 border border-blue-900/60 whitespace-nowrap"
          >
            물리학
          </button>
          <button
            onClick={() => setViewMode('flow-chemistry')}
            className="px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-900/60 whitespace-nowrap"
          >
            화학
          </button>
          <button
            onClick={() => setViewMode('flow-medicine')}
            className="px-2 py-0.5 rounded bg-rose-950/60 text-rose-300 border border-rose-900/60 whitespace-nowrap"
          >
            생리의학
          </button>
          <button
            onClick={() => setViewMode('flow-economics')}
            className="px-2 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-900/60 whitespace-nowrap"
          >
            경제학
          </button>
        </div>

        {/* 3. 모드 탭 (시점 순 vs 연구 분야별 묶음) */}
        <div className="max-w-md mx-auto mt-2.5 flex rounded-xl bg-slate-900/90 p-1 border border-slate-800">
          <button
            onClick={() => { setViewMode('timeline'); setSelectedDomain('all'); }}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
              viewMode === 'timeline' ? 'bg-cyan-500 text-slate-950 shadow-md font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>수상 시점 순</span>
          </button>
          <button
            onClick={() => { setViewMode('domain-group'); if (selectedDomain === 'all') setSelectedDomain('physics'); }}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
              viewMode === 'domain-group' ? 'bg-cyan-500 text-slate-950 shadow-md font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>연구 분야별 묶음</span>
          </button>
        </div>

        {/* 4. 분야 선택 탭 (연구 분야별 묶음 모드 또는 시점순 필터) */}
        <div className="max-w-md mx-auto mt-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          {viewMode === 'timeline' && (
            <button
              onClick={() => setSelectedDomain('all')}
              className={`px-3 py-1 rounded-full text-xs font-medium shrink-0 transition-colors ${
                selectedDomain === 'all'
                  ? 'bg-slate-200 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-400 border border-slate-800'
              }`}
            >
              전체 (1901~)
            </button>
          )}

          <button
            onClick={() => setSelectedDomain('physics')}
            className={`px-3 py-1 rounded-full text-xs font-medium shrink-0 flex items-center gap-1 transition-colors ${
              selectedDomain === 'physics'
                ? 'bg-blue-600 text-white font-bold'
                : 'bg-slate-900 text-slate-400 border border-slate-800'
            }`}
          >
            <Atom className="w-3 h-3" /> 물리학
          </button>

          <button
            onClick={() => setSelectedDomain('chemistry')}
            className={`px-3 py-1 rounded-full text-xs font-medium shrink-0 flex items-center gap-1 transition-colors ${
              selectedDomain === 'chemistry'
                ? 'bg-emerald-600 text-white font-bold'
                : 'bg-slate-900 text-slate-400 border border-slate-800'
            }`}
          >
            <FlaskConical className="w-3 h-3" /> 화학
          </button>

          <button
            onClick={() => setSelectedDomain('medicine')}
            className={`px-3 py-1 rounded-full text-xs font-medium shrink-0 flex items-center gap-1 transition-colors ${
              selectedDomain === 'medicine'
                ? 'bg-rose-600 text-white font-bold'
                : 'bg-slate-900 text-slate-400 border border-slate-800'
            }`}
          >
            <Dna className="w-3 h-3" /> 생리의학
          </button>

          <button
            onClick={() => setSelectedDomain('economics')}
            className={`px-3 py-1 rounded-full text-xs font-medium shrink-0 flex items-center gap-1 transition-colors ${
              selectedDomain === 'economics'
                ? 'bg-amber-600 text-white font-bold'
                : 'bg-slate-900 text-slate-400 border border-slate-800'
            }`}
          >
            <TrendingUp className="w-3 h-3" /> 경제학
          </button>
        </div>

        {/* 5. 검색창 */}
        <div className="max-w-md mx-auto mt-2 relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-500" />
          <input
            type="text"
            placeholder="연구명, 수상자, 키워드 검색 (예: X선, DNA, AI)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
          />
        </div>
      </header>

      {/* 좌측 인터랙티브 인덱스 스크롤바 (모바일 화면 좌측 여백에 배치) */}
      {viewMode === 'timeline' && (
        <IndexScrubber
          anchors={eraAnchors}
          activeYear={activeYear}
          onSelectYear={handleSelectYear}
        />
      )}

      {/* 메인 콘텐츠 영역: 1열 세로 스크롤 카드 피드 (좌측 여백 확보 pl-8 pr-4) */}
      <main className="max-w-md mx-auto pl-8 pr-4 pt-4">
        {filteredPrizes.length === 0 ? (
          <div className="text-center py-16 text-slate-500 text-xs">
            검색 결과가 없습니다.
          </div>
        ) : (
          filteredPrizes.map((item) => (
            <NobelCard
              key={item.id}
              item={item}
              onNavigateToFlow={(domain) => setViewMode(`flow-${domain}` as ViewMode)}
            />
          ))
        )}
      </main>

      {/* 하단 플로팅 정보 바 */}
      <footer className="fixed bottom-0 left-0 right-0 bg-[#070A12]/95 border-t border-slate-800/80 px-4 py-2 text-center z-20">
        <p className="text-[10px] text-slate-500">
          Nobel Science & Economics Chronicle • Vercel Production
        </p>
      </footer>
    </div>
  );
};

export default App;
