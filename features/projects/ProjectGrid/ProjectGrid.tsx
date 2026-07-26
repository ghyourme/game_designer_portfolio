import { ProjectCard } from "@/features/projects/ProjectCard";
import type { Project } from "@/types/project";

/**
 * ProjectGrid
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.3 Projects (프로젝트 목록, 결과 없음 상태)
 *
 * 책임:
 * - 프로젝트 배열을 ProjectCard 그리드로 렌더링한다.
 * - 배열이 비어 있으면(현재 data/projects.json이 빈 배열이므로 항상 이 경로) Empty 상태를 보여준다.
 *
 * Projects 목록 페이지와 Home의 FeaturedProjects 양쪽에서 재사용되므로, 자체적으로
 * Section/Container를 감싸지 않고 그리드 자체만 책임진다 (중첩 방지).
 */
export interface ProjectGridProps {
  projects: Project[];
  emptyMessage?: string;
}

export function ProjectGrid({
  projects,
  emptyMessage = "표시할 프로젝트가 없습니다.",
}: ProjectGridProps) {
  if (projects.length === 0) {
    return <p className="text-base text-text-secondary">{emptyMessage}</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
