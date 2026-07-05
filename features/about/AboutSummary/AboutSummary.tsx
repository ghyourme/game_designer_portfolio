import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

/**
 * AboutSummary
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.2 About (구성 섹션 1. 소개 — 배경, 간단한 자기소개)
 *
 * 책임:
 * - AboutHero 다음에 이어지는 짧은 자기소개와 기획자로서의 방향성을 전달한다.
 * - 아직 profile.json 연동 없이 구조만 갖춘 placeholder다.
 */
export function AboutSummary() {
  return (
    <Section>
      <Container>
        <p>짧은 자기소개가 표시될 영역입니다.</p>
        <p>기획자로서의 방향성이 표시될 영역입니다.</p>
        {/* TODO: profile.json 연동 예정 */}
      </Container>
    </Section>
  );
}
