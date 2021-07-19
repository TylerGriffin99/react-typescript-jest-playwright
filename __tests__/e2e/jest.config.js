module.exports = {
    globals: {
      devBaseURL: "http://localhost:3000",
      // "ts-jest": {
      //   diagnostics: false,
      //   isolatedModules: true,
    // },
    },
    testMatch: ["**/specs/*.js"],
    transform: {
      "^.+\\.tsx?$": "ts-jest",
      "\\.js$": "react-scripts/config/jest/babelTransform"
    },
    verbose: true,
    preset: 'jest-playwright-preset',
    testEnvironmentOptions: {
      "jest-playwright": {
        browsers: ["chromium", "firefox", "webkit"],
        launchOptions: {
          headless: true,
        },
      },
    }
};
  