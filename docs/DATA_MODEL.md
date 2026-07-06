# 데이터 모델

이 문서는 Game Designer Portfolio에서 사용되는 모든 JSON 데이터 구조의 설계 기준을 정의한다.

이 문서는 구현 코드가 아니라 **데이터 구조의 개념 설계 문서**이다.

---

## 1. 목적

이 프로젝트는 모든 콘텐츠를 데이터 기반으로 관리한다.

즉, UI가 아니라 **JSON 데이터가 시스템을 결정하는 구조**이다.

이 방식은 다음을 가능하게 한다:

- 콘텐츠 확장성 확보
- UI와 데이터 분리
- 유지보수 용이성
- 자동화된 페이지 생성

---

## 2. 설계 원칙

- JSON First 구조
- 데이터와 UI 분리
- 확장 가능한 구조
- 유지보수 중심 설계
- 재사용 가능한 데이터 구조

---

## 3. 데이터 디렉토리 구조

이 프로젝트는 다음 JSON 파일을 기반으로 동작한다:

- profile.json : 사용자 기본 정보
- resume.json : 이력 정보
- projects.json : 프로젝트 데이터
- analysis.json : 게임 분석 콘텐츠
- personal.json : 개인 작업물
- skills.json : 기술 및 역량 정보
- companies.json : 목표 회사 정보
- navigation.json : 메뉴 구조
- settings.json : 시스템 설정

각 파일은 독립적인 역할을 가진다.

---

## 4. 공통 데이터 규칙

모든 데이터는 다음 기준을 따른다:

- id : 고유 식별자
- slug : URL 경로
- title : 제목
- description : 설명
- createdAt : 생성일
- updatedAt : 수정일
- featured : 주요 콘텐츠 여부
- tags : 검색 및 분류용 태그
- status : 상태값
- order : 정렬 순서

모든 데이터는 일관된 구조를 유지해야 한다.

---

## 5. 프로젝트 데이터 모델

프로젝트는 다음 구조를 가진다. Project Detail의 공식 9단계 섹션 구조(`docs/CONTENT_GUIDE.md` §3, `docs/INFORMATION_ARCHITECTURE.md` §2.4와 동일)를 기준으로 필드명을 맞췄다.

**Required/Optional 원칙**: 모든 필드는 Required다 — 옵셔널 필드를 두지 않는다. 콘텐츠가 아직 없는 항목은 필드를 생략하는 대신 빈 문자열(`""`) 또는 빈 배열(`[]`)로 표현한다. 모든 프로젝트가 동일한 필드 집합을 가지므로, 프로젝트가 30개, 300개로 늘어나도 소비하는 쪽(Loader, 컴포넌트)이 `undefined` 분기를 따로 처리할 필요가 없다.

### 5.1 헤더 메타 정보

9개 섹션에는 포함되지 않는, 페이지 상단 요약 정보다.

| 필드 | 타입 | 설명 |
|------|------|------|
| id | string | 고유 식별자 |
| slug | string | URL 경로 |
| title | string | 제목 |
| subtitle | string | 부제 |
| thumbnail | string | 목록/카드에서 사용하는 썸네일 이미지 경로 |
| cover | string | 상세 페이지 헤더에서 사용하는 커버 이미지 경로 |
| role | string | 담당 역할의 짧은 요약 라벨 (예: "시스템 기획자"). 서술형 내용은 9단계 섹션의 contribution이 담당한다. |
| genre | string | 장르 |
| platform | string | 플랫폼 |
| period | string | 진행 기간 |
| team | string | 팀 규모 |
| tags | string[] | 검색 및 분류용 태그 |
| featured | boolean | 대표 프로젝트 여부 |

### 5.2 9단계 섹션 본문

`docs/CONTENT_GUIDE.md` §3 순서와 동일하다.

