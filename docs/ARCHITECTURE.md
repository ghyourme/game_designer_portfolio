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

## 12. Project Lifecycle

Project 하나가 생성되어 포트폴리오에 실리기까지, 이미 각자 다른 문서에 정의된 규칙(§11 Project Identifier Rule, `docs/CONTENT_GUIDE.md` §11 Content Workflow, `docs/CONTENT_GUIDE.md` §10 Review Checklist, `docs/PROJECT.md` §10 Quality Gate)이 어떤 순서로 켜지는지 하나의 흐름으로 연결한다. **이 절은 새 규칙을 만들지 않는다** — 기존 규칙이 언제 적용되는지만 정의한다.

```
① Project 생성 (실제 프로젝트명·자료 확정)
   ↓
② slug 생성
   ↓
③ Evidence Template 인스턴스화
   ↓
④ Evidence 수집
   ↓
⑤ Content 작성
   ↓
⑥ Review
   ↓
⑦ Quality Gate 통과
   ↓
⑧ Completed
   ↓
⑨ Archive (필요 시)
```

| 단계 | 내용 | 근거 (원본 규칙 — 여기서는 재정의하지 않음) |
|------|------|-----------------------------------------------|
| ① Project 생성 | 실제 프로젝트명과 자료가 확정되는 시점 | 이 문서에서 처음 정의하는 시작점 — 다른 문서에 대응 규칙 없음 |
| ② slug 생성 | `data/projects.json`에 넣을 slug 확정 | 본 문서 §11 |
| ③ Evidence Template 인스턴스화 | `docs/projects/evidence-template.md` → `docs/projects/<slug>/evidence.md` 복사 | 본 문서 §6, §11 |
| ④ Evidence 수집 | Evidence Inventory의 확보 여부 갱신 | `docs/CONTENT_GUIDE.md` §12(Evidence Rule)·§13(Content Source Rule), `evidence-template.md` §3 |
| ⑤ Content 작성 | 초안 작성 → `docs/DATA_MODEL.md` §5 기준 JSON 작성 | `docs/CONTENT_GUIDE.md` §11 Content Workflow 2~3단계 |
| ⑥ Review | Content/Recruiter/Senior Game Designer Review Checklist 통과 | `docs/CONTENT_GUIDE.md` §10.1~§10.3, §11 Content Workflow 4~7단계 |
| ⑦ Quality Gate 통과 | Real Contents 3단계가 `data/projects.json`에 반영되기 직전, 세 체크리스트 통과 확정 | `docs/PROJECT.md` §10, `docs/CONTENT_GUIDE.md` §11 Content Workflow 8~9단계 |
| ⑧ Completed | `data/projects.json` 반영 + 최종 검증(UX Review·Portfolio Quality 포함) | `docs/PROJECT.md` §10 8단계 전부 ✅, `docs/CONTENT_GUIDE.md` §11 Content Workflow 10단계 |
| ⑨ Archive | 필요 시 — 정책 미정 | §12.4 참고 |

### 12.1 Project State (표시용 별칭)

9단계를 매번 그대로 부르면 길어서, 대화·문서에서 빠르게 참조할 수 있도록 5개 이름을 둔다. **새 필드나 새 상태 머신이 아니다** — 이미 존재하는 Lifecycle 단계에 붙이는 이름표일 뿐이다.

| State | 대응 Lifecycle 단계 |
|-------|----------------------|
| Draft | ①~② |
| Evidence | ③~④ |
| Writing | ⑤ |
| Review | ⑥~⑦ |
| Completed | ⑧ |

`data/projects.json`에 State 필드를 추가하지 않는다 — `docs/DATA_MODEL.md` §5의 "필드 추가 금지" 원칙과 정면으로 충돌한다. 어떤 프로젝트가 지금 어느 단계에 있는지는 실제로 존재하는 산출물로 확인한다: `docs/projects/<slug>/evidence.md`가 있으면 최소 Evidence 단계, `feature/projects-<slug>-content` 브랜치가 열려 있으면 Writing~Review 단계, `data/projects.json`에 반영되어 있으면 Completed다.

