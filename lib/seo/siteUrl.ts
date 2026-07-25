/**
 * SITE_URL / SITE_NAME
 *
 * 참고 문서: docs/ARCHITECTURE.md - §14.1 SEO
 *
 * canonical/OpenGraph/sitemap이 공유하는 절대 URL의 유일한 출처. 커스텀 도메인이
 * 아직 확정되지 않아(docs/DEPLOYMENT.md §2 "Custom Domain (향후)") 배포 환경에서는
 * NEXT_PUBLIC_SITE_URL을 주입하고, 값이 없으면 로컬 개발 기본값으로 대체한다 —
 * 존재하지 않는 도메인을 미리 하드코딩하지 않는다.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const SITE_NAME = "Game Designer Portfolio";
