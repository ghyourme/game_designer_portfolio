import { getProfile } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

/**
 * DesignPhilosophy
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.2 About (구성 섹션 2. 설계 철학 / 일하는 방식)
 *
 * 책임:
 * - profile.json의 designApproach, problemSolving, playerExperience를 통해
 *   게임을 어떻게 설계하는지, 문제 해결 방식, 플레이어 경험을 바라보는 관점을 전달한다.
 */
export function DesignPhilosophy() {
  const profile = getProfile();

  return (
    <Section>
      <Container>
        <h2>Design Philosophy</h2>
        <p>{profile.designApproach}</p>
        <p>{profile.problemSolving}</p>
        <p>{profile.playerExperience}</p>
      </Container>
    </Section>
  );
}
