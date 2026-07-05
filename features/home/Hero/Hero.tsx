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
 * - Home 최상단에서 이름/정체성, 지향 역할, 한 줄 소개를 전달하는 첫인상 영역.
 * - 아직 profile.json 연동 없이 구조만 갖춘 placeholder다.
 */
export function Hero() {
  return (
    <Section>
      <Container>
        <h1>Game Designer Portfolio</h1>
        <p>이름, 지향 역할, 한 줄 소개가 표시될 영역입니다.</p>
        {/* TODO: profile.json 연동 — 이름/정체성, 지향 역할(시스템 기획자 / 콘텐츠 기획자), 한 줄 소개 */}
      </Container>
    </Section>
  );
}
