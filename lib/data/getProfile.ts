import type { Profile } from "@/types/profile";
import profileData from "@/data/profile.json";

/**
 * getProfile
 *
 * data/profile.json을 읽어 프로필 데이터를 반환한다.
 */
export function getProfile(): Profile {
  return profileData as Profile;
}
