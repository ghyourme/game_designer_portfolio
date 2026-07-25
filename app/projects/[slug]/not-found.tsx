import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/**
 * Project Not Found
 *
 * 참고 문서: docs/ARCHITECTURE.md - §13.1 Data Resilience (Record Not Found)
 *
 * app/projects/[slug]/page.tsx가 slug로 프로젝트를 찾지 못해 notFound()를 호출하면
 * Next.js가 이 세그먼트 전용 not-found를 렌더링한다. 루트 app/not-found.tsx와 같은
 * 패턴(Section/Container/Button)을 쓰되, 홈이 아니라 Projects 목록으로 되돌린다.
 */
export default function ProjectNotFound() {
  return (
    <Section>
      <Container>
        <h1>프로젝트를 찾을 수 없습니다</h1>
        <p>요청한 프로젝트가 존재하지 않거나 삭제되었습니다.</p>
        <Button href="/projects">Projects 목록으로</Button>
      </Container>
    </Section>
  );
}
