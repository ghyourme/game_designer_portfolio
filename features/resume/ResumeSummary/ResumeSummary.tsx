import { getResume } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

/**
 * ResumeSummary
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.8 Resume (구성 섹션 1. 개인 정보)
 *
 * 책임:
 * - resume.json의 personalInfo.summary(짧은 이력 요약 문단)를 ResumeHero 다음에
 *   전달한다.
 */
export function ResumeSummary() {
  const { personalInfo } = getResume();

  return (
    <Section>
      <Container>
        <p className="max-w-2xl text-base text-text-secondary leading-relaxed">
          {personalInfo.summary}
        </p>
      </Container>
    </Section>
  );
}
