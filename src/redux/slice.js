import { createSlice } from '@reduxjs/toolkit';
import { fecthBaseCurrency, fetchExchangeCurrency } from './operations';

const currencySlise = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
    result: null,
  },
  reducers: {
    setBaseCurrency(state, action) {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fecthBaseCurrency.fulfilled, (state, action) => {
        state.baseCurrency = action.payload;
      })
      .addCase(fetchExchangeCurrency.fulfilled, (state, action) => {
        state.result = action.payload;
      });
  },
});

export const currencyReducer = currencySlise.reducer;
export const { setBaseCurrency } = currencySlise.actions;
