from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from .api.stable_diffusion import STABLE_DIFFUSION_ROUTER
from .core.settings import settings

def make_app() -> FastAPI:
    app = FastAPI(
        title=settings.app_name,
    )

    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=False,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    app.include_router(STABLE_DIFFUSION_ROUTER)

    return app
