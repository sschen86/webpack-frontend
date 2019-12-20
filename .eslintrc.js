module.exports = {
    root: true,
    extends: [
        '@smartx/eslint-config-tentative',
    ],
    env: {
        node: true
    },
    parserOptions: { parser: 'babel-eslint' },
    globals: {

    },
    rules: {
        'no-return-assign': 'off', // 允许return中使用赋值操作
        'no-sequences': 'off', // Array.reduce中使用逗号运算符
        'no-console': [ 'error', { allow: [ 'warn', 'error' ] } ],
        //'no-cond-assign':'off'
    },
}
