import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import favouritesReducer from './slices/favouritesSlice';
import authReducer from './slices/authSlice';
import themeReducer from './slices/themeSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { useDispatch } from 'react-redux';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import cartReducer, { CartState } from './slices/cartSlice';
import favouritesReducer, { FavouritesState } from './slices/favouritesSlice';
import themeReducer, { ThemeState } from './slices/themeSlice';
import contactUsReducer, { ContactUsState } from './slices/contactusSlice';

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

const contactUsPersistConfig = {
  key: 'contact',
  storage,
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

const persistedFavouritesReducer = persistReducer(
  favouritesPersistConfig,
  favouritesReducer,
);

const persistedThemeReducer = persistReducer(themePersistConfig, themeReducer);

const persistedContactUsReducer = persistReducer(
  contactUsPersistConfig,
  contactUsReducer,
);

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    favourites: persistedFavouritesReducer,
    contactUs: persistedContactUsReducer,
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

export type AppDispatch = typeof store.dispatch;
