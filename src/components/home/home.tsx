import React, { FC } from 'react';
import cssStyle from './landTest.module.scss';
import logo from '@/logo.svg';

const Home:FC<any> = ({ props }): any => (
  <>
    <img src={logo} className={cssStyle.AppLogo} alt="logo" />
    <div className={cssStyle.App}>
        Eureka!
    </div>
  </>
  );

export default Home;