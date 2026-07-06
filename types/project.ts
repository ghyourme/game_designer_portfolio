/**
 * Project
 *
 * 참고 문서: docs/DATA_MODEL.md - 5. 프로젝트 데이터 모델
 *
 * data/projects.json의 각 항목이 따르는 구조를 정의한다.
 * 필드 목록은 문서에 명시된 것을 그대로 반영했으며, 세부 형식이 정의되지 않은
 * 필드는 TODO로 표시했다.
 */
export interface Project {
  // 헤더 메타 정보
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  cover: string;
  role: string;
  genre: string;
  platform: string;
  period: string;
  team: string;
  tags: string[];
  featured: boolean;

  // 9단계 섹션 본문
  overview: string;
  contribution: string;
  goal: string;
  problem: string;
  approach: string;
  /** TODO: systems 항목의 세부 구조는 문서에 정의되어 있지 않음 */
  systems: unknown[];
  /** TODO: features 항목의 세부 구조는 문서에 정의되어 있지 않음 */
  features: unknown[];
  result: string;
  retrospective: string;

  // 섹션 내부 지원 필드
  skills: string[];
  /** TODO: pdf 항목의 세부 구조(단일 파일 여부, 필드 구성 등)는 문서에 정의되어 있지 않음 */
  pdf: unknown;
  gallery: string[];
}
