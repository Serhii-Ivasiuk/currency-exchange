import { createSlice } from '@reduxjs/toolkit';
import { fecthBaseCurrency } from './operations';

const currencySlise = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
  },
  extraReducers: builder => {
    builder.addCase(fecthBaseCurrency.fulfilled, (state, action) => {
      state.baseCurrency = action.payload;
    });
  },
});

export const currencyReducer = currencySlise.reducer;
