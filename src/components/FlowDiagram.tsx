import React, { useState } from 'react';
import type { FlowNode, FlowLevel } from '../types/nobel';
import { ArrowDown, Link2, Sparkles, BookOpen, Layers, GitMerge } from 'lucide-react';

interface FlowDiagramProps {
  nodes: FlowNode[];
  domainTitle: string;
  domainDescription: string;
  onSelectPrize?: (prizeId: string) => void;
  onBackToTimeline: () => void;
  isAllDomain?: boolean; // 종합 흐름도 여부
}

export const FlowDiagram: React.FC<FlowDiagramProps> = ({
  nodes,
  domainTitle,
  domainDescription,
  onSelectPrize,
  onBackToTimeline,
  isAllDomain = false,
}) => {
  // 종합 흐름도일 때 Level 1(Macro 거시 패러다임) vs Level 2(Deep 세부 클러스터) 분할 토글
  const [activeLevel, setActiveLevel] = useState<FlowLevel>('macro');

  // 현재 레벨에 맞는 노드 필터링
  const displayedNodes = isAllDomain
    ? nodes.filter((n) => n.level === activeLevel)
    : nodes;

  return (
    <div className="w-full max-w-lg mx-auto px-4 py-5">
      {/* 뒤로가기 및 헤더 */}
      <div className="mb-4">
        <button
          onClick={onBackToTimeline}
          className="inline-flex items-center text-xs text-cyan-400 hover:text-cyan-300 font-medium mb-2.5"
        >
          ← 타임라인 피드로 돌아가기
        </button>
        <div className="flex items-center gap-2 mb-1.5">
          <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
          <h2 className="text-lg font-black text-white">{domainTitle}</h2>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/80 p-3 rounded-xl border border-slate-800 mb-3">
          {domainDescription}
        </p>

        {/* 종합 흐름도 전용: 2-Level Depth 토글 스위치 */}
        {isAllDomain && (
          <div className="bg-slate-900/95 p-1 rounded-xl border border-cyan-800/80 flex items-center justify-between gap-1 shadow-md">
            <button
              onClick={() => setActiveLevel('macro')}
              className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                activeLevel === 'macro'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>레벨 1: 거시 대주기 (4대 패러다임)</span>
            </button>
            <button
              onClick={() => setActiveLevel('deep')}
              className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                activeLevel === 'deep'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <GitMerge className="w-3.5 h-3.5" />
              <span>레벨 2: 심층 클러스터 (12개 분기)</span>
            </button>
          </div>
        )}
      </div>

      {/* 상태 안내 뱃지 */}
      {isAllDomain && (
        <div className="flex items-center justify-between mb-3 text-[11px] text-slate-400 px-1">
          <span>
            {activeLevel === 'macro'
              ? '인류 과학기술 문명의 거대한 4단계 패러다임 시프트'
              : '시대별 12개 세부 융합 연구 클러스터 및 연쇄 작용'}
          </span>
          <span className="font-mono text-cyan-400 font-bold">{displayedNodes.length} NODES</span>
        </div>
      )}

      {/* 상하 연결형 엔지니어링 박스 다이어그램 */}
      <div className="flex flex-col items-center">
        {displayedNodes.map((node, index) => {
          const isLast = index === displayedNodes.length - 1;

          return (
            <React.Fragment key={node.id}>
              {/* 공학적 흐름 노드 박스 */}
              <div className="w-full bg-slate-900 border border-cyan-900/60 rounded-2xl p-4 shadow-xl relative transition-transform active:scale-[0.99]">
                {/* 상단 시대 태그 */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800">
                    {node.era}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    STAGE {index + 1} / {displayedNodes.length}
                  </span>
                </div>

                {/* 노드 타이틀 & 핵심 패러다임 설명 */}
                <h3 className="text-sm font-bold text-slate-100 mb-1.5 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  {node.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {node.description}
                </p>

                {/* 핵심 마일스톤 묶음 리스트 (연구 축약 없이 어떤 단위로 묶였는지 명시) */}
                <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800/80 mb-3">
                  <p className="text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider">
                    주요 연구 클러스터 & 마일스톤
                  </p>
                  <ul className="space-y-1">
                    {node.keyMilestones.map((ms, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-1.5">
                        <span className="text-cyan-500 font-bold mt-0.5">•</span>
                        <span>{ms}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 해당 노드와 직결된 수상 연구 상세 링크 (하이퍼텍스트 연계) */}
                {node.prizeIds.length > 0 && onSelectPrize && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-1.5 border-t border-slate-800/60">
                    <span className="text-[10px] text-slate-500 flex items-center gap-1">
                      <Link2 className="w-3 h-3" /> 연계 연구 바로가기:
                    </span>
                    {node.prizeIds.map((pId) => (
                      <button
                        key={pId}
                        onClick={() => onSelectPrize(pId)}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-800 hover:bg-cyan-900 hover:text-cyan-200 text-slate-300 border border-slate-700 transition-colors"
                      >
                        {pId}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* 아래로 흐르는 엔지니어링 커넥터 화살표 */}
              {!isLast && (
                <div className="flex flex-col items-center my-2 text-cyan-500/70">
                  <div className="w-0.5 h-4 bg-gradient-to-b from-cyan-500 to-cyan-400/50" />
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
