# 프로젝트 목표 문서

## 1. 프로젝트 개요

### 프로젝트 이름

Game Designer Portfolio

### 목적

이 프로젝트는 게임 기획자로서의 작업물, 사고 방식, 역량을 체계적으로 보여주기 위한 전문 포트폴리오 웹사이트를 설계하고 구축하고 유지하는 것을 목표로 한다.

이 포트폴리오는 단순한 이력서가 아니라, 게임 디자인 능력을 구조적으로 증명하는 살아있는 서비스이다.

**Platform vs Content**: 이 프로젝트의 완성 기준은 "포트폴리오 콘텐츠"가 아니라 "포트폴리오 플랫폼"이다 — `data/*.json`만 교체하면 Architecture 변경 없이 Projects/Home/Analysis/Resume 등에 즉시 반영되는 Data Driven 구조를 만드는 것이 목표이며, `data/*.json`은 완성된 콘텐츠가 아니라 콘텐츠를 갈아 끼우는 데이터 입력 인터페이스다. 이 구분은 §10(콘텐츠 완성도)과 §13(플랫폼 완성도)을 별도 축으로 두는 이유이기도 하다 — 플랫폼이 서비스 수준으로 완성되어야, 이후 실제 콘텐츠를 채우는 작업과 향후 콘텐츠 교체가 항상 안정적으로 반영된다.

### 배경

게임 기획 직무는 단순한 아이디어가 아니라 시스템 설계 능력, 콘텐츠 설계 능력, 분석 능력을 함께 평가한다.

이러한 역량은 정적인 문서나 슬라이드만으로 충분히 전달되기 어렵다.

이 프로젝트는 이를 해결하기 위해 설계된 인터랙티브 포트폴리오 시스템이다.

---

## 2. 목표

| 번호 | 목표 | 성공 기준 |
|------|------|----------|
| 1 | 완전한 포트폴리오 구축 | 필수 섹션(Home, About, Projects, Analysis, Personal Works, Resume, Contact) 구현 |
| 2 | 취업 성과 | 목표 회사 1곳 이상 인터뷰 확보 |
| 3 | 시스템 기획 역량 증명 | 최소 3개 시스템 설계 문서 |
| 4 | 콘텐츠 기획 역량 증명 | 최소 2개 콘텐츠 설계 문서 |
| 5 | 분석 능력 증명 | 2개 이상 게임 분석 문서 |
| 6 | UX 품질 | Core Web Vitals “Good” 수준 유지 |
| 7 | 지속적 업데이트 | 월 1개 이상 콘텐츠 추가 |
| 8 | 유지보수성 | 모든 구조 문서 최신 상태 유지 |

---

## 3. 목표 회사

| 회사 | 설명 |
|------|------|
| 넥슨 | 대규모 라이브 서비스 게임 |
| 데브캣 | 내러티브 중심 시스템 게임 |
| 데브시스터즈 | IP 기반 모바일 게임 |
| 슈퍼센트 | 하이퍼캐주얼 게임 |
| 111퍼센트 | 시뮬레이션/캐주얼 게임 |

---

## 4. 목표 직무

- 시스템 기획자
- 콘텐츠 기획자

두 역할 모두를 동시에 증명할 수 있는 구조로 설계한다.

---

## 5. 기술 스택

| 영역 | 기술 |
|------|------|
| 웹 프레임워크 | Next.js |
| UI | React |
| 언어 | TypeScript |
| 스타일 | Tailwind CSS |
| AI 도구 | Claude Code |
| 버전 관리 | GitHub |
| IDE | VS Code |
| MCP | Model Context Protocol |

---

## 6. 개발 원칙

| 원칙 | 설명 |
|------|------|
| 문서 우선 | 모든 개발은 문서에서 시작 |
| JSON 우선 | 콘텐츠는 데이터로 관리 |
| 컴포넌트 중심 | UI는 재사용 가능한 단위로 구성 |
| UX 우선 | 사용자 경험이 코드보다 우선 |
| 유지보수성 | 장기 업데이트 가능 구조 |
| 확장성 | 콘텐츠 증가에 대응 가능 |
| 접근성 | 모든 사용자 고려 |

