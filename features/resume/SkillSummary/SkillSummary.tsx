import { getSkills } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { flattenSkills } from "@/utils/skills";

/**
 * SkillSummary
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.8 Resume (구성 섹션 4. 기술 스택)
 *
 * 책임:
 * - resume.json에 별도 skills 필드를 두지 않고, getSkills()로 skills.json을 그대로
 *   재사용해 4개 분류의 기술을 Tag로 나열한다 (docs/DATA_MODEL.md §7 참고).
 * - About의 SkillOverview와 동일한 데이터·나열 로직(utils/skills.ts의 flattenSkills)을
 *   공유해, 두 페이지의 스킬 정보가 서로 어긋나지 않게 한다.
 * - 등록된 스킬이 하나도 없으면 Empty State를 보여준다.
 */
export function SkillSummary() {
  const allSkills = flattenSkills(getSkills());

  return (
    <Section>
      <Container>
        <h2 className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
          Skills
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
