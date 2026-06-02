import { login, logout, userAuthReducer } from './auth';
import Home, {
  homeApi,
  homeReducer,
  HomeView,
  useHomeController,
} from './home';
import NotFound from './not-found';
import UserSessionComponent from './user/session';

describe('feature public exports', () => {
  test('expose route and feature entry components from feature barrels', () => {
    expect(Home).toEqual(expect.any(Function));
    expect(HomeView).toEqual(expect.any(Function));
    expect(NotFound).toEqual(expect.any(Function));
    expect(UserSessionComponent).toEqual(expect.any(Function));
    expect(homeApi.reducerPath).toBe('baseApi');
    expect(homeReducer).toEqual(expect.any(Function));
    expect(useHomeController).toEqual(expect.any(Function));
    expect(userAuthReducer).toEqual(expect.any(Function));
    expect(login).toEqual(expect.any(Function));
    expect(logout).toEqual(expect.any(Function));
  });
});
