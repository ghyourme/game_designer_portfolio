"use client";

/**
 * Error (임시 placeholder)
 *
 * 참고 문서: docs/DESIGN_SYSTEM.md - 7. Interaction Principles (Error States)
 *
 * 페이지 렌더링 중 오류가 발생했을 때 표시되는 최소 에러 바운더리.
 */
export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h1>오류가 발생했습니다.</h1>
      <button onClick={() => reset()}>다시 시도</button>
    </div>
  );
}
