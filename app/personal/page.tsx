import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Personal Works",
  description: "정식 프로젝트 외에 개인적으로 진행한 작업물을 소개하는 페이지입니다.",
  path: "/personal",
});

/**
 * Personal Works (임시 placeholder)
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.7 Personal Works
 *
 * 정식 프로젝트 외에 자발적으로 진행한 개인 작업을 보여주는 목록 페이지.
 */
export default function PersonalPage() {
  return (
    <div>
      <h1>Personal Works</h1>
      <p>개인 작업물 목록 페이지입니다. 콘텐츠는 준비 중입니다.</p>
      {/* TODO: 개인 작업물 목록, 결과 없음 상태 구현 예정 */}
      {/* TODO: personal.json 연동 예정 (세부 필드는 docs/DATA_MODEL.md에 아직 정의되지 않음) */}
      {/* TODO: 별도 상세 라우트는 이번 IA 범위에 없음 — 필요해지면 docs/INFORMATION_ARCHITECTURE.md를 먼저 갱신 */}
    </div>
  );
}
