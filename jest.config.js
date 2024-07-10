module.exports = {
  transform: {
    "^.+\\.ts$": ["ts-jest", { useESM: true }],
  },
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js"],
  testMatch: ["**/tests/**/*.test.ts"],
  transformIgnorePatterns: ["/node_modules/(?!some-package).+\\.js$"],
  extensionsToTreatAsEsm: [".ts"], // Treat .ts files as ESM
};
