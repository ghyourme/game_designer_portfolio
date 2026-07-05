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

**헤더 메타 정보** (9개 섹션에는 포함되지 않는, 페이지 상단 요약 정보)

- id
- slug
- title
- subtitle
- thumbnail
- cover
- role — 담당 역할의 짧은 요약 라벨 (예: "시스템 기획자"). 서술형 내용은 아래 contribution이 담당한다.
- genre
- platform
- period
- team
- tags
- featured

**9단계 섹션 본문** (`docs/CONTENT_GUIDE.md` §3 순서와 동일)

| 순서 | 섹션명 | 필드명 |
|------|--------|--------|
| 1 | 프로젝트 개요 | overview |
| 2 | 담당 역할 | contribution — role(짧은 라벨)을 서술형으로 풀어낸 내용 |
| 3 | 목표 | goal |
| 4 | 문제 정의 | problem |
| 5 | 접근 과정 | approach |
| 6 | 시스템 설계 | systems |
| 7 | 핵심 기능 | features |
| 8 | 결과 | result |
| 9 | 회고 | retrospective |

**섹션 내부에서 사용하는 지원 필드** (독립 섹션이 아니라 위 섹션들 안에서 UI 요소로 쓰인다 — `docs/INFORMATION_ARCHITECTURE.md` §2.4 참고)

- skills — "2. 담당 역할" 섹션 안에서 Tag 목록으로 함께 표시
- pdf — "6. 시스템 설계" 섹션 안에서 PDF Preview Card로 표시
- gallery — "7. 핵심 기능" 섹션 안에서 이미지 갤러리로 표시

이 구조는 모든 프로젝트에 동일하게 적용된다.

> **변경 이력**: 이전에는 `solution`, `contents`라는 필드명을 썼다. `solution`은 "접근 과정" 섹션의 의미(문제를 해결한 결과물이 아니라 해결해 나간 과정/방법론)와 더 정확히 맞도록 `approach`로 이름을 바꿨고, `contents`는 "게임 콘텐츠"처럼 읽혀 "핵심 기능"이라는 섹션 의도와 어긋나 `features`로 이름을 바꿨다. `goal`, `retrospective`는 9단계 구조에 있던 "목표", "회고" 섹션에 대응하는 필드가 없어 새로 추가했다. `types/project.ts`와 `app/projects/[slug]/page.tsx`도 이 이름으로 동기화되었다 (`data/projects.json`은 현재 빈 배열이라 실제 데이터 마이그레이션은 해당 없음).

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

이력서는 다음 정보를 포함한다:

- 개인 정보
- 경력 사항
- 프로젝트 경험
- 기술 스택
- 교육 정보
- 수상 및 기타 활동

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