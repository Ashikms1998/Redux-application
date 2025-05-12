//Api calls to an asynchronous operation

import { createSlice } from "@reduxjs/toolkit";

/**
 * we are giving the below initial state NOT as an empty array but an object that
 * is because the API call will return not just the data but the errors too so to handle
 * that we are just using the {}
 */

const initialState = {
    data:[]
};

const productSlice = createSlice({
    name:'products',
    initialState,
    /**
     * also below we wont directly call the API calls in it because slice dont knwo how
     * to handle asynchronous operation so we will write a seperate function and their we call the
     * function to dispatch the result
     */
    reducers:{
        fetchProducts(state,action){
            state.data = action.payload
        }
    }
})

export const {fetchProducts} = productSlice.actions
export default productSlice.reducer;


export function getProducts(){
    return async function getProductsThunk(dispatch,getState){
       const data  = await fetch("https://fakestoreapi.com/products")
      const result = await data.json()
      dispatch(fetchProducts(result))
    }
}