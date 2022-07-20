module.exports = {
    "parser": 'babel-eslint',
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "node": true,
        "jest": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true.
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/prop-types":  ["off"],
        "indent": ["error", 2],
        "linebreack-style": ["error", "unix"],
        "quotes": ["error", "single"],
        "no-console": ["warn", { "allow": ["info", "error"]}]
    }
}
