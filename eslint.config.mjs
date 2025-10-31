import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    files: ["**/*.tsx", "**/*.ts"],
    rules: {
      "react/button-has-type": "off",
      "@next/next/no-img-element": "off",
      "jsx-a11y/media-has-caption": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  {
    files: ["src/components/**/*.tsx", "src/app/**/*.tsx"],
    rules: {
      "react/no-unknown-property": "off",
      "react/no-unescaped-entities": "off",
      "@next/next/no-css-tags": "off",
      "react/no-array-index-key": "off",
      "jsx-a11y/aria-proptypes": "off",
      "jsx-a11y/aria-props": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "react-hooks/exhaustive-deps": "off",
    },
  },
  {
    files: ["src/components/**/*.tsx"],
    rules: {
      "react-native/no-inline-styles": "off",
    },
  },
  {
    files: ["**/*.css"],
    rules: {
      "unknown-at-rule": "off",
    },
  },
];

export default eslintConfig;
