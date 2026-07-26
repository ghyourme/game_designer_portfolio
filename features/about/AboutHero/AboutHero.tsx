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
    <Section className="border-b border-border-default bg-gradient-to-b from-background-elevated to-background-base">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-lg font-medium text-brand-primary sm:text-xl">
          {profile.targetRole}
        </p>
        <p className="mt-2 max-w-2xl text-base text-text-secondary leading-relaxed sm:text-lg">
          {profile.tagline}
        </p>
      </Container>
    </Section>
  );
}
