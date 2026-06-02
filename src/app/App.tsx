import type { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/router';

type AppProps = {
  props?: unknown;
};

export const App: FC<AppProps> = ({ props: _props }) => (
  <RouterProvider router={router} />
);

export default App;
