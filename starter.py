import requests
from PIL import Image, PngImagePlugin
import io
import base64
payload = {
  "cfg_scale": 7,
  "denoising_strength": 0.3,
  "width": 512,
  "height": 768,
  "prompt": "Only one Fairy in an enchanted forest, detailed illustration, digital art, overdetailed art, full character, character concept, long hair, full body shot, by Dan Mumford, by Peter Mohrbacher, by Greg Rutkowski, fantasy character, detailed illustration, hd, 4k, digital art, overdetailed art, concept art, trending on artstation",
  "steps": 30,
  "negative":"abstract backgrounds, abstract backgrounds, dark backgrounds, distorted, blurred, distorted image, many objects, photos, surreal, people"
}
response = requests.post(url=f'http://127.0.0.1:7860/sdapi/v1/txt2img', json=payload)

r = response.json()

for i in r['images']:
  image = Image.open(io.BytesIO(base64.b64decode(i.split(",",1)[0])))
  png_payload = {
    "image": "data:image/png;base64," + i
  }
  response2 = requests.post(url=f'http://127.0.0.1:7860/sdapi/v1/png-info', json=png_payload)

  pnginfo = PngImagePlugin.PngInfo()
  pnginfo.add_text("parameters", response2.json().get("info"))
  image.save('output.png', pnginfo=pnginfo)
