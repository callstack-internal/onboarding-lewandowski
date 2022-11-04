module.exports = {
  root: true,
  extends: ["@callstack", "prettier"],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint','prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        "prettier/prettier": "error",
      },
    },
  ],
};