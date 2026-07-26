import { Card } from "@/components/ui/Card";

/**
 * AnalysisConclusion
 *
 * 참고 문서:
 * - docs/DATA_MODEL.md §6.2 (conclusion), docs/CONTENT_GUIDE.md §5 ("결론")
 * - docs/DESIGN_SYSTEM.md §6.3 Analysis Detail Components, §11 Component Contract Rule
 *
 * 책임:
 * - conclusion 문자열만 렌더링한다. 다른 어떤 필드도 알지 못한다.
 * - 빠르게 훑어보는 방문자가 반드시 읽게 되는 구간이라(docs/INFORMATION_ARCHITECTURE.md
 *   §2.6 User Flow), 위 세 AnalysisDimensionSection과 시각적으로 구분되도록 기존 Card로
 *   감싼다 — 새 UI 원자 컴포넌트는 만들지 않는다.
 * - Fixed-shape 단일 필드 — 값이 빈 문자열이어도 항상 렌더링한다.
 */
export interface AnalysisConclusionProps {
  conclusion: string;
}

export function AnalysisConclusion({ conclusion }: AnalysisConclusionProps) {
  return (
    <Card>
      <p className="text-base text-text-primary leading-relaxed">{conclusion}</p>
    </Card>
  );
}
