import apis from './index';

const loginApi = createAsyncThunk(
  'Authenticate Api',
  async (formData) => await apis.authLogin(formData)
);

export { loginApi };
