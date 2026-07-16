import { MetaInfo } from "@/components/common/MetaInfo";
import { DocumentPreviewCard } from "@/components/common/DocumentPreviewCard";
import type { ProjectSystem, ProjectDocument } from "@/types/project";

/**
 * SystemsSection
 *
 * 참고 문서:
 * - docs/DATA_MODEL.md §5.3 (ProjectSystem), §5.5 (documents), docs/CONTENT_GUIDE.md §4
 * - docs/DESIGN_SYSTEM.md §6.2 Project Detail Components, §11 Component Contract Rule
 *
 * 책임:
 * - "6. 시스템 설계" 섹션의 콘텐츠만 렌더링한다. 레이아웃(제목/간격)은 소유자인
 *   DetailSection의 몫이라 여기서 구현하지 않는다.
 * - systems 배열의 각 항목을 name(제목) → purpose → playerExperience → structure →
 *   flow → data → exceptionHandling → expectedEffect 순서로 렌더링한다
 *   (docs/CONTENT_GUIDE.md §4 순서 고정).
 * - 이어서 documents를 DocumentPreviewCard로 렌더링한다. documents는 개별 system이
 *   아니라 섹션 전체에 속하는 배열이다 (docs/DATA_MODEL.md §5.5).
 * - systems가 비어 있으면(변수 길이 컬렉션) 아무것도 렌더링하지 않는다.
 */
export interface SystemsSectionProps {
  systems: ProjectSystem[];
  documents: ProjectDocument[];
}

export function SystemsSection({ systems, documents }: SystemsSectionProps) {
  if (systems.length === 0) return null;

  return (
    <div>
      {systems.map((system) => (
        <article key={system.name}>
          <h3>{system.name}</h3>
          <dl>
            <MetaInfo label="목적" value={system.purpose} />
            <MetaInfo label="플레이어 경험" value={system.playerExperience} />
            <MetaInfo label="시스템 구조" value={system.structure} />
            <MetaInfo label="플로우" value={system.flow} />
            <MetaInfo label="데이터" value={system.data} />
            <MetaInfo label="예외 처리" value={system.exceptionHandling} />
            <MetaInfo label="기대 효과" value={system.expectedEffect} />
          </dl>
        </article>
      ))}
      {documents.length > 0 && (
        <div>
          {documents.map((doc) => (
            <DocumentPreviewCard key={doc.url} document={doc} />
          ))}
        </div>
      )}
    </div>
  );
}
