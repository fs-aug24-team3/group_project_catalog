import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartProduct } from '../../types/CartProduct';

interface CartState {
  cartItems: CartProduct[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartProduct>) => {
      const existingItem = state.cartItems.find(
        item => item.id === action.payload.id,
      );
      if (!existingItem) {
        state.cartItems.push(action.payload);
      }
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload,
      );
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item && item.quantity <= 999) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;

export type { CartState };
