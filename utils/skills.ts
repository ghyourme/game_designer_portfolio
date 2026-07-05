import type { Skills, SkillItem } from "@/types/skill";

/**
 * flattenSkills
 *
 * skills.json의 4개 분류(systemDesign/contentDesign/analysis/tools)를 하나의
 * 배열로 합친다. About의 SkillOverview와 Resume의 SkillSummary가 동일한 방식으로
 * skills.json을 나열해야 해서, 중복 구현을 피하기 위해 이 유틸로 공유한다.
 */
export function flattenSkills(skills: Skills): SkillItem[] {
  return [
    ...skills.systemDesign,
    ...skills.contentDesign,
    ...skills.analysis,
    ...skills.tools,
  ];
}
