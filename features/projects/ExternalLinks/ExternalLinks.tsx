import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import type { ProjectLink, ProjectLinkType } from "@/types/project";

/**
 * ExternalLinks
 *
 * 참고 문서:
 * - docs/DATA_MODEL.md §5.8 (ProjectLink)
 * - docs/DESIGN_SYSTEM.md §6.2 Project Detail Components, §11 Component Contract Rule
 *
 * 책임:
 * - 프로젝트 헤더의 외부 참고 링크(links) 배열을 label → type → url(Button) 순서로
 *   보여준다. 9개 공식 섹션 어디에도 속하지 않는 프로젝트 전체 참고 자료다
 *   (docs/DATA_MODEL.md §5.8, docs/INFORMATION_ARCHITECTURE.md §2.4).
 * - `type`으로만 표시를 분기한다 — `label` 문자열 비교로 분기하지 않는다.
 * - 링크는 새 창(target="_blank")에서 열리므로, 접근성을 위해 새 창임을 aria-label로
 *   알린다 (docs/DESIGN_SYSTEM.md §13 Accessibility).
 */
const TYPE_LABEL: Record<ProjectLinkType, string> = {
  github: "GitHub",
  figma: "Figma",
  notion: "Notion",
  youtube: "YouTube",
  deployment: "배포",
  other: "기타",
};

export interface ExternalLinksProps {
  links: ProjectLink[];
}

export function ExternalLinks({ links }: ExternalLinksProps) {
  if (links.length === 0) return null;

  return (
    <ul className="flex flex-wrap gap-4">
      {links.map((link) => (
        <li key={link.url} className="flex items-center gap-2">
          <Button
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            aria-label={`${link.label} 열기 (새 창)`}
          >
            {link.label}
          </Button>
          <Tag>{TYPE_LABEL[link.type]}</Tag>
        </li>
      ))}
    </ul>
  );
}
