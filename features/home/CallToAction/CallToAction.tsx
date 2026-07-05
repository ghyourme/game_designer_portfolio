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
 * - 아직 실제 라우팅 연결 없이 구조만 갖춘 placeholder다.
 */
export function CallToAction() {
  return (
    <Section>
      <Container>
        <p>프로젝트, 이력서, 연락처로 이어지는 CTA 영역입니다.</p>
        <Button>프로젝트 보기</Button>
        <Button>이력서 다운로드</Button>
        <Button>연락하기</Button>
        {/* TODO: 각 버튼을 /projects, /resume, /contact로 연결 예정 (Button에 href/variant props 추가 필요) */}
      </Container>
    </Section>
  );
}
