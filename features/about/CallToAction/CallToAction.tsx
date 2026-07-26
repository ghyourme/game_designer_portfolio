import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/**
 * CallToAction
 *
 * 참고 문서:
 * - docs/INFORMATION_ARCHITECTURE.md - 2.2 About (구성 섹션 7. 마무리 CTA)
 * - docs/DESIGN_SYSTEM.md - 6. Component Library (Button)
 *
 * 책임:
 * - About 마지막에서 "프로젝트 보기", "이력서 보기", "연락하기"로 이어지는
 *   행동 유도 영역을 제공한다. Home의 CallToAction과 동일한 목적·강조 순서를 갖는다.
 */
export function CallToAction() {
  return (
    <Section tone="muted">
      <Container>
        <p className="text-lg text-text-secondary">
          프로젝트, 이력서, 연락처로 이어지는 CTA 영역입니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button href="/projects" variant="primary">
            프로젝트 보기
          </Button>
          <Button href="/resume" variant="secondary">
            이력서 보기
          </Button>
          <Button href="/contact" variant="tertiary">
            연락하기
          </Button>
        </div>
      </Container>
    </Section>
  );
}
