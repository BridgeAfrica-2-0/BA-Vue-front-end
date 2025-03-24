module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "plugin:vue/essential", // ✅ Use "essential" for Vue 2
    "eslint:recommended"
  ],
  parserOptions: {
    parser: "babel-eslint", // ✅ Ensures Vue files parse correctly
  },
  globals: {
    google: "readonly",
  },
  rules: {
   "no-unused-vars": "warn", // ✅ warn the unused variable rule
  },
};
