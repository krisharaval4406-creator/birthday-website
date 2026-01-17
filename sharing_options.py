#!/usr/bin/env python3
"""
Multiple ways to share your birthday website!
"""

import os
import qrcode
from PIL import Image, ImageDraw, ImageFont

print("\n" + "="*70)
print("🎉 BIRTHDAY WEBSITE - SHARING OPTIONS 🎉")
print("="*70)

# Option 1: Current IP Address
IP_ADDRESS = "10.75.147.189"
PORT = "8000"
LOCAL_URL = f"http://{IP_ADDRESS}:{PORT}"

print("\n✅ OPTION 1: LOCAL NETWORK (Same WiFi)")
print("-" * 70)
print(f"🔗 URL: {LOCAL_URL}")
print("📱 Works for: Anyone on your WiFi network")
print("✓ Share the QR code 'birthday_qr_code.png' with them")
print("✓ Or share the URL directly")

# Option 2: Create instructions file
print("\n✅ OPTION 2: SHARE AS A DOCUMENT")
print("-" * 70)

instructions = f"""
╔═══════════════════════════════════════════════════════════╗
║         🎂 Happy 22nd Birthday HASTI! 🎂                  ║
║                  See My Birthday Surprise                 ║
╚═══════════════════════════════════════════════════════════╝

📱 THREE WAYS TO ACCESS:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
METHOD 1: SCAN QR CODE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📸 Use your phone camera to scan 'birthday_qr_code.png'
   The website will open automatically!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
METHOD 2: DIRECT URL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔗 Copy-paste this link in your browser:
   {LOCAL_URL}

⚠️  Important: You must be on the SAME WiFi network as the host!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
METHOD 3: INSTRUCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1️⃣  Make sure you're on the SAME WiFi as {IP_ADDRESS}
2️⃣  Open your browser
3️⃣  Type the URL: {LOCAL_URL}
4️⃣  Press Enter
5️⃣  Enjoy the surprise! 🎉

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❤️  Made with love for HASTI's birthday!
💕  Featuring memories, music, and heartfelt messages
"""

with open("SHARE_INSTRUCTIONS.txt", "w", encoding="utf-8") as f:
    f.write(instructions)

print("✓ Created: SHARE_INSTRUCTIONS.txt")
print("✓ Share this file with your friends!")

# Option 3: WhatsApp Template
print("\n✅ OPTION 3: WHATSAPP MESSAGE TEMPLATE")
print("-" * 70)

whatsapp_message = f"""
🎉 Hey! Check out my birthday surprise website! 

🔗 Link: {LOCAL_URL}

Or scan this QR code (attached as image)

📱 Just make sure you're on the same WiFi as me!

💕 Can't wait to see what you think!
"""

with open("WHATSAPP_MESSAGE.txt", "w", encoding="utf-8") as f:
    f.write("Copy this message and send on WhatsApp:\n\n")
    f.write(whatsapp_message)

print("✓ Created: WHATSAPP_MESSAGE.txt")
print("✓ Copy the message and send on WhatsApp with the QR code image!")

# Option 4: Email Template
print("\n✅ OPTION 4: EMAIL TEMPLATE")
print("-" * 70)

email_template = f"""
SUBJECT: You're Invited to My Birthday Surprise! 🎂💕

BODY:
─────────────────────────────────────────────────────

Hi [Friend's Name],

I created a special birthday website and I'd love for you to check it out! 

🎉 It has:
✨ Beautiful memories and photos
🎵 A special song in the background
💌 A heartfelt birthday letter
📸 Interactive galleries
💕 And more surprises!

HOW TO ACCESS:
─────────────────────────────────────────────────────

METHOD 1: Scan QR Code
📱 Scan the attached QR code image (birthday_qr_code.png)

METHOD 2: Direct Link
🔗 {LOCAL_URL}

⚠️  Important: You must be on the same WiFi network to access it.
   Make sure you're connected to the same WiFi as the host!

I can't wait to show you! Let me know what you think 💕

Thanks for being such an amazing friend!

[Your Name]
"""

with open("EMAIL_TEMPLATE.txt", "w", encoding="utf-8") as f:
    f.write(email_template)

print("✓ Created: EMAIL_TEMPLATE.txt")
print("✓ Copy and send via email with QR code attachment!")

# Option 5: Create a simple HTML page with all sharing options
print("\n✅ OPTION 5: SHARING HUB PAGE")
print("-" * 70)

