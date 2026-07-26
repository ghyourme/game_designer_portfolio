import type { Resume } from "@/types/resume";
import resumeData from "@/data/resume.json";

/**
 * getResume
 *
 * data/resume.json을 읽어 이력서 데이터를 반환한다.
 */
export function getResume(): Resume {
  return resumeData as Resume;
}
