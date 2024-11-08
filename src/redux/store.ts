import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { CartState } from './slices/cartSlice';
import favouritesReducer, { FavouritesState } from './slices/favouritesSlice';
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

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

const persistedFavouritesReducer = persistReducer(
  favouritesPersistConfig,
  favouritesReducer,
);

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    favourites: persistedFavouritesReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = {
  cart: CartState;
  favourites: FavouritesState;
};

export type AppDispatch = typeof store.dispatch;
