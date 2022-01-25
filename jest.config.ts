export default {

  clearMocks: true,

  collectCoverage: true,

  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/*/contracts/*.ts'],

  coverageDirectory: 'coverage',

  coverageProvider: 'v8',

  roots: [
    '<rootDir>/src'
  ],

  transform: {
    '.+\\.ts$': 'ts-jest'
  }

}
