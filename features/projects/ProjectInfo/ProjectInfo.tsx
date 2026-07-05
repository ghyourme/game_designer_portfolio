/**
 * ProjectInfo
 *
 * 참고 문서:
 * - docs/DATA_MODEL.md - 5. 프로젝트 데이터 모델 (role, genre, platform, period, team)
 * - docs/INFORMATION_ARCHITECTURE.md - 2.4 Project Detail (구성 섹션 1. 헤더)
 *
 * 책임:
 * - 프로젝트 헤더에 표시되는 label/value 형태의 메타 정보 한 쌍을 표현한다.
 * - dt/dd만 반환하므로, 반드시 부모(ProjectHero)의 dl 안에서 사용해야 유효한 HTML이 된다.
 *
 * components/ui에 새로운 원자 컴포넌트를 추가하지 않고, 시맨틱 태그만으로 구성한다.
 */
export interface ProjectInfoProps {
  label: string;
  value: string;
}

export function ProjectInfo({ label, value }: ProjectInfoProps) {
  return (
    <>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </>
  );
}
