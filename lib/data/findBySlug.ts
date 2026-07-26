interface Sluggable {
  slug: string;
}

/**
 * findBySlug
 *
 * 참고 문서: docs/ARCHITECTURE.md - §13.1 Data Resilience (slug 조회 헬퍼 공유)
 *
 * slug 기반 상세 페이지(Project/Analysis 등)가 목록에서 단일 항목을 조회할 때 쓰는
 * 공용 헬퍼. Project와 Analysis는 서로 다른 타입이지만 "slug로 하나를 찾는다"는
 * 책임과 형태(slug: string 보유)가 완전히 같아 제네릭으로 공용화한다.
 *
 * 찾지 못하면 undefined를 반환한다 — notFound() 호출은 호출자(page)의 책임이다.
 */
export function findBySlug<T extends Sluggable>(
  items: T[],
  slug: string,
): T | undefined {
  return items.find((item) => item.slug === slug);
}
