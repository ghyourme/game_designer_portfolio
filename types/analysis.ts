/**
 * Analysis
 *
 * 참고 문서: docs/DATA_MODEL.md - 6. 분석 데이터 모델
 *
 * data/analysis.json의 각 항목이 따르는 구조를 정의한다.
 * 각 분석 구성 요소의 세부 필드는 문서에 명시되어 있지 않아 TODO로 남긴다.
 */
export interface Analysis {
  title: string;
  description: string;
  tags: string[];
  /** TODO: 분석 대상 게임 정보의 세부 필드는 문서에 정의되어 있지 않음 */
  targetGame: unknown;
  /** TODO: 시스템 분석 항목의 세부 필드는 문서에 정의되어 있지 않음 */
  systemAnalysis: unknown;
  /** TODO: 콘텐츠 분석 항목의 세부 필드는 문서에 정의되어 있지 않음 */
  contentAnalysis: unknown;
  /** TODO: UX 분석 항목의 세부 필드는 문서에 정의되어 있지 않음 */
  uxAnalysis: unknown;
  /** TODO: 결론 항목의 세부 필드는 문서에 정의되어 있지 않음 */
  conclusion: unknown;
  // TODO: docs/DATA_MODEL.md 4장의 공통 데이터 규칙(id, slug, status, order 등)이
  // 분석 콘텐츠에도 적용되는지 6장에서 명시되어 있지 않아 확인이 필요함.
}
