# 정보 구조 (Information Architecture)

이 문서는 Game Designer Portfolio의 모든 페이지가 어떤 정보를 담고, 어떤 순서로 보여주며, 서로 어떻게 연결되는지를 정의한다.

이 문서는 UI 디자인, 색상, 구현 코드를 다루지 않는다. `docs/DESIGN_SYSTEM.md`가 시각적 언어와 컴포넌트를 정의하고, `docs/ARCHITECTURE.md`가 시스템 구조를 정의하는 것과 달리, 이 문서는 그 사이에서 **"각 페이지에 무엇이 있어야 하는가"**를 결정한다. UI 구현은 이 문서가 먼저 확정된 뒤에 진행한다.

---

## 1. 목적

- `docs/PROJECT.md`가 정의한 목표(취업 성과, 시스템/콘텐츠 기획 역량 증명, 분석 능력 증명)를 각 페이지의 구조적 근거로 연결한다.
- `docs/ARCHITECTURE.md` §3(정보 구조)에 나열된 7개 페이지 + Project Detail + Analysis Detail + 404를 구체화한다.
- UI를 만들기 전에 콘텐츠의 우선순위와 배치 순서를 문서로 먼저 합의한다. (CLAUDE.md의 "문서 우선" 원칙)

---

## 2. 페이지별 정보 구조

### 2.1 Home

| 항목 | 내용 |
|------|------|
| 목적 | 방문자가 몇 분 안에 "이 사람이 누구고, 어떤 역할을 지향하며, 얼마나 강한 작업물을 가졌는가"를 파악하게 한다. |
| 대상 사용자 | 채용 담당자 (1차 스크리닝, 2~3분 내 훑어보는 방문자가 1순위) |
| 사용자 목표 | 후보자의 정체성과 지향 역할을 빠르게 확인하고, 더 깊이 볼지 결정한다. |
| CTA | "프로젝트 보기", "이력서 다운로드", "연락하기" |

**구성 섹션 (상단 → 하단)**
1. Hero — 이름/정체성, 지향 역할(시스템 기획자 / 콘텐츠 기획자), 한 줄 소개
2. 핵심 역량 요약 (스킬 카테고리별 한눈에 보기)
3. Featured Projects — `featured: true`인 프로젝트만 선별 노출
4. Featured Analysis (선택적) — 대표 분석 콘텐츠 1~2개
5. About 미리보기 — 짧은 소개 + About 페이지로 이동하는 링크
6. 마무리 CTA 영역 — 이력서/연락 유도

**주요 컴포넌트**
- Hero, Section, Card, Tag, Badge(Featured), Button

**예상 데이터 소스**
- `profile.json` (정체성, 한 줄 소개)
- `skills.json` (핵심 역량 요약)
- `projects.json` (featured 필터)
- `analysis.json` (featured 필터, 선택적)
- `navigation.json` (전역 내비게이션)

---

### 2.2 About

| 항목 | 내용 |
|------|------|
| 목적 | Home보다 깊은 수준에서 후보자의 배경, 설계 철학, 강점을 전달한다. |
| 대상 사용자 | Home을 보고 더 알고 싶어진 채용 담당자, 철학/사고방식을 평가하려는 시니어 기획자 |
| 사용자 목표 | 이 사람이 어떤 방식으로 사고하고 일하는 기획자인지 이해한다. |
| CTA | "프로젝트 보기", "이력서 보기", "연락하기" |

**구성 섹션 (상단 → 하단)**
1. 소개 — 이름/희망 직무/한 줄 소개 + 짧은 자기소개, 기획자로서의 방향성 (AboutHero, AboutSummary)
2. 설계 철학 / 일하는 방식 (DesignPhilosophy)
3. 핵심 강점 — 기획자로서 스스로 규정하는 핵심 강점을 Tag/Badge로 요약 (CoreStrength)
4. 기술 분류 — `skills.json` 기반 시스템 기획 / 콘텐츠 기획 / 분석 / 도구 활용 4개 분류 요약 (SkillOverview)
5. 경력 하이라이트 (짧은 형태, 전체 이력은 Resume 페이지가 담당) (CareerTimeline)
6. 기획 프로세스 — Problem → Research → Design → Validate → Improve 단계 소개 (WorkingProcess)
7. Resume/Projects/Contact로 이동하는 마무리 CTA (CallToAction)