### 12.2 slug Lifecycle

```
생성 (② Project 생성 시 확정)
  ↓
사용 (③~⑧ 전 단계에서 Route/Branch/Folder/Evidence의 식별자로 사용)
  ↓
변경 금지
  ↓
Archive (필요 시 — §12.4 참고)
```

"생성"과 "변경 금지"는 §11 Immutability와 동일한 내용이다 — 여기서는 그 두 지점이 Lifecycle 어디에 해당하는지만 표시하며, 정책을 다시 정의하지 않는다.

### 12.3 기존 Rule과의 관계 (중복 확인)

이 절이 실제로 새로 정의하는 것은 ①(Project 생성 시점)과 ⑨(Archive 자리)뿐이다. 나머지는 아래처럼 기존 문서를 그대로 가리킨다.

| 이 절이 가리키는 개념 | 원래 정의된 곳 |
|-------------------------|------------------|
| slug 생성·불변성 | 본 문서 §11 |
| Evidence 유형·매핑·수집 | `docs/CONTENT_GUIDE.md` §12~§13, `docs/projects/evidence-template.md` |
| Content 작성 순서 | `docs/CONTENT_GUIDE.md` §11 |
| Review Checklist | `docs/CONTENT_GUIDE.md` §10 |
| Quality Gate 8단계 | `docs/PROJECT.md` §10 |
| 브랜치 명명 | `docs/GIT_WORKFLOW.md` §1.1 |

### 12.4 Archive — 미정 (과설계 방지)

Archive 정책(프로젝트를 포트폴리오에서 내리거나 과거 이력으로만 남기는 것)은 정의하지 않는다. `data/projects.json`은 필드 추가가 금지된 고정 스키마라, Archive를 표현하려면 최소 하나의 새 필드나 별도 저장 위치가 필요하며 이는 그 자체로 Architecture Decision이다. 지금은 실제로 Archive할 프로젝트가 없으므로 미리 설계하지 않는다 — 실제로 필요해지는 시점에 별도 브랜치에서 다룬다 (`docs/PROJECT.md` §12 Technical Debt에 기록).

---

# Platform Architecture Chapter (§13~§18)

이 프로젝트의 목적은 포트폴리오 콘텐츠 자체가 아니라, `data/*.json`을 갈아 끼우는 것만으로 계속 재사용할 수 있는 **Data Driven Portfolio Platform**을 완성하는 것이다(`docs/PROJECT.md` §1). §13~§18은 그 Platform이 지켜야 할 계약과 완료 기준을 하나의 장(Chapter)으로 모은다 — 새로 정의하는 규칙은 §17 Architecture Evolution Policy 하나뿐이고, 나머지는 이전 브랜치에서 이미 정의된 것을 이 장 안에 모으거나(§13, §14) PROJECT.md에서 옮겨온 것(§15, §16, §18)이다.

| 절 | 내용 |
|-----|------|
| §13 Platform Resilience Contract | Data/Rendering/Navigation/Compatibility 보장 범위 |
| §14 SEO & Performance Contract | 메타데이터·성능 요구 사항 |
| §15 Platform Feature Definition of Done | Feature 하나가 만족해야 할 12개 기준 |
| §16 Platform Release Definition of Done | Platform 전체가 배포 가능한지 판단하는 최종 게이트 |
| §17 Architecture Evolution Policy | Architecture를 앞으로 어떻게(만) 바꿀 수 있는가 |
| §18 Platform Branch Strategy | Technical Debt를 브랜치로 옮기는 원칙(실제 목록은 `docs/GIT_WORKFLOW.md` §1.2가 Source of Truth) |

## 13. Platform Resilience Contract

`data/*.json`이 비어 있거나 항목이 없어도 모든 페이지가 정상 동작해야 한다. 이 절은 그 보장 범위를 정의한다 — 새 검증 시스템을 만드는 것이 아니라, 이미 구조적으로 성립하는 보장과 실제로 비어 있는 보장을 구분한다.

