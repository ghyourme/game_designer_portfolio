import { getProfile } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

/**
 * Hero
 *
 * 참고 문서:
 * - docs/INFORMATION_ARCHITECTURE.md - 2.1 Home (구성 섹션 1. Hero)
 * - docs/DESIGN_SYSTEM.md - 6. Component Library (Hero)
 *
 * 책임:
 * - Home 최상단에서 profile.json의 이름/정체성, 지향 역할, 한 줄 소개를 전달하는
 *   첫인상 영역.
 * - About의 AboutHero와 동일한 필드(name/targetRole/tagline)를 동일한 방식으로
 *   보여준다 — 두 Hero는 서로 다른 페이지의 인스턴스일 뿐, 데이터 소스와 표현
 *   방식은 동일해야 한다(UI Consistency Rule).
 */
export function Hero() {
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
