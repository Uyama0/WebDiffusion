from pydantic import BaseModel
from typing import List, Any

class ControlNetArgs(BaseModel):
    input_image: Any
    enabled: bool
    pixel_perfect: bool
    lowvram: bool
    module: str
    model: str
    control_mode: str
    weight: float
    guidance_start: int
    guidance_end: int

class ControlNet(BaseModel):
    args: List[ControlNetArgs]

class AlwaysOnScripts(BaseModel):
    controlnet: ControlNet

class PromptSchema(BaseModel):
    prompt: str
    steps: int
    cfg_scale: int
    width: int
    height: int
    batch_size: int
    batch_count: int
    negative_prompt: str
    auto: bool
    sampler_index: str
    alwayson_scripts: AlwaysOnScripts