import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '../../config';

interface fetchProductArgs {
    tags: string[],
    offset?: number,
    limit?: number,
    sort?: string[],
    sortOrder?: string[]
};

export const flipkartApi = createApi({
    reducerPath: 'flipkartApi',
    baseQuery: fetchBaseQuery({ baseUrl: config.baseAddress }),
    endpoints: (builder) => ({
        // mutations
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
        }),

        // queries
        fetchProducts: builder.query({
            query: (arg: fetchProductArgs) => {
                if (!arg.limit && !arg.offset && !arg.sort) return `products?tags=${arg.tags.join('+')}`;
                else {
                    let url = `products?tags=${arg.tags.join('+')}&offset=${arg.offset || 0}&limit=${arg.limit || 10}`;
                    if (arg.sort) url += '&sort=' + arg.sort.join('+');
                    if (arg.sortOrder) url += '&sortOrder=' + arg.sortOrder.join('+');

                    return url;
                }
            }
        })
    })
});

export const { 
    useLoginMutation, useSignupMutation, useLogoutMutation,
    useFetchProductsQuery
} = flipkartApi;