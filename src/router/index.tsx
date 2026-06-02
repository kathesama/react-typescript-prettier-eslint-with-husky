import { createBrowserRouter } from 'react-router-dom';

import Home from '@/features/home';
import NotFound from '@/features/not-found';

import { ROUTES } from './routes';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
]);
