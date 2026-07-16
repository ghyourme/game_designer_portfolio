/**
 * MetaInfo
 *
 * 참고 문서:
 * - docs/DESIGN_SYSTEM.md - 6.1 Project Detail Components / 6.2 Analysis Components
 * - docs/DESIGN_SYSTEM.md - Component Contract Rule
 *
 * 책임:
 * - Project Detail·Analysis Detail 공용 label/value 메타 정보 한 쌍을 표현한다.
 * - dt/dd만 반환하므로, 반드시 부모(ProjectHero/AnalysisHero)의 dl 안에서 사용해야
 *   유효한 HTML이 된다.
 * - value가 빈 문자열이어도 dt/dd 자리를 그대로 렌더링한다 — 고정된 헤더 필드이므로
 *   조건부로 숨기지 않는다 (Empty State Contract).
 *
 * (구 features/projects/ProjectInfo — Analysis Detail에서도 동일하게 재사용되어
 * 페이지 종속적이지 않은 이름으로 옮겼다. docs/DESIGN_SYSTEM.md §7 참고.)
 */
export interface MetaInfoProps {
  label: string;
  value: string;
}

export function MetaInfo({ label, value }: MetaInfoProps) {
  return (
    <>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </>
  );
}
