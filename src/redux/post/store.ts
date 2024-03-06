import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slice";

// імпортуємо конфігур стор

export const store = configureStore({
    reducer: {
        posts: postsReducer
    }
})