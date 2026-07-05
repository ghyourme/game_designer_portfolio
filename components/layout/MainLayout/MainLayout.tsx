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
 */
export interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </>
  );
}
