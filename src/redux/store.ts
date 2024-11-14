import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import favouritesReducer from './slices/favouritesSlice';
import authReducer from './slices/authSlice';
import themeReducer from './slices/themeSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { useDispatch } from 'react-redux';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user', 'isLoggedIn'],
};

const cartPersistConfig = {
  key: 'cart',
  storage,
};

const favouritesPersistConfig = {
  key: 'favourites',
  storage,
};

const themePersistConfig = {
  key: 'theme',
  storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

const persistedFavouritesReducer = persistReducer(
  favouritesPersistConfig,
  favouritesReducer,
);

const persistedThemeReducer = persistReducer(themePersistConfig, themeReducer);

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    favourites: persistedFavouritesReducer,
    theme: persistedThemeReducer,
    auth: persistedAuthReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>()
