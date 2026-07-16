import type { ButtonHTMLAttributes } from "react";
import Link from "next/link";

/**
 * Button
 *
 * 참고 문서: docs/DESIGN_SYSTEM.md - 6. Component Library (Button), 7. Interaction Principles, 8. Accessibility
 *
 * 책임:
 * - 주요 액션 또는 내비게이션을 트리거하는 버튼 UI를 제공한다. (예: "View Project", "Download Resume")
 * - primary/secondary/tertiary 강조 수준을 구분해 방문자가 항상 가장 중요한 액션을 알 수 있게 한다.
 * - href가 주어지면 내비게이션(next/link)으로, 없으면 액션 트리거(button)로 렌더링한다.
 *
 * 네이티브 button 속성(onClick, disabled, type 등)을 그대로 확장해 별도로 재정의하지 않는다.
 * href가 있을 때는 앵커에 의미가 없는 button 전용 속성(disabled, type 등)을 전달하지 않는다.
 * 대신 앵커 전용 속성(target, rel)은 별도 named prop으로 받아 Link에 그대로 전달한다 —
 * 외부 링크(ExternalLinks, DocumentPreviewCard)가 target="_blank"와 새 창임을 알리는
 * aria-label을 붙일 수 있어야 하기 때문이다 (docs/DESIGN_SYSTEM.md 13. Accessibility).
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  href?: string;
  target?: string;
  rel?: string;
}

const VARIANT_CLASSES: Record<Required<ButtonProps>["variant"], string> = {
  primary: "bg-brand-primary text-text-inverse hover:bg-brand-primary/90",
  secondary:
    "bg-transparent text-brand-primary border border-brand-primary hover:bg-brand-primary/10",
  tertiary: "bg-transparent text-text-primary hover:bg-background-muted",
};

const BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)] disabled:pointer-events-none disabled:opacity-50";

export function Button({
  variant = "primary",
  type = "button",
  href,
  target,
  rel,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className ?? ""}`;

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={classes}
        aria-label={rest["aria-label"]}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
