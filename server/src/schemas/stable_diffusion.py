from pydantic import BaseModel
from typing import List, Any

class ControlNetArgsSchema(BaseModel):
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

class ControlNetSchema(BaseModel):
    args: List[ControlNetArgsSchema]

class AlwaysOnScriptsSchema(BaseModel):
    controlnet: ControlNetSchema

class OverrideSettingsSchema(BaseModel):
    sd_model_checkpoint: str

class SettingsSchema(BaseModel):
    prompt: str
    steps: int
    cfg_scale: int
    width: int
    height: int
    batch_size: int
    batch_count: int
    negative_prompt: str
    auto: bool
    sampler_name: str
    override_settings: OverrideSettingsSchema
    alwayson_scripts: AlwaysOnScriptsSchema