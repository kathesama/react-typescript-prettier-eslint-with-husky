import homeReducer, { setHomeTitle } from './home.slice';

describe('homeReducer', () => {
  test('starts without overriding the localized default title', () => {
    const state = homeReducer(undefined, { type: 'unknown' });

    expect(state.title).toBe('');
  });

  test('stores the home page title', () => {
    const state = homeReducer(undefined, setHomeTitle('Ready'));

    expect(state.title).toBe('Ready');
  });
});
