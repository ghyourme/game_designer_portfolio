"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getNavigation } from "@/lib/data";

/**
 * Header
 *
 * 참고 문서:
 * - docs/DESIGN_SYSTEM.md - 6. Component Library (Navigation)
 * - docs/INFORMATION_ARCHITECTURE.md - 3. 사이트맵, 4. 내비게이션 흐름
 *
 * 책임:
 * - 모든 페이지 상단에 위치하는 전역 내비게이션 영역을 제공한다.
 * - data/navigation.json(getNavigation)을 유일한 데이터 소스로 사용하며 메뉴 항목을
 *   하드코딩하지 않는다. order 기준으로 정렬하고, isActive(노출 여부)가 true인
 *   항목만 렌더링한다.
 * - 현재 경로와 항목의 path를 비교해 방문 중인 페이지에 aria-current="page"를 부여한다.
 *   (이 "현재 페이지 활성 상태"는 항목 데이터의 isActive와는 다른, 렌더링 시점의 값이다)
 *   완전 일치("/projects")뿐 아니라 그 하위 경로("/projects/[slug]")에서도 상위 메뉴가
 *   활성 표시되도록 접두사 비교를 함께 한다 — "/"만 완전 일치로 남겨 모든 경로가
 *   Home에 걸리는 것을 막는다(docs/ARCHITECTURE.md §13.3 Navigation Resilience).
 * - aria-current="page"는 스크린 리더에는 전달되지만 화면에는 아무 차이도 만들지
 *   않았다 — `aria-[current="page"]:` 변형으로 밑줄+강조 서체를 추가해 마우스/키보드
 *   사용자도 같은 정보를 시각적으로 확인할 수 있게 했다(새 색 토큰 없이 기존
 *   `font-semibold` 유틸리티만 사용, feature/platform-accessibility).
 *
 * 스타일은 최소 구조 이상으로 구현하지 않는다.
 */
export function Header() {
  const pathname = usePathname();
  const items = getNavigation()
    .filter((item) => item.isActive)
    .sort((a, b) => a.order - b.order);

  return (
    <header>
      <nav aria-label="Global navigation">
        <ul>
          {items.map((item) => {
            const isCurrentPage =
              item.path === "/"
                ? pathname === "/"
                : pathname === item.path ||
                  pathname.startsWith(`${item.path}/`);
            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  aria-current={isCurrentPage ? "page" : undefined}
                  className='aria-[current="page"]:font-semibold aria-[current="page"]:underline'
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
