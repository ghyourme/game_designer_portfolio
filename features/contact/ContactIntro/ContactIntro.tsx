import { getProfile } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

/**
 * ContactIntro
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.9 Contact (구성 섹션 1. 연락 안내 문구)
 *
 * 책임:
 * - Contact 페이지 최상단에서 profile.json의 연락 안내 문구를 전달하는 첫인상 영역.
 * - AboutHero와 동일하게 profile.json을 자체적으로 조회한다(페이지에서 props로 전달하지 않음).
 */
export function ContactIntro() {
  const profile = getProfile();

  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
          Contact
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-text-secondary leading-relaxed">
          {profile.contactIntro}
        </p>
      </Container>
    </Section>
  );
}
