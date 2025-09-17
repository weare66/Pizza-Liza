import { configureStore } from '@reduxjs/toolkit';
import filterReduser from './slices/filterSlice';
import cart from './slices/cartSlice'


export const store = configureStore({
  reducer: {
    filter: filterReduser,
    cart,

  },
})


