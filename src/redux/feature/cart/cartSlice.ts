import { PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '@/types/globalTypes';
import { createSlice } from '@reduxjs/toolkit';

interface ICart {
  products: IProduct[];
}

//এটা ইনিশিয়ালি ফাকা Array দিয়েছি ।
const initialState: ICart = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const exiting = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (exiting) {
        //! যদি ডাটা থাকে তাহলে ‍ ১ করে বাড়াবো ।
        exiting.quantity = exiting.quantity! + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    removeOne: (state, action: PayloadAction<IProduct>) => {
      const exiting = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (exiting && exiting.quantity! > 1) {
        //! যদি ডাটা থাকে তাহলে ‍ ১ করে বাড়াবো ।
        exiting.quantity = exiting.quantity! - 1;
      } else {
        state.products = state.products.filter(
          (product) => product._id !== action.payload._id
        );
      }
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
    },
  },
});
export const { addToCart, removeFromCart, removeOne } = cartSlice.actions;
export default cartSlice.reducer;
