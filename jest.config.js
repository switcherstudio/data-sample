const { defaults } = require('jest-config');

module.exports = {
    "moduleFileExtensions": [...defaults.moduleFileExtensions, 'sql'],
    "reporters": [
      ["./node_modules/jest-html-reporter", {
        "pageTitle": "Test Suite Reporter",
        "outputPath": "views/jest-output.html",
        "includeFailureMsg": true,
        "includeConsoleLog": true,
        "useCssFile": false,
        "sort": "titleAsc",
        "append": false
      }]
    ],
    "setupFilesAfterEnv": ["./src/setup-matcher.js"]
};
