import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/**
 * CallToAction
 *
 * 참고 문서:
 * - docs/INFORMATION_ARCHITECTURE.md - 2.1 Home (구성 섹션 6. 마무리 CTA 영역)
 * - docs/DESIGN_SYSTEM.md - 6. Component Library (Button)
 *
 * 책임:
 * - Home 마지막에서 "프로젝트 보기", "이력서 다운로드", "연락하기"로 이어지는
 *   행동 유도 영역을 제공한다.
 * - `docs/PROJECT.md`의 핵심 목표(프로젝트 증명)에 따라 "프로젝트 보기"를 primary로,
 *   나머지 둘을 secondary/tertiary로 구분해 강조 수준을 나눈다(Button Variant 일관성).
 */
export function CallToAction() {
  return (
    <Section>
      <Container>
        <p>프로젝트, 이력서, 연락처로 이어지는 CTA 영역입니다.</p>
        <Button href="/projects" variant="primary">
          프로젝트 보기
        </Button>
        <Button href="/resume" variant="secondary">
          이력서 다운로드
        </Button>
        <Button href="/contact" variant="tertiary">
          연락하기
        </Button>
      </Container>
    </Section>
  );
}
