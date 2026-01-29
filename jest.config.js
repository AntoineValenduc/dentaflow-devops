export default {
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/api/server.js'
  ],
  coverageDirectory: 'coverage',
  // On baisse les seuils le temps de remplir src/ avec du vrai code
  coverageThreshold: {
    "global": {
      "statements": 25,
      "branches": 25,
      "functions": 25,
      "lines": 25
    }
  },
  testMatch: ['**/tests/**/*.test.js'],
  // Ce bloc aide Jest à gérer les imports ESM sans transformation complexe
  transform: {}
};