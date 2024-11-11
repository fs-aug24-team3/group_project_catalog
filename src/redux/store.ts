import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { CartState } from './slices/cartSlice';
import favouritesReducer, { FavouritesState } from './slices/favouritesSlice';
import themeReducer, { ThemeState } from './slices/themeSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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
  },
});

export const persistor = persistStore(store);

export type RootState = {
  cart: CartState;
  favourites: FavouritesState;
  theme: ThemeState;
};

export type AppDispatch = typeof store.dispatch;

