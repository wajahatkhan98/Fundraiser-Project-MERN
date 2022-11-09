import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import walletReducer from './slices/walletSlicer';
import investReducer from './slices/investSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    wallet: walletReducer,
    invest: investReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
