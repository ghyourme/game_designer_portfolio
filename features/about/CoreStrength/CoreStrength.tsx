import { getProfile } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { Badge } from "@/components/ui/Badge";

/**
 * CoreStrength
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.2 About (구성 섹션 3. 핵심 강점)
 *
 * 책임:
 * - profile.json의 coreStrengths(기획자로서 스스로 규정하는 정성적 핵심 강점)를
 *   Tag로 나열한다.
 * - Badge는 "이 항목이 예시"라는 뜻이 아니라, 이 섹션이 자기 서술형(정성적) 정보라는
 *   성격을 표시한다 — SkillOverview(skills.json이 관리하는 정량적 기술 분류)와
 *   역할이 겹치지 않음을 보여주기 위함이다.
 */
export function CoreStrength() {
  const profile = getProfile();

  return (
    <Section>
      <Container>
        <h2>Core Strength</h2>
        <Badge variant="neutral">자기 서술형</Badge>
        <div>
          {profile.coreStrengths.map((strength) => (
            <Tag key={strength}>{strength}</Tag>
          ))}
        </div>
      </Container>
    </Section>
  );
}
