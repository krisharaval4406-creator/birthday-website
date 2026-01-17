# 🎂 Birthday Wish Website

A beautiful, emotional, and modern birthday surprise website with QR code integration.

## ✨ Features

✅ **Magical Design**

- Soft pastel colors (pink, purple, sky blue, gold)
- Smooth animations and transitions
- Floating hearts, stars, balloons, and confetti
- Mobile-first responsive design

✅ **Interactive Sections**

1. **Home Section** - Animated greeting with bounce effects
2. **Message Section** - Emotional letter with typewriter animation
3. **Memory Gallery** - Photo cards with hover animations
4. **Surprise Section** - Heart explosion effect
5. **QR Code Section** - Shareable QR code for revisiting

✅ **Special Features**

- Background birthday music with play/pause control
- Keyboard navigation (arrow keys)
- Swipe navigation on mobile
- Heart cursor effect
- Confetti and heart explosion animations
- Floating emoji decorations

## 🚀 How to Use

### 1. **Customize the Content**

Open `script.js` and modify:

```javascript
const CONFIG = {
  friendName: "My Bestie", // Change to her name
  websiteUrl: "https://yourdomain.com/birthday", // Your website URL
};

const birthdayLetter = `Heyyy Bestie 💖🎂,

First of all… HAPPY 22nd BIRTHDAYYYYY 🎉✨
Like seriously, when did you grow up this fast?! It feels like just yesterday we were laughing over the smallest things, and today here you are, turning 22 and becoming even more amazing with every year.

Hasti, you are not just my best friend. You are my comfort person, my madness partner, my late-night talk buddy, my personal therapist, my biggest supporter, and honestly… one of the best things life has ever given me 💕. You've seen me at my best, my worst, my weirdest, and my most emotional — and yet, you stayed. That itself makes you incredibly special.

Life with you is never boring. It's full of random conversations, stupid jokes, deep emotional talks, uncontrollable laughter, and memories that replay in my mind like my favorite movie 🎥😂. With you, even the simplest moment feels special. Sitting silently, walking randomly, talking nonsense, or sharing our dreams — everything becomes beautiful just because it's with you.

Thank you for always understanding me without me needing to explain. Thank you for listening to my endless talks, for supporting my dreams, for believing in me even when I doubt myself. Thank you for being the person I can run to without fear, without filters, without pretending. You make my bad days lighter and my good days even brighter 🌈💫.

Hasti, you have the kindest heart. You care deeply, love genuinely, and feel everything so beautifully. Never let this world change that softness in you. It is your superpower. The way you smile, the way you talk, the way you make people feel comfortable — it's rare, and it's precious.

As you turn 22 today, I wish you a life full of happiness, success, love, peace, and countless reasons to smile. I wish you big achievements, soft moments, surprise happiness, and dreams that slowly turn into reality. May every year bring you closer to everything your heart wants 🌷✨.

I also wish us many more memories — more photos, more laughter, more inside jokes, more late-night talks, more silly fights, more "remember when…" moments. No matter how life changes, I want you to always know that you will never walk alone. You will always have me, cheering for you, standing by you, and being proud of you 💞.

So here's to 22 years of a beautiful soul… and to many, many more to come 🎂🥂
Stay crazy, stay kind, stay emotional, stay strong, and most importantly… stay YOU, Hasti.

Happy Birthday once again, my bestie, my safe place, my forever person 🎉💖
Now stop reading and come take a tight birthday hug 🤗✨

Always yours,
🤍`;
```

### 2. **Add Photos to Gallery**

In `index.html`, replace the emoji in the gallery section with image paths:

```html
<div class="memory-image">
  <img src="path/to/your/photo.jpg" alt="Description" />
</div>
```

### 3. **Change Music**

In `index.html`, replace the audio source:

```html
<audio id="bgMusic" loop>
  <source src="your-music-url.mp3" type="audio/mpeg" />
</audio>
```

## 📱 Deployment Options

### Option 1: GitHub Pages (Free & Easy)

1. Create a GitHub account
2. Create a new repository named `birthday-website`
3. Upload all files (index.html, style.css, script.js)
4. Go to Settings → Pages → Enable GitHub Pages
5. Your site will be live at: `https://yourusername.github.io/birthday-website`

### Option 2: Netlify (Free & Fast)

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Create new site → Connect to Git
4. Select your repository
5. Deploy automatically

### Option 3: Vercel (Free & Optimized)

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your project
4. Deploy with one click

## 🔗 QR Code Generation

The QR code is **automatically generated** based on your website URL.

### To Print/Share the QR Code:

1. Open the website on desktop
2. Scroll to the "Save This Surprise" section
3. Right-click on the QR code → Save image
4. Print or share as needed

### Alternative: Generate QR Code Online

If you want a standalone QR code before deployment:

1. Go to [qr-code-generator.com](https://qr-code-generator.com)
2. Enter your website URL
3. Download and print

## 📋 File Structure

```
birthday-website/
├── index.html      (Main HTML file)
├── style.css       (All styling and animations)
├── script.js       (Interactivity and effects)
└── README.md       (This file)
```

## 🎨 Customization Tips

### Change Colors

Edit the CSS variables in `style.css`:

```css
:root {
  --primary-pink: #ff69b4;
  --light-pink: #ffb6d9;
  --soft-purple: #c4b5fd;
  --sky-blue: #87ceeb;
  --gold: #ffd700;
}
```

### Adjust Animation Speed

Modify animation durations in `style.css`:

```css
animation: float 6s ease-in-out infinite; /* Change 6s to desired speed */
```

### Enable Birthday Countdown

Add to `script.js`:

```javascript
// Days until birthday
const birthdayDate = new Date("2025-12-25"); // Set her birthday
```

## 📝 Personalization Checklist

- [ ] Change friend's name in `script.js`
- [ ] Write custom birthday message
- [ ] Update website URL in `script.js`
- [ ] Add photos to memory gallery
- [ ] Change music track (optional)
- [ ] Customize colors (optional)
- [ ] Deploy to your chosen platform
- [ ] Generate QR code for printing/sharing

## 🎁 Browser Compatibility

✅ Works on:

- Chrome, Firefox, Safari, Edge
- iOS Safari
- Chrome Mobile
- Samsung Internet

## 💡 Tips for Best Experience

1. **Test on Mobile** - Ensure it looks good on her phone
2. **Music Volume** - Adjust background music volume in `script.js` (line: `bgMusic.volume = 0.2`)
3. **Smooth Scrolling** - Use keyboard arrows or swipe on mobile
4. **Full Screen** - View on full screen for magical experience
5. **Print QR Code** - Print with good resolution for easier scanning

## 🔧 Troubleshooting

**QR Code not showing?**

- Ensure JavaScript is enabled
- Check browser console for errors (F12)
- Verify your website URL is correct

**Music not playing?**

- Browsers may block autoplay - ensure volume is muted first
- Click the music button to manually play

**Animations lagging?**

- Reduce number of confetti pieces
- Close other browser tabs
- Use hardware acceleration (usually default)

## 📧 Need Help?

For deployment issues, check:

- [GitHub Pages Docs](https://pages.github.com/)
- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)

## ❤️ Made with Love

This website is designed to make someone feel special on their birthday.
Feel free to modify and personalize it!

---

**Happy Birthday to your Best Friend!** 🎂💖✨
