/**
 * Company
 *
 * 참고 문서: docs/DATA_MODEL.md - 9. 회사 데이터 모델
 *
 * data/companies.json의 각 항목이 따르는 구조를 정의한다.
 */
export interface Company {
  name: string;
  description: string;
  /** TODO: 단일 장르 문자열인지 복수 장르 목록인지 문서에 정의되어 있지 않음 */
  genre: string;
  /** TODO: 디자인 특징이 단일 텍스트인지 목록인지 문서에 정의되어 있지 않음 */
  designFeatures: string;
  strategy: string;
}
