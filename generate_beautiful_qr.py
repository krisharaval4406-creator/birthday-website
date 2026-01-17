import qrcode
from PIL import Image, ImageDraw, ImageFont

# IP Address
IP_ADDRESS = "10.75.147.189"
PORT = "8000"
WEBSITE_URL = f"http://{IP_ADDRESS}:{PORT}"

# Create QR code
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=12,
    border=2,
)

qr.add_data(WEBSITE_URL)
qr.make(fit=True)

# Create QR image with pink color
qr_img = qr.make_image(fill_color=(255, 105, 180), back_color="white").convert('RGB')

# Create a large canvas with beautiful design (similar to the screenshot)
canvas_width = 600
canvas_height = 900
final_img = Image.new('RGB', (canvas_width, canvas_height), color='#f5f0ff')

# Paste QR code in center
qr_width, qr_height = qr_img.size
qr_x = (canvas_width - qr_width) // 2
qr_y = 280
final_img.paste(qr_img, (qr_x, qr_y))

# Add text elements
draw = ImageDraw.Draw(final_img)

# Try to use nice fonts
try:
    title_font = ImageFont.truetype("arial.ttf", 36)
    subtitle_font = ImageFont.truetype("arial.ttf", 16)
    section_font = ImageFont.truetype("arial.ttf", 18)
    text_font = ImageFont.truetype("arial.ttf", 14)
    url_font = ImageFont.truetype("arial.ttf", 12)
except:
    title_font = subtitle_font = section_font = text_font = url_font = ImageFont.load_default()

# Add title
title_text = "Happy Birthday HASTI!! 🎂"
title_bbox = draw.textbbox((0, 0), title_text, font=title_font)
title_width = title_bbox[2] - title_bbox[0]
title_x = (canvas_width - title_width) // 2
draw.text((title_x, 30), title_text, fill=(255, 105, 180), font=title_font)

# Add subtitle
subtitle_text = "Share the Website with Friends"
subtitle_bbox = draw.textbbox((0, 0), subtitle_text, font=subtitle_font)
subtitle_width = subtitle_bbox[2] - subtitle_bbox[0]
subtitle_x = (canvas_width - subtitle_width) // 2
draw.text((subtitle_x, 80), subtitle_text, fill=(196, 181, 253), font=subtitle_font)

# Add "Scan the QR Code" section heading
scan_heading = "📱 Scan the QR Code"
scan_bbox = draw.textbbox((0, 0), scan_heading, font=section_font)
scan_width = scan_bbox[2] - scan_bbox[0]
scan_x = (canvas_width - scan_width) // 2
draw.text((scan_x, 240), scan_heading, fill=(255, 105, 180), font=section_font)

# Add instruction text below QR
instruction_text = "Use your phone camera to scan"
instr_bbox = draw.textbbox((0, 0), instruction_text, font=text_font)
instr_width = instr_bbox[2] - instr_bbox[0]
instr_x = (canvas_width - instr_width) // 2
draw.text((instr_x, qr_y + qr_height + 20), instruction_text, fill=(100, 100, 100), font=text_font)

# Add "Or Copy the Link" section
link_section_y = qr_y + qr_height + 80
copy_heading = "🔗 Or Copy the Link"
copy_bbox = draw.textbbox((0, 0), copy_heading, font=section_font)
copy_width = copy_bbox[2] - copy_bbox[0]
copy_x = (canvas_width - copy_width) // 2
draw.text((copy_x, link_section_y), copy_heading, fill=(255, 105, 180), font=section_font)

# Draw a light yellow box for URL
box_y = link_section_y + 50
box_padding = 20
box_height = 80
draw.rectangle(
    [(box_padding, box_y), (canvas_width - box_padding, box_y + box_height)],
    fill="#fffacd",
    outline=(255, 105, 180),
    width=3
)

# Add URL inside box
url_text = WEBSITE_URL
url_bbox = draw.textbbox((0, 0), url_text, font=url_font)
url_width = url_bbox[2] - url_bbox[0]
url_x = (canvas_width - url_width) // 2
draw.text((url_x, box_y + 15), url_text, fill=(255, 105, 180), font=url_font)

# Add WiFi warning
wifi_text = "⚠️ Make sure they're on the SAME WiFi!"
wifi_bbox = draw.textbbox((0, 0), wifi_text, font=text_font)
wifi_width = wifi_bbox[2] - wifi_bbox[0]
wifi_x = (canvas_width - wifi_width) // 2
draw.text((wifi_x, box_y + 50), wifi_text, fill=(255, 105, 180), font=text_font)

# Add bottom instructions
bottom_text = "✨ Share this image with your friends!\nThey can scan the QR code or use the link."
bottom_bbox = draw.textbbox((0, 0), bottom_text, font=text_font)
draw.text((40, canvas_height - 80), bottom_text, fill=(100, 100, 100), font=text_font)

# Save the image
output_filename = "beautiful_qr_code.png"
final_img.save(output_filename)

print("\n" + "="*60)
print("✅ BEAUTIFUL QR CODE GENERATED!")
print("="*60)
print(f"\n📁 File: {output_filename}")
print(f"📱 Size: {final_img.size[0]}x{final_img.size[1]} pixels")
print(f"🔗 Points to: {WEBSITE_URL}")
print("\n💡 Features:")
print("   ✨ Beautiful gradient background")
print("   🎂 Birthday title with emoji")
print("   📱 Large QR code")
print("   🔗 URL display with warning")
print("   📋 Ready to print or share")
print("\n" + "="*60)
print("🎉 Ready to share with Hasti! 💕")
print("="*60 + "\n")
