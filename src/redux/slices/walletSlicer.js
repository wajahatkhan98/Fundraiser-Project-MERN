import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apis from '../../services';

const getWallet = createAsyncThunk('Geting wallet data', async ({ id }) => {
  const response = await apis.getWallet(id);
  console.log('first=================', response);
  return response?.data?.wallet;
});

const walletSlice = createSlice({
  name: 'wallet',
  initialState: {
    loading: false,
    wallet: null,
    error: null,
  },
  extraReducers: {
    [getWallet.pending]: (state, action) => {
      state.loading = true;
    },
    [getWallet.fulfilled]: (state, action) => {
      state.loading = false;
      state.wallet = action.payload;
    },
    [getWallet.rejected]: (state, action) => {
      console.log('^^^^^^^^^^^^^^^', action);
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export { getWallet };
export default walletSlice.reducer;
