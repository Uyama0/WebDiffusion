from pathlib import Path 
import schemas as _schemas

import torch 
from diffusers import StableDiffusionPipeline
from PIL.Image import Image
import os
from dotenv import load_dotenv

from io import BytesIO
import base64 

load_dotenv()

HF_TOKEN = os.getenv('HF_TOKEN')

device = "cuda"

pipe = StableDiffusionPipeline.from_pretrained(
    "CompVis/stable-diffusion-v1-4", 
    revision="fp16", 
    torch_dtype=torch.float16,
    use_auth_token=HF_TOKEN
    )

pipe.to(device)


async def generate_image(imgPrompt: _schemas.ImageCreate) -> Image: 
    image: Image = pipe(imgPrompt.prompt,
                        guidance_scale=imgPrompt.guidance_scale, 
                        num_inference_steps=imgPrompt.num_inference_steps, 
                    ).images[0]

    image.save("testimage.png")
    buffer = BytesIO()
    image.save(buffer, format="PNG")
    imgstr = base64.b64encode(buffer.getvalue())

    return image