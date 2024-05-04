import { configureStore } from "@reduxjs/toolkit";

import scratchToImageSlice from "./slices/scratchToImageSlice";
import imageKeeperSlice from "./slices/imageKeeperSlice";

const store = configureStore({
  reducer: {
    settings: scratchToImageSlice,
    images: imageKeeperSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
