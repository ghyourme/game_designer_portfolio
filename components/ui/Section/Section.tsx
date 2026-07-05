import type { ReactNode } from "react";

/**
 * Section
 *
 * 참고 문서: docs/DESIGN_SYSTEM.md - 5. Layout System (Section Spacing)
 *
 * 책임:
 * - 페이지 내 구분된 콘텐츠 블록에 일관된 수직 간격(spacing 스케일 기반)을 제공하는
 *   구조적 래퍼 역할을 한다.
 * - 가로 최대 너비는 Container가 담당하므로, Section은 세로 리듬만 책임진다
 *   (두 컴포넌트가 같은 책임을 중복해서 갖지 않도록 분리).
 *
 * heading/제목 처리(예: 자동 aria-label)는 아직 props가 없어 지원하지 않는다. (향후 개선)
 */
export interface SectionProps {
  children?: ReactNode;
}

export function Section({ children }: SectionProps) {
  return <section className="py-12 sm:py-16 lg:py-20">{children}</section>;
}
