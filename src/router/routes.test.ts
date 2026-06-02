import { ROUTES } from './routes';

describe('ROUTES', () => {
  test('defines stable public app routes for the template', () => {
    expect(ROUTES.HOME).toBe('/');
    expect(ROUTES.NOT_FOUND).toBe('*');
  });
});
