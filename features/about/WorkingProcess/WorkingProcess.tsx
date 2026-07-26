import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";

/**
 * WorkingProcess
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.2 About (설계 철학 / 일하는 방식의 연장)
 *
 * 책임:
 * - 기획 프로세스(Problem → Research → Design → Validate → Improve)를 순서가 있는
 *   목록으로 보여준다.
 * - 각 단계의 실제 설명은 아직 작성하지 않은 placeholder다.
 */
const WORKING_PROCESS_STEPS = [
  "Problem",
  "Research",
  "Design",
  "Validate",
  "Improve",
] as const;

export function WorkingProcess() {
  return (
    <Section>
      <Container>
        <h2 className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
          Working Process
        </h2>
        <ol className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          {WORKING_PROCESS_STEPS.map((step) => (
            <li key={step} className="flex items-center gap-3">
              <Tag>{step}</Tag>
              <p className="text-sm text-text-secondary">설명이 표시될 영역입니다.</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
