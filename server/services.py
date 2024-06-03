from fastapi import HTTPException
 
import schemas as _schemas

import requests
import io
import base64
from PIL import Image

def post_request(endpoint: str, payload: dict) -> requests.Response:
    try:
        response = requests.post(url=f'http://127.0.0.1:7860{endpoint}', json=payload).json()
        response.raise_for_status()
        return response
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail=str(e))
    
async def generateImage(PromptSchema: _schemas.PromptSchema) -> Image: 
    payload = PromptSchema.model_dump()

    del payload["auto"]

    override_settings = {
    "sd_model_checkpoint": "dragonfruitUnisex_dragonfruitgtV10.safetensors [effb60efdb]",
    }

    payload["override_settings"] = override_settings

    response = post_request("/sdapi/v1/txt2img", payload)

    image: Image = Image.open(io.BytesIO(base64.b64decode(response['images'][0])))

    return image

async def imageFromScatch(PromptSchema: _schemas.PromptSchema) -> Image:
    payload = PromptSchema.model_dump()

    del payload["auto"]

    override_settings = {
    "sd_model_checkpoint": "dragonfruitUnisex_dragonfruitgtV10.safetensors [effb60efdb]",
    }

    payload["override_settings"] = override_settings

    response = post_request("/sdapi/v1/txt2img", payload)

    image: Image = Image.open(io.BytesIO(base64.b64decode(response['images'][0])))

    return image

async def autoControlnetImageGen(PromptSchema: _schemas.PromptSchema) -> Image:
    payload = PromptSchema.model_dump()

    input_image = payload["alwayson_scripts"]["controlnet"]["args"][0]["input_image"]

    del payload["auto"]

    override_settings = {
    "sd_model_checkpoint": "dragonfruitUnisex_dragonfruitgtV10.safetensors [effb60efdb]",
    }

    payload["override_settings"] = override_settings

    auto_prompt_payload = {
        "image": input_image,
        "clip_model_name": "ViT-L-14/openai",
        "mode": "best"
    }

    auto_negative_prompt_payload = {
        "image": input_image,
        "clip_model_name": "ViT-L-14/openai",
        "mode": "negative"
    }

    prompt = post_request("/interrogator/prompt", auto_prompt_payload)
    # negative_prompt = post_request("/interrogator/prompt", auto_negative_prompt_payload)

    payload["prompt"] = prompt["prompt"]
    # payload["negative_prompt"] = negative_prompt.json()["prompt"]

    response = post_request("/sdapi/v1/txt2img", payload)

    image: Image = Image.open(io.BytesIO(base64.b64decode(response['images'][0])))

    return image
