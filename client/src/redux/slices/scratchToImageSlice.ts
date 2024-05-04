import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { BaseModelTypes } from "../../types/modelsTypes";

type UpdateFieldPayload<T> = {
  field: keyof T;
  value: T[keyof T];
};

const initialState: BaseModelTypes = {
  prompt: "fire",
  negative_prompt: "ugly",
  steps: 5,
  batch_size: 1,
  cfg_scale: 5,
  width: 520,
  height: 520,
  image: "",
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
