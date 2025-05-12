import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = []

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
            const itemIdToRemove = action.payload.id
            return state.filter(item=>item.id!==itemIdToRemove)
        }
    }
})


export const {add,remove} = cartSlice.actions
export default cartSlice.reducer