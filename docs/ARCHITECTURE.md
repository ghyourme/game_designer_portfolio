# 포트폴리오 아키텍처

이 문서는 Game Designer Portfolio 웹사이트의 전체 시스템 구조를 정의한다.

이 문서는 구현 코드가 아니라 **정보 구조와 시스템 설계**를 설명한다.

---

## 1. 목적

이 프로젝트의 아키텍처 목표는 다음과 같다:

- 장기 유지보수가 가능한 구조
- 콘텐츠 확장에 유연한 구조
- 데이터 기반 UI 구조
- 문서 기반 개발 흐름 유지

---

## 2. 상위 구조

이 프로젝트는 다음 4가지 계층으로 구성된다:

- 문서 (docs)
- 데이터 (JSON)
- UI 컴포넌트
- 페이지 (Pages)

데이터가 UI로 변환되는 구조를 가진다.

---

## 3. 정보 구조 (IA)

웹사이트의 주요 페이지는 다음과 같다:

- Home
- About
- Projects
- Analysis
- Personal Works
- Resume
- Contact

각 페이지는 독립적인 역할을 가진다.

---

## 4. 네비게이션 구조

사용자 이동 흐름은 다음을 따른다:

- 글로벌 네비게이션
- 푸터 네비게이션
- 상세 페이지 이동 구조

사용자는 최소 클릭으로 콘텐츠에 접근할 수 있어야 한다.

---

## 5. 데이터 흐름

데이터는 다음 흐름으로 UI로 변환된다:

```
data → components → pages
```

JSON 기반 데이터가 UI를 결정한다.

---

## 6. 폴더 구조 역할

각 폴더의 역할은 다음과 같다:

- app/ : 라우팅 및 페이지
- components/ : 재사용 UI
- features/ : 기능 단위 로직
- layouts/ : 전체 레이아웃
- assets/ : 이미지 및 리소스
- styles/ : 글로벌 스타일
- hooks/ : 커스텀 훅
- utils/ : 유틸 함수
- lib/ : 외부 연동
- types/ : TypeScript 타입
- data/ : JSON 데이터
- docs/ : 설계 문서 (Source of Truth — 프로젝트 전체에 적용되는 규칙/구조만 다룬다)
- docs/projects/ : 프로젝트별 콘텐츠 작업 자료 (예: Evidence Inventory). Source of Truth가 아니다 — `data/*.json`에 반영되기 전 개별 프로젝트 하나에 대해서만 유효한 작업 중 자료이며, `docs/CONTENT_GUIDE.md` §14 Traceability Rule의 "작성 워크시트" 개념을 실제 파일로 구현한 것이다. 프로젝트명이 확정되지 않은 동안에는 `docs/projects/evidence-template.md` 하나만 두고, 실제 프로젝트가 확정되어 `slug`(`docs/DATA_MODEL.md` §5.1)가 정해지면 그 시점에 템플릿을 `docs/projects/<slug>/evidence.md`로 복사해 개별 폴더를 만든다 — 근거 없는 프로젝트명으로 폴더를 미리 만들지 않는다
- prompts/ : AI 프롬프트

---

## 7. 컴포넌트 구조

컴포넌트는 다음 계층 구조를 가진다:

- Layout
- Section
- Feature
- Reusable Component

상위 컴포넌트는 하위 컴포넌트를 조합하는 방식으로 구성된다.

---

## 8. 설계 철학

이 구조는 다음을 목표로 한다:

- 유지보수성
- 확장성
- 문서 기반 개발
- 재사용 가능한 UI 구조
- 장기 프로젝트 운영

---

## 9. 확장 전략

새로운 기능은 기존 구조를 변경하지 않고 추가할 수 있어야 한다.

예:

- 새로운 프로젝트 추가
- 분석 콘텐츠 추가
- PDF 기능 확장
- 태그 시스템 확장
- 회사별 필터 추가

---

## 10. 범위 제한

이 아키텍처는 다음을 포함하지 않는다:

- 백엔드 서버
- 인증 시스템
- 관리자 페이지
- CMS
- 데이터베이스 설계

---

## 11. Project Identifier Rule

