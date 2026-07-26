import type { Skills } from "@/types/skill";
import skillsData from "@/data/skills.json";

/**
 * getSkills
 *
 * data/skills.json을 읽어 스킬 데이터를 반환한다.
 */
export function getSkills(): Skills {
  return skillsData as Skills;
}
