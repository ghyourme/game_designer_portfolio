import type { ReactNode } from "react";

/**
 * Badge
 *
 * 참고 문서: docs/DESIGN_SYSTEM.md - 6. Component Library (Badge)
 *
 * 책임:
 * - "Featured", "Case Study"와 같은 짧은 상태나 구분을 강조해 보여준다.
 * - 주요 콘텐츠와 경쟁하지 않는 수준의 짧은 시선 끌기 역할만 한다.
 * - Tag(중립적 분류)와 구분되도록 variant에 따라 강조색을 사용한다.
 */
export interface BadgeProps {
  children?: ReactNode;
  variant?: "featured" | "info" | "neutral";
}

const VARIANT_CLASSES: Record<Required<BadgeProps>["variant"], string> = {
  featured: "bg-brand-secondary text-text-inverse",
  info: "bg-state-info text-text-inverse",
  neutral: "bg-background-muted text-text-secondary",
};

export function Badge({ children, variant = "featured" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-sm px-2 py-0.5 text-xs font-medium uppercase tracking-wide ${VARIANT_CLASSES[variant]}`}
    >
      {children}
    </span>
  );
}
