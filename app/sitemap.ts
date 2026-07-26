import type { MetadataRoute } from "next";
import { getProjects, getAnalysis } from "@/lib/data";
import { SITE_URL } from "@/lib/seo";

const STATIC_PATHS = [
  "/",
  "/about",
  "/projects",
  "/analysis",
  "/personal",
  "/resume",
  "/contact",
];

/**
 * sitemap.ts
 *
 * 참고 문서: docs/ARCHITECTURE.md - §14.1 SEO
 *
 * 정적 라우트는 사이트맵(docs/INFORMATION_ARCHITECTURE.md §3)과 동일한 7개를
 * 하드코딩하고, slug 기반 상세 라우트는 getProjects()/getAnalysis()가 실제로
 * 반환하는 항목만큼만 반영한다 — 두 배열이 비어 있으면(현재 상태) 정적 라우트만
 * 노출되고, 존재하지 않는 slug를 미리 나열하지 않는다.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
  }));

  const projectEntries = getProjects().map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
  }));

  const analysisEntries = getAnalysis().map((analysis) => ({
    url: `${SITE_URL}/analysis/${analysis.slug}`,
  }));

  return [...staticEntries, ...projectEntries, ...analysisEntries];
}
