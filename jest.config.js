module.exports = {
  roots: [ '<rootDir>/tests/' ],
  verbose: true,
  clearMocks: true,
  moduleFileExtensions: [ 'ts', 'tsx', 'js', 'jsx', 'json', 'node' ],
  testEnvironment: 'node',
  testMatch: [ '**/*.test.ts', '**/__tests__/**/?(*.)+(spec|test).ts' ],
  testRunner: 'jest-circus/runner',
  testPathIgnorePatterns: [ '/node_modules/', '/__fixtures__/' ],
  transform: {
    "^.+\\.(ts)$": "ts-jest"
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.ts',
    '!**/*.d.ts',
    '!**/dist/**',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/generated/**',
    '!**/__fixtures__/**',
    '!**/scenarios/**',
    '!**/redirects/**',
  ],
  "coverageThreshold": {
    "global": {
      "branches": 90,
      "functions": 90,
      "lines": 90,
      "statements": 90
    }
  },
  coverageDirectory: './coverage',
  coverageReporters: [ 'json', 'lcov', 'text', 'clover', 'html' ]
}
