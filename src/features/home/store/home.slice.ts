import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { HomeState } from '../types';
import type { RootState } from '@/store';

const initialState: HomeState = {
  title: '',
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setHomeTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
  },
});

export const { setHomeTitle } = homeSlice.actions;
export const selectHomeTitle = (state: RootState) => state.home.title;

export default homeSlice.reducer;
