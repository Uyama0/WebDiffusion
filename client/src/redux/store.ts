import { configureStore } from "@reduxjs/toolkit";

import scratchToImageSlice from "./slices/scratchToImageSlice";

const store = configureStore({
  reducer: {
    settings: scratchToImageSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
