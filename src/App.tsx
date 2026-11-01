import React, { useState, useEffect, useMemo } from 'react';
import { NOBEL_PRIZES, FLOW_NODES } from './data/nobelData';
import type { DomainType, NobelPrizeItem } from './types/nobel';
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
  Sparkles,
  CheckSquare,
  Square,
  Network,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

type ViewMode = 'timeline' | 'domain-group' | 'flow-all' | 'flow-physics' | 'flow-chemistry' | 'flow-medicine' | 'flow-economics';

export const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('timeline');
  const [selectedDomain, setSelectedDomain] = useState<DomainType | 'all'>('all');
  const [includeEconomics, setIncludeEconomics] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeYear, setActiveYear] = useState<number>(1901);
  const [visibleCount, setVisibleCount] = useState<number>(30);

  // 분야별 묶음 뷰에서 선택된 세부 학문분야 필터 ('all' 또는 subFieldId)
  const [selectedSubField, setSelectedSubField] = useState<string>('all');
  // 분야별 묶음 뷰에서 각 아코디언 폴더 접기/펼치기 상태
  const [expandedClusters, setExpandedClusters] = useState<Record<string, boolean>>({});

  // 연도별 앵커 목록
  const eraAnchors = useMemo(() => [
    { label: '1901', year: 1901 },
    { label: '1910s', year: 1910 },
    { label: '1920s', year: 1920 },
    { label: '1930s', year: 1930 },
    { label: '1940s', year: 1940 },
    { label: '1950s', year: 1950 },
    { label: '1960s', year: 1960 },
    { label: '1970s', year: 1970 },
    { label: '1980s', year: 1980 },
    { label: '1990s', year: 1990 },
    { label: '2000s', year: 2000 },
    { label: '2010s', year: 2010 },
    { label: '2024', year: 2024 },
  ], []);

  // 필터링된 전체 노벨상 리스트
  const filteredPrizes = useMemo(() => {
    return NOBEL_PRIZES.filter((item) => {
      // 1. 경제학 포함/제외 필터
      if (!includeEconomics && item.domain === 'economics') {
        return false;
      }

      // 2. 도메인 필터
      const matchDomain = selectedDomain === 'all' || item.domain === selectedDomain;

      // 3. 검색어 필터
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        q === '' ||
        item.year.toString().includes(q) ||
        item.titleKo.toLowerCase().includes(q) ||
        item.titleEn.toLowerCase().includes(q) ||
        item.categoryCluster.toLowerCase().includes(q) ||
        (item.subFieldKo && item.subFieldKo.toLowerCase().includes(q)) ||
        item.laureates.some(l => l.nameKo.toLowerCase().includes(q) || l.nameEn.toLowerCase().includes(q) || l.country.toLowerCase().includes(q)) ||
        item.keywords.some(kw => kw.toLowerCase().includes(q));

      return matchDomain && matchSearch;
    }).sort((a, b) => a.year - b.year);
  }, [selectedDomain, searchQuery, includeEconomics]);

  // [분야별 묶음 전용]: 선택된 도메인의 모든 세부 분과학문(SubFields) 목록 추출
  const availableSubFields = useMemo(() => {
    if (viewMode !== 'domain-group') return [];
    const targetDomain = selectedDomain === 'all' ? 'physics' : selectedDomain;
    const prizesInDomain = NOBEL_PRIZES.filter(p => p.domain === targetDomain);
    
    const map = new Map<string, { id: string; name: string; desc: string; count: number }>();
    prizesInDomain.forEach(p => {
      const id = p.subFieldId || 'other';
      const name = p.subFieldKo || '기타 연구분야';
      const desc = p.subFieldDesc || '';
      if (!map.has(id)) {
        map.set(id, { id, name, desc, count: 1 });
      } else {
        map.get(id)!.count++;
      }
    });
    return Array.from(map.values()).sort((a, b) => b.count - a.count);
  }, [viewMode, selectedDomain]);

  // [분야별 묶음 전용]: 세부 학문/유사성 단위 그룹핑
  const subFieldGroupedPrizes = useMemo(() => {
    if (viewMode !== 'domain-group') return [];
    const targetDomain = selectedDomain === 'all' ? 'physics' : selectedDomain;
    
    // 대상 도메인 내 필터링된 연구들
    const domainPrizes = filteredPrizes.filter(p => p.domain === targetDomain);
    
    const groups: { subFieldId: string; subFieldKo: string; subFieldDesc: string; items: NobelPrizeItem[] }[] = [];
    const groupMap = new Map<string, NobelPrizeItem[]>();

    domainPrizes.forEach(p => {
      const sId = p.subFieldId || 'other';
      if (!groupMap.has(sId)) {
        groupMap.set(sId, []);
      }
      groupMap.get(sId)!.push(p);
    });

    groupMap.forEach((items, sId) => {
      if (selectedSubField === 'all' || selectedSubField === sId) {
        const first = items[0];
        groups.push({
          subFieldId: sId,
          subFieldKo: first.subFieldKo || '기타 연구분야',
          subFieldDesc: first.subFieldDesc || '',
          items: items.sort((a, b) => a.year - b.year)
        });
      }
    });

    return groups;
  }, [viewMode, selectedDomain, filteredPrizes, selectedSubField]);

  // 스크롤 감지 및 현재 연도 하이라이트 동기화
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('[id^="prize-"]');
      let currentYear = 1901;
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top <= 250 && rect.bottom >= 250) {
          const match = card.id.match(/\d{4}/);
          if (match) currentYear = parseInt(match[0], 10);
        }
      });
      setActiveYear(currentYear);

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 800) {
        setVisibleCount((prev) => Math.min(prev + 30, filteredPrizes.length));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredPrizes.length]);

  // 연도 점프
  const handleSelectYear = (targetYear: number) => {
    const targetIndex = filteredPrizes.findIndex(p => p.year >= targetYear);
    if (targetIndex !== -1 && targetIndex >= visibleCount) {
      setVisibleCount(targetIndex + 20);
    }

    setTimeout(() => {
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
    }, 50);
  };

  // 흐름도에서 특정 연구 바로가기
  const handleSelectPrizeFromFlow = (prizeId: string) => {
    setViewMode('timeline');
    const prizeIndex = filteredPrizes.findIndex(p => p.id === prizeId);
    if (prizeIndex !== -1 && prizeIndex >= visibleCount) {
      setVisibleCount(prizeIndex + 20);
    }

    setTimeout(() => {
      const elem = document.getElementById(`prize-${prizeId}`);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  };

  // 아코디언 토글
  const toggleClusterExpand = (clusterId: string) => {
    setExpandedClusters(prev => ({
      ...prev,
      [clusterId]: !prev[clusterId]
    }));
  };

  // 흐름도 뷰 렌더링
  if (viewMode.startsWith('flow-')) {
    const targetDomain = viewMode.replace('flow-', '') as DomainType | 'all';
    const targetNodes = FLOW_NODES.filter(n => n.domain === targetDomain);

    const titleMap: Record<string, { title: string; desc: string }> = {
      all: {
        title: '인류 과학·기술 종합 연구 흐름도',
        desc: '1901년부터 현대까지 개별 연구를 축약하거나 생략하지 않고, 시대별 패러다임과 학문 융합 묶음(Cluster)이 어떻게 다음 시대를 촉발했는지 위에서 아래로 조망합니다.'
      },
      physics: {
        title: '물리학 연구 흐름도: 원자에서 AI까지',
        desc: 'X선과 빛의 양자화로부터 출발해 고체물리학과 트랜지스터 혁명을 거쳐, 현대 복잡계 통계물리와 인공신경망 딥러닝으로 이어지는 물리학의 궤적입니다.'
      },
      chemistry: {
        title: '화학 연구 흐름도: 원소 분리에서 분자 편집까지',
        desc: '삼투압과 방사성 원소 분리에서 시작해 분자 증폭 도구인 PCR을 거쳐, 탈탄소 리튬이온 배터리와 유전체 가위(CRISPR)로 진화한 물질 탐구의 역사입니다.'
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
    const isAll = targetDomain === 'all';

    return (
      <div className="min-h-screen bg-[#070A12] text-slate-100 pb-16">
        <FlowDiagram
          nodes={targetNodes}
          domainTitle={currentMeta.title}
          domainDescription={currentMeta.desc}
          onSelectPrize={handleSelectPrizeFromFlow}
          onBackToTimeline={() => setViewMode('timeline')}
          isAllDomain={isAll}
        />
      </div>
    );
  }

  const currentDisplayedPrizes = filteredPrizes.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-[#070A12] text-slate-100 pb-20 relative">
      {/* 1. 상단 고정 모바일 헤더 */}
      <header className="sticky top-0 z-40 bg-[#070A12]/95 backdrop-blur-md border-b border-slate-800/80 px-4 py-2.5">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <h1 className="text-sm font-black tracking-tight text-white m-0">노벨 사이언스 전수 연대기</h1>
            </div>
            <p className="text-[10px] text-slate-400 m-0">
              1901~2024 전수 수록 ({filteredPrizes.length}건 수록 중)
            </p>
          </div>

          {/* 종합 흐름도 바로가기 */}
          <button
            onClick={() => setViewMode('flow-all')}
            className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-cyan-950/80 text-cyan-300 border border-cyan-800 hover:bg-cyan-900 transition-colors"
          >
            <GitFork className="w-3.5 h-3.5" />
            <span>종합 흐름도</span>
          </button>
        </div>

        {/* 2. 경제학 포함/제외 토글 바 & 분야별 흐름도 */}
        <div className="max-w-md mx-auto mt-2 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] gap-2">
          <button
            onClick={() => setIncludeEconomics(!includeEconomics)}
            className={`flex items-center gap-1 px-2 py-0.5 rounded border transition-colors ${
              includeEconomics 
                ? 'bg-amber-950/60 text-amber-300 border-amber-800' 
                : 'bg-slate-900 text-slate-500 border-slate-800'
            }`}
          >
            {includeEconomics ? <CheckSquare className="w-3 h-3 text-amber-400" /> : <Square className="w-3 h-3" />}
            <span>경제학 {includeEconomics ? '포함됨' : '제외됨'}</span>
          </button>

          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setViewMode('flow-physics')}
              className="px-1.5 py-0.5 rounded bg-blue-950/60 text-blue-300 border border-blue-900/60 text-[10px]"
            >
              물리
            </button>
            <button
              onClick={() => setViewMode('flow-chemistry')}
              className="px-1.5 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-900/60 text-[10px]"
            >
              화학
            </button>
            <button
              onClick={() => setViewMode('flow-medicine')}
              className="px-1.5 py-0.5 rounded bg-rose-950/60 text-rose-300 border border-rose-900/60 text-[10px]"
            >
              생리의학
            </button>
            {includeEconomics && (
              <button
                onClick={() => setViewMode('flow-economics')}
                className="px-1.5 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-900/60 text-[10px]"
              >
                경제학
              </button>
            )}
          </div>
        </div>

        {/* 3. 모드 탭 (시점 순 vs 학문/연구분야 유사성 묶음) */}
        <div className="max-w-md mx-auto mt-2 flex rounded-xl bg-slate-900/90 p-1 border border-slate-800">
          <button
            onClick={() => { setViewMode('timeline'); }}
            className={`flex-1 py-1 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
              viewMode === 'timeline' ? 'bg-cyan-500 text-slate-950 shadow font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Clock className="w-3 h-3" />
            <span>수상 시점 순 (연대기)</span>
          </button>
          <button
            onClick={() => { 
              setViewMode('domain-group'); 
              if (selectedDomain === 'all') setSelectedDomain('physics'); 
              setSelectedSubField('all');
            }}
            className={`flex-1 py-1 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
              viewMode === 'domain-group' ? 'bg-cyan-500 text-slate-950 shadow font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Network className="w-3 h-3" />
            <span>연구분야 유사성 묶음</span>
          </button>
        </div>

        {/* 4. 4대 분야 선택 탭 바 */}
        <div className="max-w-md mx-auto mt-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          {viewMode === 'timeline' && (
            <button
              onClick={() => setSelectedDomain('all')}
              className={`px-2.5 py-0.5 rounded-full text-xs font-medium shrink-0 transition-colors ${
                selectedDomain === 'all'
                  ? 'bg-slate-200 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-400 border border-slate-800'
              }`}
            >
              전체
            </button>
          )}

          <button
            onClick={() => { setSelectedDomain('physics'); setSelectedSubField('all'); }}
            className={`px-2.5 py-0.5 rounded-full text-xs font-medium shrink-0 flex items-center gap-1 transition-colors ${
              selectedDomain === 'physics'
                ? 'bg-blue-600 text-white font-bold'
                : 'bg-slate-900 text-slate-400 border border-slate-800'
            }`}
          >
            <Atom className="w-3 h-3" /> 물리학
          </button>

          <button
            onClick={() => { setSelectedDomain('chemistry'); setSelectedSubField('all'); }}
            className={`px-2.5 py-0.5 rounded-full text-xs font-medium shrink-0 flex items-center gap-1 transition-colors ${
              selectedDomain === 'chemistry'
                ? 'bg-emerald-600 text-white font-bold'
                : 'bg-slate-900 text-slate-400 border border-slate-800'
            }`}
          >
            <FlaskConical className="w-3 h-3" /> 화학
          </button>

          <button
            onClick={() => { setSelectedDomain('medicine'); setSelectedSubField('all'); }}
            className={`px-2.5 py-0.5 rounded-full text-xs font-medium shrink-0 flex items-center gap-1 transition-colors ${
              selectedDomain === 'medicine'
                ? 'bg-rose-600 text-white font-bold'
                : 'bg-slate-900 text-slate-400 border border-slate-800'
            }`}
          >
            <Dna className="w-3 h-3" /> 생리의학
          </button>

          {includeEconomics && (
            <button
              onClick={() => { setSelectedDomain('economics'); setSelectedSubField('all'); }}
              className={`px-2.5 py-0.5 rounded-full text-xs font-medium shrink-0 flex items-center gap-1 transition-colors ${
                selectedDomain === 'economics'
                  ? 'bg-amber-600 text-white font-bold'
                  : 'bg-slate-900 text-slate-400 border border-slate-800'
              }`}
            >
              <TrendingUp className="w-3 h-3" /> 경제학
            </button>
          )}
        </div>

        {/* 5. [연구분야 유사성 묶음 모드 전용]: 세부 분과학문 필터 칩 레일 */}
        {viewMode === 'domain-group' && availableSubFields.length > 0 && (
          <div className="max-w-md mx-auto mt-2 pt-1.5 border-t border-slate-800/60">
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              <span className="text-[10px] text-slate-500 shrink-0 font-medium mr-0.5">유사성 클러스터:</span>
              <button
                onClick={() => setSelectedSubField('all')}
                className={`text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap transition-colors ${
                  selectedSubField === 'all'
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-400 border border-slate-800'
                }`}
              >
                전체 보기 ({availableSubFields.reduce((a, b) => a + b.count, 0)})
              </button>
              {availableSubFields.map(sub => (
                <button
                  key={sub.id}
                  onClick={() => setSelectedSubField(sub.id)}
                  className={`text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap transition-colors ${
                    selectedSubField === sub.id
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {sub.name} ({sub.count})
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 6. 검색창 */}
        <div className="max-w-md mx-auto mt-2 relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-2 text-slate-500" />
          <input
            type="text"
            placeholder="연도, 수상자, 연구 키워드 (예: 양자역학, DNA, 배터리)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
          />
        </div>
      </header>

      {/* 좌측 인터랙티브 인덱스 스크롤바 (시점 순 모드에서만 동작) */}
      {viewMode === 'timeline' && (
        <IndexScrubber
          anchors={eraAnchors}
          activeYear={activeYear}
          onSelectYear={handleSelectYear}
        />
      )}

      {/* 메인 콘텐츠 영역 */}
      <main className={`max-w-md mx-auto pr-4 pt-3 ${viewMode === 'timeline' ? 'pl-8' : 'pl-4'}`}>
        {/* 모드 1: 수상 시점 순 (Chronological Feed) */}
        {viewMode === 'timeline' && (
          <>
            {currentDisplayedPrizes.length === 0 ? (
              <div className="text-center py-16 text-slate-500 text-xs">
                해당 조건의 수상 내역이 없습니다.
              </div>
            ) : (
              <>
                {currentDisplayedPrizes.map((item) => (
                  <NobelCard
                    key={`${item.domain}-${item.year}-${item.id}`}
                    item={item}
                    onNavigateToFlow={(domain) => setViewMode(`flow-${domain}` as ViewMode)}
                  />
                ))}

                {visibleCount < filteredPrizes.length && (
                  <div className="text-center py-4">
                    <button
                      onClick={() => setVisibleCount(prev => Math.min(prev + 40, filteredPrizes.length))}
                      className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-cyan-400 text-xs font-semibold rounded-xl border border-slate-700 transition-colors"
                    >
                      더 많은 연구 불러오기 ({visibleCount} / {filteredPrizes.length})
                    </button>
                  </div>
                )}
              </>
            )}
          </>
        )}

        {/* 모드 2: 학문/연구분야 유사성 묶음 뷰 (Thematic Semantic Clusters) */}
        {viewMode === 'domain-group' && (
          <div className="space-y-5">
            <div className="bg-slate-900/70 p-3 rounded-2xl border border-cyan-900/50 mb-3 text-xs text-slate-300 leading-relaxed">
              <span className="font-bold text-cyan-400">💡 연구분야 유사성 클러스터 뷰: </span>
              시대와 상관없이 <span className="text-white font-semibold">{selectedDomain === 'physics' ? '물리학' : selectedDomain === 'chemistry' ? '화학' : selectedDomain === 'medicine' ? '생리의학' : '경제학'}</span> 내에서 본질적인 학문적 질문과 연구 대상(원리·기전·도구)의 유사성으로 묶어낸 학술 계보입니다.
            </div>

            {subFieldGroupedPrizes.length === 0 ? (
              <div className="text-center py-16 text-slate-500 text-xs">
                선택한 연구분야에 해당하는 수상 연구가 없습니다.
              </div>
            ) : (
              subFieldGroupedPrizes.map((group) => {
                const isExpanded = expandedClusters[group.subFieldId] !== false; // 기본 펼침

                return (
                  <section
                    key={group.subFieldId}
                    className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-lg transition-all"
                  >
                    {/* 아코디언 헤더 */}
                    <button
                      onClick={() => toggleClusterExpand(group.subFieldId)}
                      className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-850 transition-colors border-b border-slate-800/60"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Layers className="w-4 h-4 text-cyan-400 shrink-0" />
                          <h2 className="text-sm font-bold text-white tracking-tight">
                            {group.subFieldKo}
                          </h2>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">
                            총 {group.items.length}건
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-1">
                          {group.subFieldDesc}
                        </p>
                      </div>

                      <div className="p-1 rounded-lg bg-slate-800 text-slate-400 shrink-0 ml-2">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {/* 클러스터 내부 연구 목록 (시간 순으로 누적된 연구 발전 흐름) */}
                    {isExpanded && (
                      <div className="p-3 space-y-3 bg-slate-950/40">
                        <div className="text-[10px] text-slate-400 px-1 font-mono">
                          ▼ 이 학문 분야 내에서의 연도별 진화 및 축적 ({group.items[0]?.year} ~ {group.items[group.items.length - 1]?.year})
                        </div>
                        {group.items.map((item) => (
                          <NobelCard
                            key={`${group.subFieldId}-${item.id}`}
                            item={item}
                            onNavigateToFlow={(domain) => setViewMode(`flow-${domain}` as ViewMode)}
                          />
                        ))}
                      </div>
                    )}
                  </section>
                );
              })
            )}
          </div>
        )}
      </main>

      {/* 하단 플로팅 인포 */}
      <footer className="fixed bottom-0 left-0 right-0 bg-[#070A12]/95 border-t border-slate-800/80 px-4 py-1.5 text-center z-20">
        <p className="text-[10px] text-slate-400">
          Nobel Prize Official Archive (1901~2024 전수 수록) • Vercel Production
        </p>
      </footer>
    </div>
  );
};

export default App;
