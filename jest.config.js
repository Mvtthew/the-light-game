module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    './src/**',
    '!**/node_modules/**',
    '!**/config/**',
    '!**/models/**',
    '!./src/App.ts',
    '!./src/index.ts',
  ],
  coverageReporters: ['text', 'text-summary', 'html'],
  setupFilesAfterEnv: ['./src/tests/setup.ts'],
};
