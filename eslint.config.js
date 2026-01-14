import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "indent": ["error", 2, { "ignoredNodes": ["TemplateLiteral *"] }],
      "max-depth": ["warn", 1],
      "max-params": ["warn", 3],
      "no-else-return": "warn"
    }
  },
  {
    ignores: ["node_modules/", "dist/"]
  }
];
