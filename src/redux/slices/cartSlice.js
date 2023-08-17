import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name:'cart',
    initialState :{
        CardItems:localStorage.getItem("cardItems") ?
        JSON.parse(localStorage.getItem("cardItems")) :[]
    },
    reducers:{
        addItem(state ,action){
            const newItem = action.payload ;

            const isItemExistCart = state.CardItems.find((i)=> i.id === newItem.id);
            if (isItemExistCart){
                state.CardItems = state.CardItems.map( i=> i.id === newItem.id ? newItem : i );
            } else{
                state.CardItems = [...state.CardItems ,newItem];
            }
        },
        removeItem(state,action){
            state.CardItems = state.CardItems.filter(i => i.id !== action.payload);
        }
    }
})
const cartAction = cartSlice.actions;
const cartReducer =cartSlice.reducer;
export {cartAction ,cartReducer}