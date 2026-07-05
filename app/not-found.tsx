import Link from "next/link";

/**
 * Not Found (임시 placeholder)
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.10 404 (Not Found)
 *
 * 존재하지 않는 경로에 접근했을 때 표시되는 최소 404 페이지.
 */
export default function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>페이지를 찾을 수 없습니다.</p>
      <Link href="/">홈으로 돌아가기</Link>
    </div>
  );
}
