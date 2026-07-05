import type { ButtonHTMLAttributes } from "react";

/**
 * Button
 *
 * 참고 문서: docs/DESIGN_SYSTEM.md - 6. Component Library (Button), 7. Interaction Principles, 8. Accessibility
 *
 * 책임:
 * - 주요 액션 또는 내비게이션을 트리거하는 버튼 UI를 제공한다. (예: "View Project", "Download Resume")
 * - primary/secondary/tertiary 강조 수준을 구분해 방문자가 항상 가장 중요한 액션을 알 수 있게 한다.
 *
 * 네이티브 button 속성(onClick, disabled, type 등)을 그대로 확장해 별도로 재정의하지 않는다.
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
}

const VARIANT_CLASSES: Record<Required<ButtonProps>["variant"], string> = {
  primary: "bg-brand-primary text-text-inverse hover:bg-brand-primary/90",
  secondary:
    "bg-transparent text-brand-primary border border-brand-primary hover:bg-brand-primary/10",
  tertiary: "bg-transparent text-text-primary hover:bg-background-muted",
};

export function Button({
  variant = "primary",
  type = "button",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)] disabled:pointer-events-none disabled:opacity-50 ${VARIANT_CLASSES[variant]} ${className ?? ""}`}
      {...rest}
    >
      {children}
    </button>
  );
}