### 13.1 Data Resilience

| 항목 | 보장 방식 | 현재 상태 |
|------|------------|-------------|
| Missing Field | `docs/DATA_MODEL.md` §5 "Required/Optional 원칙" — 모든 필드는 Required이며 빈 값은 `""`/`[]`로 표현한다. 옵셔널 필드가 없으므로 `undefined` 접근 자체가 구조적으로 발생하지 않는다 | 구조적으로 이미 보장됨 |
| Invalid JSON | `data/*.json`은 런타임 fetch가 아니라 `import ... from "@/data/*.json"` 정적 ESM import로 로드된다(`lib/data/*.ts`). JSON 문법이 깨지면 런타임이 아니라 **빌드 타임에 실패**한다 — "런타임에 도달하는 Invalid JSON"은 이 아키텍처에서 구조적으로 발생할 수 없다 | 구조적으로 이미 보장됨 |
| Empty Array | 목록형 컴포넌트(`ProjectGrid`, `AnalysisGrid`, `SkillSummary`, `ExperienceTimeline` 등)는 이미 길이 0을 확인해 Empty State 메시지를 렌더링한다(`docs/DESIGN_SYSTEM.md` §12 Empty States) | 이미 구현됨 |
| Record Not Found (slug 조회 실패) | `app/projects/[slug]/page.tsx`, `app/analysis/[slug]/page.tsx`가 `findBySlug()` 결과가 없으면 `notFound()`를 호출하고, 각각 `app/projects/[slug]/not-found.tsx`·`app/analysis/[slug]/not-found.tsx`가 렌더링한다 | 이미 구현됨(`feature/platform-routing`) |
| Loader 재사용 | slug 조회 로직이 `lib/data/findBySlug.ts`의 제네릭 헬퍼(`findBySlug<T extends { slug: string }>`)로 통합되어, `getProjects()`/`getAnalysis()` 어느 배열에든 재사용된다 | 이미 구현됨(`feature/platform-routing`) |

### 13.2 Rendering Resilience

| 항목 | 보장 방식 | 현재 상태 |
|------|------------|-------------|
| Loading State | 없음(`feature/platform-routing`에서 제거) — 아래 참고 | `app/loading.tsx` 없음 |
| Error Boundary | Next.js App Router의 `error.tsx` 컨벤션이 라우트 세그먼트를 감싸는 Error Boundary 역할을 자동으로 수행한다 — 별도의 커스텀 React Error Boundary 클래스는 프레임워크 컨벤션과 중복이라 만들지 않는다 | 루트 `app/error.tsx` 존재(placeholder 문구) |

**Loading State를 제거한 이유**: `app/loading.tsx`(루트)가 존재하면 Next.js가 하위 모든 비동기 Server Component를 자동으로 Suspense 경계로 감싼다. 이 경계가 있으면 스트리밍이 시작된 뒤에야 `notFound()`가 평가되므로, 실제 HTTP 응답 상태 코드가 이미 커밋된 200으로 굳어버린다 — `curl`/모니터링 도구/일부 크롤러처럼 JS를 실행하지 않는 클라이언트에는 잘못된 slug 요청도 200으로 보인다(`feature/platform-routing`에서 직접 재현·확인). `app/loading.tsx` 자신의 기존 주석도 "이 프로젝트는 전 페이지가 동기 SSG라 로딩 화면을 볼 일이 거의 없다"고 이미 밝히고 있었다 — 실사용 가치가 낮은 파일이 Record Not Found의 route safety를 깨고 있었으므로 제거했다. 제거 후 `/projects/[slug]`·`/analysis/[slug]`의 잘못된 slug가 정확히 404를 반환함을 프로덕션 빌드로 재현 확인했다. 향후 실제 클라이언트 사이드 비동기 요청이 생기면, 그 라우트에 한정된 지역 `loading.tsx`를 그때 다시 검토한다(전역 파일로 되돌리지 않는다).

### 13.3 Navigation Resilience

