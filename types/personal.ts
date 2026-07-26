/**
 * PersonalWork
 *
 * 참고 문서: docs/DATA_MODEL.md - 13. 개인 작업물 데이터 모델
 *
 * data/personal.json의 각 항목이 따르는 구조를 정의한다. 상세 라우트가 없어
 * (docs/INFORMATION_ARCHITECTURE.md §2.7 범위 참고) slug/featured는 두지 않았다.
 * 모든 필드는 Required다 — 콘텐츠가 없는 항목은 빈 문자열/빈 배열로 표현한다.
 */
export interface PersonalWork {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}
