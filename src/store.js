import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/AuthReducer";
import UserReducer from "./reducers/UserReducer";

export default configureStore({
    reducer: {
        auth: AuthReducer,
        user: UserReducer
    }
});