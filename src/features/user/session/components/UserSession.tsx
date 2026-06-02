/*
Created by: Katherine Aguirre
On: 7/4/2022 : 13:40
Project: react-typescript-prettier-eslint-with-husky
*/
import { useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';

import cssStyle from './UserSession.module.scss';

import type { UserSessionComponentProps } from '../types';

const UserSessionComponent: FC<UserSessionComponentProps> = ({
  props: _props,
}) => {
  const { t } = useTranslation();
  const [_state, _setState] = useState('');

  return <div className={cssStyle.userSession}>{t('userSession.label')}</div>;
};

export default UserSessionComponent;
