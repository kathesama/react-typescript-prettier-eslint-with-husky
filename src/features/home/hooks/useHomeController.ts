import { useAppSelector } from '@/common/hooks';

import { selectHomeTitle } from '../store/home.slice';

export const useHomeController = () => {
  const title = useAppSelector(selectHomeTitle);

  return {
    title,
  };
};