`docs/INFORMATION_ARCHITECTURE.md` §4(내비게이션 흐름)가 정의한 Header/Footer/상세 이동 구조가 실제로 끊김 없이 동작하는지의 계약이다.

| 항목 | 보장 방식 | 현재 상태 |
|------|------------|-------------|
| Active Navigation | `components/layout/Header/Header.tsx`가 `usePathname()`과 `item.path`를 비교해 `aria-current="page"`를 부여한다. `/`만 완전 일치, 나머지는 완전 일치 또는 `${item.path}/`로 시작하는 하위 경로도 활성으로 판정한다 | 이미 구현됨(`feature/platform-routing`) — `/projects/[slug]`에서도 "Projects"가 정확히 활성 표시된다 |
| Breadcrumb | `docs/INFORMATION_ARCHITECTURE.md` §4가 이미 "모든 흐름은 최대 2단계(목록→상세) 이내" + "언제든 Header/Footer로 다른 최상위 페이지 이동 가능"을 설계 원칙으로 명시했다 | Breadcrumb 컴포넌트 없음 — 이는 미구현이 아니라 **기존 IA 결정과 일치하는 상태다.** 깊이가 2단계로 고정되어 있는 한 새로 만들지 않는다(과설계 방지). 사이트 깊이가 실제로 늘어나는 시점에 재검토한다 |
| Deep Link | 카드→상세 링크(`ProjectCard`/`AnalysisCard`)는 전부 `data/*.json`의 실제 `slug`로 생성되어 존재하지 않는 경로를 만들지 않는다 | 이미 보장됨 — §11 Identifier Rule과 동일한 slug 기반 구조 덕분 |
| Back Navigation | `[slug]` 상세 페이지가 마지막에 목록으로 돌아가는 `Button`(secondary)을 렌더링한다 — `docs/INFORMATION_ARCHITECTURE.md` §2.4/§2.6의 "다른 프로젝트로 이동하는 내비게이션"에 대응 | 이미 구현됨(`feature/platform-routing`) |
| Broken Link | 전체 코드베이스의 내부 `href`를 실제 라우트와 대조한 결과, 존재하지 않는 경로를 가리키는 링크는 없다 | 이미 보장됨 |
| Footer 네비게이션 | `docs/INFORMATION_ARCHITECTURE.md` §4가 서술한 "글로벌 내비게이션과 동일한 핵심 링크 + Contact 강조"를 구현했다 — Home/Projects/Analysis/Resume는 `Link`, Contact는 `Button(primary)`으로 강조. `getNavigation()`을 Header와 동일하게 재사용해 라벨이 어긋나지 않는다 | 이미 구현됨(`feature/platform-routing`) — 이전에 기록된 Architecture Drift 해소 |

### 13.4 Compatibility

| 항목 | 요구 사항 | 현재 상태 |
|------|-----------|-------------|
| Cross Browser | Chrome/Edge/Firefox/Safari 최신 버전에서 레이아웃·인터랙션이 동일하게 동작해야 한다 | 미확인 — 실제 브라우저 교차 테스트가 수행된 적 없음. Tailwind CSS 기반이라 구조적 위험은 낮지만 검증되지는 않았다 |
| Device | Desktop/Tablet/Mobile 반응형(`docs/DESIGN_SYSTEM.md` §5 Responsive Behavior)이 실제 기기에서 확인되어야 한다 | 미확인 — 반응형 원칙은 문서화되어 있으나(§5) 실기기/에뮬레이터 검증 기록 없음 |

이 두 항목은 코드 계약이 아니라 **검증 절차**다 — 새 컴포넌트나 규칙을 만들지 않고, 본 문서 §16 Platform Release Definition of Done의 "Cross Browser QA" 단계에서 실행한다.

### 13.5 적용 범위

