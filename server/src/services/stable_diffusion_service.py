from fastapi.responses import StreamingResponse
from fastapi import Depends
import io
import base64

from src.schemas.stable_diffusion import SettingsSchema
from src.core.client import ApiClient, sd_client

async def generate_image(payload: SettingsSchema, client: ApiClient) -> StreamingResponse:
    data = await client.request(
        method="POST",
        endpoint="/sdapi/v1/txt2img",
        json=payload
    )

    image_bytes = base64.b64decode(data['images'][0])
    return StreamingResponse(io.BytesIO(image_bytes), media_type="image/png")

async def generate_image_auto(payload: SettingsSchema, client: ApiClient) -> StreamingResponse:
    auto_prompt_payload = {
        "image": payload["alwayson_scripts"]["controlnet"]["args"][0]["input_image"],
        "clip_model_name": "ViT-L-14/openai",
        "mode": "best"
    }

    prompt = await client.request(
        method="POST",
        endpoint="/interrogator/prompt",
        json=auto_prompt_payload
    )
    payload["prompt"] = prompt["prompt"]

    data = await client.request(
        method="POST",
        endpoint="/sdapi/v1/txt2img",
        json=payload
    )

    image_bytes = base64.b64decode(data['images'][0])
    return StreamingResponse(io.BytesIO(image_bytes), media_type="image/png")