/**
 * Data Loaders - Entry Point
 *
 * 참고 문서: docs/ARCHITECTURE.md - 5. 데이터 흐름 (data → components → pages)
 *
 * 책임:
 * - lib/data/ 디렉토리 내 모든 데이터 로더 함수를 하나의 진입점으로 재노출(re-export)한다.
 */
export * from "./getProfile";
export * from "./getResume";
export * from "./getPersonal";
export * from "./getProjects";
export * from "./getAnalysis";
export * from "./getSkills";
export * from "./getCompanies";
export * from "./getNavigation";
