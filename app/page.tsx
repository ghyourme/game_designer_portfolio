import { Hero } from "@/features/home/Hero";
import { Introduction } from "@/features/home/Introduction";
import { FeaturedProjects } from "@/features/home/FeaturedProjects";
import { FeaturedAnalysis } from "@/features/home/FeaturedAnalysis";
import { CallToAction } from "@/features/home/CallToAction";

/**
 * Home (임시 placeholder)
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.1 Home
 *
 * Hero → Introduction → Featured Projects → Featured Analysis → Call To Action
 * 순서로 Home의 5개 섹션을 조합한다. 각 섹션은 독립적인 placeholder 컴포넌트이며,
 * 실제 콘텐츠와 JSON 데이터는 아직 연결하지 않았다.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <FeaturedProjects />
      <FeaturedAnalysis />
      <CallToAction />
    </>
  );
}
