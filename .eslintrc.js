module.exports = {
    "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "extends": "airbnb",
    "env": {
      "browser": true,
      "node": true
    },
    "parser": "babel-eslint",
    "rules": {
        "no-console": 1,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        // "import/no-unresolved": [
        //     2, 
        //     { caseSensitive: false }
        //  ]
        "import/no-unresolved": [0],
    }
  };