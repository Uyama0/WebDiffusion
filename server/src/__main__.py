import uvicorn 

from src.core.settings import settings

def main() -> None:
    uvicorn.run(
        "src.main:make_app",
        host=settings.host,
        port=settings.port,
        reload=settings.debug,
        factory=True,
    )


if __name__ == "__main__":
    main()
