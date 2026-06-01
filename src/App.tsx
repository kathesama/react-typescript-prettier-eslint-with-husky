import type { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/home/home';
import NotFound from './components/notFound/notFound';

type AppProps = {
  props?: unknown;
};

const App: FC<AppProps> = ({ props: _props }) => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
