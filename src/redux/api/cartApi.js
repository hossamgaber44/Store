import { toast } from "react-toastify";
import { cartAction } from "../slices/cartSlice";

export function addCart(newItem){
    return (dispatch , getState) =>{
        dispatch(cartAction.addItem(newItem));
        toast("The product has been added");
        
        const {cart} = getState();
        localStorage.setItem("cardItems" , JSON.stringify(cart.CardItems))
    }
}


export function removeCart(id){
    return (dispatch , getState) =>{
        dispatch(cartAction.removeItem(id));

        const {cart} = getState();
        localStorage.setItem("cardItems" , JSON.stringify(cart.CardItems))
    }
}