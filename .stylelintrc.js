module.exports = {
  extends: [
    "stylelint-config-recommended-vue",
    "stylelint-config-rational-order",
    "stylelint-config-prettier",
  ],
  plugins: [
    "stylelint-order",
    "stylelint-declaration-block-no-ignored-properties",
  ],
  overrides: [
    {
      files: ["**/*.(less|css|html|vue)"],
      customSyntax: "postcss-less",
    },
    {
      files: ["**/*.(html|vue)"],
      customSyntax: "postcss-html",
    },
  ],
  rules: {
    "plugin/declaration-block-no-ignored-properties": true,
    "comment-empty-line-before": null,
    "declaration-empty-line-before": null,
    "function-name-case": "lower",
    "no-descending-specificity": null,
    "no-invalid-double-slash-comments": null,
    "block-no-empty": null,
    "value-keyword-case": null,
    "rule-empty-line-before": [
      "always",
      { except: ["after-single-line-comment", "first-nested"] },
    ],
    "at-rule-no-unknown": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],
  },
  ignoreFiles: ["node_modules/**/*", "build/**/*", "dist/**/*"],
};
