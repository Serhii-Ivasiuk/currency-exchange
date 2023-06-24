const { createAsyncThunk } = require('@reduxjs/toolkit');
const { getUserCurrentPosition } = require('services/currencyAPI');

export const fecthBaseCurrency = createAsyncThunk(
  'currency/fecthBaseCurrency',
  async (crd, thunkAPI) => {
    try {
      return await getUserCurrentPosition(crd);
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
