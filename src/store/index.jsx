import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { usersApi } from "./apis/gitApi";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddelware) => {
    return getDefaultMiddelware().concat(usersApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useFetchUserQuery } from "./apis/gitApi";
