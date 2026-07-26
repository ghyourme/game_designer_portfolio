import { getProfile, getSkills } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { flattenSkills } from "@/utils/skills";

/**
 * Introduction
 *
 * 참고 문서:
 * - docs/INFORMATION_ARCHITECTURE.md - 2.1 Home (구성 섹션 2. 핵심 역량 요약, 5. About 미리보기)
 * - docs/DESIGN_SYSTEM.md - 6. Component Library (Section, Tag, Button)
 *
 * 책임:
 * - Hero 다음에 핵심 역량 요약(skills.json)과 About 페이지 미리보기(profile.json
 *   summary + 이동 링크)를 전달한다.
 * - 역량 요약은 About의 SkillOverview/Resume의 SkillSummary와 동일한 데이터·나열
 *   로직(utils/skills.ts의 flattenSkills)을 공유한다 — 세 곳의 스킬 정보가 서로
 *   어긋나지 않게 한다.
 * - 등록된 스킬이 하나도 없으면 Empty State를 보여준다(SkillOverview/SkillSummary와
 *   동일한 문구).
 */
export function Introduction() {
  const profile = getProfile();
  const allSkills = flattenSkills(getSkills());

  return (
    <Section tone="muted">
      <Container>
        {allSkills.length === 0 ? (
          <p className="text-base text-text-secondary">등록된 기술 정보가 없습니다.</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {allSkills.map((skill) => (
              <Tag key={skill.name}>{skill.name}</Tag>
            ))}
          </div>
        )}
        <p className="mt-6 max-w-2xl text-base text-text-secondary leading-relaxed">
          {profile.summary}
        </p>
        <div className="mt-6">
          <Button href="/about" variant="tertiary">
            자세히 보기
          </Button>
        </div>
      </Container>
    </Section>
  );
}
