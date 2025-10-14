import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CartItemsType } from "./cartSlice";
import { Sort } from "./filterSlice";

export type FetchPizzasProps = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: string;
};



 //type FetchPizzasProps = Record<string, string>



type Pizza = {
  title: string;
  price: number;
  imageUrl: string;
  id: string;
  sizes: number[];
  types: number[];
  rating: number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface PizzaSilceState {
  items: Pizza[];
  status: Status;
}


const initialState: PizzaSilceState = {
  items: [],
  status : Status.LOADING, // loading | success | error
};




export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async (params: FetchPizzasProps, thunkAPI) => {
    const {
          sortBy,
          order,
          category,
          search,
          currentPage,
        } = params;

        //console.log(thunkAPI);

    const {data} = await axios.get<Pizza[]>(`https://68b0530d3b8db1ae9c03958f.mockapi.io/item?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search} `);
    return data as Pizza[];
  }
);


const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
      setItems(state, action: PayloadAction<Pizza[]>) {
        state.items = action.payload;
      }, 
    },
    // extraReducers: {
    //   // [fetchPizzas.pending]: (state, action) => {
    //   //   console.log('Идёт отправка');
    //   // },
    //   // [fetchPizzas.fulfilled]: (state, action) => {
    //   //   console.log(state);
    //   // },
    //   // [fetchPizzas.rejected]: (state, action) => {
    //   //   console.log('Была ошибка');
    //   // },
    // },
    
    extraReducers: (builder) => {
      builder.addCase(fetchPizzas.pending, (state) => {
       // console.log('Идёт отправка');
        state.status = Status.LOADING;
        state.items = [];

      });
      builder.addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;

      });
      builder.addCase(fetchPizzas.rejected, (state, action) => {
        state.status = Status.ERROR;
        state.items = [];
        
      });

      
    },
});

export const selectPizzaData = (state: RootState) => state.pizza;

export const {setItems} = pizzaSlice.actions;

export default pizzaSlice.reducer;

