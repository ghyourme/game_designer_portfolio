import type { Analysis } from "@/types/analysis";
import analysisData from "@/data/analysis.json";

/**
 * getAnalysis
 *
 * data/analysis.json을 읽어 게임 분석 목록을 반환한다.
 */
export function getAnalysis(): Analysis[] {
  return analysisData as Analysis[];
}
