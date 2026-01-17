from PIL import Image
import os

# Load the image
image_path = 'pictures/memory1.jpg'
img = Image.open(image_path)

# Get image dimensions
width, height = img.size
print(f"Original image size: {width}x{height}")

# Crop to focus on face area (remove top 20% and bottom 30%)
top = int(height * 0.15)  # Remove top 15%
bottom = int(height * 0.70)  # Keep top 70% (remove bottom 30%)

# Crop: (left, top, right, bottom)
cropped_img = img.crop((0, top, width, bottom))

# Save the cropped image
cropped_img.save(image_path)
print(f"Cropped image size: {cropped_img.width}x{cropped_img.height}")
print(f"✅ Image cropped and saved to {image_path}")
