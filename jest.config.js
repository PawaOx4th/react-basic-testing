/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  // extensionsToTreatAsEsm: [".ts"],
  /**
   *
   * @see {@link  https://github.com/bmvantunes/youtube-react-testing-video2-config-jest-react-testing-library/pull/1/files#diff-1e058ca1442e46581b13571fb8d261f9e1f5657e26c96634d4c1072f0f0347f1 | Code}
   */
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "./tsconfig.jest.json" }]
  }
}