---

## 7. 포트폴리오 구조

| 섹션 | 설명 |
|------|------|
| Home | 전체 소개 |
| About | 자기소개 및 철학 |
| Projects | 프로젝트 상세 |
| Analysis | 게임 분석 |
| Personal Works | 개인 작업 |
| Resume | 이력 |
| Contact | 연락 |

---

## 8. 완료 기준

다음 조건을 만족하면 프로젝트 완료로 간주한다:

- 모든 섹션 구현 완료
- 모든 문서 최신 상태 유지
- 배포 완료
- 반응형 지원
- 성능/접근성 기준 충족
- 실제 취업 활용 가능 상태

---

## 9. 성공 기준

- 목표 회사 인터뷰 발생
- 3~5분 내 전체 역량 파악 가능
- 시스템/콘텐츠 역량 구분 명확
- 유지보수 가능한 구조
- 실제 서비스 수준의 완성도

---

## 10. Feature 완료 기준 (Definition of Done) — Quality Gate

이 프로젝트에서 "완료"는 코드가 동작하는 것을 의미하지 않는다. 하나의 Feature는 아래 Quality Gate의 8단계를 모두 통과해야 **Completed**로 간주한다 — 앞 단계가 끝나야 다음 단계로 넘어갈 수 있고, 중간 단계까지만 끝난 Feature를 "완료"라고 부르지 않는다.

```
Architecture → Implementation → Real Contents → Content Review
   → UX Review → Recruiter Review → Senior Planner Review
   → Portfolio Quality → Completed
```

| 단계 | 의미 | 통과 조건 |
|------|------|-----------|
| 1. Architecture | 구조가 문서에 확정되어 있는가 | `docs/DATA_MODEL.md`/`docs/DESIGN_SYSTEM.md`/`docs/INFORMATION_ARCHITECTURE.md`에 필드·컴포넌트·정보 구조가 정의됨 |
| 2. Implementation | 그 구조가 코드로 존재하는가 | Type → JSON 스키마 → Loader → Feature → Component → Page가 전부 연결되어 동작함(`docs/ARCHITECTURE.md` §5 데이터 흐름) |
| 3. Real Contents | 실제 콘텐츠가 채워져 있는가 | `data/*.json`에 가짜 데이터가 아닌 실제 프로젝트/분석/이력 내용이 존재함 |
| 4. Content Review | 그 콘텐츠가 작성 기준 자체를 충족하는가 | `docs/CONTENT_GUIDE.md` §10.1 Content Review Checklist를 섹션별로 통과함 |
| 5. UX Review | 실제 콘텐츠 기준으로 화면 흐름을 검증했는가 | 빈 배열/placeholder가 아닌 실데이터로 렌더링해 가독성·정보 위계·반응형을 확인함 |
| 6. Recruiter Review | 채용 담당자가 의도한 판단을 내리는가 | `docs/CONTENT_GUIDE.md` §10.2 Recruiter Review Checklist(2~3분 스크리닝)를 통과함 |
| 7. Senior Planner Review | 시니어 기획자가 의도한 판단을 내리는가 | `docs/CONTENT_GUIDE.md` §10.3 Senior Game Designer Review Checklist(심층 검토)를 통과함 |
| 8. Portfolio Quality | 취업에 바로 쓸 수 있는 완성도인가 | 오탈자, 이미지 품질, 문서 간 Drift 없음까지 확인됨 |

**Architecture + Implementation만 끝난 상태는 "Infrastructure 완료"라고 부르고, "Feature 완료"라고 부르지 않는다.** 8단계를 모두 통과한 상태만 **Completed**라고 부른다. 이 구분이 없으면 데이터가 비어 있는데도 "구현이 끝났다"는 착각이 생긴다.

