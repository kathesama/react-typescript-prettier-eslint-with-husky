import type { User } from '../types';

export const Status = {
  FULFILLED: 'succeeded',
  LOADING: 'loading',
  REJECTED: 'failed',
  IDLE: 'idle',
};

export const UserEmptyState: User = {
  name: '',
  gender: '',
  status: '',
};
