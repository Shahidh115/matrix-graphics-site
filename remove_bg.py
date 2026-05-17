from rembg import remove
from PIL import Image

input_path = 'src/assets/logo.jpeg'
output_path = 'src/assets/logo.png'

print(f"Processing {input_path}...")
input_image = Image.open(input_path)
output_image = remove(input_image)
output_image.save(output_path, 'PNG')
print(f"Saved to {output_path}")
