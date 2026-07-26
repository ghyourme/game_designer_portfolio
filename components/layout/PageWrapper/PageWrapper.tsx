import type { ReactNode } from "react";

/**
 * PageWrapper
 *
 * 참고 문서: docs/DESIGN_SYSTEM.md - 5. Layout System (Maximum Content Width)
 *
 * 책임:
 * - 페이지 콘텐츠의 최대 너비와 여백 구조를 일관되게 유지하는 역할만 담당한다.
 * - 실제 최대 너비 값과 여백 값은 아직 정의하지 않는다. (styles/spacing 토큰 연동 예정)
 * - 페이지의 주요 콘텐츠 영역임을 나타내는 시맨틱 랜드마크(main)로 렌더링한다.
 * - id="main-content"는 MainLayout의 skip link가 가리키는 대상이다
 *   (feature/platform-accessibility) — Header의 전역 내비게이션을 매 페이지 Tab으로
 *   거치지 않고 본문으로 바로 이동할 수 있게 한다.
 *
 * 스타일 구현과 비즈니스 로직은 포함하지 않는다.
 */
export interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return <main id="main-content">{children}</main>;
}
