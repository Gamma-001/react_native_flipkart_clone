import { createSlice } from '@reduxjs/toolkit';

const initialState: credentialsState = {
    username: '',
    sessionID: '',
    timeStamp: -1
};

const credentialsSlice = createSlice({
    name: 'credentials',
    initialState,
    reducers: {
        set(state, { payload }) {
            if (payload.username != undefined) state.username = payload.username;
            if (payload.sessionID != undefined) state.sessionID = payload.sessionID;
            if (payload.timeStamp != undefined) state.timeStamp = payload.timeStamp;
        },
        reset(state) {
            state.username = ''; state.sessionID = ''; state.timeStamp = -1;
        }
    }
});
const credentialsReducer = credentialsSlice.reducer;

export default credentialsReducer;
export const { set: setCredentials, reset: resetCredentials } = credentialsSlice.actions;

export type credentialsState = Readonly<{
    username: string,
    sessionID: string,
    timeStamp: number
}>;