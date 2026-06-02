/*
Created by: Katherine Aguirre
On: 5/4/2022 : 5/4/2022
Project: react-typescript
*/
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import cssStyle from './NotFound.module.scss';

import type { NotFoundComponentProps } from '../types';

const NotFoundComponent: FC<NotFoundComponentProps> = ({ props: _props }) => {
  const { t } = useTranslation();

  return (
    <figure>
      <div className={cssStyle.sadMac} />
      <figcaption>
        <span className={cssStyle.srText}>
          {t('notFound.screenReaderText')}
        </span>
        <span className={cssStyle.e} />
        <span className={cssStyle.r} />
        <span className={cssStyle.r} />
        <span className={cssStyle.o} />
        <span className={cssStyle.r} />
        <span className={cssStyle._4} />
        <span className={cssStyle._0} />
        <span className={cssStyle._4} />
        <span className={cssStyle.n} />
        <span className={cssStyle.o} />
        <span className={cssStyle.t} />
        <span className={cssStyle.f} />
        <span className={cssStyle.o} />
        <span className={cssStyle.u} />
        <span className={cssStyle.n} />
        <span className={cssStyle.d} />
      </figcaption>
    </figure>
  );
};

export default NotFoundComponent;
