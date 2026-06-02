import { combineReducers } from '@reduxjs/toolkit';

import { userAuthReducer } from '@/features/auth';
import { homeReducer } from '@/features/home';
import { baseApi } from '@/common/api/baseApi';

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  home: homeReducer,
  userAuthentication: userAuthReducer,
});

export default rootReducer;
