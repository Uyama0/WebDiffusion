from fastapi import FastAPI
import fastapi as _fapi
from fastapi.responses import StreamingResponse

import schemas as _schemas
from services import generateImage as _generateImage

import io

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to Stable Diffussers API"}

@app.get("/textToImg")
async def root(ImagePromptCreate: _schemas.ImageCreate = _fapi.Depends()):
    image = await _generateImage.generate_image(ImagePrompt = ImagePromptCreate)

    memory_stream = io.BytesIO()

    image.save(memory_stream, format="PNG")
    image.save("received_image.png")
    
    memory_stream.seek(0)
    return StreamingResponse(memory_stream, media_type="image/png")
