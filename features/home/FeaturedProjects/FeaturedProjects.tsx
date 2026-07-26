import { getProjects } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ProjectGrid } from "@/features/projects/ProjectGrid";

/**
 * FeaturedProjects
 *
 * 참고 문서:
 * - docs/INFORMATION_ARCHITECTURE.md - 2.1 Home (구성 섹션 3. Featured Projects)
 * - docs/DESIGN_SYSTEM.md - 6. Component Library (Card, Badge)
 *
 * 책임:
 * - getProjects()로 projects.json을 읽고 featured가 true인 프로젝트만 선별해 보여준다.
 * - 대표 프로젝트가 없으면(현재 data/projects.json이 비어 있어 항상 이 경로) Placeholder만 보여준다.
 */
export function FeaturedProjects() {
  const featuredProjects = getProjects().filter((project) => project.featured);

  return (
    <Section>
      <Container>
        <h2 className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
          Featured Projects
        </h2>
        <div className="mt-6">
          <ProjectGrid
            projects={featuredProjects}
            emptyMessage="아직 대표 프로젝트가 없습니다."
          />
        </div>
      </Container>
    </Section>
  );
}
