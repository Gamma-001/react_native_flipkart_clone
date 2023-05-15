import { configureStore } from '@reduxjs/toolkit';

import credentialsReducer from './features/credentials/credentialsSlice';
import itemListReducer from './features/itemList/itemListSlice';
import userDataReducer from './features/userData/userDataSlice';
import { flipkartApi } from './features/services/api';

const store = configureStore({
    reducer: {
        credentials: credentialsReducer,
        items: itemListReducer,
        userData: userDataReducer,
        [flipkartApi.reducerPath]: flipkartApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(flipkartApi.middleware)
});

export default store;

export type RootState = ReturnType <typeof store.getState>;
export type AppDispatch = typeof store.dispatch;