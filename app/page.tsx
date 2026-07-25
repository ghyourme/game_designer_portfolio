import { Hero } from "@/features/home/Hero";
import { Introduction } from "@/features/home/Introduction";
import { FeaturedProjects } from "@/features/home/FeaturedProjects";
import { FeaturedAnalysis } from "@/features/home/FeaturedAnalysis";
import { CallToAction } from "@/features/home/CallToAction";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Game Designer Portfolio",
  description: "게임 기획자 포트폴리오 — 프로젝트, 게임 분석, 이력을 확인할 수 있습니다.",
  path: "/",
  suffixTitle: false,
});

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
