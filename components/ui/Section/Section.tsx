import type { ReactNode } from "react";

/**
 * Section
 *
 * 참고 문서: docs/DESIGN_SYSTEM.md - 6. Component Library (Section)
 *
 * 책임:
 * - 페이지 내 구분된 콘텐츠 블록에 일관된 간격, 너비, 제목 처리를 제공하는
 *   구조적 래퍼 역할을 한다. (구현 예정)
 *
 * 아직 스타일과 비즈니스 로직은 포함하지 않는다.
 */
export interface SectionProps {
  children?: ReactNode;
  // TODO: heading, spacing 등 props 정의
}

export function Section({ children }: SectionProps) {
  return <section>{children}</section>;
}
