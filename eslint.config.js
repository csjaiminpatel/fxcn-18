// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      
      "arrow-body-style": ["error", "as-needed"],
      "prefer-arrow-callback": "error",
      "class-methods-use-this": "error",
      "no-console": ["error", { allow: ["warn", "error"] }],
      "no-debugger": "error",
      "no-duplicate-imports": "error",
      "no-empty-function": "error",
      "no-eval": "error",
      "no-magic-numbers": ["error", { ignore: [0, 1] }],
      "no-new-func": "error",
      "no-shadow": "error",
      "no-unused-expressions": "error",
      "prefer-const": "error",
      "radix": "error",
      "eqeqeq": ["error", "always", { null: "ignore" }],
      "no-var": "error",
      "sort-imports": ["error", { ignoreDeclarationSort: true }],
      "no-restricted-imports": ["error", { patterns: ["rxjs/Rx"] }],
      "no-non-null-assertion": "error",
      "no-inferrable-types": ["error", { ignoreParameters: true }],
      "no-bitwise": "error",
      "no-arg": "error",
      "no-construct": "error",
      "no-duplicate-super": "error",
      "no-empty-interface": "error",
      "no-misused-new": "error",
      "no-string-throw": "error",
      "no-switch-case-fall-through": "error",
      "no-unnecessary-initializer": "error",
      "unified-signatures": "error",
      "no-output-on-prefix": "error",
      "use-input-property-decorator": "error",
      "use-output-property-decorator": "error",
      "use-host-property-decorator": "error",
      "no-input-rename": "error",
      "no-output-rename": "error",
      "use-lifecycle-interface": "error",
      "use-pipe-transform-interface": "error",
      "component-class-suffix": "error",
      "directive-class-suffix": "error",
      "nx-enforce-module-boundaries": [
        "error",
        {
          allow: [],
          depConstraints: [{ sourceTag: "*", onlyDependOnLibsWithTags: ["*"] }],
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);
