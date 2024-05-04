import { createSlice } from "@reduxjs/toolkit";

interface BaseModelTypes {
  images: string[];
}

const initialState: BaseModelTypes = {
  images: [],
};
export const imageKeeperSlice = createSlice({
  name: "scratchToImage",
  initialState,
  reducers: {
    setKeepImage: (state, action) => {
      return {
        ...state,
        images: [...state.images, action.payload],
      };
    },
  },
});

export const { setKeepImage } = imageKeeperSlice.actions;

export default imageKeeperSlice.reducer;
