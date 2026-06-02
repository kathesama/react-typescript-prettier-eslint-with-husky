import { useTranslation } from 'react-i18next';

import { useHomeController } from '../hooks/useHomeController';
import Home from './Home';

const HomePage = () => {
  const { t } = useTranslation();
  const { title } = useHomeController();

  return <Home title={title || t('home.title')} />;
};

export default HomePage;
