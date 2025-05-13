import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartslice";
const Store=configureStore({
    reducer:{
        mycart:cartReducer
    }
})
        
export default Store;