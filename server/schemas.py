import pydantic as _pydantic

class _PromptBase(_pydantic.BaseModel):
    steps: int = 5

class ImageCreate(_PromptBase):
    prompt: str