/**
 * Color Tokens
 *
 * 참고 문서: docs/DESIGN_SYSTEM.md - 4. Design Tokens (Colors)
 *
 * 책임:
 * - 브랜드 아이덴티티를 표현하는 색상을 정의한다.
 * - 콘텐츠 위계(primary/secondary text, background, border)를 표현하는 색상을 정의한다.
 * - 상태(success, warning, error, focus)를 표현하는 색상을 정의한다.
 *
 * 이 파일은 실제 색상값을 아직 포함하지 않는다. 값은 이후 별도 작업에서 정의한다.
 * 컴포넌트는 이 파일의 값을 직접 하드코딩하지 않고 참조해서 사용해야 한다.
 */

export const colors = {
  // TODO: brand (primary, secondary 등 브랜드 색상)
  // TODO: text (primary, secondary, disabled 등 텍스트 색상)
  // TODO: background (base, elevated, muted 등 배경 색상)
  // TODO: border (default, muted, focus 등 테두리 색상)
  // TODO: state (success, warning, error, info)
  // TODO: focus (접근성 포커스 인디케이터 색상)
} as const;

export type Colors = typeof colors;
