import { getProfile } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

/**
 * AboutSummary
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.2 About (구성 섹션 1. 소개 — 배경, 간단한 자기소개)
 *
 * 책임:
 * - AboutHero 다음에 이어지는, profile.json의 짧은 자기소개와 기획자로서의
 *   방향성을 전달한다.
 */
export function AboutSummary() {
  const profile = getProfile();

  return (
    <Section tone="muted">
      <Container>
        <p className="max-w-2xl text-base text-text-secondary leading-relaxed">
          {profile.summary}
        </p>
        <p className="mt-4 max-w-2xl text-base text-text-secondary leading-relaxed">
          {profile.direction}
        </p>
      </Container>
    </Section>
  );
}
