import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAnalysis, findBySlug } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnalysisHero } from "@/features/analysis/AnalysisHero";
import { DetailSection } from "@/components/common/DetailSection";
import { AnalysisDimensionSection } from "@/features/analysis/AnalysisDimensionSection";
import { AnalysisConclusion } from "@/features/analysis/AnalysisConclusion";

interface AnalysisDetailPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * generateMetadata
 *
 * page 본문과 동일한 findBySlug 조회·notFound() 위임 패턴이다(app/projects/[slug]/page.tsx
 * 참고). Analysis에는 이미지 필드가 없어(docs/DATA_MODEL.md §6.1) image는 넘기지 않는다 —
 * 없는 이미지를 억지로 만들지 않는다.
 */
export async function generateMetadata({
  params,
}: AnalysisDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const analysis = findBySlug(getAnalysis(), slug);

  if (!analysis) {
    notFound();
  }

  return buildMetadata({
    title: analysis.title,
    description: analysis.description,
    path: `/analysis/${analysis.slug}`,
    type: "article",
  });
}

/**
 * Analysis Detail
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.6 Analysis Detail
 *
 * getAnalysis()에서 slug로 단일 분석을 조회한다(findBySlug 공용 헬퍼). data/analysis.json이
 * 비어 있는 동안은 항상 notFound()로 빠지지만, 데이터가 채워지면 즉시 아래 구조로
 * 렌더링된다. 존재하지 않는 slug는 app/analysis/[slug]/not-found.tsx가 처리한다.
 *
 * Project Detail(app/projects/[slug]/page.tsx)과 동일한 패턴이다: 헤더(AnalysisHero)와
 * 본문 4개 섹션 모두 실제 필드를 렌더링하고, 마지막에 목록 복귀 링크로 끝난다.
 *
 * 4개 섹션과 Analysis 필드 대응(docs/DATA_MODEL.md §6.2와 동일): 시스템 분석→
 * AnalysisDimensionSection(systemAnalysis, keyElementLabel="핵심 시스템"), 콘텐츠 분석→
 * AnalysisDimensionSection(contentAnalysis, keyElementLabel="핵심 콘텐츠"), UX 분석→
 * AnalysisDimensionSection(uxAnalysis, keyElementLabel="핵심 경험"), 결론→
 * AnalysisConclusion(conclusion).
 */
export default async function AnalysisDetailPage({
  params,
}: AnalysisDetailPageProps) {
  const { slug } = await params;
  const analysis = findBySlug(getAnalysis(), slug);

  if (!analysis) {
    notFound();
  }

  return (
    <>
      <AnalysisHero analysis={analysis} />
      <DetailSection title="시스템 분석" tone="muted">
        <AnalysisDimensionSection
          dimension={analysis.systemAnalysis}
          keyElementLabel="핵심 시스템"
        />
      </DetailSection>
      <DetailSection title="콘텐츠 분석" tone="base">
        <AnalysisDimensionSection
          dimension={analysis.contentAnalysis}
          keyElementLabel="핵심 콘텐츠"
        />
      </DetailSection>
      <DetailSection title="UX 분석" tone="muted">
        <AnalysisDimensionSection
          dimension={analysis.uxAnalysis}
          keyElementLabel="핵심 경험"
        />
      </DetailSection>
      <DetailSection title="결론" tone="base">
        <AnalysisConclusion conclusion={analysis.conclusion} />
      </DetailSection>
      <Section>
        <Container>
          <Button href="/analysis" variant="secondary">
            Analysis 목록으로
          </Button>
        </Container>
      </Section>
    </>
  );
}
