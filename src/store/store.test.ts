import { login, logout } from '@/features/auth';
import { baseApi } from '@/common/api/baseApi';

import { store } from './store';

describe('store', () => {
  test('combines template slices with the shared API reducer', () => {
    expect(store.getState()).toHaveProperty('home');
    expect(store.getState()).toHaveProperty('userAuthentication');
    expect(store.getState()).toHaveProperty(baseApi.reducerPath);
  });

  test('keeps user authentication actions wired through the configured store', () => {
    store.dispatch(login());
    expect(store.getState().userAuthentication.isUserAuthenticated).toBe(true);

    store.dispatch(logout());
    expect(store.getState().userAuthentication.isUserAuthenticated).toBe(false);
  });
});
