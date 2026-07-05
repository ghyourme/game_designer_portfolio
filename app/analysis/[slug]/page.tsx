interface AnalysisDetailPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Analysis Detail (임시 placeholder)
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.6 Analysis Detail
 *
 * 하나의 게임에 대한 구조화된 분석(시스템/콘텐츠/UX)과 결론을 보여주는 상세 페이지.
 */
export default async function AnalysisDetailPage({
  params,
}: AnalysisDetailPageProps) {
  const { slug } = await params;

  return (
    <div>
      <h1>Analysis Detail</h1>
      <p>게임 분석 상세 페이지입니다. (slug: {slug}) 콘텐츠는 준비 중입니다.</p>
      {/* TODO: 헤더, 시스템 분석, 콘텐츠 분석, UX 분석, 결론 섹션 구현 예정 */}
      {/* TODO: analysis.json 연동 예정 — 식별자 필드가 docs/DATA_MODEL.md에 아직 정의되어 있지 않아
         조회 방식은 후속 결정이 필요함 (docs/INFORMATION_ARCHITECTURE.md 2.6 참고) */}
    </div>
  );
}
