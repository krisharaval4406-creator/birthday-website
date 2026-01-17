// Memory data with details
const memoriesData = [
    {
        id: 0,
        emoji: "📷",
        title: "Our First Memory 🌟",
        description: "The moment that started it all... I still remember every detail! ✨ This is where our beautiful friendship began, and honestly, I'm so grateful for that moment. You were there with your genuine smile and your kind heart. Every time I think about our first meeting, my heart smiles. These beautiful moments are forever! 💕",
        image: "pictures/memory1.jpg",
        video: ""
    },
    {
        id: 1,
        emoji: "😂",
        title: "Hatiiiii's Funniest Moments 😄",
        description: "You crack me up every single day! Your laugh is contagious and I love it! 😂 Whether it's those silly jokes, those random midnight calls, or just the way you make faces when you're confused... everything about you is hilarious! I have so many memories of laughing till my stomach hurts with you. These are the moments I cherish the most! Add your funniest photos or videos here! 🎬",
        image: "",
        video: ""
    },
    {
        id: 2,
        emoji: "🌍",
        title: "Adventures With You ✈️",
        description: "Every moment with you is an adventure. Let's make many more memories! 🌍 From planning trips to exploring new places, you make everything more exciting. Whether it's a simple walk or a big adventure, being with you is always unforgettable. You bring out the adventurer in me! Share your favorite adventure photos and videos here! 📸🎥",
        image: "",
        video: ""
    },
    {
        id: 3,
        emoji: "💐",
        title: "Our Beautiful Moments 🎉",
        description: "These are the moments I treasure the most. Thank you for being you! 🎉 The late-night talks, the quiet car rides, the random hangouts... all these simple moments with you are precious. They might seem ordinary to others, but to me, they're absolutely extraordinary because they're with you! Add your most beautiful memories here! 💕",
        image: "",
        video: ""
    },
    {
        id: 4,
        emoji: "💕",
        title: "Pure Friendship Love 💞",
        description: "This is what true friendship looks like. Forever grateful for you! 🤍 A friendship like ours doesn't come every day. The unconditional support, the honest conversations, the silly moments, and the comfort you give me... it all means the world! You're not just my friend, you're family. Share what friendship means to you! 💕",
        image: "",
        video: ""
    }
];

// Get memory ID from URL
function getMemoryId() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id')) || 0;
}

// Load memory details
function loadMemoryDetail() {
    const memoryId = getMemoryId();
    const memory = memoriesData[memoryId];
    
    if (memory) {
        document.getElementById('memoryEmoji').textContent = memory.emoji;
        document.getElementById('memoryTitle').textContent = memory.title;
        document.getElementById('memoryDescription').textContent = memory.description;
        
        // Show image if exists
        if (memory.image) {
            const img = document.getElementById('memoryImage');
            img.src = memory.image;
            img.style.display = 'block';
        }
        
        // Show video if exists
        if (memory.video) {
            const video = document.getElementById('memoryVideo');
            video.src = memory.video;
            video.style.display = 'block';
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadMemoryDetail();
    
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
    
    // Share button
    document.getElementById('shareBtn').addEventListener('click', function() {
        const memoryId = getMemoryId();
        const memory = memoriesData[memoryId];
        const shareText = `Check out this beautiful memory: "${memory.title}" from Hasti's Birthday Surprise! 💖`;
        
        if (navigator.share) {
            navigator.share({
                title: memory.title,
                text: shareText,
                url: window.location.href
            });
        } else {
            alert(shareText + '\n\nURL: ' + window.location.href);
        }
    });
    
    // Back button
    document.querySelector('.back-btn').addEventListener('click', function(e) {
        e.preventDefault();
        window.history.back();
    });
    
    // Heart cursor
    createHeartCursor();
});

// Heart cursor effect
function createHeartCursor() {
    document.addEventListener('mousemove', (e) => {
        const heart = document.createElement('div');
        heart.className = 'cursor-heart';
        heart.textContent = '💕';
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 2000);
    });
}

console.log('%c🎂 Happy Birthday! 💖', 'font-size: 30px; color: #ff69b4;');
console.log('%cMemory Page Loaded!', 'font-size: 16px; color: #c4b5fd;');
