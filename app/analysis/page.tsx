import { getAnalysis } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { AnalysisGrid } from "@/features/analysis/AnalysisGrid";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Analysis",
  description: "진행한 게임 분석을 모아볼 수 있는 페이지입니다.",
  path: "/analysis",
});

/**
 * Analysis
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.5 Analysis
 *
 * getAnalysis()로 analysis.json 전체 목록을 가져와 AnalysisGrid로 렌더링한다.
 * data/analysis.json이 비어 있는 동안은 AnalysisGrid가 자체적으로 Empty 상태를 보여준다.
 * 가짜 분석 데이터는 만들지 않는다. app/projects/page.tsx와 동일한 패턴이다.
 */
export default function AnalysisPage() {
  const analyses = getAnalysis();

  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Analysis
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-text-secondary">
          진행한 게임 분석을 모아볼 수 있는 페이지입니다.
        </p>
        {/* TODO: 태그 기준 필터/검색 구현 예정 */}
        <div className="mt-8">
          <AnalysisGrid analyses={analyses} />
        </div>
      </Container>
    </Section>
  );
}
