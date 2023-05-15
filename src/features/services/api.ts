import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import base64 from 'base-64';
import { config } from '../../config';

interface FetchProductArgs {
    tags: string[],
    offset?: number,
    limit?: number,
    sort?: string[],
    sortOrder?: string[]
};

interface CredentialArgs {
    phone: string,
    token: string
}

const createAuth = (phone: string, token: string) => `Basic ${base64.encode(`${phone}:${token}`)}`;

export const flipkartApi = createApi({
    reducerPath: 'flipkartApi',
    baseQuery: fetchBaseQuery({ baseUrl: config.baseAddress }),
    endpoints: (builder) => ({
        // ---------- mutations

        // auth
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

        // favorites
        addFavorite: builder.mutation({
            query: (arg: CredentialArgs & { productID: string }) => ({
                url: 'user/add/favorite',
                method: 'POST',
                headers: {
                    'Authorization': createAuth(arg.phone, arg.token),
                },
                body: {
                    productID: arg.productID
                }
            })
        }),
        removeFavorite: builder.mutation({
            query: (arg: CredentialArgs & { productID: string }) => ({
                url : 'user/remove/favorite',
                method: 'POST',
                headers: {
                    'Authorization': createAuth(arg.phone, arg.token)
                },
                body: {
                    productID: arg.productID
                }
            })
        }),

        // ---------- queries
        fetchProducts: builder.query({
            query: (arg: FetchProductArgs) => {
                if (!arg.limit && !arg.offset && !arg.sort) return `products?tags=${arg.tags.join('+')}`;
                else {
                    let url = `products?tags=${arg.tags.join('+')}&offset=${arg.offset || 0}&limit=${arg.limit || 10}`;
                    if (arg.sort) url += '&sort=' + arg.sort.join('+');
                    if (arg.sortOrder) url += '&sortOrder=' + arg.sortOrder.join('+');

                    return url;
                }
            }
        }),
        fetchFavorite: builder.query({
            query: (arg: CredentialArgs) => ({
                url: 'user/favorites',
                method: 'GET',
                headers: {
                    'Authorization': createAuth(arg.phone, arg.token)
                }
            }),
        }),
    })
});

export const { 
    useLoginMutation, useSignupMutation, useLogoutMutation, 
    useAddFavoriteMutation, useRemoveFavoriteMutation,
    
    useFetchProductsQuery, useFetchFavoriteQuery
} = flipkartApi;