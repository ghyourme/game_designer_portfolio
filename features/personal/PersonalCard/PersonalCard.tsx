import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import type { PersonalWork } from "@/types/personal";

/**
 * PersonalCard
 *
 * 참고 문서:
 * - docs/INFORMATION_ARCHITECTURE.md - 2.7 Personal Works (개인 작업물 목록, 카드형 요약)
 * - docs/DATA_MODEL.md - 13. 개인 작업물 데이터 모델
 *
 * 책임:
 * - 단일 개인 작업물을 목록/그리드에서 훑어보기 쉬운 요약 카드로 보여준다.
 * - `link`이 있을 때만 외부 링크 Button을 노출한다 — 상세 라우트가 없어(§2.7 범위 참고)
 *   이 링크가 유일한 진입점이다.
 *
 * ProjectCard/AnalysisCard와 동일한 패턴의 Personal Works 전용 인스턴스다 —
 * components/ui의 Card/Tag/Button만 조합하며, 새 UI 원자 컴포넌트는 만들지 않는다.
 */
export interface PersonalCardProps {
  work: PersonalWork;
}

export function PersonalCard({ work }: PersonalCardProps) {
  return (
    <Card>
      <h3>{work.title}</h3>
      <p>{work.description}</p>
      {work.tags.length > 0 && (
        <div>
          {work.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}
      {work.link !== "" && (
        <Button
          href={work.link}
          target="_blank"
          rel="noopener noreferrer"
          variant="tertiary"
          aria-label={`${work.title} 자세히 보기 (새 창)`}
        >
          자세히 보기
        </Button>
      )}
    </Card>
  );
}
