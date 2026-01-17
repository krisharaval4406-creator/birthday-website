/**
 * INTEGRATION EXAMPLE FOR script.js
 * 
 * Copy these functions into your existing script.js
 * Update the CONFIG object with your website URL
 * 
 * This ensures the QR code URL matches your main website URL
 */

// ============================================
// UPDATE YOUR EXISTING CONFIG OBJECT
// ============================================

const CONFIG = {
    friendName: "Hasti", // Keep your existing name
    websiteUrl: "https://yourdomain.com/birthday", // ← UPDATE TO YOUR DEPLOYED URL
    // For local testing: "http://localhost:8000"
    // For production: "https://yourdomain.com/birthday"
};

// ============================================
// ADD THIS FUNCTION AFTER CONFIG DEFINITION
// ============================================

/**
 * Initialize QR Code on page load
 * This runs automatically when the page loads
 */
function initializeQRCodeSection() {
    // Check if QRCode library is loaded
    if (typeof QRCode === 'undefined') {
        console.warn('QRCode library not found. Make sure to include it in your HTML <head>');
        return;
    }

    // Check if container exists
    const container = document.getElementById('qrCode-embedded');
    if (!container) {
        console.warn('QR code container not found in HTML');
        return;
    }

    // Clear existing content
    container.innerHTML = '';

    // Create QR code using CONFIG.websiteUrl
    try {
        new QRCode(container, {
            text: CONFIG.websiteUrl,
            width: 260,
            height: 260,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H, // High error correction
            useSVG: false
        });
        console.log('✓ QR Code initialized with URL:', CONFIG.websiteUrl);
    } catch (error) {
        console.error('Error initializing QR code:', error);
    }
}

/**
 * Download QR Code as PNG image
 */
function downloadQRCode() {
    const canvas = document.querySelector('#qrCode-embedded canvas');
    
    if (!canvas) {
        alert('QR Code not found. Please refresh the page.');
        return;
    }

    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'hasti-birthday-qr.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/**
 * Print QR Code
 */
function printQRCode() {
    const canvas = document.querySelector('#qrCode-embedded canvas');
    
    if (!canvas) {
        alert('QR Code not found. Please refresh the page.');
        return;
    }

    const printWindow = window.open('', '_blank');
    const imageData = canvas.toDataURL('image/png');

    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Print QR Code</title>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    background: white;
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 20px;
                }
                .print-container {
                    text-align: center;
                }
                h2 {
                    color: #333;
                    margin-bottom: 20px;
                }
                img {
                    max-width: 400px;
                    border: 2px solid #ddd;
                    padding: 10px;
                    background: white;
                }
                p {
                    color: #666;
                    margin-top: 20px;
                    font-size: 14px;
                }
                @media print {
                    body { padding: 0; }
                    img { border: none; }
                }
            </style>
        </head>
        <body>
            <div class="print-container">
                <h2>🎁 Birthday Wishes QR Code</h2>
                <img src="${imageData}" alt="QR Code" />
                <p>Scan this QR code to open the birthday wishes website</p>
            </div>
        </body>
        </html>
    `);
    printWindow.document.close();
    setTimeout(() => printWindow.print(), 250);
}

/**
 * Share QR Code URL
 */
function shareQRCode() {
    if (navigator.share) {
        navigator.share({
            title: '🎁 Birthday Wishes',
            text: 'Check out these beautiful birthday wishes!',
            url: CONFIG.websiteUrl
        }).catch(err => {
            if (err.name !== 'AbortError') {
                console.error('Share failed:', err);
            }
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(CONFIG.websiteUrl).then(() => {
            alert('URL copied to clipboard!');
        }).catch(() => {
            alert('Could not copy URL. Please try again.');
        });
    }
}

/**
 * Copy URL to clipboard
 */
function copyQRURL() {
    navigator.clipboard.writeText(CONFIG.websiteUrl).then(() => {
        alert('✓ URL copied to clipboard!');
    }).catch(() => {
        alert('Failed to copy URL');
    });
}

// ============================================
// AUTO-INITIALIZE ON PAGE LOAD
// ============================================

// Add this to your existing DOMContentLoaded event listener
// Or create a new one if you don't have one:

document.addEventListener('DOMContentLoaded', function() {
    // ... your existing code ...
    
    // Initialize QR code
    initializeQRCodeSection();
    
    // ... rest of your code ...
});

// ============================================
// USAGE IN HTML
// ============================================

/*
Add this to your index.html <head>:

<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>

Add this to your HTML body where you want the QR code:

<section id="qr-section" class="qr-section-container">
    <div class="qr-wrapper">
        <h2>📱 Share This Magic</h2>
        <p class="qr-subtitle">Scan to revisit these beautiful wishes anytime</p>

        <div class="qr-display">
            <div id="qrCode-embedded"></div>
        </div>

        <div class="qr-actions">
            <button class="qr-btn qr-btn-download" onclick="downloadQRCode()">
                📥 Download QR
            </button>
            <button class="qr-btn qr-btn-share" onclick="shareQRCode()">
                🔗 Share Link
            </button>
        </div>

        <p class="qr-hint">💡 Works on all devices: Android, iOS, Windows & Mac</p>
    </div>
</section>

Add this CSS to your style.css:

.qr-section-container {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
    border-radius: 20px;
    padding: 50px 30px;
    margin: 60px auto;
    max-width: 500px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.qr-wrapper h2 {
    font-size: 28px;
    color: #333;
    margin-bottom: 10px;
    font-weight: 700;
}

.qr-subtitle {
    color: #777;
    font-size: 14px;
    margin-bottom: 30px;
}

.qr-display {
    background: white;
    border-radius: 15px;
    padding: 25px;
    margin: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    min-height: 320px;
}

.qr-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin: 25px 0;
}

.qr-btn {
    padding: 12px 20px;
    border: none;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.qr-btn-download {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.qr-btn-download:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
}

.qr-btn-share {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.qr-btn-share:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(245, 87, 108, 0.4);
}

.qr-hint {
    color: #999;
    font-size: 12px;
    margin-top: 15px;
    font-style: italic;
}

@media (max-width: 600px) {
    .qr-section-container {
        padding: 35px 20px;
        margin: 40px 15px;
    }

    .qr-actions {
        grid-template-columns: 1fr;
    }
}

@media print {
    .qr-actions,
    .qr-hint,
    .qr-subtitle {
        display: none;
    }
}

========================================
THAT'S IT!
========================================

The QR code will now:
✓ Show up on your website
✓ Use your website URL from CONFIG
✓ Allow users to download/print/share
✓ Work on all devices
✓ Open your website when scanned

Just make sure to update the URL!
*/
