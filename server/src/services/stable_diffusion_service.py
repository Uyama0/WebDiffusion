import requests
from fastapi.responses import StreamingResponse
import io
import base64
from PIL import Image

from src.schemas.stable_diffusion import SettingsSchema
from src.core.errors import (ServiceUnavailableError, BaseApiError)
from src.core.settings import settings

async def generate_image(payload: SettingsSchema, endpoint: str) -> StreamingResponse:
    try:
        response = requests.post(
            url=f"{settings.stable_diffusion_url}{endpoint}",
            json=payload
        )
        response.raise_for_status()
        data = response.json()
        
        image_bytes = base64.b64decode(data['images'][0])
        return StreamingResponse(io.BytesIO(image_bytes), media_type="image/png")
    
    except requests.exceptions.RequestException as e:
        raise ServiceUnavailableError(str(e))

    except Exception as e:
        print(e)
        raise BaseApiError(str(e))
