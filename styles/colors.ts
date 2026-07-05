/**
 * Color Tokens
 *
 * 참고 문서: docs/DESIGN_SYSTEM.md - 4. Design Tokens (Colors)
 *
 * 책임:
 * - 브랜드 아이덴티티를 표현하는 색상을 정의한다.
 * - 콘텐츠 위계(primary/secondary text, background, border)를 표현하는 색상을 정의한다.
 * - 상태(success, warning, error, info)와 접근성 포커스 인디케이터 색상을 정의한다.
 *
 * 컴포넌트는 이 파일의 값을 직접 하드코딩하지 않고 참조해서 사용해야 한다.
 * (border.focus를 별도로 두지 않고, 포커스 링은 버튼/링크/인풋 등 모든 상호작용
 * 요소에서 공통으로 쓰이므로 최상위 focus 토큰 하나로 통일했다)
 */

export const colors = {
  brand: {
    primary: "#2563EB",
    secondary: "#1E293B",
  },
  text: {
    primary: "#111827",
    secondary: "#4B5563",
    disabled: "#9CA3AF",
    inverse: "#FFFFFF",
  },
  background: {
    base: "#FFFFFF",
    elevated: "#F9FAFB",
    muted: "#F3F4F6",
    inverse: "#111827",
  },
  border: {
    default: "#E5E7EB",
    muted: "#F3F4F6",
  },
  state: {
    success: "#16A34A",
    warning: "#D97706",
    error: "#DC2626",
    info: "#0284C7",
  },
  focus: "#2563EB",
} as const;

export type Colors = typeof colors;
