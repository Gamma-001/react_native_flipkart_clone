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
            query: (arg: CredentialArgs & { productID: string }) => addProduct('favorites', arg)
        }),
        removeFavorite: builder.mutation({
            query: (arg: CredentialArgs & { productID: string }) => removeProduct('favorites', arg)
        }),
        // cart
        addToCart: builder.mutation({
            query: (arg: CredentialArgs & { productID: string }) => addProduct('cart', arg)
        }),
        removeFromCart: builder.mutation({
            query: (arg: CredentialArgs & { productID: string }) => removeProduct('cart', arg)
        }),

        // ---------- queries
        fetchProduct: builder.query({
            query: (arg: { id: string }) => `products/${ arg.id }`
        }),
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
            query: (arg: CredentialArgs) => fetchUserData('favorites', arg)
        }),
        fetchCart: builder.query({
            query: (arg: CredentialArgs) => fetchUserData('cart', arg)
        }),
        fetchOrders: builder.query({
            query: (arg: CredentialArgs) => fetchUserData('orders', arg)
        }),
    })
});

export const { 
    useLoginMutation, useSignupMutation, useLogoutMutation, 
    useAddFavoriteMutation, useRemoveFavoriteMutation,
    useAddToCartMutation, useRemoveFromCartMutation,

    useFetchProductQuery, useFetchProductsQuery, 
    useFetchFavoriteQuery, useFetchCartQuery, useFetchOrdersQuery
} = flipkartApi;

type UserDataField = 'favorites' | 'cart' | 'orders';

// helper functions 

// ---------- user data

const fetchUserData = (field: UserDataField, arg: CredentialArgs) => ({
    url: `user/${field}`,
    method: 'GET',
    headers: {
        'Authorization': createAuth(arg.phone, arg.token)
    }
});

const addProduct = (field: UserDataField, arg: CredentialArgs & { productID: string }) => ({
    url: `user/add/${field}`,
    method: 'POST',
    headers: {
        'Authorization': createAuth(arg.phone, arg.token),
    },
    body: {
        productID: arg.productID
    }
});

const removeProduct = (field: UserDataField, arg: CredentialArgs & { productID: string }) => ({
    url: `user/remove/${field}`,
    method: 'POST',
    headers: {
        'Authorization': createAuth(arg.phone, arg.token),
    },
    body: {
        productID: arg.productID
    }
});