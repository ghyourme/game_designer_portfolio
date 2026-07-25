# Project Evidence Inventory Template

이 문서는 Source of Truth가 아니다. `docs/CONTENT_GUIDE.md` §13(Content Source Rule)·§14(Traceability Rule)를 개별 프로젝트에 적용하기 위한 범용 템플릿이며, `data/projects.json`에는 반영되지 않는다 (`docs/ARCHITECTURE.md` §6).

**사용 방법**: 실제 프로젝트가 확정되고 `slug`(`docs/DATA_MODEL.md` §5.1)가 결정되면, 이 파일을 `docs/projects/<project-slug>/evidence.md`로 복사한 뒤 제목과 §3의 "출처 상세"를 실제 프로젝트 자료로 채운다. 프로젝트명이 확정되기 전까지는 이 템플릿 자체를 특정 프로젝트에 종속시키지 않는다.

**현재 상태**: 특정 프로젝트에 연결되지 않은 템플릿 상태.

---

## 1. Evidence 목록 정의

프로젝트 작성에 쓰일 수 있는 근거 자료를 9개 유형으로 정의한다. `docs/CONTENT_GUIDE.md` §13의 6단계 체인(기획서→개발 문서→회의록→Git Commit→PPT→실제 구현 화면)을 실제 자료 형태 기준으로 더 세분화한 것이다.

| 유형 | 정의 | 전형적 형식 |
|------|------|--------------|
| 기획서 | 시스템/콘텐츠의 목적과 의도가 기록된 1차 기획 문서 | PDF, DOCX, Notion, Markdown |
| 발표 자료 | 프로젝트를 요약해 발표한 자료 | PPT, PDF |
| Git Commit | 실제 작업 이력과 변경 범위가 기록된 버전관리 로그 | Git 로그, PR |
| 회의록 | 의사결정과 대안 검토 과정이 기록된 자료 | 문서, 노트 |
| 구현 화면 | 실제 동작하는 화면의 정지 이미지 | 스크린샷(PNG/JPG) |
| 영상 | 실제 동작을 시간 축으로 보여주는 자료 | 게임 플레이 영상, 발표 녹화(MP4, YouTube) |
| 문서 | 위 분류에 속하지 않는 일반 문서(스펙, 리포트 등) | PDF, DOCX, Markdown |
| 이미지 | 와이어프레임/UML/ERD/컨셉 아트 등 정적 시각 자료 | PNG/JPG/SVG |
| 링크 | 외부에서 접근 가능한 참고 자료 | GitHub, Figma, Notion, YouTube, 배포 URL |

---

## 2. Evidence → DATA_MODEL.md §5 필드 매핑

각 Evidence 유형이 `docs/DATA_MODEL.md` §5의 어떤 필드를 뒷받침할 수 있는지 매핑한다. 하나의 Evidence가 여러 필드를 뒷받침할 수 있고, 하나의 필드가 여러 Evidence를 필요로 할 수도 있다.

| Evidence 유형 | 뒷받침 가능한 필드 | 비고 |
|----------------|----------------------|------|
| 기획서 | `goal`, `problem`, `systems`(purpose/structure/flow/data/exceptionHandling/expectedEffect), `documents` | 시스템 설계(6번)의 1차 근거 |
| 발표 자료 | `overview`, `result`, `documents` | 프로젝트 전체를 압축 요약하는 자료라 개요/결과 근거로 적합 |
| Git Commit | `contribution`, `features`, `skills` | 담당 범위·실제 기여를 증명하는 가장 직접적인 근거 |
| 회의록 | `approach`, `problem` | 대안 검토·의사결정 과정, 문제 인식 시점의 근거 |
| 구현 화면 | `features`, `gallery`, `result` | 설계가 실제로 구현되었다는 근거 |
| 영상 | `features`, `result` (참고용) | 아래 §4 Gap 참고 — `gallery`(§5.7)는 이미지 전용 타입이라 영상 자체를 직접 담을 필드가 없음 |
| 문서 | `systems`, `documents` | 기획서로 분류되지 않는 보조 문서 |
| 이미지 | `gallery` | `type`은 `screenshot \| wireframe \| uml \| erd \| concept \| other` 중 선택 |
| 링크 | `links`, `documents`(Notion/Markdown export인 경우) | 헤더 메타의 `links`(§5.8)로 노출 |

