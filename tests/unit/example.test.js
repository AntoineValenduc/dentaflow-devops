import { getStatus } from '../../src/index.js';

test('Status function returns correct string', () => {
  expect(getStatus()).toBe("DentaFlow API is running");
});