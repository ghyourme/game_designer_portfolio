import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

/**
 * ProjectSection
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.4 Project Detail
 *
 * 책임:
 * - Project Detail을 구성하는 개별 콘텐츠 블록(개요, 문제 정의, 결과 등)에
 *   일관된 제목·간격·너비를 제공하는 구조적 래퍼.
 * - components/ui의 Section/Container만 조합하며, 새 UI 원자 컴포넌트는 만들지 않는다.
 */
export interface ProjectSectionProps {
  title: string;
  children?: ReactNode;
}

export function ProjectSection({ title, children }: ProjectSectionProps) {
  return (
    <Section>
      <Container>
        <h2>{title}</h2>
        {children}
      </Container>
    </Section>
  );
}