3(핵심 강점)과 4(기술 분류)는 둘 다 "역량"을 다루지만 성격이 다르다: 핵심 강점은 스스로 규정한 정성적 강점(예: 커뮤니케이션, 분석력)이고, 기술 분류는 `skills.json`이 데이터로 관리하는 정량적 분류다. 이 둘을 하나의 섹션으로 합치지 않고 분리한다.

**주요 컴포넌트**
- Section, Container, Card, Tag, Badge, Button

**예상 데이터 소스**
- `profile.json` (소개, 설계 철학, 핵심 강점)
- `skills.json` (기술 분류)
- `resume.json` (경력 하이라이트)
- `companies.json` — 목표 회사 정보는 화면에 직접 나열되기보다, 어떤 강점과 사례를 강조할지 결정하는 **콘텐츠 큐레이션 참고 자료**로 사용된다 (`docs/DATA_MODEL.md` §9)

---

### 2.3 Projects

| 항목 | 내용 |
|------|------|
| 목적 | 전체 프로젝트를 훑어보기 쉬운 요약 형태로 제공해, 관심 있는 프로젝트로 진입하게 한다. |
| 대상 사용자 | 넓게 훑어보는 채용 담당자, 특정 역량(시스템/콘텐츠) 사례를 찾는 시니어 기획자 |
| 사용자 목표 | 원하는 프로젝트를 빠르게 찾아 상세 페이지로 이동한다. |
| CTA | 각 카드의 "자세히 보기" |

**구성 섹션 (상단 → 하단)**
1. 페이지 소개 — Projects 섹션이 무엇을 보여주는지 짧게 설명
2. 필터/검색 — 역할, 장르, 플랫폼, 태그 기준
3. 프로젝트 목록 (그리드/리스트) — 카드형 요약
4. 결과 없음 상태 (필터 결과가 없을 때)

**주요 컴포넌트**
- Section, Search Bar, Filter, Card, Tag, Badge

**예상 데이터 소스**
- `projects.json` (전체 목록)

---

### 2.4 Project Detail

| 항목 | 내용 |
|------|------|
| 목적 | 프로젝트 개요부터 회고까지 9단계 공식 구조(`docs/CONTENT_GUIDE.md` §3과 동일)로 하나의 프로젝트를 깊이 있게 증명한다. |
| 대상 사용자 | 깊이를 평가하려는 시니어/리드 기획자가 1차 대상, 특정 역할 적합성을 확인하려는 채용 담당자가 2차 대상 |
| 사용자 목표 | 이 프로젝트에서 후보자가 실제로 무엇을 맡았고 어떻게 사고했는지 이해한다. |
| CTA | "PDF 다운로드", "다른 프로젝트 보기" |

**구성 섹션 (상단 → 하단)**

헤더 — title, subtitle, cover, role, genre, platform, period, team, tags (9개 공식 섹션에는 포함되지 않는, 페이지 최상단의 메타 정보 블록)

이후 `docs/CONTENT_GUIDE.md` §3과 동일한 순서·명칭의 9개 공식 섹션이 이어진다 (`docs/DATA_MODEL.md` §5 프로젝트 데이터 모델 필드와의 대응은 괄호로 표기):

1. 프로젝트 개요 (overview)
2. 담당 역할 (contribution)
3. 목표 (goal)
4. 문제 정의 (problem)
5. 접근 과정 (approach)
6. 시스템 설계 (systems)
7. 핵심 기능 (features)
8. 결과 (result)
9. 회고 (retrospective)

마지막으로 다른 프로젝트로 이동하는 내비게이션이 온다.

