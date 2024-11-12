import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import cartReducer, { CartState } from './slices/cartSlice';
import favouritesReducer, { FavouritesState } from './slices/favouritesSlice';
import themeReducer, { ThemeState } from './slices/themeSlice';
import contactUsReducer, { ContactUsState } from './slices/contactusSlice';

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
  },
});

export const persistor = persistStore(store);

export type RootState = {
  cart: CartState;
  favourites: FavouritesState;
  contactUs: ContactUsState;
  theme: ThemeState;
};

export type AppDispatch = typeof store.dispatch;
