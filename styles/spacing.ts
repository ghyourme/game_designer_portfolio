/**
 * Spacing Tokens
 *
 * 참고 문서: docs/DESIGN_SYSTEM.md - 4. Design Tokens (Spacing)
 *
 * 책임:
 * - padding, margin, gap에 사용되는 일관된 간격 스케일을 정의한다.
 * - 컴포넌트 간 리듬과 밀도가 임의로 흔들리지 않도록 기준을 제공한다.
 *
 * 이 파일은 실제 간격 값(px/rem 등)을 아직 포함하지 않는다. 값은 이후 별도 작업에서 정의한다.
 */

export const spacing = {
  // TODO: 간격 스케일 정의 (예: xs, sm, md, lg, xl, 2xl 단계)
} as const;

export type Spacing = typeof spacing;
