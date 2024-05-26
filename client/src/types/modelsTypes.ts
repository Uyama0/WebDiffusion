export interface TControlNetArgs {
  input_image: string;
  enabled: boolean;
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
  image: string;
  auto: boolean;
  sampler_index: string;
  alwayson_scripts: AlwaysOnScripts;
}
