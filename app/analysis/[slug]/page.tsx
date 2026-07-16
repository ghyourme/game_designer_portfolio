import { getAnalysis } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { AnalysisHero } from "@/features/analysis/AnalysisHero";
import { DetailSection } from "@/components/common/DetailSection";

interface AnalysisDetailPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Analysis Detail
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.6 Analysis Detail
 *
 * getAnalysis()에서 slug로 단일 분석을 조회한다. data/analysis.json이 비어 있는 동안은
 * 항상 찾지 못하는 경로를 타지만, 데이터가 채워지면 즉시 아래 구조로 렌더링된다.
 *
 * Project Detail(app/projects/[slug]/page.tsx)과 동일한 Foundation 패턴이다:
 * 헤더(AnalysisHero)는 실제 필드를 렌더링하고, 본문 4개 섹션은 DetailSection으로
 * 제목만 표시한다. 각 섹션의 실제 콘텐츠 렌더링(AnalysisDimensionSection,
 * AnalysisConclusion)은 다음 브랜치의 범위다 (docs/DESIGN_SYSTEM.md §6.2 참고).
 *
 * 4개 섹션과 Analysis 필드 대응(docs/DATA_MODEL.md §6.2와 동일):
 * 시스템 분석→systemAnalysis, 콘텐츠 분석→contentAnalysis, UX 분석→uxAnalysis, 결론→conclusion.
 */
const DETAIL_SECTION_TITLES = [
  "시스템 분석",
  "콘텐츠 분석",
  "UX 분석",
  "결론",
] as const;

export default async function AnalysisDetailPage({
  params,
}: AnalysisDetailPageProps) {
  const { slug } = await params;
  const analysis = getAnalysis().find((item) => item.slug === slug);

  if (!analysis) {
    return (
      <Section>
        <Container>
          <h1>Analysis Not Found</h1>
          <p>요청한 분석(slug: {slug})을 찾을 수 없습니다.</p>
        </Container>
      </Section>
    );
  }

  return (
    <>
      <AnalysisHero analysis={analysis} />
      {DETAIL_SECTION_TITLES.map((title) => (
        <DetailSection key={title} title={title} />
      ))}
    </>
  );
}
