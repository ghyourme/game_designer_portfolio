# 프로젝트 목표 문서

## 1. 프로젝트 개요

### 프로젝트 이름

Game Designer Portfolio

### 목적

이 프로젝트는 게임 기획자로서의 작업물, 사고 방식, 역량을 체계적으로 보여주기 위한 전문 포트폴리오 웹사이트를 설계하고 구축하고 유지하는 것을 목표로 한다.

이 포트폴리오는 단순한 이력서가 아니라, 게임 디자인 능력을 구조적으로 증명하는 살아있는 서비스이다.

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

## 10. Feature 완료 기준 (Definition of Done)

이 프로젝트에서 "완료"는 코드가 동작하는 것을 의미하지 않는다. 하나의 Feature는 아래 6단계를 모두 통과해야 완료로 간주한다 — 앞 단계가 끝나야 다음 단계로 넘어갈 수 있고, 중간 단계까지만 끝난 Feature를 "완료"라고 부르지 않는다.

| 단계 | 의미 | 완료 조건 |
|------|------|-----------|
| 1. Architecture | 구조가 문서에 확정되어 있는가 | `docs/DATA_MODEL.md`/`docs/DESIGN_SYSTEM.md`/`docs/INFORMATION_ARCHITECTURE.md`에 필드·컴포넌트·정보 구조가 정의됨 |
| 2. Implementation | 그 구조가 코드로 존재하는가 | Type → JSON 스키마 → Loader → Feature → Component → Page가 전부 연결되어 동작함(`docs/ARCHITECTURE.md` §5 데이터 흐름) |
| 3. Real Contents | 실제 콘텐츠가 채워져 있는가 | `data/*.json`에 가짜 데이터가 아닌 실제 프로젝트/분석/이력 내용이 존재함(`docs/CONTENT_GUIDE.md` 기준 충족) |
| 4. UX Review | 실제 콘텐츠 기준으로 화면 흐름을 검증했는가 | 빈 배열/placeholder가 아닌 실데이터로 렌더링해 가독성·정보 위계·반응형을 확인함 |
| 5. Recruiter Review | 목표 독자가 실제로 보고 의도한 판단을 내리는가 | 채용 담당자(2~3분 스크리닝)·시니어 기획자(심층 검토) 두 흐름 모두에서 `docs/PROJECT.md` §2 목표를 충족하는지 확인함 |
| 6. Portfolio Quality | 취업에 바로 쓸 수 있는 완성도인가 | 오탈자, 이미지 품질, 문서 간 Drift 없음까지 확인됨 |

**Architecture + Implementation만 끝난 상태는 "Infrastructure 완료"라고 부르고, "Feature 완료"라고 부르지 않는다.** 이 구분이 없으면 데이터가 비어 있는데도 "구현이 끝났다"는 착각이 생긴다.

---

## 11. 진행 상태 (Feature Completion Status)

`data/*.json`의 실제 내용과 각 Feature의 코드 상태를 기준으로 위 6단계 중 어디까지 도달했는지 표시한다. ✅ 완료 · 🔶 부분(placeholder 값 존재) · ❌ 미완료 · ⬜ 아직 해당 단계에 도달하지 않음.

| Feature | 1. Architecture | 2. Implementation | 3. Real Contents | 4. UX Review | 5. Recruiter Review | 6. Portfolio Quality | 현재 상태 |
|---|---|---|---|---|---|---|---|
| Home | ✅ | ✅ | 🔶 (`profile.json`/`skills.json`이 placeholder 문자열·빈 배열) | ⬜ | ⬜ | ⬜ | Infrastructure 완료, Content 단계 예정 |
| About | ✅ | ✅ | 🔶 (동일) | ⬜ | ⬜ | ⬜ | Infrastructure 완료, Content 단계 예정 |
| Resume | ✅ | ✅ | 🔶 (`personalInfo`만 placeholder, `career`/`education` 등은 빈 배열) | ⬜ | ⬜ | ⬜ | Infrastructure 완료, Content 단계 예정 |
| **Projects** | ✅ | ✅ | ❌ (`data/projects.json`이 빈 배열) | ⬜ | ⬜ | ⬜ | **Infrastructure 완료 — Content 단계 진입** |
| Analysis | ✅ | ✅ | ❌ (`data/analysis.json`이 빈 배열) | ⬜ | ⬜ | ⬜ | Infrastructure 완료, Content 단계 예정 |
| Personal Works | ❌ (`docs/DATA_MODEL.md`에 세부 필드 미정) | ❌ | ❌ | ⬜ | ⬜ | ⬜ | 설계 전 단계 |
| Contact | 🔶 (연락처 데이터 소스 미정 — `profile.json` 확장 vs `resume.json.personalInfo` 재사용) | ❌ | ❌ | ⬜ | ⬜ | ⬜ | Architecture Decision 필요 |

이전에 통용되던 "Projects Feature 진행 중"이라는 표현은 Architecture/Implementation과 Real Contents 이후 단계를 구분하지 않아 폐기한다. 정확한 표현은 **"Projects Infrastructure 완료 — Projects Content 단계 진입"**이다.

---