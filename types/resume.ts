/**
 * Resume
 *
 * 참고 문서: docs/DATA_MODEL.md - 7. 이력서 데이터 모델
 *
 * data/resume.json이 따르는 구조를 정의한다.
 * 각 항목의 세부 필드는 문서에 명시되어 있지 않아 TODO로 남긴다.
 */
export interface Resume {
  /** TODO: 개인 정보 항목의 세부 필드는 문서에 정의되어 있지 않음 */
  personalInfo: Record<string, unknown>;
  /** TODO: 경력 사항 항목의 세부 필드는 문서에 정의되어 있지 않음 */
  career: unknown[];
  /** TODO: 프로젝트 경험 항목의 세부 필드는 문서에 정의되어 있지 않음 */
  projectExperience: unknown[];
  /** TODO: 기술 스택 항목의 세부 필드는 문서에 정의되어 있지 않음 (types/skill.ts 참고) */
  skills: unknown[];
  /** TODO: 교육 정보 항목의 세부 필드는 문서에 정의되어 있지 않음 */
  education: unknown[];
  /** TODO: 수상 및 기타 활동 항목의 세부 필드는 문서에 정의되어 있지 않음 */
  awards: unknown[];
}
