import React from 'react';

interface EraAnchor {
  label: string;
  year: number;
}

interface IndexScrubberProps {
  anchors: EraAnchor[];
  activeYear: number;
  onSelectYear: (year: number) => void;
}

export const IndexScrubber: React.FC<IndexScrubberProps> = ({
  anchors,
  activeYear,
  onSelectYear
}) => {
  return (
    <div className="fixed left-1 top-24 bottom-16 z-30 flex flex-col items-center justify-between py-2 pointer-events-auto">
      {/* 얇은 인덱스 트랙 라인 */}
      <div className="absolute left-[9px] top-2 bottom-2 w-0.5 bg-slate-800 -z-10" />

      {anchors.map((anchor) => {
        const isActive = Math.abs(activeYear - anchor.year) < 15;

        return (
          <button
            key={anchor.year}
            onClick={() => onSelectYear(anchor.year)}
            className="group relative flex items-center justify-center p-1 focus:outline-none"
            title={`${anchor.label} (${anchor.year}년경)`}
          >
            {/* 인덱스 도트 */}
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-3 h-3 bg-cyan-400 ring-4 ring-cyan-500/20 shadow-lg shadow-cyan-500/50'
                  : 'bg-slate-600 hover:bg-slate-400'
              }`}
            />

            {/* 터치/호버 시 노출되는 플로팅 라벨 */}
            <span
              className={`absolute left-5 text-[10px] font-mono px-1.5 py-0.5 rounded transition-all duration-200 whitespace-nowrap pointer-events-none ${
                isActive
                  ? 'opacity-100 bg-cyan-950 text-cyan-300 border border-cyan-800 font-bold'
                  : 'opacity-0 group-hover:opacity-100 bg-slate-900 text-slate-400 border border-slate-800'
              }`}
            >
              {anchor.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
