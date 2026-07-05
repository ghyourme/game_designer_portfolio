import type { ReactNode } from "react";

/**
 * Button
 *
 * 참고 문서: docs/DESIGN_SYSTEM.md - 6. Component Library (Button)
 *
 * 책임:
 * - 주요 액션 또는 내비게이션을 트리거하는 버튼 UI를 제공한다. (예: "View Project", "Download Resume")
 * - primary/secondary/tertiary 강조 수준을 구분해 방문자가 항상 가장 중요한 액션을 알 수 있게 한다. (구현 예정)
 *
 * 아직 스타일과 비즈니스 로직은 포함하지 않는다.
 */
export interface ButtonProps {
  children?: ReactNode;
  // TODO: variant (primary | secondary | tertiary) 정의
  // TODO: onClick, type, disabled 등 인터랙션 관련 props 정의
}

export function Button({ children }: ButtonProps) {
  return <button>{children}</button>;
}
