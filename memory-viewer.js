// Memory data for each category with photos and videos
const memoriesDatabase = {
    0: {
        type: 'romantic',
        title: 'Our First Memory 🌟',
        intro: 'The moment that started it all...',
        items: [
            { image: 'pictures/memory1.jpg', caption: 'Our First Memory' },
            { image: 'pictures/memory2.jpg', caption: 'When everything began' },
            { image: 'pictures/memory3.jpg', caption: 'A moment I\'ll never forget' },
            { image: 'pictures/memory4.jpg', caption: 'The start of forever' }
        ]
    },
    1: {
        type: 'funny',
        title: 'Hatiiiii\'s Funniest Moments 😄',
        intro: 'You crack me up every single day!',
        items: [
            { image: 'pictures/memory5.jpg', caption: '' },
            { image: 'pictures/memory6.JPG', caption: 'Such a cutie you are💕' },
            { image: 'pictures/memory7.mp4', caption: 'Classic Hasti moment 😆' },
            { image: 'pictures/memory8.jpg', caption: 'Laughing at your own joke 🤣'},
            { image: 'pictures/memory9.mp4', caption: 'Pure joy in one frame 💕' },
            { image: 'pictures/memory10.jpg', caption: 'That silly face😄' },
            { image: 'pictures/memory11.jpg', caption: 'That silly face 😂' },
            { image: 'pictures/memory12.jpg', caption: 'Your hilarious expressions crack me up 😆' },
            { image: 'pictures/memory13.jpg', caption: 'Forever laughing and making memories together 🎉' }
        ]
    },
    2: {
        type: 'adventure',
        title: 'Unforgettable Times ✨',
        intro: 'Every moment with you is an adventure',
        items: [
            { image: '', caption: 'Exploring the world together' },
            { image: '', caption: 'You, me, and endless memories' },
            { image: '', caption: 'Adventure awaits' },
            { image: '', caption: 'Best views with you' },
            { image: '', caption: 'Forever wandering with you' }
        ]
    },
    3: {
        type: 'beautiful',
        title: 'Our Beautiful Moments 🎉',
        intro: 'These are the moments I treasure',
        items: [
            { image: '', caption: 'A moment in time' },
            { image: '', caption: 'Pure happiness' },
            { image: '', caption: 'You being you' },
            { image: '', caption: 'My favorite person' },
            { image: '', caption: 'Forever cherished' }
        ]
    },
    4: {
        type: 'love',
        title: 'Pure Friendship Love 💞',
        intro: 'This is what true friendship looks like',
        items: [
            { image: 'pictures/vd.mp4', caption: 'A bond forever that nothing can break 💞' },
            { image: '', caption: 'My safe place' },
            { image: '', caption: 'You mean everything' },
            { image: '', caption: 'Soul sisters' },
            { image: '', caption: 'Always and forever' }
        ]
    }
};

let currentMemoryId = 0;
let currentImageIndex = 0;
let memoryType = 'romantic';
let touchStartX = 0;

// Open memory viewer
function openMemoryViewer(memoryId) {
    currentMemoryId = memoryId;
    currentImageIndex = 0;
    
    const memory = memoriesDatabase[memoryId];
    memoryType = memory.type;
    
    const modal = document.getElementById('memoryModal');
    const container = document.getElementById('memoryContainer');
    
    // Get appropriate template
    let templateId = memoryType + 'Template';
    const template = document.getElementById(templateId);
    
    if (template) {
        container.innerHTML = template.innerHTML;
        attachEventListeners();
        displayMemory();
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Display current memory
function displayMemory() {
    const memory = memoriesDatabase[currentMemoryId];
    const item = memory.items[currentImageIndex];
    
    // Update title and counter
    document.querySelectorAll('#memoryTitle').forEach(el => {
        el.textContent = memory.title;
    });
    document.getElementById('currentIndex').textContent = currentImageIndex + 1;
    document.getElementById('totalImages').textContent = memory.items.length;
    
    // Update content based on type
    switch(memoryType) {
        case 'romantic':
            displayRomantic(item);
            break;
        case 'funny':
            displayFunny(memory);
            break;
        case 'adventure':
            displayAdventure(item);
            break;
        case 'beautiful':
            displayBeautiful(item);
            break;
        case 'love':
            displayLove(item);
            break;
    }
}

function displayRomantic(item) {
    if (item.image) {
        document.getElementById('romanticImage').src = item.image;
        document.getElementById('romanticImage').style.display = 'block';
    }
    document.getElementById('romanticIntro').textContent = item.caption;
}

function displayFunny(memory) {
    const grid = document.getElementById('funnyGrid');
    grid.innerHTML = '';
    
    memory.items.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'funny-item';
        
        // Check if it's a video or image
        let mediaHTML = '<div class="placeholder">📸</div>';
        if (item.image) {
            if (item.image.endsWith('.mp4')) {
                mediaHTML = `<video width="100%" height="100%" controls style="border-radius: 15px; object-fit: cover;">
                    <source src="${item.image}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>`;
            } else {
                mediaHTML = `<img src="${item.image}" alt="${item.caption}" style="border-radius: 15px; object-fit: cover;">`;
            }
        }
        
        const captionHTML = item.caption ? `<p class="funny-caption">${item.caption}</p>` : '';
        
        div.innerHTML = `
            ${mediaHTML}
            ${captionHTML}
        `;
        div.style.animationDelay = (index * 0.1) + 's';
        grid.appendChild(div);
    });
}

