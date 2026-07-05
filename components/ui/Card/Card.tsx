import type { ReactNode } from "react";

/**
 * Card
 *
 * 참고 문서: docs/DESIGN_SYSTEM.md - 6. Component Library (Card), 7. Interaction Principles (Hover)
 *
 * 책임:
 * - 프로젝트, 분석, 개인 작업 등 단일 콘텐츠 항목을 목록/그리드에서
 *   훑어보기 쉬운 축약된 형태로 요약해 보여준다. (Progressive Disclosure)
 * - 목록 → 상세로 이어지는 진입점 역할을 하므로, hover 시 elevation을 살짝 올려
 *   상호작용 가능함을 알린다.
 */
export interface CardProps {
  children?: ReactNode;
  // TODO: 콘텐츠 타입별 props (title, thumbnail, tags 등) 정의 — JSON 연동 시 추가
}

export function Card({ children }: CardProps) {
  return (
    <div className="rounded-lg border border-border-default bg-background-base p-6 shadow-sm transition-shadow duration-[var(--duration-normal)] ease-[var(--ease-standard)] hover:shadow-md">
      {children}
    </div>
  );
}
