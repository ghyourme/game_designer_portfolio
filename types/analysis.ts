/**
 * Analysis
 *
 * 참고 문서: docs/DATA_MODEL.md - 6. 분석 데이터 모델
 *
 * data/analysis.json의 각 항목이 따르는 구조를 정의한다.
 * 모든 필드는 Required다 — 콘텐츠가 없는 항목은 빈 문자열/빈 배열로 표현하며
 * 필드 자체를 생략하지 않는다 (docs/DATA_MODEL.md §6 "Required/Optional 원칙").
 */

/** docs/DATA_MODEL.md §6.2 — 시스템/콘텐츠/UX 분석이 공유하는 내부 구조 */
export interface AnalysisDimension {
  keyElement: string;
  strengths: string;
  weaknesses: string;
  improvements: string;
}

export interface Analysis {
  // 헤더 메타 정보 (docs/DATA_MODEL.md §6.1)
  id: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  featured: boolean;
  targetGame: string;
  purpose: string;

  // 본문 섹션 (docs/DATA_MODEL.md §6.2)
  systemAnalysis: AnalysisDimension;
  contentAnalysis: AnalysisDimension;
  uxAnalysis: AnalysisDimension;
  conclusion: string;
}
