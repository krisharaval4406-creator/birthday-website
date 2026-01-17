import qrcode
from PIL import Image

# Website URL - Update this with your actual domain when you deploy
# For now using localhost
website_url = "http://localhost:8000"

# Create QR code instance
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)

# Add data to QR code
qr.add_data(website_url)
qr.make(fit=True)

# Create image with colors
img = qr.make_image(fill_color="#ff69b4", back_color="#ffffff")  # Pink QR code on white

# Save the QR code
img.save('qr_code.png')
print(f"✅ QR Code generated successfully!")
print(f"📱 QR Code URL: {website_url}")
print(f"📁 Saved as: qr_code.png")
print(f"\n💡 To update URL later, edit the 'website_url' variable in this script")
