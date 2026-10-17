import React from 'react';
import type { FlowNode } from '../types/nobel';
import { ArrowDown, Link2, Sparkles, BookOpen } from 'lucide-react';

interface FlowDiagramProps {
  nodes: FlowNode[];
  domainTitle: string;
  domainDescription: string;
  onSelectPrize?: (prizeId: string) => void;
  onBackToTimeline: () => void;
}

export const FlowDiagram: React.FC<FlowDiagramProps> = ({
  nodes,
  domainTitle,
  domainDescription,
  onSelectPrize,
  onBackToTimeline,
}) => {
  return (
    <div className="w-full max-w-lg mx-auto px-4 py-6">
      {/* 뒤로가기 및 헤더 */}
      <div className="mb-6">
        <button
          onClick={onBackToTimeline}
          className="inline-flex items-center text-xs text-cyan-400 hover:text-cyan-300 font-medium mb-3"
        >
          ← 타임라인 피드로 돌아가기
        </button>
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <h2 className="text-xl font-black text-white">{domainTitle}</h2>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/80 p-3 rounded-xl border border-slate-800">
          {domainDescription}
        </p>
      </div>

      {/* 상하 연결형 엔지니어링 박스 다이어그램 */}
      <div className="flex flex-col items-center">
        {nodes.map((node, index) => {
          const isLast = index === nodes.length - 1;

          return (
            <React.Fragment key={node.id}>
              {/* 공학적 흐름 노드 박스 */}
              <div className="w-full bg-slate-900 border border-cyan-900/60 rounded-2xl p-4 shadow-xl relative transition-transform active:scale-[0.99]">
                {/* 상단 시대 태그 */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800">
                    {node.era}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">NODE #{index + 1}</span>
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
                  <div className="flex flex-wrap gap-1.5 pt-1 border-t border-slate-800/60">
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
