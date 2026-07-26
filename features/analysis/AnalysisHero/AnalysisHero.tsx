import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { Badge } from "@/components/ui/Badge";
import { MetaInfo } from "@/components/common/MetaInfo";
import type { Analysis } from "@/types/analysis";

/**
 * AnalysisHero
 *
 * 참고 문서:
 * - docs/INFORMATION_ARCHITECTURE.md - 2.6 Analysis Detail (표시 순서 1. 헤더)
 * - docs/DESIGN_SYSTEM.md - 6.2 Analysis Components / Component Contract Rule
 *
 * 책임:
 * - Analysis Detail 최상단에서 title, description, tags, featured 배지,
 *   분석 대상(targetGame)·분석 목적(purpose)을 보여주는 헤더 블록만 담당한다.
 *   본문 4개 섹션(시스템/콘텐츠/UX 분석, 결론) 콘텐츠는 담당하지 않는다.
 * - ProjectHero와 동일한 Hero 패턴의 Analysis 전용 인스턴스다 (docs/DESIGN_SYSTEM.md §6).
 */
export interface AnalysisHeroProps {
  analysis: Analysis;
}

export function AnalysisHero({ analysis }: AnalysisHeroProps) {
  return (
    <Section className="border-b border-border-default bg-gradient-to-b from-background-elevated to-background-base">
      <Container>
        {analysis.featured && <Badge variant="featured">Featured</Badge>}
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          {analysis.title}
        </h1>
        <p className="mt-2 max-w-2xl text-lg text-text-secondary">{analysis.description}</p>
        <dl className="mt-6 grid grid-cols-2 gap-x-6">
          <MetaInfo label="분석 대상" value={analysis.targetGame} />
          <MetaInfo label="분석 목적" value={analysis.purpose} />
        </dl>
        {analysis.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {analysis.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
