/* eslint-disable no-undef */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const process = require('process')

// eslint-disable-next-line @typescript-eslint/naming-convention
const isCI = process.env.CI === '1'

module.exports = {
  rootDir: '.',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testPathIgnorePatterns: ['/node_modules/', 'dist', '.cy.', 'test-helper'],
  collectCoverage: isCI,
  coverageReporters: ['lcov'],
  collectCoverageFrom: ['**/*.{ts,tsx}', '!dist/**', '!**/node_modules/**'],
  preset: 'ts-jest',
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: 'junit', outputName: 'junit.xml' }]
  ]
}
