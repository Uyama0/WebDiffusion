from fastapi import HTTPException
from fastapi.responses import StreamingResponse
import schemas as _schemas
import requests
import io
import base64
from PIL import Image

def post_request(endpoint: str, payload: dict) -> requests.Response:
    try:
        response = requests.post(url=f'https://vjrwl85c-7860.euw.devtunnels.ms{endpoint}', json=payload)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail=str(e))
    
async def generateImage(PromptSchema: _schemas.PromptSchema) -> Image: 
    payload = PromptSchema.model_dump()

    response = await post_request("/sdapi/v1/txt2img", payload)

    image: Image = Image.open(io.BytesIO(base64.b64decode(response['images'][0])))

    return image

async def imageFromScatch(PromptSchema: _schemas.PromptSchema) -> Image:
    payload = PromptSchema.model_dump()

    response = post_request("/sdapi/v1/txt2img", payload)

    image: Image = Image.open(io.BytesIO(base64.b64decode(response['images'][0])))

    return image

async def autoControlnetImageGen(PromptSchema: _schemas.PromptSchema) -> Image:
    payload = PromptSchema.model_dump()

    input_image = payload["alwayson_scripts"]["controlnet"]["args"][0]["input_image"]

    auto_prompt_payload = {
        "image": input_image,
        "clip_model_name": "ViT-L-14/openai",
        "mode": "best"
    }

    prompt = post_request("/interrogator/prompt", auto_prompt_payload)

    payload["prompt"] = prompt["prompt"]

    response = post_request("/sdapi/v1/txt2img", payload)

    image: Image = Image.open(io.BytesIO(base64.b64decode(response['images'][0])))

    return image
