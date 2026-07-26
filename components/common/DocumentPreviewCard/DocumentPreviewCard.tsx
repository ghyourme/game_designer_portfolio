import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import type { ProjectDocument, ProjectDocumentType } from "@/types/project";

/**
 * DocumentPreviewCard
 *
 * 참고 문서:
 * - docs/DATA_MODEL.md §5.6 (ProjectDocument)
 * - docs/DESIGN_SYSTEM.md §6.2 Project Detail Components, §8 Shared Components,
 *   §11 Component Contract Rule
 *
 * 책임:
 * - 문서 하나(ProjectDocument)만 title → type → url(열기 액션) 순서로 보여준다.
 * - 실제 파일 뷰어/다운로드 동작은 구현하지 않는다 (Out of Scope: PDF Preview 구현).
 * - `type`으로만 표시를 분기한다 — `title`/`label` 문자열 비교로 분기하지 않는다.
 * - Project Detail(SystemsSection)과 Resume(PDF 다운로드) 양쪽에서 재사용되는 공용
 *   컴포넌트라 components/common/에 둔다 (docs/DESIGN_SYSTEM.md §8). Resume 쪽 연동은
 *   이번 브랜치 범위 밖이다.
 */
const TYPE_LABEL: Record<ProjectDocumentType, string> = {
  pdf: "PDF",
  ppt: "PPT",
  docx: "DOCX",
  markdown: "Markdown",
  notion: "Notion",
  other: "기타",
};

export interface DocumentPreviewCardProps {
  document: ProjectDocument;
}

export function DocumentPreviewCard({ document: doc }: DocumentPreviewCardProps) {
  return (
    <Card>
      <h4 className="text-base font-semibold text-text-primary">{doc.title}</h4>
      <div className="mt-2">
        <Tag>{TYPE_LABEL[doc.type]}</Tag>
      </div>
      <div className="mt-4">
        <Button
          href={doc.url}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          aria-label={`${doc.title} 열기 (새 창)`}
        >
          열기
        </Button>
      </div>
    </Card>
  );
}
