import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

/**
 * DetailSection
 *
 * 참고 문서:
 * - docs/DESIGN_SYSTEM.md - 6.1 Project Detail Components / 6.2 Analysis Components
 * - docs/DESIGN_SYSTEM.md - Component Contract Rule
 *
 * 책임:
 * - Project Detail·Analysis Detail 공용 구조적 래퍼. 제목·간격·너비만 제공하고
 *   내용은 알지 못한다 — 콘텐츠는 항상 children으로 주입받는다.
 * - components/ui의 Section/Container만 조합하며, 새 UI 원자 컴포넌트는 만들지 않는다.
 *
 * (구 features/projects/ProjectSection — Analysis Detail에서도 동일하게 재사용되어
 * 페이지 종속적이지 않은 이름으로 옮겼다. docs/DESIGN_SYSTEM.md §7 참고.)
 *
 * `tone`은 Section의 배경 리듬 prop을 그대로 통과시킨다 — 9개(Project)/4개(Analysis)
 * 섹션이 번갈아 배경을 바꿔 시각적으로 구분되도록, 호출부(page.tsx)가 순서대로
 * base/muted를 지정한다(feature/platform-visual-polish).
 */
export interface DetailSectionProps {
  title: string;
  tone?: "base" | "muted";
  children?: ReactNode;
}

export function DetailSection({ title, tone = "base", children }: DetailSectionProps) {
  return (
    <Section tone={tone}>
      <Container>
        <h2 className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
          {title}
        </h2>
        <div className="mt-6">{children}</div>
      </Container>
    </Section>
  );
}
