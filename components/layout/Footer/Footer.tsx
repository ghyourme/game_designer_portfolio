import Link from "next/link";
import { getNavigation } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/**
 * Footer
 *
 * 참고 문서:
 * - docs/DESIGN_SYSTEM.md - 6. Component Library (Footer)
 * - docs/INFORMATION_ARCHITECTURE.md - 4. 내비게이션 흐름 ("글로벌 내비게이션과 동일한
 *   핵심 링크 + Contact 강조")
 *
 * 책임:
 * - 모든 페이지 하단에 공통으로 표시되는 전역 푸터 영역을 제공한다.
 * - Header와 동일하게 data/navigation.json(getNavigation)을 유일한 데이터 소스로
 *   쓰되, IA가 "핵심 링크"로 한정한 대로 전체 7개가 아니라 CORE_PATHS로 추린 항목만
 *   노출한다 — 라벨/경로가 Header와 어긋나는 것을 막기 위해 하드코딩하지 않는다.
 * - Contact는 CORE_PATHS에서 제외하고 Button(primary)으로 별도 강조한다.
 */
const CORE_PATHS = ["/", "/projects", "/analysis", "/resume"];

export function Footer() {
  const items = getNavigation()
    .filter((item) => item.isActive && CORE_PATHS.includes(item.path))
    .sort((a, b) => a.order - b.order);

  return (
    <footer className="border-t border-border-default bg-background-muted">
      <Container>
        <div className="flex flex-col items-start gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {items.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="text-sm text-text-secondary transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:text-text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button href="/contact" variant="primary">
            Contact
          </Button>
        </div>
      </Container>
    </footer>
  );
}
