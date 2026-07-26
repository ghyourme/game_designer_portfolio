import { getProfile } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/**
 * ContactInfo
 *
 * 참고 문서:
 * - docs/INFORMATION_ARCHITECTURE.md - 2.9 Contact (구성 섹션 2. 연락 정보/링크)
 * - docs/DATA_MODEL.md - 12.1 links 필드 구조 (ContactLink)
 *
 * 책임:
 * - profile.json의 email을 "이메일 보내기" CTA(mailto:)로, links를 소셜/포트폴리오
 *   링크 Button 목록으로 노출한다.
 * - links가 비어 있으면(현재 data/profile.json 기준 항상 이 경로) 링크 목록을 그리지 않는다 —
 *   email은 §12.1이 정한 대로 항상 노출되는 필수 연락 수단이라 이 조건과 무관하다.
 */
export function ContactInfo() {
  const profile = getProfile();

  return (
    <Section>
      <Container>
        <Button href={`mailto:${profile.email}`} variant="primary">
          이메일 보내기
        </Button>
        {profile.links.length > 0 && (
          <div>
            {profile.links.map((link) => (
              <Button
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                aria-label={`${link.label} (새 창)`}
              >
                {link.label}
              </Button>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
