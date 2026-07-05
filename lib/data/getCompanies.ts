import type { Company } from "@/types/company";
import companiesData from "@/data/companies.json";

/**
 * getCompanies
 *
 * data/companies.json을 읽어 목표 회사 목록을 반환한다.
 */
export function getCompanies(): Company[] {
  return companiesData as Company[];
}
