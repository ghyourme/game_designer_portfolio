import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

/**
 * CareerTimeline
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.2 About (구성 섹션 4. 경력 하이라이트)
 *
 * 책임:
 * - 경력 하이라이트를 세로로 배치된 Card 목록으로 짧게 보여준다.
 * - 전체 이력은 Resume 페이지가 담당하므로, 여기서는 하이라이트만 다룬다.
 * - 별도 Timeline UI 컴포넌트는 만들지 않고, Card를 세로로 배치하는 구조만 사용한다.
 *
 * TODO: resume.json 연동 예정
 */
const CAREER_PLACEHOLDER_IDS = ["career-1", "career-2", "career-3"] as const;

export function CareerTimeline() {
  return (
    <Section>
      <Container>
        <h2>Career Timeline</h2>
        <div className="flex flex-col gap-4">
          {CAREER_PLACEHOLDER_IDS.map((id) => (
            <Card key={id}>
              <p>경력 항목이 표시될 영역입니다.</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
