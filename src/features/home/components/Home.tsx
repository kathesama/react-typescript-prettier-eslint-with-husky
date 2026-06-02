import type { FC } from 'react';

import cssStyle from './Home.module.scss';

import type { HomeProps } from '../types';

const Home: FC<HomeProps> = ({ props: _props, title = 'Eureka!' }) => (
  <div className={cssStyle.App}>{title}</div>
);

export default Home;
