module.exports = {
  root: true,
  extends: ["@callstack"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-shadow": ["error"],
        "no-shadow": "off",
        "no-undef": "off",
        "prettier/prettier": "error",
        "global-require": 0,
        "prefer-destructuring": 0,
      },
    },
  ],
};