**헤더 메타 정보**(`title`/`subtitle`/`genre`/`platform`/`period`/`team`/`role`/`tags`)는 서술형 근거가 아니라 확인 가능한 사실이다 — 위 9개 Evidence 유형과 별도로, 본인 확인(기획서 표지, 이력 자료 등과의 대조)만으로 충분하다.

---

## 3. Evidence Inventory (템플릿 — 프로젝트 확정 후 채움)

| Evidence 유형 | 확보 여부 | 출처 상세 | 사용 예정 필드 | 비고 |
|----------------|------------|-----------|------------------|------|
| 기획서 | ❌ 미확보 | — | goal, problem, systems, documents | |
| 발표 자료 | ❌ 미확보 | — | overview, result, documents | |
| Git Commit | ❌ 미확보 | — | contribution, features, skills | |
| 회의록 | ❌ 미확보 | — | approach, problem | |
| 구현 화면 | ❌ 미확보 | — | features, gallery, result | |
| 영상 | ❌ 미확보 | — | features, result(참고) | §4 Gap 참고 |
| 문서 | ❌ 미확보 | — | systems, documents | |
| 이미지 | ❌ 미확보 | — | gallery | |
| 링크 | ❌ 미확보 | — | links, documents | |
| 헤더 메타 (제목/부제/장르/플랫폼/기간/팀/역할/태그) | ❌ 미확보 | — | 헤더 메타 전체 | 서술형 Evidence 아님, 본인 확인만 필요 |

---

## 4. 누락된 Evidence 식별 (Gap Analysis)

### 4.1 현재 갭

이 템플릿을 처음 복사한 시점에는 9개 Evidence 유형과 헤더 메타 전부가 미확보 상태다. `docs/CONTENT_GUIDE.md` §12 Evidence Rule에 따라, 근거가 없는 섹션은 초안조차 작성할 수 없다 — Content Workflow(§11)의 1단계(자료 수집)부터 시작한다.

### 4.2 초안 작성 가능한 최소 조건

Content Workflow 2단계(초안 작성)로 넘어가려면 최소한 아래가 확보되어야 한다.

- 헤더 메타 사실 확인 (제목/장르/플랫폼/기간/팀/역할)
- `goal`/`problem`/`approach`를 뒷받침할 자료 각 1건 이상 (기획서 또는 회의록)
- `systems` 최소 1개 항목을 뒷받침할 자료 (기획서 또는 문서)
- `features` 최소 1개 항목을 뒷받침할 자료 (구현 화면 또는 Git Commit)
- `result`를 뒷받침할 정량적 자료 1건 이상 (발표 자료 또는 구현 화면)

이 조건을 만족하지 못하는 섹션은 초안 단계에서 "확인 불가"로 표시하고 비워둔다.

### 4.3 스키마 갭 — 영상 Evidence

`docs/DATA_MODEL.md` §5.7 `gallery`는 이미지 전용 타입(`screenshot | wireframe | uml | erd | concept | other`)이며, GIF는 파일 확장자로 흡수되지만 동영상(MP4 등)을 위한 전용 슬롯은 없다. 현재 스키마에서 영상 Evidence는 `links`(예: YouTube URL)로만 노출 가능하다 — `gallery`에 직접 담을 수 없다. 새 필드가 필요한지는 스키마 변경 범위이며, 실제로 영상 Evidence가 확보되고 `links`만으로 부족하다고 판단될 때 별도 Architecture Decision으로 다룬다.

---

## 5. 다음 단계

실제 프로젝트가 확정되면 이 템플릿을 `docs/projects/<project-slug>/evidence.md`로 복사해 사용한다. §4.2의 최소 조건이 충족되면 `feature/projects-<project-slug>-content` 브랜치에서 Content Workflow(§11) 2단계(초안 작성)부터 진행한다.