> **변경 이력 (`feature/projects-content-review-guide`)**: 기존 5단계("Recruiter Review")는 채용 담당자와 시니어 기획자 두 관점을 하나의 단계로 묶고 있었고, Real Contents와 UX Review 사이에 "콘텐츠가 작성 기준 자체를 충족하는가"를 검증하는 단계가 없었다. `docs/CONTENT_GUIDE.md` §10에 세 체크리스트(Content/Recruiter/Senior Game Designer Review)를 만들면서, 각 체크리스트가 검증하는 관점 그대로를 별도 Gate로 분리했다 — Content Review, Recruiter Review, Senior Planner Review 3단계 + 최종 Completed 상태.

---

## 11. 진행 상태 (Feature Completion Status)

`data/*.json`의 실제 내용과 각 Feature의 코드 상태를 기준으로 위 8단계 Quality Gate 중 어디까지 도달했는지 표시한다. ✅ 완료 · 🔶 부분(placeholder 값 존재) · ❌ 미완료 · ⬜ 아직 해당 단계에 도달하지 않음.

| Feature | 1. Architecture | 2. Implementation | 3. Real Contents | 4. Content Review | 5. UX Review | 6. Recruiter Review | 7. Senior Planner Review | 8. Portfolio Quality | 현재 상태 |
|---|---|---|---|---|---|---|---|---|---|
| Home | ✅ | ✅ | 🔶 (`profile.json`/`skills.json`이 placeholder 문자열·빈 배열) | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Infrastructure 완료, Content 단계 예정 |
| About | ✅ | ✅ | 🔶 (동일) | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Infrastructure 완료, Content 단계 예정 |
| Resume | ✅ | ✅ | 🔶 (`personalInfo`만 placeholder, `career`/`education` 등은 빈 배열) | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Infrastructure 완료, Content 단계 예정 |
| **Projects** | ✅ | ✅ | ❌ (`data/projects.json`이 빈 배열) | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | **Infrastructure 완료 + Content Governance 완료 — 실제 프로젝트 미확정 (Evidence Inventory는 `docs/projects/evidence-template.md` 템플릿 상태로 대기)** |
| Analysis | ✅ | ✅ | ❌ (`data/analysis.json`이 빈 배열) | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Infrastructure 완료, Content 단계 예정 (Review Checklist 미구축 — §12 참고) |
| Personal Works | ❌ (`docs/DATA_MODEL.md`에 세부 필드 미정) | ❌ | ❌ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | 설계 전 단계 |
| Contact | 🔶 (연락처 데이터 소스 미정 — `profile.json` 확장 vs `resume.json.personalInfo` 재사용) | ❌ | ❌ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Architecture Decision 필요 |

이전에 통용되던 "Projects Feature 진행 중"이라는 표현은 Architecture/Implementation과 Real Contents 이후 단계를 구분하지 않아 폐기한다. 정확한 표현은 **"Projects Infrastructure 완료 + Content Governance 완료 — Projects Content 단계 진입"**이다. "Content Governance 완료"는 §10 Quality Gate의 4·6·7단계(Content/Recruiter/Senior Planner Review)를 검증할 체크리스트가 `docs/CONTENT_GUIDE.md` §10에 구축되었다는 뜻이며, Projects의 Real Contents 자체는 여전히 ❌다 — 실제 프로젝트명이 확정되면 그 slug를 딴 `feature/projects-<slug>-content` 브랜치에서 콘텐츠를 작성한다 (근거 없는 프로젝트명을 미리 정하지 않는다).

---

## 12. Technical Debt

이 프로젝트가 아직 해결하지 못한 구조적 부채를 추적한다. 코드 부채(`docs/ARCHITECTURE.md`/`docs/DESIGN_SYSTEM.md`에 개별 변경 이력으로 기록)와 달리, 이 절은 Feature 전체의 진행을 가로막을 수 있는 프로젝트 수준 부채만 다룬다.

### 12.1 Content Governance Debt

콘텐츠 품질을 일정하게 유지하기 위한 기준·검수 체계에 관한 부채다.

