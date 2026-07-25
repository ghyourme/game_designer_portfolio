# Git 워크플로우

이 문서는 Game Designer Portfolio 프로젝트의 Git 브랜치 전략, 커밋 규칙, PR/Merge 규칙을 정의한다.

이 문서는 프로젝트가 장기간에 걸쳐 유지보수되는 동안 협업 방식이 흔들리지 않도록 하기 위한 기준이다.

---

## 1. 브랜치 전략

| 브랜치 | 목적 |
|--------|------|
| `main` | 배포 가능한 최종 상태를 유지하는 브랜치. 항상 안정 상태여야 한다. |
| `develop` | 다음 배포를 준비하는 통합 브랜치. 기능/문서 브랜치는 이 브랜치로 병합된다. |
| `docs/*` | 문서 작성 및 수정 전용 브랜치. 예: `docs/git-workflow` |
| `feature/*` | 새로운 기능 개발 전용 브랜치. 예: `feature/projects-page` |
| `fix/*` | 버그 수정 전용 브랜치. 예: `fix/nav-scroll` |
| `refactor/*` | 동작 변경 없이 구조/코드를 개선하는 브랜치. 예: `refactor/components-layout` |

브랜치는 목적별로 분리하며, 하나의 브랜치는 하나의 목적만 가진다.

**세분화 원칙**: 하나의 Feature도 화면 단위가 아니라 "구현 순서 절대 원칙"(Document→Type→JSON→Loader→Feature→Component→Page)의 각 단계·각 콘텐츠 블록 단위로 쪼갠다. 큰 브랜치를 만들지 않는다.

예시(Projects Feature):

```
feature/projects-data
   ↓
feature/projects-loader
   ↓
feature/projects-header
   ↓
feature/projects-overview
   ↓
feature/projects-system-design
   ↓
feature/projects-results
   ↓
feature/projects-page
   ↓
feature/projects-navigation
   ↓
feature/projects-polish
```

---

## 2. 작업 순서

```
Feature 시작
   ↓
새 브랜치 생성 (develop 기준)
   ↓
작업
   ↓
Commit
   ↓
Push
   ↓
Pull Request
   ↓
Merge
```

모든 작업은 `main`이 아닌 `develop`에서 분기한다.

---

## 3. Commit 규칙

Conventional Commits 형식을 사용한다.

```
<type>: <설명>
```

| Type | 사용 시점 | 예시 |
|------|-----------|------|
| `feat:` | 새로운 기능을 추가할 때 | `feat: 프로젝트 상세 페이지 추가` |
| `fix:` | 버그를 수정할 때 | `fix: 모바일 네비게이션 클릭 오류 수정` |
| `docs:` | 문서를 추가/수정할 때 | `docs: GIT_WORKFLOW.md 작성` |
| `style:` | 동작에 영향 없는 스타일 변경(포맷팅, 세미콜론 등) | `style: 컴포넌트 들여쓰기 정리` |
| `refactor:` | 동작 변경 없이 코드 구조를 개선할 때 | `refactor: Button 컴포넌트 분리` |
| `chore:` | 빌드, 설정, 의존성 등 코드 외적인 변경 | `chore: eslint 설정 업데이트` |

커밋 메시지는 하나의 변경 목적만 담는다.

---

## 4. Pull Request 규칙

- 하나의 PR은 하나의 목적만 포함한다.
- 변경 범위는 작은 단위로 유지한다.
- 구조 변경이 있다면 관련 `docs/` 문서가 함께 업데이트되었는지 확인한다.
- 병합 전 빌드/테스트가 통과하는지 확인한다.

---

## 5. Merge 규칙

- Squash Merge를 권장한다. (브랜치의 여러 커밋을 하나로 정리하여 `develop`/`main` 히스토리를 단순하게 유지)
- 병합 전 최소 1회 리뷰를 거친다.
- `main`을 직접 수정하지 않는다. 모든 변경은 PR을 통해서만 반영한다.

---

## 6. GitFork 사용 방법

이 프로젝트는 GitFork(GUI 클라이언트)를 통해 다음과 같이 관리한다.

1. **Branch 생성**
   - `develop`을 선택한 상태에서 우클릭 → `New Branch`
   - 브랜치명은 전략에 따라 `feature/*`, `fix/*`, `docs/*`, `refactor/*` 형식으로 작성

2. **Commit**
   - 변경된 파일을 확인하고 관련 있는 파일만 스테이징
   - Conventional Commits 형식으로 커밋 메시지 작성 후 Commit 실행

3. **Push**
   - Commit 후 `Push` 버튼으로 원격 브랜치에 반영
   - 최초 Push 시 원격 브랜치를 새로 생성

4. **Pull**
   - 작업 시작 전 항상 `develop`을 `Pull`하여 최신 상태로 동기화
   - 충돌 발생 시 로컬에서 해결 후 다시 Commit

5. **Merge**
   - GitHub에서 Pull Request를 생성하고 리뷰 후 Squash Merge
   - 병합 완료 후 GitFork에서 로컬 `develop`을 다시 `Pull`하고, 병합이 끝난 작업 브랜치는 삭제

---

## 7. Claude Code 협업 규칙

Claude Code는 다음 작업을 절대 자동으로 수행하지 않는다:

- 자동 Commit
- 자동 Push
- 자동 Merge

