import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";

/**
 * Introduction
 *
 * 참고 문서:
 * - docs/INFORMATION_ARCHITECTURE.md - 2.1 Home (구성 섹션 2. 핵심 역량 요약, 5. About 미리보기)
 * - docs/DESIGN_SYSTEM.md - 6. Component Library (Section, Tag)
 *
 * 책임:
 * - Hero 다음에 이어지는 짧은 소개와 핵심 역량 요약을 전달한다.
 * - About 페이지로 이어지는 미리보기 역할도 함께 담당한다.
 * - 아직 profile.json, skills.json 연동 없이 구조만 갖춘 placeholder다.
 */
export function Introduction() {
  return (
    <Section>
      <Container>
        <p>짧은 소개 문구가 표시될 영역입니다.</p>
        {/* TODO: skills.json 기반 역량 카테고리(시스템 기획 / 콘텐츠 기획 / 분석 / 도구 활용) 요약 — 현재는 구조 예시용 태그 1개 */}
        <Tag>핵심 역량 태그</Tag>
        {/* TODO: About 페이지 미리보기 문구 및 링크 */}
      </Container>
    </Section>
  );
}
