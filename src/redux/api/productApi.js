import { productAction } from "../slices/productslice";

  export function fetchProducts() {
    return async (dispatch) => {
        try {
            const response = await fetch(" http://localhost:5000/products");
            const data = await response.json();
            dispatch(productAction.setProducts(data));
          } catch (error) {
            console.log(error)
          }
    }
 }


 export function fetchProductsById(productId) {
    return async (dispatch) => {
        try {
            const response = await fetch(`http://localhost:5000/products/${productId}`);
            const data = await response.json();
            dispatch(productAction.setProduct(data));
          } catch (error) {
            console.log(error)
          }
    }
 }