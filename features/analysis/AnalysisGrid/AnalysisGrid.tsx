import { AnalysisCard } from "@/features/analysis/AnalysisCard";
import type { Analysis } from "@/types/analysis";

/**
 * AnalysisGrid
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.5 Analysis (분석 목록, 결과 없음 상태)
 *
 * 책임:
 * - 분석 배열을 AnalysisCard 그리드로 렌더링한다.
 * - 배열이 비어 있으면(현재 data/analysis.json이 비어 있으므로 항상 이 경로) Empty 상태를
 *   보여준다.
 *
 * Analysis 목록 페이지와 Home의 FeaturedAnalysis 양쪽에서 재사용되므로, ProjectGrid와
 * 동일하게 자체적으로 Section/Container를 감싸지 않고 그리드 자체만 책임진다(중첩 방지).
 */
export interface AnalysisGridProps {
  analyses: Analysis[];
  emptyMessage?: string;
}

export function AnalysisGrid({
  analyses,
  emptyMessage = "표시할 분석이 없습니다.",
}: AnalysisGridProps) {
  if (analyses.length === 0) {
    return <p className="text-base text-text-secondary">{emptyMessage}</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {analyses.map((analysis) => (
        <AnalysisCard key={analysis.id} analysis={analysis} />
      ))}
    </div>
  );
}
