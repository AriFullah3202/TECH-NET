import { PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '@/types/globalTypes';
import { createSlice } from '@reduxjs/toolkit';

interface ICart {
  products: IProduct[];
  total: number;
}

//এটা ইনিশিয়ালি ফাকা Array দিয়েছি ।
const initialState: ICart = {
  products: [],
  total: 0,
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
      state.total += action.payload.price;
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
      state.total -= action.payload.price;
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
      state.total -= action.payload.price * action.payload.quantity!;
    },
  },
});
export const { addToCart, removeFromCart, removeOne } = cartSlice.actions;
export default cartSlice.reducer;
