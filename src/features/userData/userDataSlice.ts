import { createSlice } from '@reduxjs/toolkit';

const initialState: UserDataState = {
    favorites: [],
    cart: [],
    initialized: false
}

const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        reset() {
            return {
                favorites: [],
                cart: [],
                initialized: false
            }
        }, 
        setInitialized(state) { state.initialized = true },
        resetInitialized(state) { state.initialized = false },

        setFavorites(state, { payload }: { payload: string[] }) { 
            state.favorites = payload 
        },
        resetFavorites(state) { state.favorites = []; },
        setCart(state, { payload }: { payload: string[] }) { 
            state.cart = payload 
        },
        resetCart(state) { state.favorites = []; },

        // add one or multiple items to favorite
        addFavorite(state, { payload }: { payload: string | string[] }) {
            if (Array.isArray(payload)) {
                state.favorites.push(...payload);
            }
            else state.favorites.push(payload);
        },
        // remove an item from favorite
        removeFavorite(state, { payload }: { payload: string }) {
            let index = state.favorites.indexOf(payload);
            if (index == -1) return;
            
            state.favorites.splice(index, 1);
        },

        addCart(state, { payload } : { payload: string | string[] }) {
            if (Array.isArray(payload)) {
                state.cart.push(...payload);
            }
            else state.cart.push(payload);
        },
        removeCart(state, { payload }: { payload: string }) {
            let index = state.cart.indexOf(payload);
            if (index == -1) return;
            
            state.cart.splice(index, 1);
        }
    }
});
const userDataReducer = userDataSlice.reducer;

export default userDataReducer;
export const { 
    reset: resetUserData,
    setInitialized, resetInitialized, 
    setFavorites, resetFavorites, addFavorite, removeFavorite, 
    setCart, resetCart, addCart, removeCart
} = userDataSlice.actions;

type UserDataState = {
    favorites: string[],
    cart: string[],
    initialized: boolean // whether the data has been successfully set since load or not
};