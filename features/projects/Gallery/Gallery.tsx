"use client";

import { useState } from "react";
import Image from "next/image";
import { Modal } from "@/components/common/Modal";
import type { ProjectGalleryImage } from "@/types/project";

/**
 * Gallery
 *
 * 참고 문서:
 * - docs/DATA_MODEL.md §5.7 (ProjectGalleryImage), docs/CONTENT_GUIDE.md §7 (이미지 사용 규칙)
 * - docs/DESIGN_SYSTEM.md §6.2 Project Detail Components, §9 Component Dependency Rule
 *   (Gallery → Modal), §11 Component Contract Rule
 * - docs/ARCHITECTURE.md §14.2 Performance (next/image 적용 범위와 근거)
 *
 * 책임:
 * - gallery 배열을 썸네일 그리드로 배치하고 선택 상태(selectedIndex)만 관리한다.
 * - 확대 표시는 Modal에 위임한다 — 확대 UI 자체를 구현하지 않는다.
 * - purpose는 대체 텍스트(alt)로만 쓰이고 화면에 보이지 않는다. description/caption은
 *   둘 다 시각 텍스트로 노출해야 하지만 Contract가 둘의 상대 순서를 규정하지 않아,
 *   caption(짧은 요약)은 썸네일 아래에, description(전체 설명)은 확대 보기에 배치했다.
 * - `type`은 이 Contract의 Output에 포함되지 않아 화면에 렌더링하지 않는다
 *   (docs/DESIGN_SYSTEM.md §11 Gallery Contract 참고).
 *
 * 썸네일만 next/image로 전환했다(feature/platform-performance). 이미 `aspect-video`로
 * 비율이 고정되어 있어 `fill`+`sizes`로 그대로 옮길 수 있고, 그리드 하단이라 lazy
 * loading(next/image 기본값) 이득이 실제로 있다. 확대 보기 이미지는 그대로 `<img>`를
 * 쓴다 — 스크린샷/와이어프레임/UML 등 원본 비율이 제각각이라 `max-h-[70vh] w-full
 * object-contain`으로 자연스러운 비율을 유지해야 하는데, `next/image`의 `fill`은
 * 고정 비율 컨테이너가 필요해 억지로 씌우면 세로로 긴 이미지가 레터박싱되는 시각적
 * 회귀가 생긴다. 게다가 클릭 전에는 마운트조차 되지 않아(`{selected && ...}`) 초기
 * 로드에 영향이 없다 — 전환해도 실제 성능 이득이 없다(브랜치 목표의 "억지 전환 금지").
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
              className="block w-full text-left transition-opacity duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-md">
                <Image
                  src={image.src}
                  alt={image.purpose}
                  fill
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
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
            {/* eslint-disable-next-line @next/next/no-img-element -- 원본 비율 유지가 next/image의 fill 제약과 충돌한다. 클릭 전 마운트되지 않아 초기 로드 영향 없음(위 컴포넌트 docblock 참고) */}
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
