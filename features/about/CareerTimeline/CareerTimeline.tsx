import { getResume } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

/**
 * CareerTimeline
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.2 About (구성 섹션 4. 경력 하이라이트)
 *
 * 책임:
 * - resume.json의 career 배열 중 앞 3건만 하이라이트로 보여준다.
 * - 전체 이력은 Resume의 ExperienceTimeline이 담당하므로, 여기서는 하이라이트만
 *   다룬다 — 데이터 소스와 Card 표현 방식은 ExperienceTimeline과 동일하게 유지한다
 *   (UI Consistency Rule). 별도 Timeline UI 컴포넌트는 만들지 않는다.
 * - 경력이 하나도 없으면 Empty State를 보여준다(ExperienceTimeline과 동일한 문구).
 */
const HIGHLIGHT_COUNT = 3;

export function CareerTimeline() {
  const { career } = getResume();
  const highlights = career.slice(0, HIGHLIGHT_COUNT);

  return (
    <Section>
      <Container>
        <h2 className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
          Career Timeline
        </h2>
        {highlights.length === 0 ? (
          <p className="mt-6 text-base text-text-secondary">
            등록된 경력 정보가 없습니다.
          </p>
        ) : (
          <div className="mt-6 flex flex-col gap-4">
            {highlights.map((entry) => (
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
