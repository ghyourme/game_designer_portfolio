/**
 * Content Editor Schema
 *
 * 참고 문서: docs/DATA_MODEL.md
 *
 * data/*.json 각 파일의 필드 구조를 폼 렌더링용으로 서술한다. 이 파일은 배포되는
 * Next.js 앱의 일부가 아니다 — 로컬 전용 콘텐츠 편집 도구(tools/content-editor/)만
 * 참조하며, docs/DATA_MODEL.md에 정의된 필드와 항상 동일해야 한다(필드 추가/삭제 시
 * 두 곳을 함께 갱신한다).
 *
 * 필드 타입:
 * - text: 한 줄 문자열
 * - textarea: 여러 줄 문자열
 * - boolean: 체크박스
 * - stringArray: 문자열 배열(줄바꿈으로 구분 입력)
 * - select: 닫힌 집합(union) 문자열, options 중 하나
 * - object: 중첩된 단일 객체(반복 없음), fields로 하위 필드 정의
 * - objectArray: 객체 배열(반복 가능), fields로 항목 하나의 하위 필드 정의
 * - raw: 구조가 아직 문서에 정의되지 않은 값 — JSON 텍스트로 그대로 편집
 * - image: 이미지 경로 문자열(text와 저장 형태는 동일). 업로드 버튼 + 미리보기가
 *   추가로 붙는다. `uploadFolder`(public/images/ 아래 하위 폴더)를 반드시 지정한다 —
 *   server.js의 ALLOWED_UPLOAD_FOLDERS와 일치해야 업로드가 허용된다.
 */

const PROJECT_SYSTEM_FIELDS = [
  { key: "name", label: "이름", type: "text" },
  { key: "purpose", label: "목적", type: "textarea" },
  { key: "playerExperience", label: "플레이어 경험", type: "textarea" },
  { key: "structure", label: "시스템 구조", type: "textarea" },
  { key: "flow", label: "플로우", type: "textarea" },
  { key: "data", label: "데이터", type: "textarea" },
  { key: "exceptionHandling", label: "예외 처리", type: "textarea" },
  { key: "expectedEffect", label: "기대 효과", type: "textarea" },
];

const PROJECT_FEATURE_FIELDS = [
  { key: "name", label: "이름", type: "text" },
  { key: "description", label: "설명", type: "textarea" },
];

const PROJECT_DOCUMENT_FIELDS = [
  {
    key: "type",
    label: "형식",
    type: "select",
    options: ["pdf", "ppt", "docx", "markdown", "notion", "other"],
  },
  { key: "title", label: "제목", type: "text" },
  { key: "url", label: "URL", type: "text" },
];

const PROJECT_GALLERY_FIELDS = [
  {
    key: "type",
    label: "종류",
    type: "select",
    options: ["screenshot", "wireframe", "uml", "erd", "concept", "other"],
  },
  { key: "src", label: "이미지", type: "image", uploadFolder: "projects/gallery" },
  { key: "description", label: "설명", type: "textarea" },
  { key: "caption", label: "캡션", type: "text" },
  { key: "purpose", label: "목적", type: "textarea" },
];

const PROJECT_LINK_FIELDS = [
  {
    key: "type",
    label: "플랫폼",
    type: "select",
    options: ["github", "figma", "notion", "youtube", "deployment", "other"],
  },
  { key: "label", label: "라벨", type: "text" },
  { key: "url", label: "URL", type: "text" },
];

const CONTACT_LINK_FIELDS = [
  {
    key: "type",
    label: "플랫폼",
    type: "select",
    options: ["linkedin", "twitter", "portfolio", "blog", "other"],
  },
  { key: "label", label: "라벨", type: "text" },
  { key: "url", label: "URL", type: "text" },
];

const ANALYSIS_DIMENSION_FIELDS = [
  { key: "keyElement", label: "핵심 요소", type: "text" },
  { key: "strengths", label: "장점", type: "textarea" },
  { key: "weaknesses", label: "문제점", type: "textarea" },
  { key: "improvements", label: "개선안", type: "textarea" },
];

const RESUME_ENTRY_FIELDS_BASE = [
  { key: "role", label: "역할", type: "text" },
  { key: "period", label: "기간", type: "text" },
  { key: "description", label: "설명", type: "textarea" },
];

const SKILL_ITEM_FIELDS = [
  { key: "name", label: "이름", type: "text" },
  { key: "proficiency", label: "숙련도", type: "text" },
];

