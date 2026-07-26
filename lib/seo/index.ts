/**
 * SEO Utilities - Entry Point
 *
 * 참고 문서: docs/ARCHITECTURE.md - §14.1 SEO
 *
 * 책임:
 * - lib/seo/ 디렉토리 내 SEO 관련 유틸을 하나의 진입점으로 재노출(re-export)한다.
 */
export * from "./siteUrl";
export * from "./buildMetadata";
