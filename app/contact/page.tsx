import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description: "연락 가능한 경로를 안내하는 페이지입니다.",
  path: "/contact",
});

/**
 * Contact (임시 placeholder)
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.9 Contact
 *
 * 방문자가 마찰 없이 연락할 수 있는 경로를 제공하는 페이지.
 */
export default function ContactPage() {
  return (
    <div>
      <h1>Contact</h1>
      <p>연락처 페이지입니다. 콘텐츠는 준비 중입니다.</p>
      {/* TODO: 연락 정보/링크 섹션 구현 예정 */}
      {/* TODO: profile.json 연동 예정 */}
    </div>
  );
}
