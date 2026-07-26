import type { Project } from "@/types/project";
import projectsData from "@/data/projects.json";

/**
 * getProjects
 *
 * data/projects.json을 읽어 프로젝트 목록을 반환한다.
 */
export function getProjects(): Project[] {
  return projectsData as Project[];
}
