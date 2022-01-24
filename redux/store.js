import { ConfigureEnhancersCallback, configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";

export default configureStore({
    reducer: {
        cart: cartReducer,
    }
})