import type { ReactNode } from "react";

/**
 * Container
 *
 * 참고 문서: docs/DESIGN_SYSTEM.md - 5. Layout System (Maximum Content Width)
 *
 * 책임:
 * - 페이지 콘텐츠를 최대 읽기 너비로 제한하고 가운데 정렬해,
 *   큰 화면에서도 콘텐츠가 의도된 폭 안에서만 표시되게 한다. (구현 예정)
 *
 * 아직 스타일과 비즈니스 로직은 포함하지 않는다.
 */
export interface ContainerProps {
  children?: ReactNode;
  // TODO: maxWidth, padding 등 레이아웃 관련 props 정의
}

export function Container({ children }: ContainerProps) {
  return <div>{children}</div>;
}
