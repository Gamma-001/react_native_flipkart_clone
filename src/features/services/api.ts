import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const flipkartApi = createApi({
    reducerPath: 'flipkartApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://192.180.0.211:3001/' }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (arg: { phone?: string, email?: string }) => ({
                url: 'auth/login',
                method: 'POST',
                body: arg.phone ? { phone: arg.phone } : { email: arg.email }
            })
        }),
        signup: builder.mutation({
            query: (arg: { phone?: string, email?: string }) => ({
                url: 'auth/signup',
                method: 'POST',
                body: arg.phone ? { phone: arg.phone } : { email: arg.email }
            })
        }),
        logout: builder.mutation({
            query: (arg: { sessionID: string }) => ({
                url: 'auth/logout',
                method: 'POST',
                body: { sessionID: arg.sessionID }
            })
        })
    })
});

export const { useLoginMutation, useSignupMutation, useLogoutMutation } = flipkartApi;