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
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  testMatch: ['**/tests/**/*.test.js'],
  // Ce bloc aide Jest à gérer les imports ESM sans transformation complexe
  transform: {}
};