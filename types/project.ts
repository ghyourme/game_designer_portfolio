/**
 * Project
 *
 * 참고 문서: docs/DATA_MODEL.md - 5. 프로젝트 데이터 모델
 *
 * data/projects.json의 각 항목이 따르는 구조를 정의한다.
 * 모든 필드는 Required다 — 콘텐츠가 없는 항목은 빈 문자열/빈 배열로 표현하며
 * 필드 자체를 생략하지 않는다 (docs/DATA_MODEL.md §5 "Required/Optional 원칙").
 */

/** docs/DATA_MODEL.md §5.3 — "6. 시스템 설계" 섹션의 개별 시스템 항목 */
export interface ProjectSystem {
  name: string;
  purpose: string;
  playerExperience: string;
  structure: string;
  flow: string;
  data: string;
  exceptionHandling: string;
  expectedEffect: string;
}

/** docs/DATA_MODEL.md §5.4 — "7. 핵심 기능" 섹션의 개별 기능 항목 */
export interface ProjectFeature {
  name: string;
  description: string;
}

/** docs/DATA_MODEL.md §5.6 — "6. 시스템 설계" 섹션의 PDF Preview Card 항목 (구 pdf) */
export interface ProjectDocument {
  title: string;
  url: string;
}

/** docs/DATA_MODEL.md §5.7 — "7. 핵심 기능" 섹션의 갤러리 이미지 항목 */
export interface ProjectGalleryImage {
  src: string;
  description: string;
  caption: string;
  purpose: string;
}

/** docs/DATA_MODEL.md §5.8 — 노출 위치 미정, 프로젝트 관련 외부 링크 항목 */
export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  // 헤더 메타 정보 (docs/DATA_MODEL.md §5.1)
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

  // 9단계 섹션 본문 (docs/DATA_MODEL.md §5.2)
  overview: string;
  contribution: string;
  goal: string;
  problem: string;
  approach: string;
  systems: ProjectSystem[];
  features: ProjectFeature[];
  result: string;
  retrospective: string;

  // 섹션 내부 지원 필드 (docs/DATA_MODEL.md §5.5)
  skills: string[];
  documents: ProjectDocument[];
  gallery: ProjectGalleryImage[];
  links: ProjectLink[];
}