| 순서 | 섹션명 | 필드명 | 타입 | 설명 |
|------|--------|--------|------|------|
| 1 | 프로젝트 개요 | overview | string | 프로젝트 개요 서술 |
| 2 | 담당 역할 | contribution | string | role(짧은 라벨)을 서술형으로 풀어낸 내용 |
| 3 | 목표 | goal | string | 프로젝트 목표 |
| 4 | 문제 정의 | problem | string | 해결하고자 한 문제 |
| 5 | 접근 과정 | approach | string | 문제를 해결해 나간 과정/방법론 |
| 6 | 시스템 설계 | systems | ProjectSystem[] | 시스템 설계 항목 목록. 구조는 §5.3 참고 |
| 7 | 핵심 기능 | features | ProjectFeature[] | 핵심 기능 항목 목록. 구조는 §5.4 참고 |
| 8 | 결과 | result | string | 결과 (수치 중심, `docs/CONTENT_GUIDE.md` §2) |
| 9 | 회고 | retrospective | string | 회고 |

#### 5.3 systems 필드 구조 (ProjectSystem)

`docs/CONTENT_GUIDE.md` §4(시스템 기획 작성 규칙)가 정의한 7개 항목을 그대로 필드화했다. 한 프로젝트가 여러 시스템(예: 전투 시스템, 성장 시스템)을 다룰 수 있으므로, 배열의 각 항목을 구분하는 `name`만 추가했다.

| 필드 | 타입 | 설명 |
|------|------|------|
| name | string | 시스템 이름 (예: "전투 시스템") |
| purpose | string | 목적 |
| playerExperience | string | 플레이어 경험 |
| structure | string | 시스템 구조 |
| flow | string | 플로우 |
| data | string | 데이터 |
| exceptionHandling | string | 예외 처리 |
| expectedEffect | string | 기대 효과 |

#### 5.4 features 필드 구조 (ProjectFeature)

"핵심 기능" 섹션에 나열되는 개별 기능 항목이다. `docs/CONTENT_GUIDE.md`에 이 항목의 세부 작성 규칙이 아직 없어, 기능을 식별하는 이름과 설명만 최소 구조로 정의한다.

| 필드 | 타입 | 설명 |
|------|------|------|
| name | string | 기능 이름 |
| description | string | 기능 설명 |

### 5.5 섹션 내부 지원 필드

독립 섹션이 아니라 위 9개 섹션 안에서 UI 요소로 쓰인다 (`docs/INFORMATION_ARCHITECTURE.md` §2.4 참고).

| 필드 | 타입 | 사용 위치 | 설명 |
|------|------|-----------|------|
| skills | string[] | "2. 담당 역할" | Tag 목록으로 함께 표시 |
| documents | ProjectDocument[] | "6. 시스템 설계" | PDF Preview Card로 표시. 구조는 §5.6 참고 |
| gallery | ProjectGalleryImage[] | "7. 핵심 기능" | 이미지 갤러리로 표시. 구조는 §5.7 참고 |
| links | ProjectLink[] | 미정 | 프로젝트 관련 외부 참고 링크. 구조는 §5.8 참고 |

#### 5.6 documents 필드 구조 (ProjectDocument)

이전 필드명은 `pdf`였다. 단일 PDF 한 개만 가리키는 이름이었지만, 실제로는 시스템 기획서·경제 기획서 등 여러 문서를 첨부할 수 있어야 하므로 복수형 `documents`로 이름을 바꾸고 배열로 정의한다.

| 필드 | 타입 | 설명 |
|------|------|------|
| title | string | 문서 제목 |
| url | string | 문서 파일 경로 또는 링크 |

#### 5.7 gallery 필드 구조 (ProjectGalleryImage)

`docs/CONTENT_GUIDE.md` §7(이미지 사용 규칙)이 모든 이미지에 요구하는 설명·캡션·목적을 그대로 필드화했다. 이 규칙을 만족하지 않는 이미지는 데이터로 추가할 수 없다.

| 필드 | 타입 | 설명 |
|------|------|------|
| src | string | 이미지 경로 |
| description | string | 설명 — 이미지가 무엇을 보여주는지 |
| caption | string | 캡션 — 짧은 요약 문구 |
| purpose | string | 목적 — 이 이미지를 넣은 이유 |

