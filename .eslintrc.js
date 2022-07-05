module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "airbnb", "airbnb/hooks"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: { "no-duplicate-imports": "error", "no-self-compare": "error", eqeqeq: "error" },
};
