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

@app.post("/default")
async def root(SettingsCreate: _schemas.PromptSchema):
    image = await _services.generateImage(PromptSchema = SettingsCreate)

    memory_stream = io.BytesIO()

    image.save(memory_stream, format="PNG")
    
    memory_stream.seek(0)
    return StreamingResponse(memory_stream, media_type="image/png")

@app.post("/default/controlnet")
async def generate_image(SettingsCreate: _schemas.PromptSchema):
    image = await _services.imageFromScatch(PromptSchema = SettingsCreate)

    memory_stream = io.BytesIO()

    image.save(memory_stream, format="PNG")
    
    memory_stream.seek(0)
    return StreamingResponse(memory_stream, media_type="image/png")

@app.post("/auto/controlnet")
async def generate_image(SettingsCreate: _schemas.PromptSchema):
    image = await _services.autoControlnetImageGen(PromptSchema = SettingsCreate)

    memory_stream = io.BytesIO()

    image.save(memory_stream, format="PNG")
    
    memory_stream.seek(0)
    return StreamingResponse(memory_stream, media_type="image/png")
