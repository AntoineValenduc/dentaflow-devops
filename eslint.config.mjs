import json from "@eslint/json";
import js from "@eslint/js";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  // 1. Configuration pour le JavaScript (ton code dans src/)
  {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node, // Pour reconnaître 'process', 'module', etc.
        ...globals.jest  // Utile si tu ajoutes des tests plus tard
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": "warn",
      "no-console": "off"
    },
  },

  // 2. Configuration pour le JSON (tes fichiers de config)
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    rules: {
      "json/no-duplicate-keys": "error",
    },
  },

  // 3. Dossiers à ignorer totalement
  {
    ignores: ["node_modules/", "dist/", "postgres_data/"]
  }
];