import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/**
 * ContactCallToAction
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.9 Contact (구성 섹션 3. Resume/Projects로 돌아가는 참고 링크)
 *
 * 책임:
 * - Contact를 본 방문자가 이력서를 내려받거나 프로젝트로 돌아갈 수 있는 선택적
 *   마무리 경로를 제공한다. 정적 내비게이션이라 데이터를 조회하지 않는다
 *   (About/Home의 CallToAction과 동일한 성격).
 */
export function ContactCallToAction() {
  return (
    <Section tone="muted">
      <Container>
        <div className="flex flex-wrap gap-4">
          <Button href="/resume" variant="secondary">
            이력서 다운로드
          </Button>
          <Button href="/projects" variant="tertiary">
            프로젝트 보기
          </Button>
        </div>
      </Container>
    </Section>
  );
}
