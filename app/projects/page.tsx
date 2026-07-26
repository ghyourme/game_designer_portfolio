import { getProjects } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ProjectGrid } from "@/features/projects/ProjectGrid";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Projects",
  description: "진행한 프로젝트를 모아볼 수 있는 페이지입니다.",
  path: "/projects",
});

/**
 * Projects
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.3 Projects
 *
 * getProjects()로 projects.json 전체 목록을 가져와 ProjectGrid로 렌더링한다.
 * data/projects.json이 비어 있는 동안은 ProjectGrid가 자체적으로 Empty 상태를 보여준다.
 * 가짜 프로젝트 데이터는 만들지 않는다.
 */
export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Projects
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-text-secondary">
          진행한 프로젝트를 모아볼 수 있는 페이지입니다.
        </p>
        {/* TODO: 필터/검색(역할·장르·플랫폼·태그) 구현 예정 */}
        <div className="mt-8">
          <ProjectGrid projects={projects} />
        </div>
      </Container>
    </Section>
  );
}
