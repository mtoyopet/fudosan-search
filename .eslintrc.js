module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    "comma-dangle": 0,
    "no-console": 0,
    "quotes": [0, "backtick", "single", "backtick"],
    "prettier/prettier": ["error", { "semi": false }]
  }
}
