import type { ReactNode } from "react";

/**
 * Container
 *
 * 참고 문서: docs/DESIGN_SYSTEM.md - 5. Layout System (Maximum Content Width)
 *
 * 책임:
 * - 페이지 콘텐츠를 최대 읽기 너비로 제한하고 가운데 정렬해,
 *   큰 화면에서도 콘텐츠가 의도된 폭 안에서만 표시되게 한다.
 *
 * 최대 너비(max-w-6xl)는 DESIGN_SYSTEM.md가 정의한 "적절한 읽기 너비" 원칙을
 * 만족하는 합리적 기본값이다. 별도 breakpoints 토큰 파일이 아직 없어 Tailwind
 * 기본 max-width 스케일을 그대로 사용했다 — 값이 자주 바뀌어야 한다면
 * styles/에 별도 layout 토큰으로 승격을 검토한다. (향후 개선)
 */
export interface ContainerProps {
  children?: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
}
