// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    "no-multi-spaces": 2,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "space-before-function-paren": ["warn", "always"],
    "space-before-blocks": "off",
    "key-spacing": ["off", { "beforeColon": false }],
    "comma-dangle": ["off"],
    "arrow-spacing":'off',
    "comma-spacing": ["off", { "before": false, "after": true }],
    "space-before-function-paren": ["off", {
        "anonymous": "always",
        "named": "always",
        "asyncArrow": "always"
    }],
    quotes: ["off", "double"],
    semi: ["off", "always"]
  }
}
