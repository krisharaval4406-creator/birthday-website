import qrcode
from PIL import Image, ImageDraw, ImageFont

# Use your actual IP address
WEBSITE_URL = "http://10.75.147.189:8000"

# Create QR code with high quality settings
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=20,
    border=3,
)

qr.add_data(WEBSITE_URL)
qr.make(fit=True)

# Create QR image with pink color
qr_img = qr.make_image(fill_color=(255, 105, 180), back_color="white").convert('RGB')

# Create a larger image with white background and text
width, height = qr_img.size
final_img = Image.new('RGB', (width + 60, height + 200), color='white')

# Paste QR code in center
final_img.paste(qr_img, (30, 30))

# Add text below QR code
draw = ImageDraw.Draw(final_img)

# Try to use a nice font, fallback to default if not available
try:
    font_title = ImageFont.truetype("arial.ttf", 28)
    font_url = ImageFont.truetype("arial.ttf", 14)
    font_instruction = ImageFont.truetype("arial.ttf", 12)
except:
    font_title = ImageFont.load_default()
    font_url = ImageFont.load_default()
    font_instruction = ImageFont.load_default()

# Add title
title_text = "Save This Special Message"
title_bbox = draw.textbbox((0, 0), title_text, font=font_title)
title_width = title_bbox[2] - title_bbox[0]
title_x = (final_img.width - title_width) // 2
draw.text((title_x, height + 40), title_text, fill=(255, 105, 180), font=font_title)

# Add URL
url_text = WEBSITE_URL
url_bbox = draw.textbbox((0, 0), url_text, font=font_url)
url_width = url_bbox[2] - url_bbox[0]
url_x = (final_img.width - url_width) // 2
draw.text((url_x, height + 90), url_text, fill=(100, 100, 100), font=font_url)

# Add scan instruction
scan_text = "📱 Scan with your phone camera"
scan_bbox = draw.textbbox((0, 0), scan_text, font=font_instruction)
scan_width = scan_bbox[2] - scan_bbox[0]
scan_x = (final_img.width - scan_width) // 2
draw.text((scan_x, height + 130), scan_text, fill=(150, 150, 150), font=font_instruction)

# Add heart decoration
heart_text = "💕 I Love You 💕"
heart_bbox = draw.textbbox((0, 0), heart_text, font=font_instruction)
heart_width = heart_bbox[2] - heart_bbox[0]
heart_x = (final_img.width - heart_width) // 2
draw.text((heart_x, height + 155), heart_text, fill=(255, 105, 180), font=font_instruction)

# Save the image with high quality
final_img.save('qr_website.png', quality=95)
print("✅ Professional QR code generated successfully!")
print(f"📁 File: qr_website.png")
print(f"🔗 URL: {WEBSITE_URL}")
print(f"📏 Size: {final_img.width}x{final_img.height} pixels")
print(f"💕 Ready to share with others!")
scan_width = scan_bbox[2] - scan_bbox[0]
scan_x = (final_img.width - scan_width) // 2
draw.text((scan_x, height + 65), scan_text, fill=(100, 100, 100), font=font_small)

# Save QR code image
output_path = "birthday_qr_code.png"
final_img.save(output_path)
print(f"✅ QR Code generated successfully: {output_path}")
print(f"📱 Size: {final_img.size[0]}x{final_img.size[1]} pixels")
print(f"🔗 Points to: {WEBSITE_URL}")
print("\n💡 TIP: To share with others, change WEBSITE_URL to your actual domain!")
