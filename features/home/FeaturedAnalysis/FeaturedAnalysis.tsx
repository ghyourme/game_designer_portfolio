import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";

/**
 * FeaturedAnalysis
 *
 * 참고 문서:
 * - docs/INFORMATION_ARCHITECTURE.md - 2.1 Home (구성 섹션 4. Featured Analysis)
 * - docs/DESIGN_SYSTEM.md - 6. Component Library (Card, Tag)
 *
 * 책임:
 * - analysis.json 중 대표 분석 콘텐츠 1~2개를 선별해 보여주는 선택적 영역.
 * - 아직 데이터 연동 없이, 목록이 렌더링될 구조만 갖춘 placeholder다.
 */
export function FeaturedAnalysis() {
  return (
    <Section>
      <Container>
        <h2>Featured Analysis</h2>
        {/* TODO: analysis.json에서 대표 분석 1~2개를 map으로 렌더링 (현재는 구조 예시용 카드 1개) */}
        <Card>
          <Tag>분석 태그</Tag>
          <p>대표 분석 카드가 표시될 영역입니다.</p>
        </Card>
      </Container>
    </Section>
  );
}
