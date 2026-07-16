import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/**
 * Not Found (임시 placeholder)
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.10 404 (Not Found)
 *
 * 존재하지 않는 경로에 접근했을 때 표시되는 최소 404 페이지. 다른 모든 페이지와
 * 동일하게 Section/Container로 감싸고, 내비게이션은 공용 Button을 재사용한다
 * (UI Consistency Rule — 이전에는 스타일 없는 네이티브 next/link를 직접 썼다).
 */
export default function NotFound() {
  return (
    <Section>
      <Container>
        <h1>404</h1>
        <p>페이지를 찾을 수 없습니다.</p>
        <Button href="/">홈으로 돌아가기</Button>
      </Container>
    </Section>
  );
}
