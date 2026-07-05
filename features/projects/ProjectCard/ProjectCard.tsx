import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/types/project";

/**
 * ProjectCard
 *
 * 참고 문서:
 * - docs/INFORMATION_ARCHITECTURE.md - 2.3 Projects (프로젝트 목록, 카드형 요약)
 * - docs/DESIGN_SYSTEM.md - 6. Component Library (Card, Tag, Badge, Button)
 *
 * 책임:
 * - 단일 프로젝트를 목록/그리드에서 훑어보기 쉬운 요약 카드로 보여준다. (Progressive Disclosure)
 * - "자세히 보기" 클릭 시 Project Detail(/projects/[slug])로 이동한다.
 *
 * components/ui의 Card/Tag/Badge/Button만 조합하며, 새 UI 원자 컴포넌트는 만들지 않는다.
 */
export interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      {project.featured && <Badge variant="featured">Featured</Badge>}
      <h3>{project.title}</h3>
      <p>{project.subtitle}</p>
      {project.tags.length > 0 && (
        <div>
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}
      <Button href={`/projects/${project.slug}`} variant="tertiary">
        자세히 보기
      </Button>
    </Card>
  );
}
