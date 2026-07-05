import type { ReactNode } from "react";

/**
 * Card
 *
 * 참고 문서: docs/DESIGN_SYSTEM.md - 6. Component Library (Card)
 *
 * 책임:
 * - 프로젝트, 분석, 개인 작업 등 단일 콘텐츠 항목을 목록/그리드에서
 *   훑어보기 쉬운 축약된 형태로 요약해 보여준다. (Progressive Disclosure)
 *
 * 아직 스타일과 비즈니스 로직은 포함하지 않는다.
 */
export interface CardProps {
  children?: ReactNode;
  // TODO: 콘텐츠 타입별 props (title, thumbnail, tags 등) 정의
}

export function Card({ children }: CardProps) {
  return <div>{children}</div>;
}
