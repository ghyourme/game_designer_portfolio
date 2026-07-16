import { getProjects } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
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
 * getProjects()에서 slug로 단일 프로젝트를 조회한다. 아직 projects.json이 비어 있어
 * 항상 찾지 못하는 경로를 타지만, 데이터가 채워지면 즉시 아래 구조로 렌더링된다.
 *
 * 9개 섹션과 Project 필드 대응(docs/DATA_MODEL.md §5와 동일): 프로젝트 개요→overview,
 * 담당 역할→contribution(+skills), 목표→goal, 문제 정의→problem, 접근 과정→approach,
 * 시스템 설계→SystemsSection(systems, documents), 핵심 기능→FeaturesSection(features,
 * gallery), 결과→result, 회고→retrospective.
 */
export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjects().find((item) => item.slug === slug);

  if (!project) {
    return (
      <Section>
        <Container>
          <h1>Project Not Found</h1>
          <p>요청한 프로젝트(slug: {slug})를 찾을 수 없습니다.</p>
        </Container>
      </Section>
    );
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
    </>
  );
}
