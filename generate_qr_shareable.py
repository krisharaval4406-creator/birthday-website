import qrcode
from PIL import Image, ImageDraw, ImageFont

# Use your actual IP address - anyone can scan this on your network
WEBSITE_URL = "http://10.75.147.189:8000"  # This is your machine's IP

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
    font_tiny = ImageFont.truetype("arial.ttf", 10)
except:
    font_large = ImageFont.load_default()
    font_small = ImageFont.load_default()
    font_tiny = ImageFont.load_default()

# Add title
title_text = "Happy 22nd Birthday HASTI! 🎉💕"
title_bbox = draw.textbbox((0, 0), title_text, font=font_large)
title_width = title_bbox[2] - title_bbox[0]
title_x = (final_img.width - title_width) // 2
draw.text((title_x, height + 30), title_text, fill=(255, 105, 180), font=font_large)

# Add scan instruction
scan_text = "📱 Scan to see the surprise!"
scan_bbox = draw.textbbox((0, 0), scan_text, font=font_small)
scan_width = scan_bbox[2] - scan_bbox[0]
scan_x = (final_img.width - scan_width) // 2
draw.text((scan_x, height + 70), scan_text, fill=(100, 100, 100), font=font_small)

# Add URL text
url_text = f"Or visit: {WEBSITE_URL}"
url_bbox = draw.textbbox((0, 0), url_text, font=font_tiny)
url_width = url_bbox[2] - url_bbox[0]
url_x = (final_img.width - url_width) // 2
draw.text((url_x, height + 100), url_text, fill=(150, 150, 150), font=font_tiny)

# Save QR code image
output_path = "birthday_qr_code.png"
final_img.save(output_path)

print("=" * 60)
print("✅ QR Code Generated Successfully!")
print("=" * 60)
print(f"📱 Size: {final_img.size[0]}x{final_img.size[1]} pixels")
print(f"🔗 Points to: {WEBSITE_URL}")
print("\n📝 Instructions:")
print("1. Keep the server running (python -m http.server 8000)")
print("2. Share the 'birthday_qr_code.png' image with anyone")
print("3. They can scan it with their phone camera")
print("4. Website opens in their browser!")
print("\n💡 This IP works for anyone on the same WiFi network")
print("=" * 60)
