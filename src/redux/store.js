"use client";
import { configureStore } from "@reduxjs/toolkit";
import { cartService } from "@/redux/cartService";
import { userService } from "@/redux/userService";
import { wishlistService } from "@/redux/wishlistService";
import { compareService } from "@/redux/compareService";  // ← add this
import api from "@/redux/api";
import languageReducer from "@/redux/languageSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [cartService.reducerPath]: cartService.reducer,
    [userService.reducerPath]: userService.reducer,
    [wishlistService.reducerPath]: wishlistService.reducer,
    language: languageReducer, // Add language reducer
    [compareService.reducerPath]: compareService.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api.middleware)
      .concat(cartService.middleware)
      .concat(userService.middleware)
      .concat(wishlistService.middleware)
      .concat(compareService.middleware),  // ← add this
      
});

export default store;
