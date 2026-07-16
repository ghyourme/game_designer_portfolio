"use client";

import { useState } from "react";
import { Modal } from "@/components/common/Modal";
import type { ProjectGalleryImage } from "@/types/project";

/**
 * Gallery
 *
 * 참고 문서:
 * - docs/DATA_MODEL.md §5.7 (ProjectGalleryImage), docs/CONTENT_GUIDE.md §7 (이미지 사용 규칙)
 * - docs/DESIGN_SYSTEM.md §6.2 Project Detail Components, §9 Component Dependency Rule
 *   (Gallery → Modal), §11 Component Contract Rule
 *
 * 책임:
 * - gallery 배열을 썸네일 그리드로 배치하고 선택 상태(selectedIndex)만 관리한다.
 * - 확대 표시는 Modal에 위임한다 — 확대 UI 자체를 구현하지 않는다.
 * - purpose는 대체 텍스트(alt)로만 쓰이고 화면에 보이지 않는다. description/caption은
 *   둘 다 시각 텍스트로 노출해야 하지만 Contract가 둘의 상대 순서를 규정하지 않아,
 *   caption(짧은 요약)은 썸네일 아래에, description(전체 설명)은 확대 보기에 배치했다.
 * - `type`은 이 Contract의 Output에 포함되지 않아 화면에 렌더링하지 않는다
 *   (docs/DESIGN_SYSTEM.md §11 Gallery Contract 참고).
 */
export interface GalleryProps {
  images: ProjectGalleryImage[];
}

export function Gallery({ images }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  const selected = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {images.map((image, index) => (
          <li key={image.src}>
            <button
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="block w-full text-left"
            >
              <img
                src={image.src}
                alt={image.purpose}
                className="aspect-video w-full rounded-md object-cover"
              />
              <span className="mt-1 block text-xs text-text-secondary">
                {image.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>
      <Modal isOpen={selected !== null} onClose={() => setSelectedIndex(null)}>
        {selected && (
          <>
            <img
              src={selected.src}
              alt={selected.purpose}
              className="max-h-[70vh] w-full rounded-md object-contain"
            />
            <p className="mt-2 text-sm text-text-secondary">
              {selected.description}
            </p>
          </>
        )}
      </Modal>
    </>
  );
}