sharing_hub = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Share My Birthday Website</title>
    <style>
        * {{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }}
        body {{
            background: linear-gradient(135deg, #fce4ec 0%, #e1d5f7 50%, #b3e5fc 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Arial', sans-serif;
            padding: 20px;
        }}
        .container {{
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.2);
            max-width: 600px;
            padding: 40px;
            text-align: center;
        }}
        h1 {{
            color: #ff69b4;
            margin-bottom: 10px;
            font-size: 28px;
        }}
        .subtitle {{
            color: #c4b5fd;
            margin-bottom: 30px;
            font-size: 16px;
        }}
        .qr-section {{
            background: #f9f9f9;
            border-radius: 15px;
            padding: 20px;
            margin: 20px 0;
        }}
        .qr-section img {{
            max-width: 250px;
            margin: 20px 0;
            border-radius: 10px;
        }}
        .url-section {{
            background: #fffacd;
            border-left: 4px solid #ff69b4;
            padding: 15px;
            margin: 20px 0;
            border-radius: 5px;
            text-align: left;
        }}
        .url-section code {{
            color: #ff69b4;
            font-size: 14px;
            word-break: break-all;
        }}
        .copy-btn {{
            background: #ff69b4;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 25px;
            cursor: pointer;
            margin-top: 10px;
            font-size: 14px;
            transition: all 0.3s;
        }}
        .copy-btn:hover {{
            background: #ff1493;
            transform: scale(1.05);
        }}
        .share-options {{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin: 30px 0;
        }}
        .share-btn {{
            padding: 15px;
            border: 2px solid #ff69b4;
            border-radius: 10px;
            background: white;
            color: #ff69b4;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s;
            text-decoration: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;
        }}
        .share-btn:hover {{
            background: #ff69b4;
            color: white;
            transform: translateY(-5px);
        }}
        .info-text {{
            color: #666;
            font-size: 14px;
            margin-top: 20px;
            padding: 15px;
            background: #f0f0f0;
            border-radius: 10px;
        }}
    </style>
</head>
<body>
    <div class="container">
        <h1>🎂 Happy Birthday HASTI! 🎂</h1>
        <p class="subtitle">Share the Website with Friends</p>

        <div class="qr-section">
            <h3 style="color: #ff69b4; margin-bottom: 15px;">📱 Scan the QR Code</h3>
            <img src="birthday_qr_code.png" alt="Birthday Website QR Code">
            <p style="color: #666; font-size: 14px;">Use your phone camera to scan</p>
        </div>

        <div class="url-section">
            <h3 style="color: #ff69b4; margin-bottom: 10px;">🔗 Or Copy the Link</h3>
            <code>{LOCAL_URL}</code>
            <button class="copy-btn" onclick="copyURL()">📋 Copy Link</button>
            <p style="color: #666; font-size: 12px; margin-top: 10px;">Make sure they're on the same WiFi!</p>
        </div>

        <div class="share-options">
            <a href="whatsapp://send?text=Check%20out%20my%20birthday%20website!%20{LOCAL_URL}" class="share-btn">
                <span>💬</span>
                WhatsApp
            </a>
            <button class="share-btn" onclick="shareEmail()">
                <span>📧</span>
                Email
            </button>
            <button class="share-btn" onclick="copyURL()">
                <span>📋</span>
                Copy URL
            </button>
            <button class="share-btn" onclick="shareText()">
                <span>📱</span>
                Share
            </button>
        </div>

        <div class="info-text">
            ⚠️ <strong>Important:</strong> Friends must be on the same WiFi network as your computer to access the website.
            Keep your server running (python -m http.server 8000)
        </div>
    </div>

    <script>
        function copyURL() {{
            const url = "{LOCAL_URL}";
            navigator.clipboard.writeText(url);
            alert('✅ Link copied to clipboard!\\n\\n' + url);
        }}

        function shareEmail() {{
            const subject = "Happy Birthday Website";
            const body = "Check out my birthday website! {LOCAL_URL}";
            window.location.href = `mailto:?subject=${{encodeURIComponent(subject)}}&body=${{encodeURIComponent(body)}}`;
        }}

        function shareText() {{
            if (navigator.share) {{
                navigator.share({{
                    title: 'Birthday Website',
                    text: 'Check out my birthday website!',
                    url: '{LOCAL_URL}'
                }});
            }} else {{
                alert('Share feature not available on your device');
            }}
        }}
    </script>
</body>
</html>
"""

with open("sharing-hub.html", "w", encoding="utf-8") as f:
    f.write(sharing_hub)

print("✓ Created: sharing-hub.html")
print("✓ Open this in browser to get all sharing options!")

# Summary
print("\n" + "="*70)
print("📦 ALL SHARING FILES CREATED!")
print("="*70)
print("""
Created Files:
✅ birthday_qr_code.png        → Share this image!
✅ SHARE_INSTRUCTIONS.txt      → Step-by-step guide
✅ WHATSAPP_MESSAGE.txt        → WhatsApp template
✅ EMAIL_TEMPLATE.txt          → Email template
✅ sharing-hub.html            → Interactive sharing page

Quick Share Summary:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📱 QR CODE:        Share 'birthday_qr_code.png'
🔗 DIRECT LINK:    """ + LOCAL_URL + """
💬 WHATSAPP:       Send QR + text from 'WHATSAPP_MESSAGE.txt'
📧 EMAIL:          Send QR + text from 'EMAIL_TEMPLATE.txt'
🌐 WEB PAGE:       Open 'sharing-hub.html' in browser

⚠️  IMPORTANT: Keep server running for friends to access!
   Command: python -m http.server 8000
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
""")
print("="*70)
print("🎉 Ready to share with all your friends! 💕")
print("="*70)
