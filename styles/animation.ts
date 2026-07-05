/**
 * Animation (Motion) Tokens
 *
 * 참고 문서: docs/DESIGN_SYSTEM.md - 4. Design Tokens (Motion)
 *
 * 책임:
 * - hover, focus, active, modal 등장 등 상태 전환에 사용되는
 *   절제된 애니메이션/트랜지션 동작 세트를 정의한다.
 * - 모션은 피드백과 연속성을 강화하기 위한 용도로만 사용되며, 장식 목적이 아니다.
 */

export const animation = {
  duration: {
    fast: "150ms",
    normal: "250ms",
    slow: "400ms",
  },
  easing: {
    standard: "cubic-bezier(0.4, 0, 0.2, 1)",
    decelerate: "cubic-bezier(0, 0, 0.2, 1)",
    accelerate: "cubic-bezier(0.4, 0, 1, 1)",
  },
} as const;

export type Animation = typeof animation;
