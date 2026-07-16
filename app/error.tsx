"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/**
 * Error (임시 placeholder)
 *
 * 참고 문서: docs/DESIGN_SYSTEM.md - 7. Interaction Principles (Error States)
 *
 * 페이지 렌더링 중 오류가 발생했을 때 표시되는 최소 에러 바운더리. 다른 모든 페이지와
 * 동일하게 Section/Container로 감싸고, 액션 트리거는 공용 Button을 재사용한다
 * (UI Consistency Rule — 이전에는 스타일 없는 네이티브 button을 직접 썼다).
 */
export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <Section>
      <Container>
        <h1>오류가 발생했습니다.</h1>
        <Button type="button" onClick={() => reset()}>
          다시 시도
        </Button>
      </Container>
    </Section>
  );
}
