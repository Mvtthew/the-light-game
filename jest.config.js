module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    './src/**',
    '!**/node_modules/**',
    '!**/config/**',
    '!./src/App.ts',
    '!./src/index.ts',
  ],
  coverageReporters: ['text', 'text-summary', 'html'],
  setupFilesAfterEnv: ['./tests/setup.ts'],
};
