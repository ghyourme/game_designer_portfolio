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
 *
 * fontSize/fontWeight는 Tailwind 기본 스케일과 값이 정확히 동일하다 (text-xs~text-5xl,
 * font-normal/font-medium/font-bold). 컴포넌트에서는 이 유틸리티를 그대로 쓰면 된다.
 * fontWeight의 기본 단계는 "regular"가 아니라 "normal"로 명명한다 — lineHeight.normal,
 * letterSpacing.normal과 동일한 단어를 써서 "기본값"을 가리키는 표현을 파일 전체에서
 * 통일하고, CSS의 font-weight: normal / Tailwind의 font-normal과도 이름이 맞는다.
 * lineHeight/letterSpacing은 Tailwind 기본값과 근소하게 다르지만(leading-tight=1.25 vs
 * 여기 1.2 등) 그 차이가 시각적으로 무의미해, 지금은 Tailwind 기본 leading-*, tracking-*
 * 유틸리티를 그대로 사용하고 이 파일의 값은 의미 참고용으로만 유지한다.
 * (TODO: 정확히 일치시켜야 할 필요가 생기면 app/globals.css에 --leading-*, --tracking-* 재정의)
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
    normal: 400,
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
