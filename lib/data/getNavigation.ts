import type { NavigationItem } from "@/types/navigation";
import navigationData from "@/data/navigation.json";

/**
 * getNavigation
 *
 * data/navigation.json을 읽어 네비게이션 메뉴 목록을 반환한다.
 */
export function getNavigation(): NavigationItem[] {
  return navigationData as NavigationItem[];
}
