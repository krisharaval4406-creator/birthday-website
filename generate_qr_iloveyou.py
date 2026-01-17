import qrcode
from PIL import Image, ImageDraw, ImageFont

# Use your actual IP address with the i-love-you page
WEBSITE_URL = "http://10.75.147.189:8000/i-love-you.html"

# Create QR code
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=15,
    border=2,
)

qr.add_data(WEBSITE_URL)
qr.make(fit=True)

# Create QR image with pink color
qr_img = qr.make_image(fill_color=(255, 105, 180), back_color="white").convert('RGB')

# Create a larger image with white background and text
width, height = qr_img.size
final_img = Image.new('RGB', (width + 40, height + 150), color='white')

# Paste QR code in center
final_img.paste(qr_img, (20, 20))

# Add text below QR code
draw = ImageDraw.Draw(final_img)

# Try to use a nice font, fallback to default if not available
try:
    font_large = ImageFont.truetype("arial.ttf", 24)
    font_small = ImageFont.truetype("arial.ttf", 12)
except:
    font_large = ImageFont.load_default()
    font_small = ImageFont.load_default()

# Add title
title_text = "I Love You 💕"
title_bbox = draw.textbbox((0, 0), title_text, font=font_large)
title_width = title_bbox[2] - title_bbox[0]
title_x = (final_img.width - title_width) // 2
draw.text((title_x, height + 30), title_text, fill=(255, 105, 180), font=font_large)

# Add scan instruction
scan_text = "📱 Scan to see the love message!"
scan_bbox = draw.textbbox((0, 0), scan_text, font=font_small)
scan_width = scan_bbox[2] - scan_bbox[0]
scan_x = (final_img.width - scan_width) // 2
draw.text((scan_x, height + 70), scan_text, fill=(100, 100, 100), font=font_small)

# Save the image
final_img.save('qr_iloveyou.png')
print("✅ QR code generated successfully: qr_iloveyou.png")
print(f"URL: {WEBSITE_URL}")
