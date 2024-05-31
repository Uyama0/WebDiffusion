export interface TControlNetArgs {
  input_image: string;
  enabled: boolean;
  pixel_perfect: boolean;
  lowvram: boolean;
  module: string;
  model: string;
  control_mode: string;
  weight: number;
  guidance_start: number;
  guidance_end: number;
}

interface ControlNet {
  args: TControlNetArgs[];
}

interface AlwaysOnScripts {
  controlnet: ControlNet;
}

export interface TPromptSchema {
  prompt: string;
  negative_prompt: string;
  steps: number;
  batch_size: number;
  batch_count: number;
  cfg_scale: number;
  width: number;
  height: number;
  auto: boolean;
  sampler_name: string;
  alwayson_scripts: AlwaysOnScripts;
}
