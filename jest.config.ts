export default {

  clearMocks: true,

  // collectCoverage: true,

  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],

  coverageDirectory: 'coverage',

  testEnvironment: 'node',

  roots: [
    '<rootDir>/src'
  ],

  transform: {
    '.+\\.ts$': 'ts-jest'
  },

  testMatch: ['**/?(*.)+(spec|test).ts']

}
