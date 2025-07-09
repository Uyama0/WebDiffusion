# web-diffusion

python -m src.__main__

## Installation and Running

### Starting server

1. To run the project locally, you'll need to install several dependencies. First, you'll need Stable Diffusion itself. As an example, we installed stable-diffusion-webui by AUTOMATIC1111. Next, you'll need to set up the Stable Diffusion model in API mode. For more details, refer to the documentation here.

2. Now you have the basic version of Stable Diffusion, but the project uses a set of additional dependencies for image processing.

   Here is the full list of required dependencies:

   control_v11p_sd15_canny.pth
   control_v11p_sd15_lineart.pth

> Downloading additional dependencies is optional, but without them, some functionality of the web application will not be available.

3. Start the FastAPI server on port 8000:

    uvicorn main:app --port 8000

### Starting client

1. Install the dependencies:

npm install

2. Run the project:

npm run dev

## Credits

- Stable Diffusion webui - https://github.com/AUTOMATIC1111/stable-diffusion-webui
- ControlNet-v1-1 - https://huggingface.co/lllyasviel/ControlNet-v1-1