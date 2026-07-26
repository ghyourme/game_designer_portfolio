import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

/**
 * ResumeDownload
 *
 * 참고 문서: docs/INFORMATION_ARCHITECTURE.md - 2.8 Resume (구성 섹션 7. PDF 다운로드 CTA)
 *
 * 책임:
 * - 이력서 마지막에서 PDF 미리보기 자리와 다운로드 버튼 자리를 제공한다.
 * - 이번 브랜치에서는 실제 PDF 업로드/다운로드 기능을 구현하지 않는다. PDF Preview
 *   Card와 Button은 자리만 갖춘 placeholder다.
 */
export function ResumeDownload() {
  return (
    <Section>
      <Container>
        <Card>
          <p className="text-base text-text-secondary">
            PDF 미리보기가 표시될 영역입니다.
          </p>
        </Card>
        <div className="mt-6">
          <Button>PDF 다운로드</Button>
        </div>
        {/* TODO: 실제 PDF 파일 업로드 및 다운로드 연결 예정 */}
      </Container>
    </Section>
  );
}