이 계약(§13.1~§13.4)은 `data/*.json`을 사용하는 모든 Feature(Home/About/Projects/Analysis/Resume/Personal Works/Contact)에 동일하게 적용된다. 이번 브랜치는 계약을 정의·확장하는 Architecture Decision 단계이며, 실제 코드 구현(공유 slug 조회 헬퍼, `notFound()` 전환, Footer 구현, Active Navigation 경로 매칭 개선 등)은 후속 브랜치에서 다룬다(`docs/PROJECT.md` §12.1 Platform Debt).

---

## 14. SEO & Performance Contract

### 14.1 SEO

| 항목 | 요구 사항 | 현재 상태 |
|------|-----------|-------------|
| Metadata | 모든 `page.tsx`는 `metadata` 또는 `generateMetadata`를 통해 페이지별 제목/설명을 노출해야 한다. 목록형 페이지는 정적 `metadata`로, 상세 페이지(`[slug]`)는 `generateMetadata`로 실제 데이터(title/overview 등)를 반영한다 | 이미 구현됨(`feature/platform-seo`) — 9개 `page.tsx` 전부 `lib/seo/buildMetadata`로 구성. 상세 페이지는 `generateMetadata`가 `findBySlug` 조회 실패 시 페이지 본문과 동일하게 `notFound()`로 위임한다 |
| OpenGraph | 위 metadata에 OpenGraph 필드(title/description/image)를 포함한다 | 이미 구현됨 — `buildMetadata`가 title/description/url/siteName/type을 항상 채우고, 실제 이미지가 있는 페이지(Project Detail의 `cover`)만 image를 추가한다. 이미지가 없는 페이지에 억지로 만들지 않는다 |
| robots | `app/robots.ts`(Next.js 컨벤션)으로 크롤링 정책을 정의한다 | 이미 구현됨 — 전체 allow 하나. `data/*.json`에 반영된 콘텐츠는 이미 Quality Gate(`docs/PROJECT.md` §10)를 통과했으므로 noindex 대상이 없다 |
| sitemap | `app/sitemap.ts`(Next.js 컨벤션)으로 전체 라우트를 노출한다 | 이미 구현됨 — 정적 라우트 7개 + `getProjects()`/`getAnalysis()`가 실제로 반환하는 slug만 반영(현재는 둘 다 `[]`이라 정적 라우트만 노출) |
| canonical | 상세 페이지(`[slug]`)의 `metadata.alternates.canonical`을 설정한다 | 이미 구현됨 — `buildMetadata`가 모든 페이지에 자기 자신을 가리키는 canonical을 설정한다(목록/상세 공통) |
| favicon | `app/favicon.ico` | 이미 존재 |

**Shared SEO Utility**: `lib/seo/buildMetadata.ts`가 위 5개 항목을 한 곳에서 조립한다 — 페이지는 `title`/`description`/`path`(+선택적 `image`)만 넘긴다. `SITE_URL`(`lib/seo/siteUrl.ts`)은 `NEXT_PUBLIC_SITE_URL` 환경 변수를 유일한 출처로 삼으며, 커스텀 도메인이 미정인 지금은 로컬 기본값으로 대체한다(`docs/DEPLOYMENT.md` §2). Home은 그 자체가 `SITE_NAME`이라 `suffixTitle: false`로 중복("Game Designer Portfolio | Game Designer Portfolio")을 막는다.

### 14.2 Performance

| 항목 | 요구 사항 | 현재 상태 |
|------|-----------|-------------|
| Image Optimization | 콘텐츠 이미지는 실제로 이득이 있는 곳에 `next/image`를 사용한다 | 이미 구현됨(`feature/platform-performance`) — Gallery 썸네일(그리드, 이미 `aspect-video`로 비율 고정, 스크롤 하단이라 lazy loading 이득 있음)만 `fill`+`sizes`로 전환. 확대 보기 이미지는 `<img>` 유지 — 아래 참고 |
| Dynamic Import | 초기 로드에 필요하지 않은 컴포넌트는 `next/dynamic`으로 지연 로드한다 | 검토 완료, 미적용 — `.next/static/chunks` 크기를 직접 확인한 결과 프로젝트 자체 코드(Modal 76줄, Gallery 등)는 전부 수 KB 수준이고 번들의 대부분(224K/148K/112K)은 React/Next 런타임 공유 청크라 code splitting으로 줄일 수 있는 부분이 아니다. 무거운 서드파티 의존성 자체가 없다(package.json에 next/react/react-dom 외 없음) — 지금 적용하면 실제 이득 없이 복잡도만 는다(과설계 방지) |
| Bundle Size | 새 의존성 추가 시 번들 크기 영향을 검토한다(CLAUDE.md §4 "불필요한 의존성 추가 금지"와 동일한 원칙) | 기존 원칙 재확인, 신규 아님 |

