"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/Button";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Modal
 *
 * 참고 문서:
 * - docs/DESIGN_SYSTEM.md - 6. Component Library (Modal), 8. Shared Components,
 *   9. Component Dependency Rule (Gallery → Modal)
 * - docs/ARCHITECTURE.md - §13.2 Rendering Resilience, §14.1(과 별개로) Accessibility
 *   실제 구현은 docs/DESIGN_SYSTEM.md §13 Contract를 따른다
 *
 * 책임:
 * - 페이지 이동 없이 포커스된 콘텐츠(예: 확대된 갤러리 이미지)를 오버레이로 보여주는
 *   범용 컨테이너. 무엇을 보여줄지는 전혀 모른다 — isOpen/onClose/children(+선택적
 *   ariaLabel)만 받는 제어 컴포넌트다.
 * - Gallery의 확대 보기 Contract를 충족하기 위한 최소 구현이다. Animation, Swipe,
 *   Zoom, Carousel, 이미지 간 이동 같은 키보드 단축키는 이번 범위 밖이다.
 * - 열릴 때: 열기 전 포커스를 기억하고, 다이얼로그로 포커스를 옮긴다.
 * - 열려 있는 동안: Tab/Shift+Tab이 다이얼로그 내부에서만 순환한다(포커스 트랩) —
 *   배경 콘텐츠로 포커스가 새어나가지 않는다. Escape·배경 클릭으로 닫힌다.
 * - 닫힐 때: 열기 전 포커스했던 요소로 복귀한다 — 사용자가 있던 자리를 잃지 않는다.
 * - Project/Analysis Detail 어디에도 종속되지 않아 components/common/에 둔다.
 *   향후 Personal Works 등 다른 이미지 확대가 필요한 곳에서도 재사용할 수 있다.
 */
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  /** 다이얼로그의 접근 가능한 이름. 스크린 리더가 "dialog"만 읽지 않도록 호출자가 내용에 맞게 지정한다. */
  ariaLabel?: string;
}

export function Modal({ isOpen, onClose, children, ariaLabel }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const dialog = dialogRef.current;
      if (!dialog) return;

      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      );
      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocusedRef.current?.focus();
    };
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
        aria-label={ariaLabel}
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