Project를 참조하는 여러 시스템(Route, Branch, Folder, JSON, Loader, Documents, Gallery, Links, Evidence)이 각자 다른 식별자를 쓰면, 하나의 프로젝트를 가리키는 이름이 시스템마다 달라져 추적이 끊긴다. 이를 막기 위해 Project의 **유일한 식별자**를 하나로 고정한다.

**Source of Truth**: `data/projects.json`의 각 프로젝트 레코드가 가진 `slug`(`docs/DATA_MODEL.md` §5.1) 하나만이 식별자다. 다른 어떤 시스템도 별도의 식별자를 새로 만들지 않고, 전부 이 `slug`를 그대로 가져다 쓴다.

| 대상 | slug 사용 방식 | 근거 |
|------|------------------|------|
| Route | `/projects/[slug]` | `docs/INFORMATION_ARCHITECTURE.md` §2.4 |
| Branch | `feature/projects-<slug>-content` | `docs/GIT_WORKFLOW.md` §1.1 |
| Folder | `docs/projects/<slug>/evidence.md` | 본 문서 §6 |
| JSON | `data/projects.json` 배열 항목 자체의 `slug` 필드 | `docs/DATA_MODEL.md` §5.1 |
| Loader | slug로 단일 항목을 조회한다 (`find(p => p.slug === slug)`) | 본 문서 §5 |
| Documents | 별도 식별자 없음 — 부모 프로젝트의 slug로 식별되는 레코드에 속한 `documents[]` 배열 항목이며, 항목끼리는 `title`로 구분한다 | `docs/DATA_MODEL.md` §5.6 |
| Gallery | 별도 식별자 없음 — 동일하게 부모 프로젝트 slug에 종속되며, 항목끼리는 `caption`으로 구분한다 | `docs/DATA_MODEL.md` §5.7 |
| Links | 별도 식별자 없음 — 동일 구조, 항목끼리는 `label`로 구분한다 | `docs/DATA_MODEL.md` §5.8 |
| Evidence | 작성 워크시트 경로(`docs/projects/<slug>/evidence.md`)가 slug를 그대로 사용 | `docs/CONTENT_GUIDE.md` §14 |

`documents`/`gallery`/`links`에 slug를 또 하나씩 부여하지 않는 이유: 이들은 독립된 엔터티가 아니라 이미 slug로 식별된 프로젝트 레코드 내부의 배열 항목이다. 여기에 별도 식별자를 추가하면 `docs/DATA_MODEL.md` §5의 "필드 추가 금지" 원칙과 충돌하고, 식별자가 두 겹이 되어 오히려 추적을 어렵게 만든다.

**`id`와의 관계**: `docs/DATA_MODEL.md` §4의 `id`(공통 데이터 규칙)는 폐기되거나 대체되지 않는다. `id`는 모든 데이터 타입(Project, Analysis 등)에 공통으로 적용되는 일반 식별자이고, 이 절이 정의하는 것은 그중 Project에 한해 `slug`가 Route·Branch·Folder·Evidence까지 걸치는 **교차 시스템 식별자**로 격상된다는 사실이다.

**Immutability**: `slug`는 프로젝트가 생성된 이후 변경하지 않는다. `title`은 언제든 변경할 수 있다. `slug`는 Route·Branch·Folder·Evidence 여러 시스템에 흩어져 참조되므로, 생성 후 바꾸면 이미 merge된 Branch 이름이나 기존 Folder 경로와의 연결이 끊긴다. `title`은 어느 시스템에도 참조되지 않는 순수 표시값이라 자유롭게 바꿀 수 있다.

**적용 범위**: 이 규칙은 Project(`data/projects.json`)에 한정된다. Analysis도 `slug`(`docs/DATA_MODEL.md` §6.1)와 `/analysis/[slug]` 라우트를 갖지만, Analysis는 아직 개별 브랜치·Evidence 워크시트 체계가 없어(`docs/PROJECT.md` §12 Technical Debt) Branch/Folder/Evidence 열은 적용 대상이 아니다 — Analysis Content 단계 진입 시 별도로 검토한다.

---

## 요약

이 프로젝트는 **데이터 중심의 프론트엔드 포트폴리오 시스템**이며,
모든 UI는 JSON 데이터를 기반으로 생성된다.