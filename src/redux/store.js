import { configureStore } from '@reduxjs/toolkit';
import filterReduser from './slices/filterSlice';
import cart from './slices/cartSlice';
import pizza from './slices/pizzaSlice';


export const store = configureStore({
  reducer: {
    filter: filterReduser,
    cart,
    pizza,

  },
})


