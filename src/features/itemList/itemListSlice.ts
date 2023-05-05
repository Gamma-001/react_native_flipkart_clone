/**
 * itemList represent the list of all browsable items matching search query
 * supports operations of double ended queue
 */

import { createSlice } from '@reduxjs/toolkit';

const initialState: ItemListState = {
    loadingBack: false,
    loadingFront: false,
    items: []
};

// item list should behave like a double ended queue
const itemListSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        push(state, { payload }) {
            if (Array.isArray(payload)) {
                for (let item of payload) state.items.push(item);
            }
            else state.items.push(payload);
        },
        pop(state, { payload }) {
            while (payload-- > 0 && state.items.length) {
                state.items.pop();
            }
        },
        unshift(state, { payload }) {
            if (Array.isArray(payload)) {
                for (let item of payload) state.items.unshift(item);
            }
            else state.items.unshift(payload);
        },
        shift(state, { payload }) {
            while(payload-- > 0 && state.items.length) {
                state.items.shift();
            }
        }
    }
});
const itemListReducer = itemListSlice.reducer;

// ---------- exports

export default itemListReducer;
export const { push: pushItems, pop: popItems, unshift: unshiftItems, shift: shiftItems } = itemListSlice.actions;

export type ItemListState = {
    loadingBack: boolean,
    loadingFront: boolean,
    items: Array <ItemState>
};
export type ItemState = {
    id: number,
    name: string, 
    desc: string,
    price: number,
    rating: number,
    tags: Array <string>,
};