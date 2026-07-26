/**
 * Border Radius Tokens
 *
 * 참고 문서: docs/DESIGN_SYSTEM.md - 4. Design Tokens (Border Radius)
 *
 * 책임:
 * - 카드, 버튼, 인풋 등 유사한 요소 타입에 공통으로 적용되는
 *   모서리 둥글기(corner-rounding) 값의 작은 세트를 정의한다.
 * - 인터페이스 전반에서 일관된 "형태 언어(shape language)"를 유지한다.
 */

export const radius = {
  none: "0",
  sm: "0.25rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  full: "9999px",
} as const;

export type Radius = typeof radius;
