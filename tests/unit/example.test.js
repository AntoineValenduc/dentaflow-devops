// Test d'exemple pour valider la configuration
describe('Suite de tests DentaFlow', () => {
 test('Addition basique', () => {
 expect(1 + 1).toBe(2);
 });
 test('Vérification environnement test', () => {
 expect(process.env.NODE_ENV).toBe('test');
 });
});