interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Project Detail (임시 placeholder)
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.4 Project Detail
 *
 * 문제 → 접근 → 해결 → 결과 구조로 하나의 프로젝트를 깊이 있게 보여주는 상세 페이지.
 */
export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;

  return (
    <div>
      <h1>Project Detail</h1>
      <p>프로젝트 상세 페이지입니다. (slug: {slug}) 콘텐츠는 준비 중입니다.</p>
      {/* TODO: 헤더, 개요, 문제 정의, 접근 및 해결, 결과, 갤러리, PDF, 사용 역량 섹션 구현 예정 */}
      {/* TODO: projects.json에서 slug로 단일 항목을 조회해 연동 예정 */}
    </div>
  );
}
