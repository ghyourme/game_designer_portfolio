import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

/**
 * AboutHero
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.2 About (구성 섹션 1. 소개)
 *
 * 책임:
 * - About 페이지 최상단에서 이름, 희망 직무, 한 줄 소개를 전달하는 첫인상 영역.
 * - 아직 profile.json 연동 없이 구조만 갖춘 placeholder다.
 */
export function AboutHero() {
  return (
    <Section>
      <Container>
        <h1>이름이 표시될 영역입니다.</h1>
        <p>희망 직무가 표시될 영역입니다.</p>
        <p>한 줄 소개가 표시될 영역입니다.</p>
        {/* TODO: profile.json 연동 — 이름, 희망 직무, 한 줄 소개 */}
      </Container>
    </Section>
  );
}
