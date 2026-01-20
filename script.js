// ===== CONFIGURATION =====
const CONFIG = {
    friendName: "Hasti", // Your best friend's name
    websiteUrl: "http://10.203.109.119:8001", // Update with your actual domain
};

// ===== BIRTHDAY MESSAGE =====
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


// ===== STATE MANAGEMENT =====
let currentSection = 0;
const sections = ['homeSection', 'messageSection', 'gallerySection', 'surpriseSection', 'loveSection'];
let isTyping = false;
let musicStarted = false;

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', function() {
    initializeMusicGate();
    initializeEventListeners();
    generateQRCode();
    createHeartCursor();
});

// ===== MUSIC GATE LOGIC =====
function initializeMusicGate() {
    console.log('🎵 Initializing Music Gate...');
    
    const bgMusic = document.getElementById('bgMusic');
    const gateMusicPlayBtn = document.getElementById('gateMusicPlayBtn');
    const continueBtn = document.getElementById('continueBtn');
    const musicStatusText = document.getElementById('musicStatusText');
    const vinylDisc = document.getElementById('vinylDisc');
    const musicGateSection = document.getElementById('musicGateSection');
    
    console.log('Elements found:', {
        bgMusic: !!bgMusic,
        gateMusicPlayBtn: !!gateMusicPlayBtn,
        continueBtn: !!continueBtn,
        musicStatusText: !!musicStatusText,
        vinylDisc: !!vinylDisc,
        musicGateSection: !!musicGateSection
    });
    
    if (!gateMusicPlayBtn || !continueBtn) {
        console.error('❌ Required elements not found!');
        return;
    }
    
    // Try to autoplay music on page load
    setTimeout(() => {
        if (bgMusic) {
            bgMusic.play().catch(error => {
                console.log('Autoplay blocked by browser.');
            });
        }
    }, 500);
    
    // Play button click handler
    gateMusicPlayBtn.onclick = function(e) {
        console.log('▶️ Play button clicked!');
        e.stopPropagation();
        
        if (bgMusic.paused) {
            bgMusic.play().then(() => {
                console.log('✅ Music playing!');
                gateMusicPlayBtn.classList.add('playing');
                if (vinylDisc) vinylDisc.classList.add('playing');
                musicStatusText.textContent = '✨ Music is playing... enjoy the magic 💫';
            }).catch(error => {
                console.error('Playback error:', error);
                musicStatusText.textContent = '⚠️ Music unavailable, but you can still continue!';
            });
        } else {
            bgMusic.pause();
            gateMusicPlayBtn.classList.remove('playing');
            if (vinylDisc) vinylDisc.classList.remove('playing');
            musicStatusText.textContent = 'Click play again to enjoy the music 💫';
        }
    };
    
    // Continue button click handler - always allows proceeding
    continueBtn.onclick = function(e) {
        console.log('🎉 Let\'s Begin button clicked!');
        e.stopPropagation();
        
        musicGateSection.classList.add('hidden');
        setTimeout(() => {
            musicGateSection.style.display = 'none';
            // Show home section
            document.getElementById('homeSection').style.display = 'flex';
            if (bgMusic && !bgMusic.paused) {
                bgMusic.play(); // Continue music if it was playing
            }
        }, 800);
    };
    
    console.log('✅ Music gate initialized successfully!');
}

// ===== EVENT LISTENERS =====
function initializeEventListeners() {
    // Start button
    document.getElementById('startBtn').addEventListener('click', nextSection);

    // Music button
    const musicBtn = document.getElementById('musicBtn');
    const bgMusic = document.getElementById('bgMusic');
    
    musicBtn.addEventListener('click', function() {
        if (bgMusic.paused) {
            bgMusic.play();
            musicBtn.classList.add('playing');
        } else {
            bgMusic.pause();
            musicBtn.classList.remove('playing');
        }
    });

    // Hug button
    document.getElementById('hugBtn').addEventListener('click', createHeartExplosion);

    // Navigation dots
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.addEventListener('click', () => goToSection(index));
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextSection();
        if (e.key === 'ArrowLeft') prevSection();
    });

    // Touch swipe navigation
    let touchStartX = 0;
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });

    document.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        if (touchStartX - touchEndX > 50) nextSection();
        if (touchEndX - touchStartX > 50) prevSection();
    });
}

// ===== SECTION NAVIGATION =====
function nextSection() {
    if (currentSection < sections.length - 1) {
        goToSection(currentSection + 1);
    }
}

function prevSection() {
    if (currentSection > 0) {
        goToSection(currentSection - 1);
    }
}

