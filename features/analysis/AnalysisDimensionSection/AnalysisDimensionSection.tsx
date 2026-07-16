import { MetaInfo } from "@/components/common/MetaInfo";
import type { AnalysisDimension } from "@/types/analysis";

/**
 * AnalysisDimensionSection
 *
 * 참고 문서:
 * - docs/DATA_MODEL.md §6.2 (AnalysisDimension), docs/CONTENT_GUIDE.md §5
 * - docs/DESIGN_SYSTEM.md §6.3 Analysis Detail Components, §11 Component Contract Rule
 *
 * 책임:
 * - 시스템/콘텐츠/UX 분석 세 관점이 공유하는 하나의 AnalysisDimension만 렌더링한다.
 *   레이아웃(제목/간격)은 소유자인 DetailSection의 몫이라 여기서 구현하지 않는다.
 * - keyElementLabel → keyElement → strengths → weaknesses → improvements 순서를
 *   항상 유지한다 (docs/CONTENT_GUIDE.md §5 "순서를 임의로 바꾸지 않는다").
 * - keyElement의 표시 라벨만 관점마다 달라 keyElementLabel로 호출부(페이지)에서
 *   주입받는다 ("핵심 시스템"/"핵심 콘텐츠"/"핵심 경험"). strengths/weaknesses/
 *   improvements는 세 관점에서 동일한 라벨("장점"/"문제점"/"개선안")이라 고정값이다.
 * - Fixed-shape Contract — 4개 필드는 값이 빈 문자열이어도 항상 렌더링한다.
 *   4개 모두 label/value 쌍이라 MetaInfo를 그대로 재사용한다(새 컴포넌트를 만들지 않음).
 */
export interface AnalysisDimensionSectionProps {
  dimension: AnalysisDimension;
  keyElementLabel: string;
}

export function AnalysisDimensionSection({
  dimension,
  keyElementLabel,
}: AnalysisDimensionSectionProps) {
  return (
    <dl>
      <MetaInfo label={keyElementLabel} value={dimension.keyElement} />
      <MetaInfo label="장점" value={dimension.strengths} />
      <MetaInfo label="문제점" value={dimension.weaknesses} />
      <MetaInfo label="개선안" value={dimension.improvements} />
    </dl>
  );
}
