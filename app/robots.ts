import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * robots.ts
 *
 * 참고 문서: docs/ARCHITECTURE.md - §14.1 SEO
 *
 * 모든 페이지는 `data/*.json`에 실제로 반영된 뒤에야 존재하는 콘텐츠라 별도의
 * noindex 대상이 없다 — Quality Gate(docs/PROJECT.md §10)를 통과한 콘텐츠만
 * data/*.json에 들어가므로 "아직 검수 전" 콘텐츠가 공개 라우트에 노출될 일이
 * 없다. 그래서 전체 allow 하나로 충분하다.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
