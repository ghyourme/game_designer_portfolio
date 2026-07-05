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
 * 이 파일은 실제 폰트 크기/굵기/행간 값을 아직 포함하지 않는다. 값은 이후 별도 작업에서 정의한다.
 */

export const typography = {
  // TODO: fontFamily (기본 서체 정의)
  // TODO: fontSize (heading, body, supporting 단계별 크기 스케일)
  // TODO: fontWeight (제한된 굵기 세트, 예: regular, medium, bold)
  // TODO: lineHeight (스케일별 행간)
  // TODO: letterSpacing (필요 시 자간)
} as const;

export type Typography = typeof typography;