function goToSection(index) {
    if (index < 0 || index >= sections.length) return;

    // Hide all sections
    sections.forEach(section => {
        document.getElementById(section).style.display = 'none';
    });

    // Show target section
    currentSection = index;
    document.getElementById(sections[index]).style.display = 'flex';

    // Update navigation dots
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    // Trigger specific section animations
    if (index === 1) {
        setTimeout(typewriterEffect, 300);
    }

    window.scrollTo(0, 0);
}

// ===== TYPEWRITER EFFECT =====
function typewriterEffect() {
    if (isTyping) return;
    isTyping = true;

    const typewriterElement = document.getElementById('typewriterText');
    typewriterElement.textContent = '';

    let index = 0;
    const speed = 30;

    function type() {
        if (index < birthdayLetter.length) {
            const char = birthdayLetter[index];
            
            if (char === '\n') {
                typewriterElement.innerHTML += '<br>';
            } else {
                typewriterElement.innerHTML += char;
            }

            index++;
            setTimeout(type, speed);
        } else {
            isTyping = false;
        }
    }

    type();
}

// ===== QR CODE GENERATION =====
function generateQRCode() {
    const qrcodeElement = document.getElementById('qrcode');
    
    // Clear previous QR code
    qrcodeElement.innerHTML = '';

    // Get current page URL for QR code
    const urlForQR = window.location.href;

    // Generate QR code
    new QRCode(qrcodeElement, {
        text: urlForQR,
        width: 250,
        height: 250,
        colorDark: "#ff69b4",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

// ===== CONFETTI ANIMATION =====
function createConfetti() {
    const container = document.getElementById('confetti-container');
    const confettiPieces = 50;
    const colors = ['#ff69b4', '#c4b5fd', '#87ceeb', '#ffd700', '#ffb6d9'];

    for (let i = 0; i < confettiPieces; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '0px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animation = `confettiFall ${2 + Math.random() * 1}s linear forwards`;
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';

        container.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
    }
}

// ===== HEART EXPLOSION =====
function createHeartExplosion() {
    createConfetti();
    createFloatingHearts();

    // Vibrate if available
    if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100, 50, 200]);
    }
}

function createFloatingHearts() {
    const container = document.body;
    const heartCount = 30;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.textContent = '💖';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = '50%';
        heart.style.fontSize = (10 + Math.random() * 20) + 'px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9998';
        heart.style.animation = `heartFloat ${2 + Math.random() * 1}s ease-out forwards`;

        container.appendChild(heart);

        setTimeout(() => heart.remove(), 3000);
    }
}

const heartFloatStyle = document.createElement('style');
heartFloatStyle.textContent = `
    @keyframes heartFloat {
        0% {
            opacity: 1;
            transform: translateY(0) translateX(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-200px) translateX(${Math.random() * 200 - 100}px) scale(0.5);
        }
    }
`;
document.head.appendChild(heartFloatStyle);

// ===== HEART CURSOR =====
function createHeartCursor() {
    const cursor = document.querySelector('.cursor-heart');
    
    document.addEventListener('mousemove', (e) => {
        // Occasionally create a heart at cursor position
        if (Math.random() > 0.95) {
            const heart = document.createElement('div');
            heart.className = 'cursor-heart';
            heart.textContent = '💖';
            heart.style.left = e.clientX + 'px';
            heart.style.top = e.clientY + 'px';
            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 2000);
        }
    });
}

// ===== AUTO-PLAY MUSIC (SOFT) =====
window.addEventListener('load', function() {
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.volume = 0.2; // Soft volume
    
    // Try to autoplay (might be blocked by browser)
    const playPromise = bgMusic.play();
    if (playPromise !== undefined) {
        playPromise.catch(() => {
            // Autoplay prevented, user must click
        });
    }
});

// ===== PARALLAX EFFECT (Optional) =====
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const decorations = document.querySelectorAll('.decoration');
    
    decorations.forEach((decoration, index) => {
        decoration.style.transform = `translateY(${scrollY * 0.5}px)`;
    });
});

