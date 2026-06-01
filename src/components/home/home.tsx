import type { FC } from 'react';

import cssStyle from './landTest.module.scss';

type HomeProps = {
  props?: unknown;
};

const Home: FC<HomeProps> = ({ props: _props }) => (
  <div className={cssStyle.App}>Eureka!</div>
);

export default Home;
