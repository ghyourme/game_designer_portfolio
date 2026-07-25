import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "./siteUrl";

export interface BuildMetadataOptions {
  /** 페이지 고유 제목. <title>에는 그대로, OpenGraph/Twitter에는 SITE_NAME이 덧붙는다(suffixTitle). */
  title: string;
  description: string;
  /** 사이트 루트 기준 경로. 예: "/projects", "/projects/some-slug" */
  path: string;
  /** 실제로 존재하는 이미지 경로만 전달한다 — 없으면 무리해서 만들지 않는다. */
  image?: string;
  type?: "website" | "article";
  /** Home처럼 그 자체가 SITE_NAME인 페이지는 false로 접두사 중복을 막는다. */
  suffixTitle?: boolean;
}

/**
 * buildMetadata
 *
 * 참고 문서: docs/ARCHITECTURE.md - §14.1 SEO
 *
 * 모든 페이지가 반복하는 canonical/OpenGraph/Twitter Card 구성을 한 곳에서 조립한다.
 * 페이지(app/**\/page.tsx)는 title/description/path(+선택적으로 image)만 넘기고,
 * SEO 문자열 구조 자체는 이 함수 하나만 알고 있다 — app/page 내부에 OG 태그를
 * 흩뿌리지 않기 위함이다.
 */
export function buildMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  suffixTitle = true,
}: BuildMetadataOptions): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const fullTitle = suffixTitle ? `${title} | ${SITE_NAME}` : title;
  const absoluteImage = image ? new URL(image, SITE_URL).toString() : undefined;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type,
      ...(absoluteImage ? { images: [{ url: absoluteImage }] } : {}),
    },
    twitter: {
      card: absoluteImage ? "summary_large_image" : "summary",
      title: fullTitle,
      description,
      ...(absoluteImage ? { images: [absoluteImage] } : {}),
    },
  };
}
