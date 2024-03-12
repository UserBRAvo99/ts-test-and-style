import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./post/slice";

// імпортуємо конфігур стор

export const store = configureStore({
    reducer: {
        posts: postsReducer
    }
})

// redux toolkit - забераємо з документації , для показу данних в редаксі(для покращення комунікації)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch