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
