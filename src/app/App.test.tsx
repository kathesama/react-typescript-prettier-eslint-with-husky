import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '@/store';

import App from './App';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
  const linkElement = screen.getByText(/Eureka!/i);
  expect(linkElement).toBeInTheDocument();
});
