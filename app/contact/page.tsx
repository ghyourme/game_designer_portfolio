import { ContactIntro } from "@/features/contact/ContactIntro";
import { ContactInfo } from "@/features/contact/ContactInfo";
import { ContactCallToAction } from "@/features/contact/ContactCallToAction";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description: "연락 가능한 경로를 안내하는 페이지입니다.",
  path: "/contact",
});

/**
 * Contact
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.9 Contact
 *
 * ContactIntro → ContactInfo → ContactCallToAction 순서로 Contact의 3개 섹션을
 * 조합하는 조립 전용 페이지 (About/Home과 동일한 패턴).
 */
export default function ContactPage() {
  return (
    <>
      <ContactIntro />
      <ContactInfo />
      <ContactCallToAction />
    </>
  );
}
