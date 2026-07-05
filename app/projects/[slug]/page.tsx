import { getProjects } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ProjectHero } from "@/features/projects/ProjectHero";
import { ProjectSection } from "@/features/projects/ProjectSection";

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
 * 9개 섹션과 Project 필드 대응(콘텐츠 연동 시 참고):
 * 프로젝트 개요→overview, 담당 역할→contribution, 문제 정의→problem,
 * 접근 과정→solution, 시스템 설계→systems, 핵심 기능→contents, 결과→result.
 * "목표"와 "회고"는 docs/DATA_MODEL.md의 Project 모델에 대응 필드가 아직 없다 —
 * 콘텐츠를 연동하기 전에 문서를 먼저 보강해야 한다. (self-review에서 발견한 개선사항)
 */
const DETAIL_SECTION_TITLES = [
  "프로젝트 개요",
  "담당 역할",
  "목표",
  "문제 정의",
  "접근 과정",
  "시스템 설계",
  "핵심 기능",
  "결과",
  "회고",
] as const;

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
      {DETAIL_SECTION_TITLES.map((title) => (
        <ProjectSection key={title} title={title} />
      ))}
    </>
  );
}
