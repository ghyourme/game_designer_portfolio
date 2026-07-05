# 개발 로드맵

이 문서는 Game Designer Portfolio 프로젝트의 전체 개발 단계를 정의한다.

각 단계는 독립적으로 완료 가능하며, Git 브랜치 및 태그 기반으로 관리된다.

---

## 0. Phase 0 - 프로젝트 기반 구축 (완료 단계)

### 목표
프로젝트 구조, 규칙, 데이터 모델, 디자인 시스템 정의

### 완료 항목

- PROJECT.md
- CLAUDE.md
- ARCHITECTURE.md
- DATA_MODEL.md
- DESIGN_SYSTEM.md
- README.md

### 결과
- 문서 기반 개발 구조 확립
- JSON 중심 데이터 설계 완료
- 시스템 아키텍처 정의 완료

---

## 1. Phase 1 - Next.js 초기 구조 구축

### 목표

실제 웹 프로젝트 기본 구조 생성

### 작업 내용

- Next.js App Router 초기화
- TypeScript 설정
- Tailwind CSS 설정
- 기본 폴더 구조 생성

```
app/
components/
features/
layouts/
data/
lib/
utils/
types/
```

### Git

- 브랜치: `feature/nextjs-init`

---

## 2. Phase 2 - 디자인 시스템 적용

### 목표

DESIGN_SYSTEM.md 기반 UI 구조 구현

### 작업 내용

- 글로벌 스타일 적용
- 기본 컴포넌트 생성
  - Button
  - Card
  - Tag
  - Section
- Layout 구조 구현

---

## 3. Phase 3 - Home 페이지 제작

### 목표

첫 인상 페이지 구축

### 구성

- Hero Section
- Profile Summary
- Featured Projects
- Skills Overview
- Contact CTA

---

## 4. Phase 4 - 프로젝트 시스템 구축

### 목표

JSON 기반 프로젝트 시스템 구현

### 작업 내용

- projects.json 연결
- Project Card 구현
- Project Detail 페이지 구현
- Dynamic Route 설정

---

## 5. Phase 5 - 분석 시스템 구축

### 목표

게임 분석 콘텐츠 시스템 구축

### 작업 내용

- analysis.json 연결
- 분석 리스트 페이지
- 분석 상세 페이지

---

## 6. Phase 6 - 검색 및 필터 시스템

### 목표

데이터 기반 탐색 기능 구현

### 기능

- 태그 필터
- 역할 필터
- 회사별 필터
- 검색 기능

---

## 7. Phase 7 - PDF 시스템

### 목표

프로젝트 상세 문서 PDF 제공

### 기능

- PDF Viewer
- 다운로드 기능
- 프로젝트별 문서 연결

---

## 8. Phase 8 - 반응형 및 최적화

### 목표

모든 디바이스 대응

### 작업 내용

- 모바일 최적화
- 태블릿 대응
- 성능 최적화
- Lighthouse 개선

---

## 9. Phase 9 - 배포

### 목표

프로덕션 배포

### 작업 내용

- Vercel 배포
- 도메인 연결
- SEO 설정

---

## 10. Phase 10 - v1.0 출시

### 목표

포트폴리오 완성본 배포

### 기준

- 모든 페이지 완성
- 모든 기능 정상 동작
- 실제 취업 활용 가능 상태

---

## Git 운영 규칙

- 각 Phase는 브랜치로 관리
- 기능 단위 커밋 사용
- Merge 후 Tag 생성

예:

```
v0.1.0 - 문서 기반 구축 완료
v0.2.0 - Next.js 초기 구조
v0.3.0 - 디자인 시스템
v1.0.0 - 최종 배포
```

---

## 핵심 원칙

- 문서 우선 개발
- JSON 기반 구조
- 컴포넌트 재사용
- UX 중심 설계
- 유지보수 가능한 구조