import { getResume } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

/**
 * ProjectExperience
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.8 Resume (구성 섹션 3. 프로젝트 경험)
 *
 * 책임:
 * - resume.json의 projectExperience 배열을 Card 목록으로 나열한다.
 * - projects.json의 전체 케이스 스터디와는 다른, 이력서용 축약 목록이다
 *   (docs/DATA_MODEL.md §7 참고).
 * - 항목이 하나도 없으면 Empty State를 보여준다 (현재 data/resume.json의
 *   projectExperience는 빈 배열이라 항상 이 경로를 탄다).
 */
export function ProjectExperience() {
  const { projectExperience } = getResume();

  return (
    <Section tone="muted">
      <Container>
        <h2 className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
          Project Experience
        </h2>
        {projectExperience.length === 0 ? (
          <p className="mt-6 text-base text-text-secondary">
            등록된 프로젝트 경험이 없습니다.
          </p>
        ) : (
          <div className="mt-6 flex flex-col gap-4">
            {projectExperience.map((entry) => (
              <Card key={entry.id}>
                <h3 className="text-lg font-semibold text-text-primary">
                  {entry.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-text-secondary">
                  {entry.role} · {entry.period}
                </p>
                <p className="mt-3 text-base text-text-secondary leading-relaxed">
                  {entry.description}
                </p>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
