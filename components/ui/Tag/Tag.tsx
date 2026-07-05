import type { ReactNode } from "react";

/**
 * Tag
 *
 * 참고 문서: docs/DESIGN_SYSTEM.md - 6. Component Library (Tag)
 *
 * 책임:
 * - 콘텐츠와 연결된 키워드나 분류(스킬, 장르, 플랫폼 등)를 표현한다.
 * - 빠른 스캐닝과 필터링 진입점 역할을 한다. (구현 예정)
 *
 * 아직 스타일과 비즈니스 로직은 포함하지 않는다.
 */
export interface TagProps {
  children?: ReactNode;
  // TODO: 필터링 연동을 위한 value, onSelect 등 props 정의
}

export function Tag({ children }: TagProps) {
  return <span>{children}</span>;
}
