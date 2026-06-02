import { baseApi } from '@/common/api/baseApi';

import type { HomeResponse } from '../types';

export const homeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getHome: builder.query<HomeResponse, void>({
      query: () => '/api/home',
    }),
  }),
});

export const { useGetHomeQuery } = homeApi;
