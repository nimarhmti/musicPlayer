import { configureStore } from "@reduxjs/toolkit";
import { musicsApi } from "@/services/music/musicApiSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [musicsApi.reducerPath]: musicsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(musicsApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