const FILES = {
  profile: {
    label: "Profile (자기소개·연락처)",
    path: "profile.json",
    kind: "record",
    fields: [
      { key: "name", label: "이름", type: "text" },
      { key: "targetRole", label: "희망 직무", type: "text" },
      { key: "tagline", label: "한 줄 소개", type: "text" },
      { key: "summary", label: "짧은 자기소개", type: "textarea" },
      { key: "direction", label: "기획자로서의 방향성", type: "textarea" },
      { key: "designApproach", label: "게임 설계 관점", type: "textarea" },
      { key: "problemSolving", label: "문제 해결 방식", type: "textarea" },
      { key: "playerExperience", label: "플레이어 경험 관점", type: "textarea" },
      { key: "coreStrengths", label: "핵심 강점", type: "stringArray" },
      { key: "email", label: "이메일", type: "text" },
      { key: "contactIntro", label: "연락 안내 문구", type: "textarea" },
      {
        key: "links",
        label: "소셜/포트폴리오 링크",
        type: "objectArray",
        itemLabelField: "label",
        fields: CONTACT_LINK_FIELDS,
      },
    ],
  },
  personal: {
    label: "Personal Works (개인 작업물)",
    path: "personal.json",
    kind: "list",
    idField: "id",
    itemLabelField: "title",
    fields: [
      { key: "id", label: "ID", type: "text", readOnly: true },
      { key: "title", label: "제목", type: "text" },
      { key: "description", label: "설명", type: "textarea" },
      { key: "tags", label: "태그", type: "stringArray" },
      { key: "link", label: "외부 링크", type: "text" },
    ],
  },
  projects: {
    label: "Projects (프로젝트)",
    path: "projects.json",
    kind: "list",
    idField: "id",
    itemLabelField: "title",
    fields: [
      { key: "id", label: "ID", type: "text", readOnly: true },
      { key: "slug", label: "slug (URL 경로, 생성 후 변경 금지)", type: "text" },
      { key: "title", label: "제목", type: "text" },
      { key: "subtitle", label: "부제", type: "text" },
      { key: "thumbnail", label: "썸네일 이미지 (목록 카드용)", type: "image", uploadFolder: "projects" },
      { key: "cover", label: "커버 이미지 (상세 페이지 헤더용)", type: "image", uploadFolder: "projects" },
      { key: "role", label: "담당 역할(짧은 라벨)", type: "text" },
      { key: "genre", label: "장르", type: "text" },
      { key: "platform", label: "플랫폼", type: "text" },
      { key: "period", label: "진행 기간", type: "text" },
      { key: "team", label: "팀 규모", type: "text" },
      { key: "tags", label: "태그", type: "stringArray" },
      { key: "featured", label: "대표 프로젝트", type: "boolean" },
      { key: "overview", label: "1. 프로젝트 개요", type: "textarea" },
      { key: "contribution", label: "2. 담당 역할(서술)", type: "textarea" },
      { key: "skills", label: "담당 역할 관련 스킬 태그", type: "stringArray" },
      { key: "goal", label: "3. 목표", type: "textarea" },
      { key: "problem", label: "4. 문제 정의", type: "textarea" },
      { key: "approach", label: "5. 접근 과정", type: "textarea" },
      {
        key: "systems",
        label: "6. 시스템 설계",
        type: "objectArray",
        itemLabelField: "name",
        fields: PROJECT_SYSTEM_FIELDS,
      },
      {
        key: "documents",
        label: "6. 관련 문서",
        type: "objectArray",
        itemLabelField: "title",
        fields: PROJECT_DOCUMENT_FIELDS,
      },
      {
        key: "features",
        label: "7. 핵심 기능",
        type: "objectArray",
        itemLabelField: "name",
        fields: PROJECT_FEATURE_FIELDS,
      },
      {
        key: "gallery",
        label: "7. 이미지 갤러리",
        type: "objectArray",
        itemLabelField: "caption",
        fields: PROJECT_GALLERY_FIELDS,
      },
      { key: "result", label: "8. 결과", type: "textarea" },
      { key: "retrospective", label: "9. 회고", type: "textarea" },
      {
        key: "links",
        label: "외부 참고 링크",
        type: "objectArray",
        itemLabelField: "label",
        fields: PROJECT_LINK_FIELDS,
      },
    ],
  },
  analysis: {
    label: "Analysis (게임 분석)",
    path: "analysis.json",
    kind: "list",
    idField: "id",
    itemLabelField: "title",
    fields: [
      { key: "id", label: "ID", type: "text", readOnly: true },
      { key: "slug", label: "slug (URL 경로)", type: "text" },
      { key: "title", label: "제목", type: "text" },
      { key: "description", label: "설명", type: "textarea" },
      { key: "tags", label: "태그", type: "stringArray" },
      { key: "featured", label: "대표 분석", type: "boolean" },
      { key: "targetGame", label: "분석 대상 게임", type: "text" },
      { key: "purpose", label: "분석 목적", type: "textarea" },
      {
        key: "systemAnalysis",
        label: "시스템 분석",
        type: "object",
        fields: ANALYSIS_DIMENSION_FIELDS,
      },
      {
        key: "contentAnalysis",
        label: "콘텐츠 분석",
        type: "object",
        fields: ANALYSIS_DIMENSION_FIELDS,
      },
      {
        key: "uxAnalysis",
        label: "UX 분석",
        type: "object",
        fields: ANALYSIS_DIMENSION_FIELDS,
      },
      { key: "conclusion", label: "결론", type: "textarea" },
    ],
  },
  resume: {
    label: "Resume (이력서)",
    path: "resume.json",
    kind: "record",
    fields: [
      {
        key: "personalInfo",
        label: "개인 정보",
        type: "object",
        fields: [
          { key: "name", label: "이름", type: "text" },
          { key: "role", label: "역할/직무", type: "text" },
          { key: "email", label: "이메일", type: "text" },
          { key: "phone", label: "전화번호", type: "text" },
          { key: "location", label: "거주 지역", type: "text" },
          { key: "summary", label: "짧은 이력 요약", type: "textarea" },
        ],
      },
      {
        key: "career",
        label: "경력 사항",
        type: "objectArray",
        idField: "id",
        itemLabelField: "company",
        fields: [
          { key: "id", label: "ID", type: "text", readOnly: true },
          { key: "company", label: "회사", type: "text" },
          ...RESUME_ENTRY_FIELDS_BASE,
        ],
      },
      {
        key: "projectExperience",
        label: "프로젝트 경험",
        type: "objectArray",
        idField: "id",
        itemLabelField: "title",
        fields: [
          { key: "id", label: "ID", type: "text", readOnly: true },
          { key: "title", label: "제목", type: "text" },
          ...RESUME_ENTRY_FIELDS_BASE,
        ],
      },
      {
        key: "education",
        label: "교육 정보",
        type: "objectArray",
        idField: "id",
        itemLabelField: "school",
        fields: [
          { key: "id", label: "ID", type: "text", readOnly: true },
          { key: "school", label: "학교", type: "text" },
          { key: "degree", label: "학위", type: "text" },
          { key: "period", label: "기간", type: "text" },
        ],
      },
      {
        key: "awards",
        label: "수상 및 기타 활동 (세부 구조 미정 — 원본 JSON 직접 편집)",
        type: "raw",
      },
    ],
  },
  skills: {
    label: "Skills (기술 스택)",
    path: "skills.json",
    kind: "record",
    fields: [
      {
        key: "systemDesign",
        label: "시스템 기획 역량",
        type: "objectArray",
        itemLabelField: "name",
        fields: SKILL_ITEM_FIELDS,
      },
      {
        key: "contentDesign",
        label: "콘텐츠 기획 역량",
        type: "objectArray",
        itemLabelField: "name",
        fields: SKILL_ITEM_FIELDS,
      },
      {
        key: "analysis",
        label: "분석 역량",
        type: "objectArray",
        itemLabelField: "name",
        fields: SKILL_ITEM_FIELDS,
      },
      {
        key: "tools",
        label: "도구 활용 능력",
        type: "objectArray",
        itemLabelField: "name",
        fields: SKILL_ITEM_FIELDS,
      },
    ],
  },
  companies: {
    label: "Companies (목표 회사)",
    path: "companies.json",
    kind: "list",
    itemLabelField: "name",
    fields: [
      { key: "name", label: "회사 이름", type: "text" },
      { key: "description", label: "설명", type: "textarea" },
      { key: "genre", label: "게임 장르", type: "text" },
      { key: "designFeatures", label: "디자인 특징", type: "textarea" },
      { key: "strategy", label: "지원 전략", type: "textarea" },
    ],
  },
  navigation: {
    label: "Navigation (메뉴 구조)",
    path: "navigation.json",
    kind: "list",
    itemLabelField: "label",
    fields: [
      { key: "label", label: "메뉴 이름", type: "text" },
      { key: "path", label: "경로", type: "text" },
      { key: "order", label: "표시 순서", type: "number" },
      { key: "isActive", label: "노출 여부", type: "boolean" },
    ],
  },
};

module.exports = { FILES };
