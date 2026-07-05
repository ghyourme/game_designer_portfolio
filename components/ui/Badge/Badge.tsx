import type { ReactNode } from "react";

/**
 * Badge
 *
 * 참고 문서: docs/DESIGN_SYSTEM.md - 6. Component Library (Badge)
 *
 * 책임:
 * - "Featured", "Case Study"와 같은 짧은 상태나 구분을 강조해 보여준다.
 * - 주요 콘텐츠와 경쟁하지 않는 수준의 짧은 시선 끌기 역할만 한다. (구현 예정)
 *
 * 아직 스타일과 비즈니스 로직은 포함하지 않는다.
 */
export interface BadgeProps {
  children?: ReactNode;
  // TODO: variant (featured | case-study 등) props 정의
}

export function Badge({ children }: BadgeProps) {
  return <span>{children}</span>;
}