Gallery, 관련 PDF, 사용 역량(skills)은 더 이상 독립된 섹션이 아니라, 위 9개 섹션 내부에서 사용하는 **UI 요소**로 정의한다:
- **사용 역량(skills)** — "2. 담당 역할" 섹션 안에서 Tag 목록으로 함께 표시한다.
- **관련 문서(documents)** — "6. 시스템 설계" 섹션 안에서 Document Preview Card로 다운로드/미리보기를 제공한다 (`docs/DATA_MODEL.md` §5.6, 구 필드명 pdf. PDF 외 PPT/DOCX/Markdown/Notion export도 포함하므로 컴포넌트명은 특정 포맷에 종속되지 않는다).
- **갤러리(gallery)** — "7. 핵심 기능" 섹션 안에서 이미지 갤러리(Modal로 확대)로 함께 표시한다.

**주요 컴포넌트**
- Section, Badge, Tag, Modal(갤러리 확대), Document Preview Card, Button

**예상 데이터 소스**
- `projects.json` (slug로 단일 항목 조회)

---

### 2.5 Analysis

| 항목 | 내용 |
|------|------|
| 목적 | 게임 분석 콘텐츠를 훑어보기 쉬운 형태로 제공해 분석 역량의 존재를 먼저 알린다. |
| 대상 사용자 | 분석적 사고를 평가하려는 시니어 기획자, 넓게 훑어보는 채용 담당자 |
| 사용자 목표 | 관심 있는 분석 콘텐츠를 찾아 상세 페이지로 이동한다. |
| CTA | 각 카드의 "분석 보기" |

**구성 섹션 (상단 → 하단)**
1. 페이지 소개
2. 필터/검색 — 태그 기준
3. 분석 목록 (그리드/리스트)
4. 결과 없음 상태

**주요 컴포넌트**
- Section, Search Bar, Filter, Card, Tag

**예상 데이터 소스**
- `analysis.json` (전체 목록)

---

### 2.6 Analysis Detail

| 항목 | 내용 |
|------|------|
| 목적 | 하나의 게임에 대한 구조화된 분석(시스템/콘텐츠/UX)과 결론을 깊이 있게 전달한다. |
| 대상 사용자 | 분석 역량의 깊이를 평가하려는 시니어 기획자, 채용 담당자 |
| 사용자 목표 | 후보자가 기존 게임을 어떤 관점과 기준으로 분석하는지 확인한다. |
| CTA | "다른 분석 보기" |

**구성 섹션 (상단 → 하단, `docs/DATA_MODEL.md` §6 분석 데이터 모델 순서 기반)**
1. 헤더 — title, description, tags, 분석 대상 게임(targetGame)
2. 시스템 분석 (systemAnalysis)
3. 콘텐츠 분석 (contentAnalysis)
4. UX 분석 (uxAnalysis)
5. 결론 (conclusion)
6. 다른 분석으로 이동하는 내비게이션

**주요 컴포넌트**
- Section, Tag, Accordion (긴 하위 섹션의 점진적 공개)

**예상 데이터 소스**
- `analysis.json` (slug 또는 식별자로 단일 항목 조회 — 현재 Analysis 모델에는 식별자 필드가 문서상 명시되어 있지 않아, 라우팅 방식은 후속 결정이 필요하다. `types/analysis.ts`에도 동일한 TODO가 남아있다.)

---

### 2.7 Personal Works

| 항목 | 내용 |
|------|------|
| 목적 | 정식 프로젝트 외에 자발적으로 진행한 개인 작업을 보여줘, 주도성과 관심사를 드러낸다. |
| 대상 사용자 | 형식적인 프로젝트 이상의 개성/열정을 확인하려는 채용 담당자와 기획자 |
| 사용자 목표 | 후보자가 업무 외에 어떤 것을 스스로 만들고 탐구하는지 파악한다. |
| CTA | 항목별 상세 보기 또는 외부 링크 (아래 참고) |

**구성 섹션 (상단 → 하단)**
1. 페이지 소개
2. 개인 작업물 목록 (그리드/리스트)
3. 결과 없음 상태

**주요 컴포넌트**
- Section, Card, Tag

