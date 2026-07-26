import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // tools/content-editor는 배포되지 않는 로컬 전용 plain Node(CommonJS) 스크립트라
    // Next.js/TypeScript 앱 기준 lint 규칙(require 금지 등) 대상이 아니다 (docs/ARCHITECTURE.md §10).
    "tools/**",
  ]),
]);

export default eslintConfig;
