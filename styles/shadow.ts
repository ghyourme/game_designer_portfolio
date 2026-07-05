/**
 * Shadow Tokens
 *
 * 참고 문서: docs/DESIGN_SYSTEM.md - 4. Design Tokens (Shadows)
 *
 * 책임:
 * - 요소의 stacking(쌓임) 또는 상호작용 가능성(예: 떠 있는 카드, 콘텐츠 위의 모달)을
 *   나타내는 제한된 elevation 단계를 정의한다.
 * - elevation이 의미 있게 유지되도록 절제된 범위로만 제공한다.
 *
 * 이 파일은 실제 box-shadow 값을 아직 포함하지 않는다. 값은 이후 별도 작업에서 정의한다.
 */

export const shadow = {
  // TODO: elevation 스케일 정의 (예: none, sm, md, lg 단계)
} as const;

export type Shadow = typeof shadow;
