import { getPersonal } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PersonalGrid } from "@/features/personal/PersonalGrid";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Personal Works",
  description: "정식 프로젝트 외에 개인적으로 진행한 작업물을 소개하는 페이지입니다.",
  path: "/personal",
});

/**
 * Personal Works
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.7 Personal Works
 *
 * getPersonal()로 personal.json 전체 목록을 가져와 PersonalGrid로 렌더링한다.
 * data/personal.json이 비어 있는 동안은 PersonalGrid가 자체적으로 Empty 상태를
 * 보여준다. 가짜 작업물 데이터는 만들지 않는다. 별도 상세 라우트는 이번 IA 범위에
 * 없다(§2.7 범위 참고) — 각 항목은 PersonalCard의 외부 링크로만 진입한다.
 */
export default function PersonalPage() {
  const works = getPersonal();

  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Personal Works
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-text-secondary">
          정식 프로젝트 외에 개인적으로 진행한 작업물을 소개하는 페이지입니다.
        </p>
        <div className="mt-8">
          <PersonalGrid works={works} />
        </div>
      </Container>
    </Section>
  );
}
