from fastapi import FastAPI, UploadFile, File
import fastapi as _fapi
from fastapi.responses import StreamingResponse
from starlette.middleware.cors import CORSMiddleware

import schemas as _schemas
import services as _services

import io

from pydantic import BaseModel
from typing import Dict

app = FastAPI()

@app.get("/")
def read_root():
    print("heelo")
    return {"message": "Welcome to Stable Diffussers API"}

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],  
    allow_headers=["*"],
)

@app.post("/textToImg")
async def root(ImagePromptCreate: _schemas._PromptBase):
    image = await _services.generateImage(ImagePrompt = ImagePromptCreate)

    memory_stream = io.BytesIO()

    image.save(memory_stream, format="PNG")
    image.save("received_image.png")
    
    memory_stream.seek(0)
    return StreamingResponse(memory_stream, media_type="image/png")

@app.post("/scratchToImg")
async def generate_image(scratchPromptCreate: _schemas.ScratchBase):
    image = await _services.imageFromScatch(ScratchPrompt = scratchPromptCreate)

    memory_stream = io.BytesIO()

    image.save(memory_stream, format="PNG")
    image.save("received_image.png")
    
    memory_stream.seek(0)
    return StreamingResponse(memory_stream, media_type="image/png")