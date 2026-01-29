module.exports = {
 testEnvironment: 'node',
 collectCoverage: true,
 collectCoverageFrom: [
 'src/**/*.js',
 '!src/api/server.js'
 ],
 coverageDirectory: 'coverage',
 coverageThreshold: {
 global: {
 branches: 70,
 functions: 70,
 lines: 70,
 statements: 70
 }
 },
 testMatch: ['**/tests/**/*.test.js']
};