function displayAdventure(item) {
    document.getElementById('adventureImage').src = item.image || '';
    document.getElementById('adventureCaption').textContent = item.caption;
    const locationElement = document.getElementById('adventureLocation');
    if (item.location) {
        locationElement.innerHTML = `<span class="location-pin">📍</span> ${item.location}`;
    } else {
        locationElement.innerHTML = '';
    }
}

function displayBeautiful(item) {
    document.getElementById('beautifulImage').src = item.image || '';
    document.getElementById('beautifulCaption').textContent = item.caption;
}

function displayLove(item) {
    const loveContainer = document.querySelector('.love-image-container');
    
    // Clear existing content
    if (loveContainer) {
        // Remove existing video if any
        const existingVideo = loveContainer.querySelector('video');
        if (existingVideo) existingVideo.remove();
        
        // Hide image
        const img = document.getElementById('loveImage');
        if (img) img.style.display = 'none';
        
        // Check if it's a video or image
        if (item.image) {
            if (item.image.endsWith('.mp4')) {
                // Create and display video
                const video = document.createElement('video');
                video.src = item.image;
                video.controls = true;
                video.style.width = '100%';
                video.style.height = '400px';
                video.style.borderRadius = '15px';
                video.style.objectFit = 'cover';
                loveContainer.appendChild(video);
            } else {
                // Display image
                const img = document.getElementById('loveImage');
                if (img) {
                    img.src = item.image;
                    img.style.display = 'block';
                }
            }
        }
    }
    
    document.getElementById('loveCaption').textContent = item.caption;
}

// Navigation
function nextImage() {
    const memory = memoriesDatabase[currentMemoryId];
    if (currentImageIndex < memory.items.length - 1) {
        currentImageIndex++;
        displayMemory();
    }
}

function prevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        displayMemory();
    }
}

// Close modal
function closeMemoryViewer() {
    const modal = document.getElementById('memoryModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Attach event listeners to dynamically created elements
function attachEventListeners() {
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const closeBtn = document.getElementById('closeModal');
    
    if (nextBtn) nextBtn.addEventListener('click', nextImage);
    if (prevBtn) prevBtn.addEventListener('click', prevImage);
    if (closeBtn) closeBtn.addEventListener('click', closeMemoryViewer);
    
    // Swipe support
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchend', handleTouchEnd, false);
}

function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].clientX;
}

function handleTouchEnd(e) {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            nextImage();
        } else {
            prevImage();
        }
    }
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (document.getElementById('memoryModal').classList.contains('active')) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') closeMemoryViewer();
    }
});

// Close on background click
document.addEventListener('click', (e) => {
    const modal = document.getElementById('memoryModal');
    if (e.target === document.querySelector('.memory-modal-overlay')) {
        closeMemoryViewer();
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Music button
    const musicBtn = document.getElementById('musicBtn');
    const bgMusic = document.getElementById('bgMusic');
    
    if (musicBtn) {
        musicBtn.addEventListener('click', function() {
            if (bgMusic.paused) {
                bgMusic.play();
                musicBtn.classList.add('playing');
            } else {
                bgMusic.pause();
                musicBtn.classList.remove('playing');
            }
        });
    }
    
    // Check if opened from index.html
    const params = new URLSearchParams(window.location.search);
    const memoryId = params.get('memory');
    
    if (memoryId !== null) {
        openMemoryViewer(parseInt(memoryId));
    }
    
    // Heart cursor
    createHeartCursor();
});

function createHeartCursor() {
    document.addEventListener('mousemove', (e) => {
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

console.log('%c💖 Memory Viewer Loaded!', 'font-size: 24px; color: #ff69b4;');
console.log('%cClick on memory cards to open beautiful galleries!', 'font-size: 14px; color: #c4b5fd;');
