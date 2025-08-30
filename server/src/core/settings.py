from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    host: str = "0.0.0.0"
    port: int = 8005
    debug: bool = False
    app_name: str = "make_app"
    stable_diffusion_url: str = "http://127.0.0.1:7860"

    
settings = Settings()