import schemas as _schemas

import json
import requests
import io
import base64
from PIL import Image, PngImagePlugin

url = "http://127.0.0.1:7860"

async def generate_image(ImagePrompt: _schemas.ImageCreate) -> Image: 
    try:
        response = requests.post(url=f'{url}/sdapi/v1/txt2img', json=ImagePrompt.dict())
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail=str(e))

    image: Image = Image.open(io.BytesIO(base64.b64decode(response.json()['images'][0])))

    return image


