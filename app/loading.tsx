import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

/**
 * Loading (임시 placeholder)
 *
 * 참고 문서: docs/DESIGN_SYSTEM.md - 7. Interaction Principles (Loading)
 *
 * 페이지 전환 또는 데이터 로딩 중 표시되는 최소 로딩 상태. 다른 모든 페이지와
 * 동일하게 Section/Container로 감싸 레이아웃이 흔들리지 않게 한다.
 * 이 프로젝트는 모든 데이터가 lib/data의 동기 SSG 로더라 실제로 이 화면이
 * 보일 일은 거의 없다 — 클라이언트 비동기 fetch가 생기면 Skeleton 도입을
 * 재검토한다(Out of Scope: 이번 감사에서는 Skeleton을 새로 만들지 않는다).
 */
export default function Loading() {
  return (
    <Section>
      <Container>
        <p>불러오는 중입니다...</p>
      </Container>
    </Section>
  );
}
