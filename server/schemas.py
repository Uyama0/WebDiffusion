import pydantic as _pydantic
from typing import List, Dict

class _PromptBase(_pydantic.BaseModel):
    prompt: str
    negative_prompt: str
    steps: int
    batch_size: int
    batch_count: int
    cfg_scale: int
    width: int
    height: int
    auto: bool
    sampler_index: str


class ScratchBase(_PromptBase):
    image: str