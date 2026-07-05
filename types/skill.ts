/**
 * Skill
 *
 * 참고 문서: docs/DATA_MODEL.md - 8. 스킬 데이터 모델
 *
 * data/skills.json이 따르는 구조를 정의한다.
 * 각 스킬은 "숙련도와 함께 관리된다"고만 서술되어 있어, 숙련도의 표현 방식은 TODO로 남긴다.
 */
export interface SkillItem {
  name: string;
  /** TODO: 숙련도 표현 방식(숫자, 등급, 퍼센트 등)은 문서에 정의되어 있지 않음 */
  proficiency: unknown;
}

export interface Skills {
  systemDesign: SkillItem[];
  contentDesign: SkillItem[];
  analysis: SkillItem[];
  tools: SkillItem[];
}
