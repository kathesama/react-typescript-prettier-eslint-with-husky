/*
Created by: Katherine Aguirre
On: 7/4/2022 : 13:40
Project: react-typescript-prettier-eslint-with-husky
*/
import { useState, type FC } from 'react';

import cssStyle from './userSession.module.scss';

type UserSessionComponentProps = {
  props?: unknown;
};

const UserSessionComponent: FC<UserSessionComponentProps> = ({
  props: _props,
}) => {
  const [_state, _setState] = useState('');

  return <div className={cssStyle.userSession}>UserSessionComponent</div>;
};

export default UserSessionComponent;