// ===== MEMORY VIEWER SYSTEM =====
const memoriesDatabase = {
    0: {
        type: 'romantic',
        title: 'Our First Memory 🌟',
        items: [
            { image: 'pictures/memory2.jpg', caption: 'When everything began' },
            { image: 'pictures/memory1.jpg', caption: 'Our First Memory' },
            { image: 'pictures/memory3.jpg', caption: 'A moment I\'ll never forget' },
            { image: 'pictures/memory4.jpg', caption: 'The start of forever' }
        ]
    },
    1: {
        type: 'funny',
        title: 'Hatiiiii\'s Funniest Moments 😄',
        items: [
            { image: 'pictures/memory5.jpg', caption: 'That silly face when you\'re trying to be serious 😂', reaction: '😂' },
            { image: 'pictures/memory6.JPG', caption: 'Laughing at our own inside jokes 🤣', reaction: '🤣' },
            { image: 'pictures/memory7.mp4', caption: 'When you do something so ridiculous 😆', reaction: '😆' },
            { image: 'pictures/memory8.jpg', caption: 'Making everyone laugh around us 🎉', reaction: '🎉' },
            { image: 'pictures/memory9.mp4', caption: 'Pure joy and happiness with you 💕', reaction: '💕' },
            { image: 'pictures/memory10.jpg', caption: 'That unforgettable funny moment 😄', reaction: '😄' },
            { image: 'pictures/memory11.jpg', caption: 'Laughing till our stomachs hurt 🤣', reaction: '🤣' },
            { image: 'pictures/memory12.jpg', caption: 'Your hilarious expressions crack me up 😆', reaction: '😆' },
            { image: 'pictures/memory13.jpg', caption: 'Forever laughing and making memories together 🎉', reaction: '🎉' }
        ]
    },
    2: {
        type: 'adventure',
        title: 'Unforgettable Times ✨',
        items: [
            { image: 'pictures/memory17.jpg', caption: 'Your smile is my favorite memory 💖'},
            { image: 'pictures/memory18.jpg', caption: 'Sunshine and smiles with my favorite person 😊☀️'},
            { image: 'pictures/memory19.jpg', caption: 'Every moment with you is a celebration 🎆',}
        ]
    },
    3: {
        type: 'beautiful',
        title: 'Our Beautiful Moments 🎉',
        items: [
            { image: 'pictures/memory14.jpeg', caption: 'Golden hour glow', date: '2023-03-15' },
            { image: 'pictures/memory15.jpeg', caption: 'Pretty together', date: '2023-06-20' },
            { image: 'pictures/memory16.jpg', caption: 'Candid perfection', date: '2023-09-10' }
        ]
    },
    4: {
        type: 'love',
        title: 'Pure Friendship Love 💞',
        items: [
            { image: 'pictures/vd.mp4', caption: 'A bond forever that nothing can break 💞' },
            { image: 'pictures/memory20.jpg', caption: 'My safe place' },
            { image: 'pictures/memory21.jpg', caption: 'You mean everything' },
            { image: 'pictures/memory22.jpg', caption: 'Soul sisters' },
            { image: 'pictures/memory23.jpg', caption: 'Always and forever' }
        ]
    }
};

let currentMemoryId = null;
let currentMemoryIndex = 0;

function initializeMemoryViewer() {
    const memoryCards = document.querySelectorAll('.memory-card');
    
    memoryCards.forEach((card, index) => {
        card.addEventListener('click', () => openMemoryViewer(index));
    });

    // Close modal
    document.getElementById('closeMemoryModal').addEventListener('click', closeMemoryViewer);
    document.getElementById('memoryModal').addEventListener('click', (e) => {
        if (e.target.id === 'memoryModal') closeMemoryViewer();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (currentMemoryId !== null) {
            if (e.key === 'ArrowRight') nextMemory();
            if (e.key === 'ArrowLeft') prevMemory();
            if (e.key === 'Escape') closeMemoryViewer();
        }
    });

    // Touch swipe
    let touchStartX = 0;
    const modal = document.getElementById('memoryModal');
    
    modal.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });

    modal.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        if (touchStartX - touchEndX > 50) nextMemory();
        if (touchEndX - touchStartX > 50) prevMemory();
    });
}

