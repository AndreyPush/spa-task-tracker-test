module.exports = {
    env: {
        browser: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    plugins: [
        'vue',
    ],
    extends: [
        'plugin:vue/essential',
    ],
    rules: {
        'no-unused-vars': 'off',
    },
}
