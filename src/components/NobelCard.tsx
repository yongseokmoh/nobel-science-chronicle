import React, { useState } from 'react';
import type { NobelPrizeItem } from '../types/nobel';
import { ChevronDown, ChevronUp, User, Lightbulb, FileText, ArrowRight } from 'lucide-react';

interface NobelCardProps {
  item: NobelPrizeItem;
  onNavigateToFlow?: (domain: string) => void;
}

export const NobelCard: React.FC<NobelCardProps> = ({ item, onNavigateToFlow }) => {
  // 3단계 점진적 공개 상태 (기본 1단계 초록 표시, 2단계 영향 확장, 3단계 인물 확장)
  const [showImpact, setShowImpact] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const getDomainColor = (domain: string) => {
    switch (domain) {
      case 'physics':
        return { badge: 'bg-blue-950/80 text-blue-400 border-blue-800', bar: 'bg-blue-500' };
      case 'chemistry':
        return { badge: 'bg-emerald-950/80 text-emerald-400 border-emerald-800', bar: 'bg-emerald-500' };
      case 'medicine':
        return { badge: 'bg-rose-950/80 text-rose-400 border-rose-800', bar: 'bg-rose-500' };
      case 'economics':
        return { badge: 'bg-amber-950/80 text-amber-400 border-amber-800', bar: 'bg-amber-500' };
      default:
        return { badge: 'bg-purple-950/80 text-purple-400 border-purple-800', bar: 'bg-purple-500' };
    }
  };

  const colors = getDomainColor(item.domain);

  return (
    <div id={`prize-${item.id}`} className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 mb-5 shadow-lg relative overflow-hidden transition-all duration-300 hover:border-slate-700">
      {/* 상단 도메인 식별 라인 */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${colors.bar}`} />

      {/* 헤더: 연도, 분야 태그, 흐름도 이동 링크 */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight text-white">{item.year}</span>
          <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium border ${colors.badge}`}>
            {item.domainKo}
          </span>
        </div>
        {onNavigateToFlow && (
          <button
            onClick={() => onNavigateToFlow(item.domain)}
            className="flex items-center text-xs text-slate-400 hover:text-cyan-400 transition-colors"
          >
            흐름도 보기 <ArrowRight className="w-3 h-3 ml-1" />
          </button>
        )}
      </div>

      {/* 연구 클러스터 및 연구명 */}
      <div className="mb-3">
        <p className="text-xs text-cyan-400 font-semibold mb-1">[{item.categoryCluster}]</p>
        <h3 className="text-base font-bold text-slate-100 leading-snug">{item.titleKo}</h3>
        <p className="text-xs text-slate-400 italic mt-0.5">{item.titleEn}</p>
      </div>

      {/* 수상자 요약 */}
      <div className="flex items-center gap-2 py-2 px-3 bg-slate-950/60 rounded-lg mb-4 text-xs text-slate-300">
        <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span className="font-medium text-slate-200">
          {item.laureates.map(l => `${l.nameKo} (${l.country})`).join(', ')}
        </span>
      </div>

      {/* 1단계: 수상 연구 요약 (초록) */}
      <div className="mb-4">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 mb-1.5">
          <FileText className="w-3.5 h-3.5 text-blue-400" />
          <span>수상 연구 요약 (Abstract)</span>
        </div>
        <p className="text-xs leading-relaxed text-slate-300 text-justify bg-slate-950/40 p-3 rounded-xl border border-slate-800/80">
          {item.abstract}
        </p>
      </div>

      {/* 2단계: 시사점과 영향 (Impact & Implications) 클릭 토글 */}
      <div className="border-t border-slate-800/80 pt-3">
        <button
          onClick={() => setShowImpact(!showImpact)}
          className="w-full flex items-center justify-between py-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
        >
          <div className="flex items-center gap-1.5">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>시사점과 문명에 미친 영향 (Impact)</span>
          </div>
          {showImpact ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {showImpact && (
          <div className="mt-2 text-xs leading-relaxed text-slate-300 text-justify bg-amber-950/15 p-3 rounded-xl border border-amber-900/40 animate-fadeIn">
            {item.impact}
          </div>
        )}
      </div>

      {/* 3단계: 수상자/연구팀 프로파일 (Profile) 클릭 토글 */}
      <div className="border-t border-slate-800/80 pt-3 mt-3">
        <button
          onClick={() => setShowProfile(!showProfile)}
          className="w-full flex items-center justify-between py-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          <div className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5" />
            <span>수상자 프로파일 & 주요 연구분야 (Profile)</span>
          </div>
          {showProfile ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {showProfile && (
          <div className="mt-2 text-xs leading-relaxed text-slate-300 text-justify bg-indigo-950/15 p-3 rounded-xl border border-indigo-900/40 animate-fadeIn">
            <p className="mb-2">{item.laureateProfile}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {item.keywords.map((kw, i) => (
                <span key={i} className="text-[10px] px-2 py-0.5 bg-slate-800 text-slate-300 rounded-md">
                  #{kw}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
