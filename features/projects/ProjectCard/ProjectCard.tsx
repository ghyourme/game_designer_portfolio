import Image from "next/image";
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
 * - docs/DATA_MODEL.md §5.1 (thumbnail — "목록/카드에서 사용하는 썸네일 이미지 경로")
 *
 * 책임:
 * - 단일 프로젝트를 목록/그리드에서 훑어보기 쉬운 요약 카드로 보여준다. (Progressive Disclosure)
 * - "자세히 보기" 클릭 시 Project Detail(/projects/[slug])로 이동한다.
 * - `thumbnail`이 있으면 이미지를, 없으면(현재 항상 이 경로) 제목 첫 글자를 흐리게
 *   보여주는 placeholder를 그린다 — 텍스트만 있는 카드보다 그리드가 훨씬 더 실제
 *   웹사이트처럼 보이면서도, 실제 이미지가 없는 지금 상태를 정직하게 드러낸다
 *   (feature/platform-visual-polish).
 *
 * components/ui의 Card/Tag/Badge/Button만 조합하며, 새 UI 원자 컴포넌트는 만들지 않는다.
 * 카드마다 "자세히 보기" 텍스트가 반복되어 스크린 리더의 "링크 목록" 탐색에서
 * 서로 구분되지 않으므로, aria-label로 프로젝트 제목을 포함한 접근 가능한 이름을
 * 붙인다(ExternalLinks/DocumentPreviewCard와 동일한 기존 패턴, feature/platform-accessibility).
 */
export interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <div className="relative aspect-video w-full overflow-hidden rounded-md bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10">
        {project.thumbnail !== "" ? (
          <Image
            src={project.thumbnail}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center text-4xl font-bold text-brand-primary/30"
          >
            {project.title.charAt(0) || "?"}
          </span>
        )}
        {project.featured && (
          <div className="absolute left-2 top-2">
            <Badge variant="featured">Featured</Badge>
          </div>
        )}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-text-primary">{project.title}</h3>
      <p className="mt-1 text-sm text-text-secondary">{project.subtitle}</p>
      {project.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}
      <div className="mt-4">
        <Button
          href={`/projects/${project.slug}`}
          variant="tertiary"
          aria-label={`${project.title} 자세히 보기`}
        >
          자세히 보기
        </Button>
      </div>
    </Card>
  );
}
