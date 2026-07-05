import type { ReactNode } from "react";

/**
 * Tag
 *
 * 참고 문서: docs/DESIGN_SYSTEM.md - 6. Component Library (Tag)
 *
 * 책임:
 * - 콘텐츠와 연결된 키워드나 분류(스킬, 장르, 플랫폼 등)를 표현한다.
 * - 빠른 스캐닝과 필터링 진입점 역할을 한다.
 *
 * 지금은 비상호작용 span이다. 필터링 기능이 붙으면 클릭 가능한 변형이 필요할 수 있다. (향후 개선)
 */
export interface TagProps {
  children?: ReactNode;
  // TODO: 필터링 연동을 위한 value, onSelect 등 props 정의
}

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-background-muted px-2 py-0.5 text-xs font-medium text-text-secondary">
      {children}
    </span>
  );
}
