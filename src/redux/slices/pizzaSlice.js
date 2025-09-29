import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async (params, thunkAPI) => {
    const {
          sortBy,
          order,
          category,
          search,
          currentPage,
        } = params;

        //console.log(thunkAPI);

    const {data} = await axios.get(`https://68b0530d3b8db1ae9c03958f.mockapi.io/item?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search} `);
    return data;
  }
);


const initialState = {
  items: [],
  status : 'loading', // loading | success | error
};

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
      setItems(state, action) {
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
        state.status = 'loading';
        state.items = [];

      });
      builder.addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'success';

      });
      builder.addCase(fetchPizzas.rejected, (state, action) => {
        state.status = 'error';
        state.items = [];
        
      });

      
    },
});

export const selectPizzaData = (state) => state.pizza;

export const {setItems} = pizzaSlice.actions;

export default pizzaSlice.reducer;

