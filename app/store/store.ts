import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { productApi } from './product/product.api';
import { cartReducer } from "./cart/cart.slice";

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);

export type TypeRootState = ReturnType<typeof store.getState>;