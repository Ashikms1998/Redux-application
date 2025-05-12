//Api calls to an asynchronous operation

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StatusCode from "../utils/StatusCode";

/**
 * we are giving the below initial state NOT as an empty array but an object that
 * is because the API call will return not just the data but the errors too so to handle
 * that we are just using the {}
 */

const initialState = {
  data: [],
  status:StatusCode.IDLE
};

const productSlice = createSlice({
  name: "products",
  initialState,
  /**
   * also below we wont directly call the API calls in it because slice dont knwo how
   * to handle asynchronous operation so we will write a seperate function and their we call the
   * function to dispatch the result
   */
  reducers: {
    // fetchProducts(state,action){
    //     state.data = action.payload
    // }
  },

  /**
     *to handle asynchronous operation in a better manner redux offers extraReducers and
     *createAsyncThunk,so extrareducers is basically handling the 3 cases of promises we can
     define that what to show when error throws ,what to show when loading and what to show when
     loaded successfully
     */
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = StatusCode.IDLE;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
  },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

//extraReducers

export const getProducts = createAsyncThunk("products/get", async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const result = await data.json();
  return result;
});

//extraReducers

// export function getProducts() {
//   return async function getProductsThunk(dispatch, getState) {
//     const data = await fetch("https://fakestoreapi.com/products");
//     const result = await data.json();
//     dispatch(fetchProducts(result));
//   };
// }