| 항목 | 상태 | 설명 |
|------|------|------|
| Content Authoring Guide 미구축 | 해결됨 (`feature/projects-content-guide`) | `docs/CONTENT_GUIDE.md` §3.2에 9개 섹션별 작성 원칙 정의 |
| Projects Review Checklist 미구축 | 해결됨 (`feature/projects-content-review-guide`) | `docs/CONTENT_GUIDE.md` §10에 Content/Recruiter/Senior Game Designer Review Checklist 정의 |
| Quality Gate 미구축 | 해결됨 (`feature/projects-content-review-guide`) | 본 문서 §10에 8단계 Quality Gate로 정의 |
| Analysis Review Checklist 미구축 | 잔존 | §10의 체크리스트는 Projects 전용이다. Analysis가 Content Review 단계(§10 4번)에 도달하려면 `docs/CONTENT_GUIDE.md` §5(게임 분석 작성 규칙) 기준의 별도 Review Checklist가 필요하며, 이번 브랜치 스코프 밖이다 |
| Content Workflow 미문서화 | 해결됨 (`feature/projects-content-workflow`) | `docs/CONTENT_GUIDE.md` §11에 자료 수집→초안→JSON→3개 Review Checklist→수정→Quality Gate 통과→data 반영→최종 검증의 10단계 워크플로우 정의 |
| Evidence / Content Source / Traceability Rule 미구축 | 해결됨 (`feature/projects-content-workflow`) | `docs/CONTENT_GUIDE.md` §12(Evidence Rule)·§13(Content Source Rule)·§14(Traceability Rule)에 정의 |
| Analysis Evidence/Traceability 매핑 미구축 | 잔존 | §12~§14는 Projects 9개 섹션에만 매핑되어 있다. Analysis(`docs/CONTENT_GUIDE.md` §5)의 근거·출처·추적성 규칙은 아직 없으며, Analysis Content 단계 진입 전 별도 브랜치가 필요하다 |
| 콘텐츠 일관성 검증 자동화 없음 | 잔존 | 현재 체크리스트는 전부 수동 검토 절차다. 실제 프로젝트가 아직 없는 지금은 충분하지만, 프로젝트 수가 늘어나면(§2 목표 3 "최소 3개 시스템 설계 문서" 등) 체크리스트 위반을 자동 감지하는 스크립트가 필요할 수 있다 — 지금은 만들지 않는다(과설계 방지) |
| 근거 없는 프로젝트명("Project G") 사용 | 해결됨 (`docs/evidence-structure-generalization`) | 과거 대화의 다른 프로젝트명을 잘못 이어받아 `docs/projects/project-g-evidence.md`, 본 문서 §11/§12 등 여러 곳에 사용했다. 실제 프로젝트명이 확정되기 전이라 전부 제거하고, `docs/projects/evidence-template.md`(프로젝트명 비종속 템플릿)로 대체했다 |

### 12.2 Identifier & Naming Debt

Project를 가리키는 식별자·브랜치명 규칙에 관한 부채다.

| 항목 | 상태 | 설명 |
|------|------|------|
| Project Identifier Rule 미정의 | 해결됨 (`docs/project-identifier-rule`) | Route/Branch/Folder/JSON/Loader/Documents/Gallery/Links/Evidence가 각자 다른 식별자를 쓸 위험이 있었다. `docs/ARCHITECTURE.md` §11에 `slug` 단일 식별자 규칙과 대상별 매핑을 정의 |
| "브랜치 하나 = 프로젝트 하나" 원칙 미문서화 | 해결됨 (`docs/project-identifier-rule`) | 최근 여러 브랜치에서 구두로만 통용되던 원칙을 `docs/GIT_WORKFLOW.md` §1.1에 명문화하고, `feature/projects-<slug>-content` 브랜치 패턴을 예시로 추가 |
| 브랜치명 대상-중심 원칙 위반 사례 | 해결됨(교훈으로 기록) | `docs/evidence-structure-generalization`의 "generalization"은 작업 대상이 아니라 방법론이라 `docs/GIT_WORKFLOW.md` §1의 대상-중심 네이밍과 어긋났다(§12.1의 "근거 없는 프로젝트명" 이슈를 해결한 그 브랜치). 이미 `develop`에 병합되어 브랜치 자체를 rename하지는 않으며, 이후 브랜치(`docs/project-identifier-rule` 등)부터 대상 중심 명명을 적용한다 |

