/**
 * Profile
 *
 * 참고 문서: docs/DATA_MODEL.md - 3. 데이터 디렉토리 구조 (profile.json : 사용자 기본 정보)
 *
 * docs/DATA_MODEL.md는 profile.json의 세부 필드를 아직 정의하지 않았다.
 * 문서가 구체화되기 전까지 필드를 임의로 만들지 않고 미확정 타입으로 남긴다.
 */
// TODO: docs/DATA_MODEL.md에 profile의 세부 필드가 정의되면 구체적인 interface로 대체한다.
export type Profile = Record<string, unknown>;
