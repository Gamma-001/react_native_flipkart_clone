import { createSlice } from '@reduxjs/toolkit';

const initialState: credentialsState = {
    sessionID: '',
};

const credentialsSlice = createSlice({
    name: 'credentials',
    initialState,
    reducers: {
        set(state, { payload }) {
            if (payload.phone != undefined) state.phone = payload.phone;
            if (payload.email != undefined) state.email = payload.email;
            if (payload.sessionID != undefined) state.sessionID = payload.sessionID;
        },
        reset(state) {
            state.phone = ''; state.email = ''; state.sessionID = '';
        }
    }
});
const credentialsReducer = credentialsSlice.reducer;

export default credentialsReducer;
export const { set: setCredentials, reset: resetCredentials } = credentialsSlice.actions;

export type credentialsState = Readonly<{
    phone?: string,
    email?: string,
    sessionID: string
}>;