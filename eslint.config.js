import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import importPlugin from "eslint-plugin-import";
import pluginQuery from "@tanstack/eslint-plugin-query";

export default defineConfig([
  globalIgnores(['dist', 'vite.config.ts']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
     plugins: {
      import: importPlugin,
      "@tanstack/query": pluginQuery,
    },
     rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
          disallowTypeAnnotations: false,
        },
      ],
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external", // 외부 패키지
            "internal", // @/ 절대경로
            ["parent", "sibling", "index"], // 상대경로
          ],
          pathGroups: [
            { pattern: "{react,react-*,react-*/**}", group: "builtin", position: "before" }, // react는 builtin으로 별도 지정
            {
              pattern: "@/**",
              group: "internal",
              position: "before",
            },
          ],
          "newlines-between": "always-and-inside-groups",
          pathGroupsExcludedImportTypes: ["react"], // react는 external에서 제외
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
])
