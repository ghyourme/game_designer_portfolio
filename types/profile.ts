/**
 * Profile
 *
 * 참고 문서: docs/DATA_MODEL.md - 12. 프로필 데이터 모델
 *
 * data/profile.json이 따르는 구조를 정의한다. About 페이지(AboutHero, AboutSummary,
 * DesignPhilosophy, CoreStrength)가 실제로 사용하는 필드만 정의했으며, 임의로
 * 필드를 추가하지 않았다.
 */
export interface Profile {
  name: string;
  targetRole: string;
  tagline: string;
  summary: string;
  direction: string;
  designApproach: string;
  problemSolving: string;
  playerExperience: string;
  coreStrengths: string[];
}
