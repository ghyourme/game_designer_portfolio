/**
 * Animation (Motion) Tokens
 *
 * 참고 문서: docs/DESIGN_SYSTEM.md - 4. Design Tokens (Motion)
 *
 * 책임:
 * - hover, focus, active, modal 등장 등 상태 전환에 사용되는
 *   절제된 애니메이션/트랜지션 동작 세트를 정의한다.
 * - 모션은 피드백과 연속성을 강화하기 위한 용도로만 사용되며, 장식 목적이 아니다.
 *
 * 이 파일은 실제 duration/easing 값을 아직 포함하지 않는다. 값은 이후 별도 작업에서 정의한다.
 */

export const animation = {
  // TODO: duration 스케일 정의 (예: fast, normal, slow)
  // TODO: easing 함수 정의 (예: standard, decelerate, accelerate)
} as const;

export type Animation = typeof animation;
