module.exports = {
  preset: "ts-jest",
  verbose: true,
  testEnvironment: "jsdom",
  rootDir: "src",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.test.json"
    }
  },

  setupTestFrameworkScriptFile: "<rootDir>/setupTests.ts"
};
