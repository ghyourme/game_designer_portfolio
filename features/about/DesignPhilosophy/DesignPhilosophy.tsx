import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

/**
 * DesignPhilosophy
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.2 About (구성 섹션 2. 설계 철학 / 일하는 방식)
 *
 * 책임:
 * - 게임을 어떻게 설계하는지, 문제 해결 방식, 플레이어 경험을 바라보는 관점을 전달한다.
 * - 아직 profile.json 연동 없이 구조만 갖춘 placeholder다.
 */
export function DesignPhilosophy() {
  return (
    <Section>
      <Container>
        <h2>Design Philosophy</h2>
        <p>게임을 어떻게 설계하는지가 표시될 영역입니다.</p>
        <p>문제 해결 방식이 표시될 영역입니다.</p>
        <p>플레이어 경험을 바라보는 관점이 표시될 영역입니다.</p>
        {/* TODO: profile.json 연동 예정 */}
      </Container>
    </Section>
  );
}
