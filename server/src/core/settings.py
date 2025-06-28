from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    host: str = "0.0.0.0"
    port: int = 8000
    debug: bool = True
    app_name: str = "make_app"
    stable_diffusion_url: str = "https://vjrwl85c-7860.euw.devtunnels.ms"

    
settings = Settings()