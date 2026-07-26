/**
 * Design Tokens - Entry Point
 *
 * 참고 문서: docs/DESIGN_SYSTEM.md - 4. Design Tokens
 *
 * 책임:
 * - styles/ 디렉토리 내 모든 디자인 토큰 파일을 하나의 진입점으로 재노출(re-export)한다.
 * - 컴포넌트는 개별 토큰 파일을 직접 import하지 않고, 이 index를 통해 토큰을 사용하는 것을 권장한다.
 */

export * from "./colors";
export * from "./typography";
export * from "./spacing";
export * from "./radius";
export * from "./shadow";
export * from "./animation";
