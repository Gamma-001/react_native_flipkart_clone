import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState: credentialsState = {
    phone: '',
    sessionID: '',
};

export const resetSession = createAsyncThunk('credentials/resetSession', async () => {
    return AsyncStorage.setItem('session', '');
});
export const setSession = createAsyncThunk('credentials/setSession', async(payload: {phone: string, sessionID: string}) => {
    return AsyncStorage.setItem('session', `${payload.phone}:${payload.sessionID}`);
});

const credentialsSlice = createSlice({
    name: 'credentials',
    initialState,
    reducers: {
        set(state, { payload }) {
            if (payload.phone != undefined) state.phone = payload.phone;
            if (payload.email != undefined) state.email = payload.email;
            if (payload.sessionID != undefined) {
                state.sessionID = payload.sessionID;
                AsyncStorage.setItem('session', `${payload.phone}:${payload.sessionID}`);
            }
        },
        reset(state) {
            state.phone = ''; state.email = ''; state.sessionID = ''; state.storageStatus = undefined;
            AsyncStorage.removeItem('session');
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(resetSession.pending, setPending)
        .addCase(resetSession.fulfilled, setFulfilled)
        .addCase(resetSession.rejected, setRejected)
        .addCase(setSession.pending, setPending)
        .addCase(setSession.fulfilled, setFulfilled)
        .addCase(setSession.rejected, setRejected)
    }
});

const setPending = (state: credentialsState): credentialsState => ({...state, storageStatus: 'pending'});
const setFulfilled = (state: credentialsState): credentialsState => ({...state, storageStatus: 'fulfilled'});
const setRejected = (state: credentialsState): credentialsState => ({...state, storageStatus: 'rejected'});

const credentialsReducer = credentialsSlice.reducer;

export default credentialsReducer;
export const { set: setCredentials, reset: resetCredentials } = credentialsSlice.actions;

export type credentialsState = Readonly<{
    phone: string,
    email?: string,
    sessionID: string,
    storageStatus?: 'pending' | 'fulfilled' | 'rejected'
}>;