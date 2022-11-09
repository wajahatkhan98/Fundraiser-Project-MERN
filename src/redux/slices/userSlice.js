import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apis from '../../services';

const getProfile = createAsyncThunk('User Data', async ({ id }) => {
  const response = await apis.getUserProfile(id);
  return await response;
});

const authLogin = createAsyncThunk('Authenticate Api', async (formData) => {
  const response = await apis.authLogin(formData);
  return response.data.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  extraReducers: {
    [authLogin.pending]: (state, action) => {
      state.loading = true;
    },
    [authLogin.fulfilled]: (state, action) => {
      // console.log('************** AUTH LOGIN SLICE ***********', action);
      state.loading = false;
      state.user = action.payload;
    },
    [authLogin.rejected]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export { getProfile, authLogin };
export default userSlice.reducer;
