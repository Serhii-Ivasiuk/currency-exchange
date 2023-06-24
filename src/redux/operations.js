const { createAsyncThunk } = require('@reduxjs/toolkit');
const {
  getUserCurrentPosition,
  convertCurrency,
} = require('services/currencyAPI');

export const fecthBaseCurrency = createAsyncThunk(
  'currency/fecthBaseCurrency',
  async (crd, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedBaseCurrency = state.currency.baseCurrency;

    if (persistedBaseCurrency) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('We already have your base currency');
    }
    try {
      return await getUserCurrentPosition(crd);
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchExchangeCurrency = createAsyncThunk(
  'currency/fetchExchangeCurrency',
  async (obj, thunkAPI) => {
    try {
      const { result } = await convertCurrency(obj);
      return result;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
