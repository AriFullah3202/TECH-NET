import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from './middleware/logger'
import cartReducer from './feature/cart/cartSlice'
import productReducer from './feature/product/productSlice'
import { api } from './api/apISlice'


export const store = configureStore({
  reducer: {
    cart : cartReducer,
    product : productReducer,
    [api.reducerPath] : api.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
