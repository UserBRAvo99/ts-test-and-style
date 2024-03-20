import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./post/slice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// імпортуємо конфігур стор

const persistConfig = {
  key: "post",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, postsReducer);

export const store = configureStore({
  reducer: {
    posts: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

// redux toolkit - забераємо з документації , для показу данних в редаксі(для покращення комунікації)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