대신 Claude Code는 다음을 수행한다:

- 변경 사항을 설명한다.
- 사용자의 승인을 기다린다.
- 적절한 커밋 메시지를 제안한다.

모든 Git 작업의 최종 실행은 사용자가 직접 결정한다.

### 7.1 작업 방식

- 사용자에게 "자료를 먼저 주세요", "내용을 먼저 작성하세요"를 요구하지 않는다.
- 현재 단계에서 가능한 설계·구조·Type·JSON 스키마·Loader·Feature를 먼저 완성한다.
- 실제 콘텐츠(프로젝트 사례, 분석 대상, 이력 등)는 사용자가 이후 `data/*.json`에 직접 추가한다 — Claude Code가 대신 지어내지 않는다(Data Flow Rule의 "가짜 데이터 작성 금지"와 동일한 경계).
- 범위를 벗어난 구현은 임의로 진행하지 않는다.
- 항상 유지보수성, 확장성, 재사용성, 데이터 구조를 우선 검토한다.
- 더 나은 구조가 있다면 적극 제안하되, 기존 Architecture와 충돌하면 반드시 Architecture Decision(§9)을 먼저 수행한다.

### 7.2 Audit Rules

매 작업(브랜치)마다 반드시 아래 항목을 검토한다:

- Component Dependency Audit
- Ownership Audit
- Contract Audit
- UI Foundation Check
- UI Consistency Review
- Design Token Audit
- Component Complexity Review
- Import Layer Audit
- Public API Audit
- Page Composition Audit
- Data Flow Audit
- Route Consistency Audit
- Feature Boundary Audit

### 7.3 Architecture Review Cycle

브랜치 종료 시 반드시 아래 순서로 리뷰하고 보고한다:

1. 변경사항 요약
2. Architecture Decision
3. Architecture Alignment
4. Component Review
5. Contract Review
6. Dependency Review
7. Ownership Review
8. UI Foundation Check
9. UI Consistency Review
10. Design Token Audit
11. Component Complexity Review
12. Import Layer Audit
13. Public API Audit
14. Page Composition Audit
15. Data Flow Audit
16. Route Consistency Audit
17. Feature Boundary Audit
18. Architecture Drift
19. Technical Debt
20. Diagram Candidate
21. 다음 브랜치 추천
22. Merge 가능 여부
23. 검증 결과(tsc, eslint, next build, route 확인)

### 7.4 응답 방식

매 작업 종료 후 반드시 아래 내용을 함께 제공한다:

1. 리뷰
2. 개선사항
3. 추가 개선 아이디어
4. Architecture Drift
5. Technical Debt
6. 다음 브랜치 추천
7. Claude Code에서 바로 사용할 다음 작업 프롬프트

### 7.5 Diagram Policy

Diagram이 필요하다고 판단되어도 즉시 만들지 않는다. Self Review에서 **Diagram Candidate**로만 기록하고, 실제 제작은 최종적으로 Figma에서 한다.

대상: Flow Chart, ERD, UML, State Diagram, Sequence Diagram, User Flow, Journey Map, Information Hierarchy, Timeline, Architecture Diagram.

#### 7.5.1 Diagram Candidate Registry

Self Review에서 기록된 Diagram Candidate를 브랜치가 끝나도 잊히지 않도록 한곳에 누적한다. 실제 제작 여부와 무관하게, 후보로 판단된 시점에 이 표에 추가한다.

| Diagram | 유형 | 대응 문서/섹션 | 등록 브랜치 | 제작 상태 |
|---------|------|------------------|--------------|-----------|
| Content Workflow Diagram | Flow Chart | `docs/CONTENT_GUIDE.md` §11 Project Content Workflow | `feature/projects-content-workflow` | 미제작 |
| Quality Gate Flow | Flow Chart / State Diagram | `docs/PROJECT.md` §10 Feature 완료 기준 (Quality Gate) | `feature/projects-content-workflow` | 미제작 |
| Evidence Flow | Flow Chart | `docs/CONTENT_GUIDE.md` §12 Evidence Rule, §13 Content Source Rule | `feature/projects-content-workflow` | 미제작 |
| Content Traceability Diagram | Sequence Diagram / Mapping Diagram | `docs/CONTENT_GUIDE.md` §14 Traceability Rule | `feature/projects-content-workflow` | 미제작 |

> **변경 이력 (`feature/ui-quality-audit`)**: 프로젝트 거버넌스 확장 시점에 §1(브랜치 세분화 예시)과 §7.1~§7.5를 추가했다. 이 내용은 채팅으로 먼저 전달되었으나, "Source of Truth 문서는 항상 최신 상태를 유지하고 문서간 Drift를 허용하지 않는다"는 원칙에 따라 실제 작업(Projects Feature) 착수 전에 이 문서로 옮겼다 — Architecture Decision → Architecture Alignment → 문서 수정 → 구현 순서를 그대로 따른 것이다.
>
> **변경 이력 (`feature/projects-content-workflow`)**: §7.5가 "Diagram Candidate는 Self Review에서만 기록한다"는 정책만 갖고 있어, 브랜치가 끝나면 후보 목록 자체가 대화 기록에만 남고 문서에는 남지 않았다. §7.5.1 Diagram Candidate Registry를 추가해 후보를 영구적으로 누적하도록 했다.
