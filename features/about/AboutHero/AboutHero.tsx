import { getProfile } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

/**
 * AboutHero
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.2 About (구성 섹션 1. 소개)
 *
 * 책임:
 * - About 페이지 최상단에서 profile.json의 이름, 희망 직무, 한 줄 소개를 전달하는
 *   첫인상 영역.
 */
export function AboutHero() {
  const profile = getProfile();

  return (
    <Section>
      <Container>
        <h1>{profile.name}</h1>
        <p>{profile.targetRole}</p>
        <p>{profile.tagline}</p>
      </Container>
    </Section>
  );
}
