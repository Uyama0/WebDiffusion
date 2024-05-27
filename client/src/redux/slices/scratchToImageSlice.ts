import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { TPromptSchema } from "@/types/modelsTypes";
import { TControlNetArgs } from "@/types/modelsTypes";

type UpdateFieldPayload<T> = {
  field: keyof T;
  value: T[keyof T];
};

const initialState: TPromptSchema = {
  prompt: "",
  negative_prompt: "",
  steps: 20,
  batch_size: 1,
  batch_count: 1,
  cfg_scale: 7,
  width: 512,
  height: 512,
  image: "",
  auto: false,
  sampler_index: "",
  alwayson_scripts: {
    controlnet: {
      args: [
        {
          input_image: "controlnet_image_data",
          enabled: true,
          pixel_perfect: false,
          lowvram: false,
          module: "canny",
          model: "control_v11p_sd15_canny [d14c016b]",
          control_mode: "ControlNet is more important",
          weight: 1,
          guidance_start: 0,
          guidance_end: 1,
        },
      ],
    },
  },
};

export const scratchToImageSlice = createSlice({
  name: "scratchToImage",
  initialState,
  reducers: {
    setFieldValue: <T extends keyof TPromptSchema>(
      state: TPromptSchema,
      action: PayloadAction<{ field: T; value: TPromptSchema[T] }>
    ) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    setNestedFieldValue: <T extends keyof TControlNetArgs>(
      state: TPromptSchema,
      action: PayloadAction<{ field: T; value: TControlNetArgs[T] }>
    ) => {
      const { field, value } = action.payload;
      state.alwayson_scripts.controlnet.args[0][field] = value;
    },
  },
});

export const { setFieldValue, setNestedFieldValue } =
  scratchToImageSlice.actions;

export default scratchToImageSlice.reducer;