### 12.3 Lifecycle Debt

Project 생성부터 완료까지의 전체 흐름에 관한 부채다.

| 항목 | 상태 | 설명 |
|------|------|------|
| Project Lifecycle 미문서화 | 해결됨 (`docs/project-lifecycle`) | Identifier Rule·Evidence Rule·Content Workflow·Quality Gate가 각 문서에 흩어져 있어 전체 순서가 한눈에 보이지 않았다. `docs/ARCHITECTURE.md` §12에 9단계로 연결하고, 표시용 Project State 별칭(Draft/Evidence/Writing/Review/Completed)을 정의했다 — 새 필드나 새 규칙 없이 기존 규칙을 가리키기만 한다 |
| Archive 정책 미정 | 잔존 | 프로젝트를 포트폴리오에서 내리거나 이력으로만 남기는 정책이 없다. `data/projects.json`은 필드 추가가 금지된 고정 스키마라 Archive를 표현하려면 스키마 변경 Architecture Decision이 필요하다 — 실제로 Archive할 프로젝트가 없는 지금은 설계하지 않는다(과설계 방지, `docs/ARCHITECTURE.md` §12.4) |
| DATA_MODEL §4/§5 필드 범위 불일치(관찰) | 잔존(낮은 우선순위) | `docs/DATA_MODEL.md` §4는 "모든 데이터"에 `status`/`description`/`createdAt`/`updatedAt`/`order`가 공통 적용된다고 서술하지만, Project(§5.1)·Analysis(§6.1) 실제 필드 목록에는 없다. Project State(§12.1)를 이 `status` 필드로 표현하고 싶은 유혹이 있었으나, 필드 추가 금지 원칙에 따라 이번 브랜치에서는 다루지 않는다 — §4가 실제로 "선택적 공통 어휘"인지 "필수 규칙"인지는 별도로 명확히 할 필요가 있다 |

### 12.4 Platform Resilience Debt

`docs/ARCHITECTURE.md` §13(Platform Resilience Contract)·§14(SEO & Performance Contract) 정의 과정에서 실제 코드를 확인해 발견한 부채다. 전부 "지금 막혀 있는 것"이 아니라 "다음 구현 브랜치가 처리할 것"으로 기록한다.

| 항목 | 상태 | 설명 |
|------|------|------|
| slug 조회 헬퍼 미공유 | 잔존 | `app/projects/[slug]/page.tsx`, `app/analysis/[slug]/page.tsx`가 각자 `.find(item => item.slug === slug)`를 중복 구현한다. `lib/data`에 공유 헬퍼(`getProjectBySlug` 등)가 없다 |
| Record Not Found이 Next.js 컨벤션을 쓰지 않음 | 잔존 | slug 조회 실패 시 두 `[slug]` 페이지 모두 인라인 텍스트만 렌더링하고 `notFound()`/`not-found.tsx`를 쓰지 않는다 (`docs/ARCHITECTURE.md` §13.1) |
| 페이지별 Metadata 없음 | 잔존 | `app/layout.tsx`에만 정적 `metadata`가 있고, 그 외 모든 `page.tsx`는 `metadata`/`generateMetadata`가 없다 |
| sitemap/robots 없음 | 잔존 | `app/sitemap.ts`, `app/robots.ts` 모두 없음 |
| next/image 미사용 | 잔존 | `features/projects/Gallery/Gallery.tsx`가 `<img>`를 직접 사용(기존 ESLint `no-img-element` 경고 2건과 동일 지점) |
| dynamic import 미사용 | 잔존(낮은 우선순위) | 프로젝트 전체에서 `next/dynamic` 미사용 — 콘텐츠가 아직 없어 번들 크기가 실제 문제가 되지는 않는다 |

---

## 13. Platform Feature Definition of Done

