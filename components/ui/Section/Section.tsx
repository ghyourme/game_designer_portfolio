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
 * - `tone`으로 배경색만 전환한다 — 인접한 Section이 모두 같은 흰 배경이면 페이지가
 *   단조로워 보이던 문제를, 새 색상 토큰 없이 이미 정의된 `background-elevated`
 *   토큰만으로 해결한다(feature/platform-visual-polish). 어떤 Section이 어떤 tone을
 *   쓰는지는 각 페이지 조립부(page.tsx)가 번갈아 정한다 — Section 자신은 리듬을 모른다.
 * - `className`은 특정 인스턴스(예: Hero)만 여백을 늘리는 등 예외적인 조정이 필요할 때만
 *   쓴다 — 기본 여백 스케일을 매번 재정의하는 용도가 아니다.
 */
export interface SectionProps {
  children?: ReactNode;
  tone?: "base" | "muted";
  className?: string;
}

export function Section({ children, tone = "base", className }: SectionProps) {
  const toneClass = tone === "muted" ? "bg-background-elevated" : "";
  return (
    <section className={`py-12 sm:py-16 lg:py-20 ${toneClass} ${className ?? ""}`}>
      {children}
    </section>
  );
}
