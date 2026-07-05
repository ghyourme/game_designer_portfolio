import { getResume } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

/**
 * ResumeHero
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.8 Resume (구성 섹션 1. 개인 정보)
 *
 * 책임:
 * - resume.json의 personalInfo 중 신원/연락처(name/role/email/phone/location)를
 *   이력서 최상단에서 전달한다. 짧은 이력 요약 문단은 ResumeSummary가 담당한다.
 */
export function ResumeHero() {
  const { personalInfo } = getResume();

  return (
    <Section>
      <Container>
        <h1>{personalInfo.name}</h1>
        <p>{personalInfo.role}</p>
        <p>{personalInfo.email}</p>
        <p>{personalInfo.phone}</p>
        <p>{personalInfo.location}</p>
      </Container>
    </Section>
  );
}
