import { createSlice } from "@reduxjs/toolkit";

const productslice = createSlice({
    name : 'product',
    initialState :{
        products :[],
        product :null
    },
    reducers:{
        setProducts( state ,action){
            state.products=action.payload;
        },
        setProduct(state , action){
            state.product=action.payload;
        }
    }
})
const productAction = productslice.actions;
const productReducers =  productslice.reducer;
export {productAction , productReducers};