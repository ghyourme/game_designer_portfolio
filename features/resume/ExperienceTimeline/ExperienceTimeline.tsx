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
        <h2>Career</h2>
        {career.length === 0 ? (
          <p>등록된 경력 정보가 없습니다.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {career.map((entry) => (
              <Card key={entry.id}>
                <h3>{entry.company}</h3>
                <p>{entry.role}</p>
                <p>{entry.period}</p>
                <p>{entry.description}</p>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
