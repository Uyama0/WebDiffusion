class BaseApiError(Exception):
    def __init__(self, message: str, status_code: int = 500) -> None:
        self.message = message
        self.status_code = status_code

class ServiceUnavailableError(BaseApiError):
    def __init__(self, message: str = "Service is unavailable for now") -> None:
        super().__init__(message=message, status_code=503)

class BadRequestError(BaseApiError):
    def __init__(self, message: str = "Bad request") -> None:
        super().__init__(message=message, status_code=400)
