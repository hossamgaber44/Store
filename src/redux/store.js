import { configureStore } from "@reduxjs/toolkit";
import { productReducers } from "./slices/productslice";
import { cartReducer } from "./slices/cartSlice";

const store = configureStore({
    reducer : {
        product : productReducers ,
        cart : cartReducer
    }
});
export default store