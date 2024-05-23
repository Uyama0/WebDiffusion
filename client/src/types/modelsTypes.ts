export interface BaseModelTypes {
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
}
