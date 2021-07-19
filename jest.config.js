module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    roots: [
      "<rootDir>/__tests__/unit"
    ],
    testMatch: ["**/__tests__/**/*.+(ts|tsx|js)", "**/?(*.)+(spec|test).+(ts|tsx|js)"],
    transform: {
      "^.+\\.(ts|tsx)?$": "ts-jest",
      ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$": "jest-transform-stub"
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts']
  };