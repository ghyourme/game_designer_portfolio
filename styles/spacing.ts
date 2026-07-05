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
 *
 * 이 스케일은 Tailwind의 기본 spacing 스케일(0.25rem 기준 배수)과 값이 정확히
 * 동일하다. 따라서 컴포넌트에서는 별도 CSS 변수 없이 Tailwind 기본 숫자 유틸리티를
 * 그대로 쓰면 이 토큰과 자동으로 일치한다:
 *   none -> 0      | xs  -> 1  (p-1)  | sm  -> 2  (p-2)  | md  -> 4  (p-4)
 *   lg   -> 6 (p-6) | xl  -> 8  (p-8) | 2xl -> 12 (p-12) | 3xl -> 16 (p-16)
 *   4xl  -> 24 (p-24)
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
