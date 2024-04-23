from fastapi import FastAPI, UploadFile, File
import fastapi as _fapi
from fastapi.responses import StreamingResponse

import schemas as _schemas
import services as _services

import io

app = FastAPI()

@app.get("/textToImg")
async def root(ImagePromptCreate: _schemas.ImageCreate = _fapi.Depends()):
    image = await _services.generateImage(ImagePrompt = ImagePromptCreate)

    memory_stream = io.BytesIO()

    image.save(memory_stream, format="PNG")
    image.save("received_image.png")
    
    memory_stream.seek(0)
    return StreamingResponse(memory_stream, media_type="image/png")

@app.post("/scratchToImg")
async def root(scratchPromptCreate: _schemas.ScratchCreate = _fapi.Depends(), file: UploadFile = File(...)):
    content = await file.read()

    image = await _services.imageFromScatch(ScratchPrompt = scratchPromptCreate, content=content)

    memory_stream = io.BytesIO()

    image.save(memory_stream, format="PNG")
    image.save("received_image.png")
    
    memory_stream.seek(0)
    return StreamingResponse(memory_stream, media_type="image/png")