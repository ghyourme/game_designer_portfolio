"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/Button";

/**
 * Modal
 *
 * 참고 문서:
 * - docs/DESIGN_SYSTEM.md - 6. Component Library (Modal), 8. Shared Components,
 *   9. Component Dependency Rule (Gallery → Modal)
 *
 * 책임:
 * - 페이지 이동 없이 포커스된 콘텐츠(예: 확대된 갤러리 이미지)를 오버레이로 보여주는
 *   범용 컨테이너. 무엇을 보여줄지는 전혀 모른다 — isOpen/onClose/children만 받는
 *   제어 컴포넌트다.
 * - Gallery의 확대 보기 Contract를 충족하기 위한 최소 구현이다. Animation, Swipe,
 *   Zoom, Carousel, 이미지 간 이동 같은 키보드 단축키는 이번 범위 밖이다 — Escape로
 *   닫기, 배경 클릭으로 닫기, 열릴 때 포커스 이동만 제공한다.
 * - Project/Analysis Detail 어디에도 종속되지 않아 components/common/에 둔다.
 *   향후 Personal Works 등 다른 이미지 확대가 필요한 곳에서도 재사용할 수 있다.
 */
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    dialogRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background-inverse/70 p-4"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
        className="relative max-h-full max-w-3xl overflow-auto rounded-lg bg-background-base p-6 shadow-lg"
      >
        <Button
          type="button"
          variant="tertiary"
          onClick={onClose}
          aria-label="닫기"
          className="absolute right-2 top-2"
        >
          ✕
        </Button>
        {children}
      </div>
    </div>,
    document.body,
  );
}
