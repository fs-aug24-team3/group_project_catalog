import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/Product';

interface FavouritesState {
  favourites: Product[];
}

const initialState: FavouritesState = {
  favourites: [],
};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<Product>) => {
      const existingItem = state.favourites.find(
        item => item.id === action.payload.id,
      );

      if (!existingItem) {
        state.favourites.push(action.payload);
      }
    },
    removeFavourite: (state, action: PayloadAction<number>) => {
      // eslint-disable-next-line no-param-reassign
      state.favourites = state.favourites.filter(
        item => item.id !== action.payload,
      );
    },
  },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;

export type { FavouritesState };
