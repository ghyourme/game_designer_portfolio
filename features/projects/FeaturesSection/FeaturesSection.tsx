import { Gallery } from "@/features/projects/Gallery";
import type { ProjectFeature, ProjectGalleryImage } from "@/types/project";

/**
 * FeaturesSection
 *
 * 참고 문서:
 * - docs/DATA_MODEL.md §5.4 (ProjectFeature), §5.5 (gallery)
 * - docs/DESIGN_SYSTEM.md §6.2 Project Detail Components, §11 Component Contract Rule
 *
 * 책임:
 * - "7. 핵심 기능" 섹션의 콘텐츠만 렌더링한다. 레이아웃(제목/간격)은 소유자인
 *   DetailSection의 몫이라 여기서 구현하지 않는다.
 * - features 배열의 각 항목을 name(제목) → description 순서로 렌더링한 뒤,
 *   gallery를 Gallery에 위임한다. 이미지 표시/확대 로직은 직접 구현하지 않는다.
 * - gallery는 개별 feature가 아니라 섹션 전체에 속하는 배열이다 (docs/DATA_MODEL.md §5.5).
 * - features가 비어 있으면(변수 길이 컬렉션) 아무것도 렌더링하지 않는다.
 */
export interface FeaturesSectionProps {
  features: ProjectFeature[];
  gallery: ProjectGalleryImage[];
}

export function FeaturesSection({ features, gallery }: FeaturesSectionProps) {
  if (features.length === 0) return null;

  return (
    <div className="space-y-8">
      {features.map((feature) => (
        <article key={feature.name}>
          <h3>{feature.name}</h3>
          <p>{feature.description}</p>
        </article>
      ))}
      <Gallery images={gallery} />
    </div>
  );
}
