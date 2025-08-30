import httpx
from src.core.errors import (ServiceUnavailableError, BaseApiError)

class ApiClient:
    def __init__(self, base_url: str):
        self.base_url = base_url.rstrip("/")

    async def request(self, method: str, endpoint: str, json=None, params=None) -> dict:
        url = f"{self.base_url}/{endpoint.lstrip('/')}"  # Fixed: Correct indentation (4 spaces)

        async with httpx.AsyncClient(timeout=180) as client:  # Fixed: Properly aligned
            try:
                response = await client.request(method, url, json=json, params=params)
                response.raise_for_status()
                return response.json()
            except httpx.RequestError as e:
                raise ServiceUnavailableError(str(e))
            except Exception as e:
                raise BaseApiError(str(e))

def sd_client() -> ApiClient:
    from src.core.settings import settings
    return ApiClient(base_url=settings.stable_diffusion_url)