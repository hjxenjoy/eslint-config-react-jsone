module.exports = {
  "extends": [
    "react-app",
    "airbnb",
    "prettier",
    "prettier/react",
  ],
  "plugins": [
    "prettier",
  ],
  "rules": {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": ["warn", {
      "extensions": [".js", ".jsx"]
    }],
    "react/jsx-props-no-spreading": 0,
    "react/prop-types": 0,
    "react/button-has-type": 0
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx"]
      }
    }
  },
  "globals": {
    "window": true,
    "document": true,
    "FormData": true,
    "FileReader": true,
    "Blob": true,
  },
}
