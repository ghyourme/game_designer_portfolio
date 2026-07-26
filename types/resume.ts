/**
 * Resume
 *
 * 참고 문서: docs/DATA_MODEL.md - 7. 이력서 데이터 모델
 *
 * data/resume.json이 따르는 구조를 정의한다. features/resume/의 각 Feature가
 * 실제로 사용하는 필드만 정의했다.
 */
export interface ResumePersonalInfo {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
}

export interface ResumeCareerEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface ResumeProjectExperienceEntry {
  id: string;
  title: string;
  role: string;
  period: string;
  description: string;
}

export interface ResumeEducationEntry {
  id: string;
  school: string;
  degree: string;
  period: string;
}

export interface Resume {
  personalInfo: ResumePersonalInfo;
  career: ResumeCareerEntry[];
  projectExperience: ResumeProjectExperienceEntry[];
  education: ResumeEducationEntry[];
  /** TODO: 세부 필드 미정 — 이 데이터를 렌더링하는 Feature가 아직 없어 구조를 추측하지 않음 */
  awards: unknown[];
}