**예상 데이터 소스**
- `personal.json` — 문서(`docs/DATA_MODEL.md`)에 세부 필드가 정의되어 있지 않아 `types/personal.ts`도 최소 placeholder 상태다.

> **범위 참고:** 이번 IA 범위에는 "Personal Work Detail" 페이지가 포함되어 있지 않다. 따라서 각 항목은 같은 페이지 내 확장(아코디언/모달) 또는 외부 링크로 처리되는 것을 전제로 하며, 별도 상세 라우트가 필요해지면 이 문서를 먼저 갱신한 뒤 구현해야 한다.

---

### 2.8 Resume

| 항목 | 내용 |
|------|------|
| 목적 | 정식 이력을 구조화된 형태로 제공하고, 다운로드 가능한 형태로 만든다. |
| 대상 사용자 | 채용 담당자 (서류 검토/공유 목적의 1차 대상) |
| 사용자 목표 | 경력, 프로젝트 경험, 학력, 스킬을 빠르게 확인하거나 PDF로 저장한다. |
| CTA | "PDF 다운로드" (사이트 전체에서 가장 행동 지향적인 CTA) |

**구성 섹션 (상단 → 하단, `docs/DATA_MODEL.md` §7 이력서 데이터 모델 순서 기반)**
1. 개인 정보 (personalInfo)
2. 경력 사항 (career)
3. 프로젝트 경험 (projectExperience)
4. 기술 스택 (skills)
5. 교육 정보 (education)
6. 수상 및 기타 활동 (awards)
7. PDF 다운로드 CTA

**주요 컴포넌트**
- Section, Timeline, Tag, Document Preview Card, Button

**예상 데이터 소스**
- `resume.json`

---

### 2.9 Contact

| 항목 | 내용 |
|------|------|
| 목적 | 설득된 방문자가 마찰 없이 연락할 수 있는 경로를 제공한다. |
| 대상 사용자 | 이미 다른 페이지를 통해 관심이 생긴 채용 담당자 |
| 사용자 목표 | 이메일 등 연락 수단을 빠르게 찾는다. |
| CTA | "이메일 보내기", "이력서 다운로드" |

**구성 섹션 (상단 → 하단)**
1. 연락 안내 문구
2. 연락 정보 / 링크 (이메일, 소셜/포트폴리오 링크)
3. Resume/Projects로 돌아가는 참고 링크 (선택적)

**주요 컴포넌트**
- Section, Button

**예상 데이터 소스**
- `profile.json`

---

### 2.10 404 (Not Found)

| 항목 | 내용 |
|------|------|
| 목적 | 존재하지 않는 경로에서도 방문자가 흐름을 잃지 않게 한다. |
| 대상 사용자 | 잘못되었거나 오래된 링크로 들어온 모든 방문자 |
| 사용자 목표 | 이 페이지가 없다는 것을 즉시 이해하고 원하는 곳으로 돌아간다. |
| CTA | "홈으로 돌아가기" |

**구성 섹션 (상단 → 하단)**
1. 404 안내 메시지
2. 홈/주요 페이지로 돌아가는 링크

**주요 컴포넌트**
- Section, Button

**예상 데이터 소스**
- 없음 (정적 콘텐츠, JSON 연동 없음)

---

## 3. 사이트맵 (Site Map)

```
/
├── /                      Home
├── /about                 About
├── /projects              Projects
│   └── /projects/[slug]   Project Detail
├── /analysis              Analysis
│   └── /analysis/[slug]   Analysis Detail
├── /personal              Personal Works
├── /resume                Resume
├── /contact               Contact
└── *                      404 (Not Found)
```

- 모든 경로는 `MainLayout`(Header + PageWrapper + Footer)을 공유한다.
- 상세 페이지(`[slug]`)는 목록 페이지의 하위 경로로만 존재하며, 독립적인 최상위 경로를 갖지 않는다.

---

## 4. 내비게이션 흐름 (Navigation Flow)

`docs/ARCHITECTURE.md` §4(내비게이션 구조)의 3가지 이동 경로를 이 사이트맵에 적용하면 다음과 같다.

