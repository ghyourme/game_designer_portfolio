import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { Analysis } from "@/types/analysis";

/**
 * AnalysisCard
 *
 * 참고 문서:
 * - docs/INFORMATION_ARCHITECTURE.md - 2.5 Analysis (분석 목록, 카드형 요약)
 * - docs/DESIGN_SYSTEM.md - 6.3 Analysis Detail Components, 6. Component Library
 *   (Card, Tag, Badge, Button)
 *
 * 책임:
 * - 단일 분석을 목록/그리드에서 훑어보기 쉬운 요약 카드로 보여준다. (Progressive Disclosure)
 * - "분석 보기" 클릭 시 Analysis Detail(/analysis/[slug])로 이동한다.
 *
 * ProjectCard와 동일한 패턴의 Analysis 전용 인스턴스다 — components/ui의
 * Card/Tag/Badge/Button만 조합하며, 새 UI 원자 컴포넌트는 만들지 않는다.
 * "분석 보기" 반복 텍스트에 aria-label로 분석 제목을 포함한다(ProjectCard와 동일한
 * 이유, feature/platform-accessibility).
 */
export interface AnalysisCardProps {
  analysis: Analysis;
}

export function AnalysisCard({ analysis }: AnalysisCardProps) {
  return (
    <Card>
      {analysis.featured && <Badge variant="featured">Featured</Badge>}
      <h3 className="mt-2 text-lg font-semibold text-text-primary">{analysis.title}</h3>
      <p className="mt-1 text-sm text-text-secondary">{analysis.description}</p>
      {analysis.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {analysis.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}
      <div className="mt-4">
        <Button
          href={`/analysis/${analysis.slug}`}
          variant="tertiary"
          aria-label={`${analysis.title} 분석 보기`}
        >
          분석 보기
        </Button>
      </div>
    </Card>
  );
}
