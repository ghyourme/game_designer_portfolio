import { ResumeHero } from "@/features/resume/ResumeHero";
import { ResumeSummary } from "@/features/resume/ResumeSummary";
import { ExperienceTimeline } from "@/features/resume/ExperienceTimeline";
import { ProjectExperience } from "@/features/resume/ProjectExperience";
import { SkillSummary } from "@/features/resume/SkillSummary";
import { Education } from "@/features/resume/Education";
import { ResumeDownload } from "@/features/resume/ResumeDownload";

/**
 * Resume
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.8 Resume
 *
 * ResumeHero → ResumeSummary → ExperienceTimeline → ProjectExperience →
 * SkillSummary → Education → ResumeDownload 순서로 Resume의 7개 섹션을
 * 조합하는 조립 전용 페이지. getResume(), getSkills() 외 추가 데이터 연동은 없다.
 *
 * "수상 및 기타 활동(awards)"은 resume.json/types/resume.ts에 필드는 있지만,
 * 이를 렌더링하는 Feature가 아직 없다 (self-review 참고).
 */
export default function ResumePage() {
  return (
    <>
      <ResumeHero />
      <ResumeSummary />
      <ExperienceTimeline />
      <ProjectExperience />
      <SkillSummary />
      <Education />
      <ResumeDownload />
    </>
  );
}