- **글로벌 내비게이션 (Header)** — Home, About, Projects, Analysis, Personal Works, Resume, Contact 전체로 이동 (모든 페이지에서 동일하게 노출)
- **푸터 내비게이션 (Footer)** — 글로벌 내비게이션과 동일한 핵심 링크 + Contact 강조, 모든 페이지 하단에 동일하게 노출
- **상세 페이지 이동** — 목록 → 상세(카드 클릭) → 목록으로 복귀 또는 다른 상세로 이동, 두 단계 이상 깊어지지 않는다 (`docs/ARCHITECTURE.md` §4 "최소 클릭으로 콘텐츠에 접근")

**대표 사용자 흐름 예시**

| 유형 | 흐름 |
|------|------|
| 채용 담당자 (빠른 스크리닝) | Home → Featured Project 카드 → Project Detail → Resume → Contact |
| 시니어 기획자 (깊은 검토) | Home → Projects (전체 목록) → Project Detail → Analysis → Analysis Detail → About (철학 확인) → Contact |
| 잘못된 링크 접근 | 임의 경로 → 404 → "홈으로 돌아가기" → Home |

모든 흐름은 최대 2단계(목록 → 상세) 이내에서 원하는 콘텐츠에 도달하며, 언제든 Header/Footer를 통해 다른 최상위 페이지로 즉시 이동할 수 있다.

---

## 5. 페이지 간 관계 (Page Relationships)

| 관계 | 설명 |
|------|------|
| Home → Projects / Analysis | Home은 `featured` 플래그로 선별된 항목만 노출하는 요약 진입점이며, 같은 데이터(`projects.json`, `analysis.json`)를 공유한다. |
| Projects ↔ Project Detail | 목록-상세 관계. 목록은 요약 필드(thumbnail, title, tags 등)만, 상세는 전체 필드를 사용한다. |
| Analysis ↔ Analysis Detail | 목록-상세 관계. Project/Detail과 동일한 패턴을 따른다. |
| About ↔ Resume | 두 페이지 모두 `skills.json`을 참조하지만, About은 요약, Resume은 `resume.json`의 `skills` 필드를 통한 이력서 맥락의 상세 나열이라는 점에서 목적이 다르다. |
| Project Detail ↔ Analysis Detail | 게임 장르/시스템이 겹치는 경우 서로 참조할 수 있는 잠재적 관계이지만, 이를 연결하는 필드는 `docs/DATA_MODEL.md`에 아직 정의되어 있지 않다. 이 관계는 **향후 확장 후보**로만 기록하며, 데이터 모델이 보강되기 전까지 구현하지 않는다. |
| 모든 페이지 ↔ Header/Footer | 모든 페이지는 동일한 전역 내비게이션과 푸터를 공유해, 어떤 페이지에서도 동일한 이동 경로를 제공한다. |
| 모든 페이지 ↔ 404 | 정의되지 않은 모든 경로는 예외 없이 404로 수렴한다. |

---

## 6. 범위 제한

이 문서는 다음을 포함하지 않는다:

- 시각 디자인 (레이아웃 세부 수치, 색상, 타이포그래피 값)
- 컴포넌트 내부 구현 코드
- API/서버 로직 (`docs/ARCHITECTURE.md` §10 범위 제한과 동일)

이 문서가 정의하는 것은 오직 **각 페이지에 무엇이 있어야 하고, 그것이 어떤 순서와 관계로 존재해야 하는가**이다. 실제 시각 표현은 `docs/DESIGN_SYSTEM.md`가, 구현은 이후 코드 작업이 담당한다.

---

## 요약

이 정보 구조는 `docs/PROJECT.md`가 정의한 두 종류의 평가자(채용 담당자, 시니어 기획자)가 서로 다른 속도로 같은 콘텐츠에 접근할 수 있도록 설계되었다. 목록 페이지는 빠른 스캐닝을, 상세 페이지는 깊은 평가를 지원하며, 모든 페이지는 동일한 내비게이션 구조 아래 최소 클릭으로 연결된다.
