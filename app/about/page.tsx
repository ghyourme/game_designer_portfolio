import { AboutHero } from "@/features/about/AboutHero";
import { AboutSummary } from "@/features/about/AboutSummary";
import { DesignPhilosophy } from "@/features/about/DesignPhilosophy";
import { CoreStrength } from "@/features/about/CoreStrength";
import { CareerTimeline } from "@/features/about/CareerTimeline";
import { SkillOverview } from "@/features/about/SkillOverview";
import { WorkingProcess } from "@/features/about/WorkingProcess";
import { CallToAction } from "@/features/about/CallToAction";

/**
 * About
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.2 About
 *
 * AboutHero → AboutSummary → DesignPhilosophy → CoreStrength → CareerTimeline →
 * SkillOverview → WorkingProcess → CallToAction 순서로 About의 8개 섹션을 조합하는
 * 조립 전용 페이지. getSkills() 외 실제 데이터(profile.json, resume.json) 연동은
 * 아직 하지 않았다.
 */
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutSummary />
      <DesignPhilosophy />
      <CoreStrength />
      <CareerTimeline />
      <SkillOverview />
      <WorkingProcess />
      <CallToAction />
    </>
  );
}
