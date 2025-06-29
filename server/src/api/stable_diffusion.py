from typing import Final
from fastapi.responses import StreamingResponse
from fastapi import HTTPException
import fastapi

from src.schemas.stable_diffusion import SettingsSchema
from src.core.errors import BaseApiError
from src.services.stable_diffusion_service import generate_image as _generate_image

STABLE_DIFFUSION_ROUTER: Final = fastapi.APIRouter(prefix="/sdapi")

@STABLE_DIFFUSION_ROUTER.post("/generate_image")
async def generate_image(settings: SettingsSchema) -> StreamingResponse:
    try:
        return await _generate_image(settings.model_dump(), "/sdapi/v1/txt2img")
    except BaseApiError as e:
        raise HTTPException(status_code=e.status_code, detail=e.message)

@STABLE_DIFFUSION_ROUTER.get("/")
async def root():
    return {"message": "Hello World"}