#### 5.8 links 필드 구조 (ProjectLink)

플레이 데모, 스토어 페이지, 발표 자료 등 프로젝트와 관련된 외부 링크를 나열한다. 어느 9단계 섹션에서 어떻게 노출할지는 `docs/INFORMATION_ARCHITECTURE.md`에 아직 정의되어 있지 않다 — IA가 위치를 확정하기 전까지 UI 구현은 하지 않는다.

| 필드 | 타입 | 설명 |
|------|------|------|
| label | string | 링크 설명 (예: "플레이 데모", "스토어 페이지") |
| url | string | 링크 주소 |

이 구조는 모든 프로젝트에 동일하게 적용된다.

> **변경 이력**: 이전에는 `solution`, `contents`라는 필드명을 썼다. `solution`은 "접근 과정" 섹션의 의미(문제를 해결한 결과물이 아니라 해결해 나간 과정/방법론)와 더 정확히 맞도록 `approach`로 이름을 바꿨고, `contents`는 "게임 콘텐츠"처럼 읽혀 "핵심 기능"이라는 섹션 의도와 어긋나 `features`로 이름을 바꿨다. `goal`, `retrospective`는 9단계 구조에 있던 "목표", "회고" 섹션에 대응하는 필드가 없어 새로 추가했다. `types/project.ts`와 `app/projects/[slug]/page.tsx`도 이 이름으로 동기화되었다 (`data/projects.json`은 현재 빈 배열이라 실제 데이터 마이그레이션은 해당 없음).
>
> **변경 이력 (feature/projects-schema)**: `systems`, `features`, `gallery`, `pdf`가 `unknown`으로 남아있던 것을 완성했다. `pdf`는 여러 문서를 담을 수 있도록 `documents`로 이름을 바꿨다. `systems`는 `docs/CONTENT_GUIDE.md` §4를, `gallery`는 같은 문서 §7을 그대로 필드화해 문서 간 중복 정의 없이 하나의 규칙만 참조하도록 했다. 이전에 없던 `links` 필드를 새로 추가했으며, 노출 위치는 IA 결정 전까지 미정 상태로 문서에 명시했다.

---

## 6. 분석 데이터 모델

게임 분석 콘텐츠는 다음 구조를 따른다:

- 기본 정보 (제목, 설명, 태그)
- 분석 대상 게임
- 시스템 분석
- 콘텐츠 분석
- UX 분석
- 결론

---

## 7. 이력서 데이터 모델

이력서는 다음 정보를 포함한다. Project Model(§5), Profile Model(§12)과 동일한 원칙(평면 구조, 실제로 소비하는 Feature가 있는 필드만 정의)으로 아래와 같이 구체화한다.

**개인 정보 (personalInfo)** — `docs/INFORMATION_ARCHITECTURE.md` §2.8 "1. 개인 정보"를 ResumeHero(신원/연락처)와 ResumeSummary(요약 문단)로 나눠 사용한다.

| 필드 | 설명 | 사용하는 Feature |
|------|------|------|
| name | 이름 | ResumeHero |
| role | 역할/직무 | ResumeHero |
| email | 이메일 | ResumeHero |
| phone | 전화번호 | ResumeHero |
| location | 거주 지역 | ResumeHero |
| summary | 짧은 이력 요약 문단 | ResumeSummary |

**경력 사항 (career)** — 항목 배열. 각 항목: `id`, `company`, `role`, `period`, `description`. (ExperienceTimeline)

**프로젝트 경험 (projectExperience)** — 항목 배열. 각 항목: `id`, `title`, `role`, `period`, `description`. `projects.json`의 전체 케이스 스터디와는 다른, 이력서용 축약 목록이다. (ProjectExperience)

**교육 정보 (education)** — 항목 배열. 각 항목: `id`, `school`, `degree`, `period`. (Education)