**확대 보기(Modal) 이미지를 `next/image`로 전환하지 않는 이유**: 스크린샷/와이어프레임/UML/ERD/컨셉 아트 등(`docs/DATA_MODEL.md` §5.7 `ProjectGalleryImageType`) 원본 비율이 제각각이라 `max-h-[70vh] w-full object-contain`으로 자연스러운 비율을 유지해야 한다. `next/image`의 `fill`은 고정 비율 컨테이너가 필요해 강제로 씌우면 세로로 긴 이미지가 레터박싱되는 시각적 회귀가 생긴다. 게다가 클릭 전에는 `{selected && ...}` 조건부 렌더링으로 아예 마운트되지 않아 초기 로드에 영향이 없다 — 전환해도 성능 이득이 없다.

### 14.3 적용 범위와 우선순위

이 계약도 Data Resilience(§13)와 동일하게 모든 Feature에 적용되며, 실제 구현은 후속 브랜치의 몫이다. 본 문서 §15 Platform Feature Definition of Done이 이 계약을 Feature별 완료 기준으로 연결한다.

---

## 15. Platform Feature Definition of Done

`docs/PROJECT.md` §10(Feature 완료 기준)이 **콘텐츠** 완성도(Architecture→...→Portfolio Quality)를 정의한다면, 이 절은 **플랫폼(코드)** 완성도를 정의한다 — 그래서 이 축은 **콘텐츠가 비어 있어도 통과할 수 있어야 한다.** 두 축은 서로 독립적이다: 어떤 Feature는 Platform DoD를 통과했지만 Content Quality Gate(`docs/PROJECT.md` §10)는 아직 못 미쳤을 수 있고(지금의 Projects/Analysis), 반대로 실제 콘텐츠가 있어도 Platform 쪽이 미비할 수 있다.

이 절도 새 규칙을 만들지 않는다 — 이미 다른 문서에 정의된 것을 Feature 완료 기준이라는 하나의 체크리스트로 묶을 뿐이다.

| 기준 | 정의된 곳 |
|------|-------------|
| JSON 기반 렌더링 | §5 데이터 흐름 |
| Empty State | §13.1, `docs/DESIGN_SYSTEM.md` §12 |
| Loading | §13.2 |
| Error | §13.2, `docs/DESIGN_SYSTEM.md` §12 |
| Responsive | `docs/DESIGN_SYSTEM.md` §5 Layout System |
| Accessibility / Keyboard Navigation | `docs/DESIGN_SYSTEM.md` §13 |
| SEO / Metadata | §14.1 |
| Performance(Image/Dynamic Import) | §14.2 |
| Component 재사용 | `docs/DESIGN_SYSTEM.md` §6~§9 (Component Library/Naming/Shared/Dependency) |
| Design System 준수 | `docs/DESIGN_SYSTEM.md` 전체 |
| Architecture Rule 준수 | §11(Identifier)·§12(Lifecycle)·§13~§14(Resilience/SEO/Performance) |

실제 진행 상태(Feature별로 지금 어디까지 왔는지)는 `docs/PROJECT.md` §11.1 Platform Readiness Status가 추적한다 — 이 절은 기준만 정의하고, 상태 추적은 PROJECT.md의 책임이다(§1 문서 책임 분리).

---

## 16. Platform Release Definition of Done

