/**
 * Spacing Tokens
 *
 * 참고 문서: docs/DESIGN_SYSTEM.md - 4. Design Tokens (Spacing)
 *
 * 책임:
 * - padding, margin, gap에 사용되는 일관된 간격 스케일을 정의한다.
 * - 컴포넌트 간 리듬과 밀도가 임의로 흔들리지 않도록 기준을 제공한다.
 *
 * 4px 기준 배수로 구성해 컴포넌트 간 간격이 항상 같은 격자 위에 놓이게 한다.
 */

export const spacing = {
  none: "0",
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "4rem",
  "4xl": "6rem",
} as const;

export type Spacing = typeof spacing;
