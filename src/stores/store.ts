import { configureStore } from "@reduxjs/toolkit";
import breakingReducer from "./breakingTitleSlice";

export const store = configureStore({
  reducer: {
    breakingTitle: breakingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
