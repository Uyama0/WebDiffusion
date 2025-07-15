from typing import Final
from fastapi.responses import StreamingResponse
from fastapi import HTTPException, Depends
import fastapi

from src.schemas.stable_diffusion import SettingsSchema
from src.core.errors import BaseApiError
from src.services.stable_diffusion_service import (generate_image as _generate_image, generate_image_auto as _generate_image_auto)
from src.core.client import ApiClient, sd_client

STABLE_DIFFUSION_ROUTER: Final = fastapi.APIRouter(prefix="/sdapi")

@STABLE_DIFFUSION_ROUTER.get("/host")
async def host():
    return 1

@STABLE_DIFFUSION_ROUTER.post("/generate_image")
async def generate_image(settings: SettingsSchema, client: ApiClient = Depends(sd_client)) -> StreamingResponse:
    try:
        return await _generate_image(settings.model_dump(), client)
    except BaseApiError as e:
        raise HTTPException(status_code=e.status_code, detail=e.message)

@STABLE_DIFFUSION_ROUTER.get("/generate_image_auto")
async def generate_image_auto(settings: SettingsSchema, client: ApiClient = Depends(sd_client)):
    try:
        return await _generate_image_auto(settings.model_dump(), client)
    except BaseApiError as e:
        raise HTTPException(status_code=e.status_code, detail=e.message)