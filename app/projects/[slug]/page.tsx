import { notFound } from "next/navigation";
import { getProjects, findBySlug } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { ProjectHero } from "@/features/projects/ProjectHero";
import { DetailSection } from "@/components/common/DetailSection";
import { SystemsSection } from "@/features/projects/SystemsSection";
import { FeaturesSection } from "@/features/projects/FeaturesSection";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Project Detail
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.4 Project Detail
 *
 * getProjects()에서 slug로 단일 프로젝트를 조회한다(findBySlug 공용 헬퍼). 아직
 * projects.json이 비어 있어 항상 notFound()로 빠지지만, 데이터가 채워지면 즉시
 * 아래 구조로 렌더링된다. 존재하지 않는 slug는 app/projects/[slug]/not-found.tsx가
 * 처리한다 — 인라인 텍스트로 대신하지 않는다(docs/ARCHITECTURE.md §13.1).
 *
 * 9개 섹션과 Project 필드 대응(docs/DATA_MODEL.md §5와 동일): 프로젝트 개요→overview,
 * 담당 역할→contribution(+skills), 목표→goal, 문제 정의→problem, 접근 과정→approach,
 * 시스템 설계→SystemsSection(systems, documents), 핵심 기능→FeaturesSection(features,
 * gallery), 결과→result, 회고→retrospective. 마지막 목록 복귀 링크는
 * docs/INFORMATION_ARCHITECTURE.md §2.4 "11. 다른 프로젝트로 이동하는 내비게이션"에 대응한다.
 */
export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = findBySlug(getProjects(), slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectHero project={project} />
      <DetailSection title="프로젝트 개요">
        <p>{project.overview}</p>
      </DetailSection>
      <DetailSection title="담당 역할">
        <p>{project.contribution}</p>
        {project.skills.length > 0 && (
          <div>
            {project.skills.map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </div>
        )}
      </DetailSection>
      <DetailSection title="목표">
        <p>{project.goal}</p>
      </DetailSection>
      <DetailSection title="문제 정의">
        <p>{project.problem}</p>
      </DetailSection>
      <DetailSection title="접근 과정">
        <p>{project.approach}</p>
      </DetailSection>
      <DetailSection title="시스템 설계">
        <SystemsSection systems={project.systems} documents={project.documents} />
      </DetailSection>
      <DetailSection title="핵심 기능">
        <FeaturesSection features={project.features} gallery={project.gallery} />
      </DetailSection>
      <DetailSection title="결과">
        <p>{project.result}</p>
      </DetailSection>
      <DetailSection title="회고">
        <p>{project.retrospective}</p>
      </DetailSection>
      <Section>
        <Container>
          <Button href="/projects" variant="secondary">
            Projects 목록으로
          </Button>
        </Container>
      </Section>
    </>
  );
}
