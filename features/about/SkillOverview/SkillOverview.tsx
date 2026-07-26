import { getSkills } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { flattenSkills } from "@/utils/skills";

/**
 * SkillOverview
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.2 About (구성 섹션 4. 기술 분류)
 *
 * 책임:
 * - getSkills()로 skills.json을 읽어 4개 분류(systemDesign/contentDesign/analysis/tools)의
 *   기술을 Tag로 나열하는, 데이터 기반의 정량적 기술 분류 섹션이다.
 * - CoreStrength(자기 서술형 정성적 강점)와 역할이 겹치지 않도록, 여기서는 skills.json이
 *   관리하는 구조화된 스킬 데이터만 다룬다.
 * - 등록된 스킬이 하나도 없으면 Empty State를 보여준다 (현재 data/skills.json은 4개 분류
 *   모두 빈 배열이라 항상 이 경로를 탄다).
 * - Resume의 SkillSummary와 동일한 데이터를 동일한 방식으로 나열하므로, 분류 병합
 *   로직은 utils/skills.ts(flattenSkills)로 공유한다.
 */
export function SkillOverview() {
  const allSkills = flattenSkills(getSkills());

  return (
    <Section>
      <Container>
        <h2 className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
          Skill Overview
        </h2>
        {allSkills.length === 0 ? (
          <p className="mt-6 text-base text-text-secondary">
            등록된 기술 정보가 없습니다.
          </p>
        ) : (
          <div className="mt-6 flex flex-wrap gap-2">
            {allSkills.map((skill) => (
              <Tag key={skill.name}>{skill.name}</Tag>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
