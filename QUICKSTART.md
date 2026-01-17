# 🎂 Quick Start Guide

## 5-Minute Setup

### Step 1: Personalize the Message

1. Open `script.js`
2. Find the `const birthdayLetter = ...` section
3. Replace with your custom birthday message

**Example:**

```javascript
const birthdayLetter = `Hey Sarah! 💕

You've been my best friend for so many years...
[your message here]`;
```

### Step 2: Update Website URL

In `script.js`, update:

```javascript
const CONFIG = {
  friendName: "Sarah", // Change this
  websiteUrl: "https://yourdomain.com/birthday", // Update this
};
```

### Step 3: Add Photos (Optional)

In `index.html`, replace emoji with images in the gallery:

```html
<div class="memory-image">
  <img src="path/to/photo.jpg" alt="Us at the beach" />
</div>
```

Or keep the fun emoji version! It's already customized.

### Step 4: Deploy (Choose One)

#### **Option A: GitHub Pages (Easiest)**

```bash
1. Go to github.com, create account
2. Create new repository "birthday-website"
3. Upload all 3 files (index.html, style.css, script.js)
4. Settings → Pages → Enable
5. Share your URL
```

#### **Option B: Netlify (Fastest)**

```bash
1. Go to netlify.com
2. "Add new site" → "Deploy manually"
3. Drag and drop all files
4. Get instant live URL
```

#### **Option C: Run Locally**

```bash
1. Save all files in a folder
2. Right-click → "Open with Live Server" (VS Code)
3. Or double-click index.html
```

### Step 5: Generate QR Code

**Automatic (Inside Website):**

1. Scroll to "Save This Surprise" section
2. Right-click QR code → Save image
3. Print it!

**Quick Generator:**

1. Go to qr-code-generator.com
2. Paste your website URL
3. Download PNG
4. Print

## 🎨 Quick Customizations

### Change Color Theme

In `style.css`, find `:root` and modify:

```css
--primary-pink: #ff69b4; /* Main color */
--soft-purple: #c4b5fd; /* Secondary color */
--sky-blue: #87ceeb; /* Accent color */
```

### Change Music

Find in `index.html`:

```html
<source src="YOUR_MUSIC_URL_HERE.mp3" type="audio/mpeg" />
```

(Use free music from: [freepik.com](https://www.freepik.com), [pixabay.com](https://www.pixabay.com))

### Speed Up/Slow Down Animations

In `style.css`, modify animation durations:

```css
animation: float 6s ease-in-out infinite; /* Change 6s */
```

## 📲 Testing on Mobile

1. Deploy to any platform (don't run locally)
2. Open on phone via URL
3. Check layout and responsiveness
4. Test swipe navigation
5. Test music button

## ✅ Before Sharing

- [ ] Personalized message ✨
- [ ] Tested on mobile 📱
- [ ] Music volume adjusted 🔊
- [ ] QR code generated 📲
- [ ] Website is live 🚀
- [ ] Shared the link! 💌

## 🎁 How to Share

### Option 1: QR Code

Print QR code and send to her. When scanned, it opens the surprise!

### Option 2: Direct Link

Send the website URL via text/WhatsApp/etc.

### Option 3: Combination

Send QR code + message:
"Open the attached QR code to see my special birthday surprise for you! 🎂💖"

## 🎵 Music Recommendations

Free platforms:

- [Pixabay Music](https://pixabay.com/music/)
- [Freepik](https://www.freepik.com/search?format=search&query=birthday%20music&type=music)
- [YouTube Audio Library](https://www.youtube.com/audiolibrary)

Search for:

- "Happy Birthday Music"
- "Emotional Birthday Piano"
- "Dreamy Background Music"

## 🚨 Common Issues

**"QR Code not showing"**
→ JavaScript might be blocked. Check browser settings.

**"Music won't play"**
→ Click the 🎵 button to manually enable. Browsers block autoplay.

**"Looks weird on phone"**
→ Use latest Chrome/Safari. Check internet connection.

**"How do I update after publishing?"**
→ Just re-upload files. It'll update automatically!

## 🎊 Pro Tips

1. **Test first** - Open locally before sharing
2. **Mobile first** - Always check how it looks on phone
3. **Keep it secret** - Use private link or QR code
4. **Add her name** - Update `CONFIG.friendName`
5. **Personal photos** - Replace emoji with real memories
6. **Custom music** - Pick her favorite song
7. **Print QR** - High resolution for easy scanning

## 📞 Need More Help?

This website is built with pure HTML/CSS/JavaScript - no coding needed!

Just:

1. Edit text in script.js
2. Change images/music URLs
3. Deploy and share

That's it! You're done! 🎉

---

## What's Inside

- `index.html` - Main website structure
- `style.css` - Beautiful styling & animations
- `script.js` - Interactive features
- `README.md` - Full documentation

**Happy Birthday to Your Best Friend!** 💖✨🎂
