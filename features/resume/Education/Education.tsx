import { getResume } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

/**
 * Education
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.8 Resume (구성 섹션 5. 교육 정보)
 *
 * 책임:
 * - resume.json의 education 배열을 Card 목록으로 나열한다.
 * - 항목이 하나도 없으면 Empty State를 보여준다 (현재 data/resume.json의 education은
 *   빈 배열이라 항상 이 경로를 탄다).
 */
export function Education() {
  const { education } = getResume();

  return (
    <Section>
      <Container>
        <h2>Education</h2>
        {education.length === 0 ? (
          <p>등록된 교육 정보가 없습니다.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {education.map((entry) => (
              <Card key={entry.id}>
                <h3>{entry.school}</h3>
                <p>{entry.degree}</p>
                <p>{entry.period}</p>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
