import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/AuthReducer";
import UserReducer from "./reducers/UserReducer";
import ProductReducer from "./reducers/ProductReducer";

export default configureStore({
    reducer: {
        auth: AuthReducer,
        user: UserReducer,
        product: ProductReducer
    }
});