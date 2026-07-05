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
 * - 기획자로서 스스로 규정하는 정성적(qualitative) 핵심 강점을 Tag로 훑어볼 수 있게
 *   나열하고, Badge로 "예시 항목"임을 표시한다.
 * - SkillOverview(skills.json이 관리하는 정량적 기술 분류)와 역할이 겹치지 않도록,
 *   여기서는 숫자·카테고리 데이터가 아니라 자기 서술형 강점만 다룬다.
 * - 아래 목록은 실제 강점 데이터가 아니라 구조를 보여주기 위한 placeholder다.
 * - 실제 데이터는 profile.json 연동 시 결정한다. (TODO)
 */
const CORE_STRENGTH_PLACEHOLDERS = [
  "Systems Thinking",
  "Player-first Mindset",
  "Communication",
  "Problem Solving",
] as const;

export function CoreStrength() {
  return (
    <Section>
      <Container>
        <h2>Core Strength</h2>
        <Badge variant="neutral">예시</Badge>
        <div>
          {CORE_STRENGTH_PLACEHOLDERS.map((strength) => (
            <Tag key={strength}>{strength}</Tag>
          ))}
        </div>
        {/* TODO: profile.json 기반 실제 핵심 강점 연동 예정 */}
      </Container>
    </Section>
  );
}
