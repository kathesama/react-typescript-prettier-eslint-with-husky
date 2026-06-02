import { baseApi } from './baseApi';

describe('baseApi', () => {
  test('exposes a shared RTK Query API slice', () => {
    expect(baseApi.reducerPath).toBe('baseApi');
    expect(baseApi.endpoints).toEqual({});
  });
});
