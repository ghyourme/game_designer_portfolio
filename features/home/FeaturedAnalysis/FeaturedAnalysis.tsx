import { getAnalysis } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { AnalysisGrid } from "@/features/analysis/AnalysisGrid";

/**
 * FeaturedAnalysis
 *
 * 참고 문서:
 * - docs/INFORMATION_ARCHITECTURE.md - 2.1 Home (구성 섹션 4. Featured Analysis)
 * - docs/DESIGN_SYSTEM.md - 8. Shared Components (AnalysisGrid)
 *
 * 책임:
 * - getAnalysis()로 analysis.json을 읽고 featured가 true인 분석만 선별해 보여준다.
 * - 대표 분석이 없으면(현재 data/analysis.json이 비어 있어 항상 이 경로) AnalysisGrid가
 *   자체적으로 Empty 상태를 보여준다.
 *
 * FeaturedProjects와 동일한 패턴이다 — AnalysisGrid를 그대로 재사용해 Projects/Analysis
 * 양쪽에서 "대표 콘텐츠 선별" 표현 방식을 동일하게 유지한다(UI Consistency Rule).
 */
export function FeaturedAnalysis() {
  const featuredAnalyses = getAnalysis().filter((analysis) => analysis.featured);

  return (
    <Section tone="muted">
      <Container>
        <h2 className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
          Featured Analysis
        </h2>
        <div className="mt-6">
          <AnalysisGrid
            analyses={featuredAnalyses}
            emptyMessage="아직 대표 분석이 없습니다."
          />
        </div>
      </Container>
    </Section>
  );
}
