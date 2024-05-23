import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { BaseModelTypes } from "../../types/modelsTypes";

type UpdateFieldPayload<T> = {
  field: keyof T;
  value: T[keyof T];
};

const initialState: BaseModelTypes = {
  prompt: "",
  negative_prompt: "",
  steps: 20,
  batch_size: 1,
  batch_count: 1,
  cfg_scale: 12,
  width: 512,
  height: 512,
  image: "",
  auto: false,
  sampler_index: "",
};

export const scratchToImageSlice = createSlice({
  name: "scratchToImage",
  initialState,
  reducers: {
    setFieldValue: <T extends BaseModelTypes>(
      state: T,
      action: PayloadAction<UpdateFieldPayload<T>>
    ) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export const { setFieldValue } = scratchToImageSlice.actions;

export default scratchToImageSlice.reducer;