§10(Feature 완료 기준)이 **콘텐츠** 완성도(Architecture→...→Portfolio Quality)를 정의한다면, 이 절은 **플랫폼(코드)** 완성도를 정의한다. 이 프로젝트의 목적은 포트폴리오 콘텐츠 작성이 아니라 `data/*.json`만 교체하면 계속 재사용할 수 있는 Data Driven Portfolio Platform을 완성하는 것이다(§1) — 그래서 이 축은 **콘텐츠가 비어 있어도 통과할 수 있어야 한다.** 두 축은 서로 독립적이다: 어떤 Feature는 Platform DoD를 통과했지만 Content Quality Gate(§10)는 아직 못 미쳤을 수 있고(지금의 Projects/Analysis), 반대로 실제 콘텐츠가 있어도 Platform 쪽이 미비할 수 있다.

이 절도 새 규칙을 만들지 않는다 — 이미 다른 문서에 정의된 것을 Feature 완료 기준이라는 하나의 체크리스트로 묶을 뿐이다.

| 기준 | 정의된 곳 |
|------|-------------|
| JSON 기반 렌더링 | `docs/ARCHITECTURE.md` §5 데이터 흐름 |
| Empty State | `docs/ARCHITECTURE.md` §13.1, `docs/DESIGN_SYSTEM.md` §12 |
| Loading | `docs/ARCHITECTURE.md` §13.2 |
| Error | `docs/ARCHITECTURE.md` §13.2, `docs/DESIGN_SYSTEM.md` §12 |
| Responsive | `docs/DESIGN_SYSTEM.md` §5 Layout System |
| Accessibility / Keyboard Navigation | `docs/DESIGN_SYSTEM.md` §13 |
| SEO / Metadata | `docs/ARCHITECTURE.md` §14.1 |
| Performance(Image/Dynamic Import) | `docs/ARCHITECTURE.md` §14.2 |
| Component 재사용 | `docs/DESIGN_SYSTEM.md` §6~§9 (Component Library/Naming/Shared/Dependency) |
| Design System 준수 | `docs/DESIGN_SYSTEM.md` 전체 |
| Architecture Rule 준수 | `docs/ARCHITECTURE.md` §11(Identifier)·§12(Lifecycle)·§13~§14(Resilience/SEO/Performance) |

### 13.1 Platform Readiness Status

이번 브랜치에서 실제로 코드를 확인한 범위만 채운다 — 확인하지 않은 Feature를 추측으로 채우지 않는다. ✅ 충족 · 🔶 부분 · ❌ 미충족 · ⬜ 미확인(이번 브랜치에서 코드를 보지 않음).

| Feature | JSON 렌더링 | Empty State | Loading/Error | SEO/Metadata | Performance | 비고 |
|---|---|---|---|---|---|---|
| Projects | ✅ | ✅ (목록), ❌ (상세 not-found) | 🔶 (컨벤션 파일만 존재, placeholder) | ❌ | ❌ (`<img>` 사용) | §12.4 참고 |
| Analysis | ✅ | ✅ (목록), ❌ (상세 not-found) | 🔶 (동일) | ❌ | ⬜ | §12.4 참고 |
| Home | ✅ | ✅ (Introduction/FeaturedProjects/FeaturedAnalysis 확인됨) | ⬜ | ❌ | ⬜ | |
| About | ✅ | ✅ (CareerTimeline/SkillOverview 확인됨) | ⬜ | ❌ | ⬜ | |
| Resume | ✅ | ✅ (SkillSummary/ExperienceTimeline/Education/ProjectExperience 확인됨) | ⬜ | ❌ | ⬜ | |
| Personal Works | ⬜ | ⬜ | ⬜ | ❌ | ⬜ | Architecture 자체가 미확정(§11 진행 상태) |
| Contact | ⬜ | ⬜ | ⬜ | ❌ | ⬜ | Architecture Decision 필요(§11 진행 상태) |

`⬜ 미확인` 항목은 다음 구현 브랜치에서 실제로 코드를 열어 확인한 뒤 갱신한다 — 이번 브랜치는 Architecture Decision·Alignment 단계이며 코드를 수정하지 않았다(§12 Data Flow Audit 참고).

---