/**
 * Typography Tokens
 *
 * 참고 문서: docs/DESIGN_SYSTEM.md - 4. Design Tokens (Typography)
 *
 * 책임:
 * - 제목(heading), 본문(body), 보조 텍스트(supporting)를 구분하는 타입 스케일을 정의한다.
 * - 제한된 폰트 굵기(weight) 세트를 정의한다.
 * - 모든 화면 크기에서 가독성을 유지하는 타이포그래피 기준을 제공한다.
 *
 * fontFamily는 app/layout.tsx에서 이미 로드하는 Geist 폰트의 CSS 변수
 * (--font-sans, --font-mono, app/globals.css @theme inline 참고)를 그대로 참조해
 * 폰트 로딩 방식을 이중으로 정의하지 않는다.
 */

export const typography = {
  fontFamily: {
    sans: "var(--font-sans)",
    mono: "var(--font-mono)",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
  letterSpacing: {
    tight: "-0.02em",
    normal: "0em",
    wide: "0.02em",
  },
} as const;

export type Typography = typeof typography;
