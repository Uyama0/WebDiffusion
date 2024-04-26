import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { BaseModelTypes } from "../../types/modelsTypes";

const initialState: BaseModelTypes = {
  prompt: "",
  negative_prompt: "",
  steps: 5,
  batch_size: 1,
  cfg_scale: 5,
  width: 520,
  height: 520,
};

export const scratchToImageSlice = createSlice({
  name: "scratchToImage",
  initialState,
  reducers: {
    changeField: (state, action) => {
      return;
    },
  },
});

export const { changeField } = scratchToImageSlice.actions;

export default scratchToImageSlice.reducer;
