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
 *
 * focus는 brand.primary와 값이 같아야 한다는 요구가 있어(브랜드 컬러를 포커스
 * 링에 그대로 쓰는 흔한 패턴), 독립된 리터럴로 중복 선언하지 않고 brand.primary를
 * 그대로 참조한다 — brand.primary가 바뀌면 focus도 함께 바뀐다.
 *
 * border.muted는 background.muted와 값이 완전히 동일하고 어디서도 쓰이지 않아
 * (2024 리뷰) 제거했다. 배경과 구분선에 같은 "무채색 톤"이 필요하면 background.muted를
 * 그대로 재사용한다.
 */

const brand = {
  primary: "#2563EB",
  secondary: "#1E293B",
} as const;

export const colors = {
  brand,
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
  },
  state: {
    success: "#16A34A",
    warning: "#D97706",
    error: "#DC2626",
    info: "#0284C7",
  },
  focus: brand.primary,
} as const;

export type Colors = typeof colors;
