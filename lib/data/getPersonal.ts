import type { PersonalWork } from "@/types/personal";
import personalData from "@/data/personal.json";

/**
 * getPersonal
 *
 * data/personal.json을 읽어 개인 작업물 목록을 반환한다.
 */
export function getPersonal(): PersonalWork[] {
  return personalData as PersonalWork[];
}