**기술 스택** — 이 섹션은 별도 `resume.skills` 필드를 두지 않는다. `skills.json`(§8)을 `getSkills()`로 그대로 재사용한다 — About의 SkillOverview와 동일한 데이터 소스를 공유해, 스킬 데이터가 두 곳에서 따로 관리되며 어긋나는 것을 막는다.

**수상 및 기타 활동 (awards)** — 항목 배열. 세부 필드는 아직 정의하지 않는다. 이 섹션을 렌더링하는 Feature가 `features/resume/`에 아직 없어(2026-XX Resume 페이지 1차 구현 범위 밖), 실제로 소비하는 곳이 생기기 전까지 구조를 추측하지 않는다. (`types/resume.ts`에도 동일한 TODO가 남아있다)

이 구조는 `resume.json` 전체에 적용되며, 이력서(§7)와 프로필(§12)은 목록이 아닌 단일 레코드이므로 §4 공통 데이터 규칙(id/slug/tags/status/order 등)을 따르지 않는다. 다만 career/projectExperience/education처럼 내부에 항목 배열을 담는 필드는, 목록 렌더링 시 안정적인 React key로 쓸 `id`를 각 항목에 둔다.

---

## 8. 스킬 데이터 모델

기술 스택은 다음 기준으로 분류된다:

- 시스템 기획 역량
- 콘텐츠 기획 역량
- 분석 역량
- 도구 활용 능력

각 스킬은 숙련도와 함께 관리된다.

---

## 9. 회사 데이터 모델

목표 회사 정보는 다음을 포함한다:

- 회사 이름
- 설명
- 게임 장르
- 디자인 특징
- 지원 전략

이 정보는 콘텐츠 큐레이션에 사용된다.

---

## 10. 네비게이션 데이터 모델

사이트 구조는 데이터로 관리된다:

- 메뉴 항목
- 경로 정보
- 표시 순서
- 활성 상태

---

## 11. 확장 전략

새로운 데이터 타입은 기존 구조를 변경하지 않고 추가할 수 있어야 한다.

예:

- 새로운 콘텐츠 타입 추가
- 새로운 필터 구조 추가
- 새로운 페이지 유형 추가

---

## 12. 프로필 데이터 모델

profile.json은 §3에 이름만 있고 세부 필드가 정의되어 있지 않았다. Project Model(§5)과 동일한 수준(평면 구조, 문서에 근거한 필드만 정의)으로 아래와 같이 정의한다.

필드는 `docs/INFORMATION_ARCHITECTURE.md` §2.2 About 페이지가 실제로 사용하는 것만 정의했다 — 임의로 발명한 필드는 없다.

| 필드 | 설명 | 사용하는 Feature |
|------|------|------|
| name | 이름 | AboutHero |
| targetRole | 희망 직무 | AboutHero |
| tagline | 한 줄 소개 | AboutHero |
| summary | 짧은 자기소개 | AboutSummary |
| direction | 기획자로서의 방향성 | AboutSummary |
| designApproach | 게임을 어떻게 설계하는지에 대한 관점 | DesignPhilosophy |
| problemSolving | 문제 해결 방식 | DesignPhilosophy |
| playerExperience | 플레이어 경험을 바라보는 관점 | DesignPhilosophy |
| coreStrengths | 자기 서술형(정성적) 핵심 강점 목록 | CoreStrength |

profile.json은 이력서(§7)와 마찬가지로 목록이 아닌 단일 레코드이므로, §4 공통 데이터 규칙(id/slug/tags/status/order 등)을 따르지 않는다.

`coreStrengths`는 `skills.json`(§8)이 관리하는 정량적 기술 분류와 역할이 다르다 — `skills.json`은 분류·숙련도를 데이터로 관리하는 반면, `coreStrengths`는 자기 서술형 강점 키워드 목록일 뿐이다.

---

## 요약

이 프로젝트의 모든 콘텐츠는 JSON 기반 데이터로 구성되며,
UI는 이 데이터를 시각적으로 표현하는 역할만 수행한다.