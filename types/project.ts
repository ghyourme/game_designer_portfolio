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
  contribution: string;
  overview: string;
  problem: string;
  solution: string;
  result: string;
  /** TODO: systems 항목의 세부 구조는 문서에 정의되어 있지 않음 */
  systems: unknown[];
  /** TODO: contents 항목의 세부 구조는 문서에 정의되어 있지 않음 */
  contents: unknown[];
  skills: string[];
  tags: string[];
  gallery: string[];
  /** TODO: pdf 항목의 세부 구조(단일 파일 여부, 필드 구성 등)는 문서에 정의되어 있지 않음 */
  pdf: unknown;
  featured: boolean;
}
