import qrcode
from PIL import Image, ImageDraw, ImageFont

# IP Address
IP_ADDRESS = "10.75.147.189"
PORT = "8000"

# Create QR codes for both pages
qr_data = {
    'main': {
        'url': f"http://{IP_ADDRESS}:{PORT}",
        'title': "Happy 22nd Birthday HASTI!",
        'filename': "qr_main_website.png"
    },
    'love': {
        'url': f"http://{IP_ADDRESS}:{PORT}/i-love-you.html",
        'title': "I Love You ❤️",
        'filename': "qr_i_love_you.png"
    }
}

for key, data in qr_data.items():
    # Create QR code
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=15,
        border=2,
    )
    
    qr.add_data(data['url'])
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
    
    # Try to use a nice font
    try:
        font_large = ImageFont.truetype("arial.ttf", 24)
        font_small = ImageFont.truetype("arial.ttf", 12)
        font_tiny = ImageFont.truetype("arial.ttf", 10)
    except:
        font_large = ImageFont.load_default()
        font_small = ImageFont.load_default()
        font_tiny = ImageFont.load_default()
    
    # Add title
    title_bbox = draw.textbbox((0, 0), data['title'], font=font_large)
    title_width = title_bbox[2] - title_bbox[0]
    title_x = (final_img.width - title_width) // 2
    draw.text((title_x, height + 30), data['title'], fill=(255, 105, 180), font=font_large)
    
    # Add scan instruction
    scan_text = "📱 Scan to open"
    scan_bbox = draw.textbbox((0, 0), scan_text, font=font_small)
    scan_width = scan_bbox[2] - scan_bbox[0]
    scan_x = (final_img.width - scan_width) // 2
    draw.text((scan_x, height + 70), scan_text, fill=(100, 100, 100), font=font_small)
    
    # Save QR code image
    final_img.save(data['filename'])
    print(f"✅ {key.upper()} QR Code: {data['filename']}")
    print(f"   📱 Size: {final_img.size[0]}x{final_img.size[1]} pixels")
    print(f"   🔗 Points to: {data['url']}")
    print()

print("="*60)
print("🎉 ALL QR CODES GENERATED!")
print("="*60)
print("\nYou now have:")
print("✅ qr_main_website.png   → Birthday website QR")
print("✅ qr_i_love_you.png     → I Love You page QR")
print("\nShare both with Hasti! 💕")
print("="*60)
