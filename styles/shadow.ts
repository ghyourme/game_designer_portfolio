/**
 * Shadow Tokens
 *
 * 참고 문서: docs/DESIGN_SYSTEM.md - 4. Design Tokens (Shadows)
 *
 * 책임:
 * - 요소의 stacking(쌓임) 또는 상호작용 가능성(예: 떠 있는 카드, 콘텐츠 위의 모달)을
 *   나타내는 제한된 elevation 단계를 정의한다.
 * - elevation이 의미 있게 유지되도록 절제된 범위(4단계)로만 제공한다.
 */

export const shadow = {
  none: "none",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
} as const;

export type Shadow = typeof shadow;
