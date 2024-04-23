from fastapi import UploadFile

import pydantic as _pydantic
from typing import Optional, List, Dict, Union

class _PromptBase(_pydantic.BaseModel):
    steps: int = 5

class ImageCreate(_PromptBase):
    prompt: str

class ScriptArg(_pydantic.BaseModel):
    input_image: bytes
    enabled: bool 
    module: str
    model: str
    control_mode: str
    weight: float

class AlwaysOnArgs(_pydantic.BaseModel):
    args: List[ScriptArg]   

class ScratchCreate(_PromptBase):
    prompt: str
    width: Optional[int] = None
    height: Optional[int] = None
    # alwayson_scripts: Dict[str, AlwaysOnArgs] = {}