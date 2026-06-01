/*
Created by: Katherine Aguirre
On: 5/4/2022 : 5/4/2022
Project: react-typescript
*/
import type { FC } from 'react';

import cssStyle from './notFound.module.scss';

type NotFoundComponentProps = {
  props?: unknown;
};

const NotFoundComponent: FC<NotFoundComponentProps> = ({ props: _props }) => (
  <figure>
    <div className={cssStyle.sadMac} />
    <figcaption>
      <span className={cssStyle.srText}>Error 404: Not Found</span>
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

export default NotFoundComponent;
