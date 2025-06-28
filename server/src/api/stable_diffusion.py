from typing import Final

import fastapi

STABLE_DIFFUSION_ROUTER: Final = fastapi.APIRouter(prefix="/sdapi/")

@STABLE_DIFFUSION_ROUTER.post("/")
async def generate() -> deployments_schema.ResponseDeploymentCreateSchema:
    
