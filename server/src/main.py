from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from .core.settings import settings

def make_app() -> FastAPI:
    app = FastAPI(
        title=settings.app_name,
    )

    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    return app
