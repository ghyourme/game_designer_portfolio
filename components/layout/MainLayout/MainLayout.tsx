import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageWrapper } from "@/components/layout/PageWrapper";

/**
 * MainLayout
 *
 * 참고 문서: docs/ARCHITECTURE.md - 7. 컴포넌트 구조 (Layout)
 *
 * 책임:
 * - Header, PageWrapper, Footer를 조합해 모든 페이지에 공통으로 적용되는
 *   전체 레이아웃 뼈대를 구성한다.
 * - 하위 컴포넌트를 조립하는 역할만 하며, 비즈니스 로직은 포함하지 않는다.
 * - Skip link를 Header보다 앞에 둔다 — 키보드 사용자가 Header의 전역 내비게이션
 *   7개 항목을 매번 Tab으로 거치지 않고 본문(#main-content)으로 바로 이동할 수
 *   있게 한다. 평소에는 보이지 않다가(sr-only) 포커스를 받으면 나타난다
 *   (feature/platform-accessibility, 새 디자인 토큰 없이 기존 focus-visible
 *   스타일과 Button 원칙만 재사용).
 */
export interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:rounded-md focus-visible:bg-brand-primary focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-medium focus-visible:text-text-inverse focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
      >
        본문으로 건너뛰기
      </a>
      <Header />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </>
  );
}