function openMemoryViewer(memoryId) {
    currentMemoryId = memoryId;
    currentMemoryIndex = 0;
    
    const memory = memoriesDatabase[memoryId];
    const container = document.getElementById('memoryViewerContainer');
    
    container.innerHTML = `
        <div class="memory-header">
            <h3>${memory.title}</h3>
        </div>
        <div class="memory-gallery-${memory.type}">
            <div id="memoryContent"></div>
        </div>
        <div class="gallery-nav">
            <button id="prevMemoryBtn" class="nav-btn">← Prev</button>
            <span class="image-counter"><span id="currentIndex">1</span> / <span id="totalCount">${memory.items.length}</span></span>
            <button id="nextMemoryBtn" class="nav-btn">Next →</button>
        </div>
    `;

    // Add event listeners for navigation
    document.getElementById('prevMemoryBtn').addEventListener('click', prevMemory);
    document.getElementById('nextMemoryBtn').addEventListener('click', nextMemory);

    displayMemory();
    
    const modal = document.getElementById('memoryModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function displayMemory() {
    const memory = memoriesDatabase[currentMemoryId];
    const item = memory.items[currentMemoryIndex];
    const content = document.getElementById('memoryContent');

    let html = '';
    
    switch(memory.type) {
        case 'romantic':
            html = `
                <div class="romantic-viewer">
                    <div class="romantic-gallery">
                        <div class="romantic-image-wrapper">
                            <img src="${item.image}" alt="${item.caption}" class="romantic-image">
                        </div>
                        <p class="romantic-intro">${item.caption}</p>
                        <div class="romantic-hearts">
                            <div class="heart">💖</div>
                            <div class="heart">💕</div>
                            <div class="heart">✨</div>
                        </div>
                    </div>
                </div>
            `;
            break;
        
        case 'funny':
            // Check if it's a video or image
            let funnyMedia = `<img src="${item.image}" alt="${item.caption}" class="funny-image">`;
            if (item.image && item.image.endsWith('.mp4')) {
                funnyMedia = `<video width="100%" height="300px" controls style="border-radius: 15px; object-fit: cover;">
                    <source src="${item.image}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>`;
            }
            const funnyCaptionHTML = item.caption ? `<p class="funny-caption">${item.caption}</p>` : '';
            html = `
                <div class="funny-viewer">
                    ${funnyMedia}
                    ${funnyCaptionHTML}
                    <div class="emoji-reactions">
                        <span class="emoji-reaction">${item.reaction || ''}</span>
                        <span class="emoji-reaction">${item.reaction || ''}</span>
                        <span class="emoji-reaction">${item.reaction || ''}</span>
                    </div>
                </div>
            `;
            break;
        
        case 'adventure':
            const locationHTML = item.location ? `
                        <div class="location-overlay">
                            <div class="location-pin">📍</div>
                            <p>${item.location}</p>
                        </div>` : '';
            html = `
                <div class="adventure-viewer">
                    <div class="adventure-image-wrapper">
                        <img src="${item.image}" alt="${item.caption}" class="adventure-image">
                        ${locationHTML}
                    </div>
                </div>
            `;
            break;
        
        case 'beautiful':
            const captionHTML = item.caption ? `<p class="polaroid-caption">${item.caption}</p>` : '';
            html = `
                <div class="beautiful-viewer">
                    <div class="polaroid-card">
                        <img src="${item.image}" alt="${item.caption}" class="polaroid-image">
                        ${captionHTML}
                    </div>
                    <div class="sparkles">
                        <span>✨</span>
                        <span>✨</span>
                        <span>✨</span>
                    </div>
                </div>
            `;
            break;
        
        case 'love':
            // Check if it's a video or image
            let loveMedia = `<img src="${item.image}" alt="${item.caption}" class="love-image">`;
            if (item.image && item.image.endsWith('.mp4')) {
                loveMedia = `<video width="100%" height="400px" controls style="border-radius: 15px; object-fit: cover;">
                    <source src="${item.image}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>`;
            }
            html = `
                <div class="love-viewer">
                    <div class="love-background"></div>
                    ${loveMedia}
                    <p class="love-caption">${item.caption}</p>
                    <div class="floating-hearts-love">
                        <span class="heart-float">💖</span>
                        <span class="heart-float">💖</span>
                        <span class="heart-float">💖</span>
                        <span class="heart-float">💖</span>
                    </div>
                </div>
            `;
            break;
    }

    content.innerHTML = html;
    document.getElementById('currentIndex').textContent = currentMemoryIndex + 1;
}

function nextMemory() {
    const memory = memoriesDatabase[currentMemoryId];
    if (currentMemoryIndex < memory.items.length - 1) {
        currentMemoryIndex++;
        displayMemory();
    }
}

function prevMemory() {
    if (currentMemoryIndex > 0) {
        currentMemoryIndex--;
        displayMemory();
    }
}

function closeMemoryViewer() {
    const modal = document.getElementById('memoryModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentMemoryId = null;
}

// Initialize memory viewer when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Existing initialization code...
    
    // Add memory viewer initialization
    setTimeout(() => {
        initializeMemoryViewer();
    }, 500);
});

// ===== CONSOLE MESSAGE =====
console.log('%c🎂 Happy Birthday! 💖', 'font-size: 30px; color: #ff69b4;');
console.log('%cThis page was made with love for you! 💕', 'font-size: 16px; color: #c4b5fd;');
console.log('%cEnjoy every moment of your special day!', 'font-size: 16px; color: #87ceeb;');
