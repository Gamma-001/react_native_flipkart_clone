import { configureStore } from "@reduxjs/toolkit";

import credentialsReducer from "./features/credentials/credentialsSlice";
import itemListReducer from "./features/itemList/itemListSlice";

const store = configureStore({
    reducer: {
        credentials: credentialsReducer,
        items: itemListReducer
    }
});

export default store;

export type RootState = ReturnType <typeof store.getState>;
export type AppDispatch = typeof store.dispatch;