import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { Badge } from "@/components/ui/Badge";
import { MetaInfo } from "@/components/common/MetaInfo";
import { ExternalLinks } from "@/features/projects/ExternalLinks";
import type { Project } from "@/types/project";

/**
 * ProjectHero
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.4 Project Detail (구성 섹션 1. 헤더)
 *
 * 책임:
 * - Project Detail 최상단에서 title, subtitle, role/genre/platform/period/team, tags,
 *   links(ExternalLinks)를 보여주는 헤더 블록. (cover는 이번 범위에 포함하지 않음 —
 *   아래 self-review 참고)
 * - Home의 Hero와 동일하게 자체적으로 Section/Container를 감싸는 "페이지 블록" 컴포넌트다.
 */
export interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <Section>
      <Container>
        {project.featured && <Badge variant="featured">Featured</Badge>}
        <h1>{project.title}</h1>
        <p>{project.subtitle}</p>
        <dl>
          <MetaInfo label="담당 역할" value={project.role} />
          <MetaInfo label="장르" value={project.genre} />
          <MetaInfo label="플랫폼" value={project.platform} />
          <MetaInfo label="기간" value={project.period} />
          <MetaInfo label="팀 규모" value={project.team} />
        </dl>
        {project.tags.length > 0 && (
          <div>
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}
        <ExternalLinks links={project.links} />
      </Container>
    </Section>
  );
}
