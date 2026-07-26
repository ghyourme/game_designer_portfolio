import { PersonalCard } from "@/features/personal/PersonalCard";
import type { PersonalWork } from "@/types/personal";

/**
 * PersonalGrid
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.7 Personal Works (개인 작업물 목록, 결과 없음 상태)
 *
 * 책임:
 * - 개인 작업물 배열을 PersonalCard 그리드로 렌더링한다.
 * - 배열이 비어 있으면(현재 data/personal.json이 비어 있으므로 항상 이 경로) Empty 상태를
 *   보여준다.
 *
 * ProjectGrid/AnalysisGrid와 동일하게 자체적으로 Section/Container를 감싸지 않고
 * 그리드 자체만 책임진다(중첩 방지).
 */
export interface PersonalGridProps {
  works: PersonalWork[];
  emptyMessage?: string;
}

export function PersonalGrid({
  works,
  emptyMessage = "표시할 개인 작업물이 없습니다.",
}: PersonalGridProps) {
  if (works.length === 0) {
    return <p className="text-base text-text-secondary">{emptyMessage}</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
      {works.map((work) => (
        <PersonalCard key={work.id} work={work} />
      ))}
    </div>
  );
}
