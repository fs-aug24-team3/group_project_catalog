import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { CartState } from './slices/cartSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const PersistConfig = {
  key: 'cart',
  storage,
};

const persistedCartReducer = persistReducer(PersistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = {
  cart: CartState;
};

export type AppDispatch = typeof store.dispatch;