§15(Feature 단위 완료 기준)를 전부 통과한 이후, Platform 전체가 배포 가능한 상태인지 판단하는 마지막 게이트다. 새 배포 절차를 만들지 않는다 — `docs/DEPLOYMENT.md`(배포 절차, 이번 7개 Source of Truth 문서에는 포함되지 않음)의 앞단에 QA 게이트를 붙이는 것뿐이다.

```
Feature Complete (§15 전체 Feature ✅)
   ↓
Platform QA (docs/GIT_WORKFLOW.md §7.2.1 Page QA)
   ↓
Accessibility QA (docs/DESIGN_SYSTEM.md §13)
   ↓
SEO 완료 (§14.1)
   ↓
Performance 완료 (§14.2)
   ↓
Cross Browser QA (§13.4)
   ↓
Build 성공 (docs/DEPLOYMENT.md §4)
   ↓
Deploy (docs/DEPLOYMENT.md §3, §6)
   ↓
Release
```

이 게이트는 `docs/PROJECT.md` §10 Content Quality Gate와 독립적이다 — Platform Release는 콘텐츠가 비어 있어도 통과할 수 있어야 한다(§1 목적). 실제로 배포하는 결정은 항상 사용자가 내리며(`docs/DEPLOYMENT.md` §8 "Claude Code는 배포 준비까지만 수행"), 이 절은 그 이전 단계에서 무엇을 확인해야 하는지만 정의한다.

---

## 17. Architecture Evolution Policy

이 프로젝트의 Governance(Identifier Rule·Lifecycle·Content Workflow·Review System·Quality Gate·Evidence System·Platform Resilience/SEO/Performance Contract)는 완료 상태다. 이 절은 완료 이후 Architecture를 어떻게(만) 바꿀 수 있는지 정의한다 — Governance를 종료하면서도 Architecture가 영원히 고정되는 것은 아니라는 점을 명시하기 위함이다.

**Architecture는 Stable 상태로 간주한다.** 다음 세 가지 경우에만 변경을 허용하며, 그 외에는 새로운 Rule을 원칙적으로 추가하지 않는다.

| 허용 경로 | 의미 | 예시 |
|-----------|------|------|
| Architecture Decision | 실제로 필요한 새 구조적 결정이 생겼을 때 | Personal Works/Contact의 데이터 소스 확정(`docs/PROJECT.md` §11 미결 항목) |
| Architecture Drift | 문서와 코드가 실제로 어긋난 것을 발견했을 때 | `docs/INFORMATION_ARCHITECTURE.md` §4 vs 빈 `Footer.tsx`(`docs/PROJECT.md` §12.1) |
| Technical Debt | 이미 기록된 부채를 실제로 해소할 때 | `docs/PROJECT.md` §12의 각 도메인 부채 항목 |

이 세 경로 밖에서 "더 나은 방법이 떠올랐다"는 이유만으로 새 Rule이나 새 문서 섹션을 추가하지 않는다. Platform 완성(§13~§16)이 지금부터의 최우선 목표이며, Governance 확장은 이 정책으로 종료한다.

---

## 18. Platform Branch Strategy

Technical Debt(`docs/PROJECT.md` §12.1 Platform Debt)를 우선순위 순서로 처리하는 책임 단위 브랜치 원칙이다. 실제 브랜치명·순서·목록의 **Source of Truth는 `docs/GIT_WORKFLOW.md` §1.2 하나뿐이다** — 여기서 다시 나열하면 두 문서가 서로 다른 목록을 갖게 될 위험(Drift)이 생기므로, 이 절은 원칙만 명시한다.

- 브랜치 하나는 하나의 책임 영역만 다룬다(`docs/GIT_WORKFLOW.md` §1).
- 순서는 Technical Debt의 우선순위(High → Medium → Low)를 그대로 따른다.
- 실제 목록은 `docs/GIT_WORKFLOW.md` §1.2를 확인한다.

---

## 요약

이 프로젝트는 **데이터 중심의 프론트엔드 포트폴리오 시스템**이며,
모든 UI는 JSON 데이터를 기반으로 생성된다.