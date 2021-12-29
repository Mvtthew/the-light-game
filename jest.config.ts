module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    './src/**',
  ],
  coverageReporters: ['text', 'text-summary', 'html'],
};
