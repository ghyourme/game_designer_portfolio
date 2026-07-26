/**
 * NavigationItem
 *
 * 참고 문서: docs/DATA_MODEL.md - 10. 네비게이션 데이터 모델
 *
 * data/navigation.json의 각 항목이 따르는 구조를 정의한다.
 */
export interface NavigationItem {
  label: string;
  path: string;
  order: number;
  isActive: boolean;
}
