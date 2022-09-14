module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: ["standard", "plugin:prettier/recommended"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
    },
    globals: {
        artifacts: "readonly",
        contract: "readonly",
        beforeEach: "readonly",
        it: "readonly",
    },
    rules: {
        "prettier/prettier": [
            "error",
            {
                semi: true,
                singleQuote: false,
                printWidth: 120,
                arrowParens: "always",
                endOfLine: "auto",
                tabWidth: 4,
            },
        ],
    },
};
