import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apis from '../../services';

const investNow = createAsyncThunk('Investment API', async ({ id }) => {
  const responce = await apis.investNow({ id });
  return await responce;
});

const investSlice = createSlice({
  name: 'investNow',
  initialState: {
    loading: false,
    investNow: null,
    error: null,
  },
  extraReducers: {
    [investNow.pending]: (state, action) => {
      state.loading = true;
    },
    [investNow.fulfilled]: (state, action) => {
      state.loading = false;
      state.investNow = action.payload;
    },
    [investNow.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export { investNow };
export default investSlice.reducer;
