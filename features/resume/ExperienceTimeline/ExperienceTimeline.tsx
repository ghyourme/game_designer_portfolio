import { getResume } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

/**
 * ExperienceTimeline
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.8 Resume (구성 섹션 2. 경력 사항)
 *
 * 책임:
 * - resume.json의 career 배열을 Card 목록으로 나열한다.
 * - About의 CareerTimeline과 마찬가지로 별도 Timeline UI 컴포넌트는 만들지 않고
 *   Card를 세로로 배치하는 구조만 사용한다 (향후 Diagram Candidate — self-review 참고).
 * - 경력이 하나도 없으면 Empty State를 보여준다 (현재 data/resume.json의 career는
 *   빈 배열이라 항상 이 경로를 탄다).
 */
export function ExperienceTimeline() {
  const { career } = getResume();

  return (
    <Section>
      <Container>
        <h2 className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
          Career
        </h2>
        {career.length === 0 ? (
          <p className="mt-6 text-base text-text-secondary">
            등록된 경력 정보가 없습니다.
          </p>
        ) : (
          <div className="mt-6 flex flex-col gap-4">
            {career.map((entry) => (
              <Card key={entry.id}>
                <h3 className="text-lg font-semibold text-text-primary">
                  {entry.company}
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
