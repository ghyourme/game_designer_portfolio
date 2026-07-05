import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

/**
 * FeaturedProjects
 *
 * 참고 문서:
 * - docs/INFORMATION_ARCHITECTURE.md - 2.1 Home (구성 섹션 3. Featured Projects)
 * - docs/DESIGN_SYSTEM.md - 6. Component Library (Card, Badge)
 *
 * 책임:
 * - projects.json 중 featured가 true인 프로젝트만 선별해 보여주는 영역.
 * - 아직 데이터 연동 없이, 목록이 렌더링될 구조만 갖춘 placeholder다.
 */
export function FeaturedProjects() {
  return (
    <Section>
      <Container>
        <h2>Featured Projects</h2>
        {/* TODO: projects.json에서 featured: true 항목을 map으로 렌더링 (현재는 구조 예시용 카드 1개) */}
        <Card>
          <Badge>Featured</Badge>
          <p>대표 프로젝트 카드가 표시될 영역입니다.</p>
        </Card>
      </Container>
    </Section>
  );
}
