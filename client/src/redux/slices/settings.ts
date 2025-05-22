import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TPromptSchema } from '@/types/modelsTypes';
import { TControlNetArgs } from '@/types/modelsTypes';

const initialState: TPromptSchema = {
    prompt: '',
    negative_prompt: '',
    steps: 20,
    batch_size: 1,
    batch_count: 1,
    cfg_scale: 7,
    width: 512,
    height: 512,
    auto: false,
    sampler_name: '',
    override_settings: {
        sd_model_checkpoint: 'dragonfruitUnisex_dragonfruitgtV10.safetensors [effb60efdb]',
    },
    alwayson_scripts: {
        controlnet: {
            args: [
                {
                    input_image: '',
                    enabled: true,
                    pixel_perfect: false,
                    lowvram: false,
                    module: 'canny',
                    model: 'control_v11p_sd15_canny [d14c016b]',
                    control_mode: 'ControlNet is more important',
                    weight: 1,
                    guidance_start: 0,
                    guidance_end: 1,
                },
            ],
        },
    },
};

export const slice = createSlice({
    name: 'scratchToImage',
    initialState,
    reducers: {
        setSettings: <T extends keyof TPromptSchema>(
            state: TPromptSchema,
            action: PayloadAction<{ key: T; value: TPromptSchema[T] }>
        ) => {
            const { key, value } = action.payload;
            state[key] = value;
        },
        setControlnetArgs: <T extends keyof TControlNetArgs>(
            state: TPromptSchema,
            action: PayloadAction<{ key: T; value: TControlNetArgs[T] }>
        ) => {
            const { key, value } = action.payload;
            state.alwayson_scripts.controlnet.args[0][key] = value;
        },
    },
});

export const {
    name,
    actions: { setSettings, setControlnetArgs },
    reducer,
} = slice;
