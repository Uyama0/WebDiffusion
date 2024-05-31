from fastapi import HTTPException
 
import schemas as _schemas

import requests
import io
import base64
from PIL import Image

url = "http://127.0.0.1:7860"

def decode_base64_to_image(encoding):
    if encoding.startswith("data:image/"):
        encoding = encoding.split(";")[1].split(".")[1]
    image = Image.open(io.BytesIO(base64.b64decode(encoding)))
    return image

def encode_pil_to_base64(image):
    with io.BytesIO() as output_bytes:
        image.save(output_bytes, format="PNG")
        bytes_data = output_bytes.getvalue()
    return base64.b64encode(bytes_data).decode("utf-8")
    

async def generateImage(ImagePrompt: _schemas.PromptSchema) -> Image: 
    try:
        response = requests.post(url=f'{url}/sdapi/v1/txt2img', json=ImagePrompt.dict())
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail=str(e))

    image: Image = Image.open(io.BytesIO(base64.b64decode(response.json()['images'][0])))

    return image

async def imageFromScatch(ScratchPrompt: _schemas.PromptSchema) -> Image:
    payload = ScratchPrompt.model_dump()

    del payload["auto"]

    print(payload)

    try:
        response = requests.post(url=f'{url}/sdapi/v1/txt2img', json=payload)
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail=str(e))

    image: Image = Image.open(io.BytesIO(base64.b64decode(response.json()['images'][0])))

    return image
