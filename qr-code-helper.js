/**
 * QR CODE INTEGRATION HELPER
 * 
 * Simple utility functions for integrating QR codes into your website
 * Include this script in your index.html <head>
 */

// ============================================
// CONFIGURATION
// ============================================
const QR_CONFIG = {
    // UPDATE THIS WITH YOUR DEPLOYED URL
    websiteUrl: "http://10.203.109.119:8001",
    // For local testing: "http://10.203.109.119:8001"
    // For production: "https://yourdomain.com/birthday"
    
    // QR Code styling
    qrSize: 260,
    qrColorDark: '#000000',
    qrColorLight: '#ffffff',
    errorCorrection: 'H', // H = 30% error correction (recommended)
};

// ============================================
// QR CODE GENERATOR FUNCTION
// ============================================
function initializeQRCode(containerId = 'qrCode-embedded') {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID "${containerId}" not found`);
        return;
    }

    // Clear previous QR code if any
    container.innerHTML = '';

    // Create QR code
    try {
        new QRCode(container, {
            text: QR_CONFIG.websiteUrl,
            width: QR_CONFIG.qrSize,
            height: QR_CONFIG.qrSize,
            colorDark: QR_CONFIG.qrColorDark,
            colorLight: QR_CONFIG.qrColorLight,
            correctLevel: QRCode.CorrectLevel[QR_CONFIG.errorCorrection],
            useSVG: false
        });
        console.log('✓ QR Code initialized successfully');
    } catch (error) {
        console.error('Failed to initialize QR code:', error);
    }
}

// ============================================
// DOWNLOAD QR CODE
// ============================================
function downloadQRCode(filename = 'birthday-qr-code.png') {
    const canvas = document.querySelector('#qrCode-embedded canvas');
    
    if (!canvas) {
        console.error('QR Code canvas not found. Make sure QR code is initialized.');
        alert('QR Code not found. Please refresh the page.');
        return;
    }

    try {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        console.log('✓ QR Code downloaded successfully');
    } catch (error) {
        console.error('Failed to download QR code:', error);
        alert('Failed to download QR code. Please try again.');
    }
}

// ============================================
// PRINT QR CODE
// ============================================
function printQRCode() {
    const canvas = document.querySelector('#qrCode-embedded canvas');
    
    if (!canvas) {
        alert('QR Code not found. Please refresh the page.');
        return;
    }

    const printWindow = window.open('', '_blank');
    const imageData = canvas.toDataURL('image/png');

    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Print QR Code</title>
            <style>
                body {
                    margin: 0;
                    padding: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    background: white;
                    font-family: Arial, sans-serif;
                }
                .print-container {
                    text-align: center;
                    background: white;
                    padding: 30px;
                    border-radius: 10px;
                }
                h2 {
                    color: #333;
                    margin: 0 0 20px 0;
                    font-size: 24px;
                }
                img {
                    max-width: 500px;
                    width: 100%;
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
                    body {
                        padding: 0;
                        background: white;
                    }
                    .print-container {
                        padding: 0;
                        border: none;
                    }
                    h2 {
                        font-size: 20px;
                    }
                    img {
                        border: none;
                        max-width: 100%;
                    }
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
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
    
    // Trigger print dialog after a short delay
    setTimeout(() => {
        printWindow.print();
    }, 250);
    
    console.log('✓ Print dialog opened');
}

// ============================================
// COPY URL TO CLIPBOARD
// ============================================
function copyQRURLToClipboard() {
    navigator.clipboard.writeText(QR_CONFIG.websiteUrl).then(() => {
        console.log('✓ URL copied to clipboard');
        showNotification('✓ URL copied to clipboard!', 'success');
    }).catch(err => {
        console.error('Failed to copy URL:', err);
        showNotification('Failed to copy URL', 'error');
    });
}

// ============================================
// SHARE QR CODE (Web Share API)
// ============================================
function shareQRCode() {
    if (!navigator.share) {
        console.log('Web Share API not supported, falling back to copy');
        copyQRURLToClipboard();
        return;
    }

    navigator.share({
        title: '🎁 Birthday Wishes',
        text: 'Check out this beautiful birthday wishes website!',
        url: QR_CONFIG.websiteUrl
    }).then(() => {
        console.log('✓ Shared successfully');
    }).catch(err => {
        if (err.name !== 'AbortError') {
            console.error('Error sharing:', err);
        }
    });
}

// ============================================
// GET QR CODE AS DATA URL
// ============================================
function getQRCodeDataURL() {
    const canvas = document.querySelector('#qrCode-embedded canvas');
    if (!canvas) {
        console.error('QR Code canvas not found');
        return null;
    }
    return canvas.toDataURL('image/png');
}

// ============================================
// RESIZE QR CODE
// ============================================
function resizeQRCode(newSize) {
    if (newSize < 100 || newSize > 500) {
        console.error('QR code size must be between 100 and 500 pixels');
        return;
    }
    QR_CONFIG.qrSize = newSize;
    initializeQRCode();
    console.log(`✓ QR Code resized to ${newSize}px`);
}

// ============================================
// CHANGE COLORS
// ============================================
function changeQRCodeColors(darkColor, lightColor) {
    QR_CONFIG.qrColorDark = darkColor;
    QR_CONFIG.qrColorLight = lightColor;
    initializeQRCode();
    console.log(`✓ Colors changed to Dark: ${darkColor}, Light: ${lightColor}`);
}

// ============================================
// VALIDATION
// ============================================
function validateQRConfiguration() {
    console.log('=== QR Code Configuration ===');
    console.log('Website URL:', QR_CONFIG.websiteUrl);
    console.log('QR Size:', QR_CONFIG.qrSize + 'x' + QR_CONFIG.qrSize);
    console.log('Dark Color:', QR_CONFIG.qrColorDark);
    console.log('Light Color:', QR_CONFIG.qrColorLight);
    console.log('Error Correction:', QR_CONFIG.errorCorrection);
    
    if (!QR_CONFIG.websiteUrl || QR_CONFIG.websiteUrl === 'https://yourdomain.com/birthday') {
        console.warn('⚠️ WARNING: Website URL not configured. Update QR_CONFIG.websiteUrl');
        return false;
    }
    
    console.log('✓ Configuration valid');
    return true;
}

// ============================================
// UTILITY: SHOW NOTIFICATION
// ============================================
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 12px 20px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;

    // Color based on type
    const colors = {
        success: '#4caf50',
        error: '#f44336',
        info: '#2196f3'
    };

    notification.style.backgroundColor = colors[type] || colors.info;
    notification.style.color = 'white';

    // Add CSS animation
    if (!document.querySelector('style[data-qr-notification]')) {
        const style = document.createElement('style');
        style.setAttribute('data-qr-notification', 'true');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(400px); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Auto-remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎁 QR Code Integration Helper Loaded');
    
    // Validate configuration
    validateQRConfiguration();
    
    // Initialize QR code when DOM is ready
    if (document.getElementById('qrCode-embedded')) {
        initializeQRCode('qrCode-embedded');
    }
    
    console.log('Ready to use QR code functions:');
    console.log('- initializeQRCode()');
    console.log('- downloadQRCode()');
    console.log('- printQRCode()');
    console.log('- copyQRURLToClipboard()');
    console.log('- shareQRCode()');
    console.log('- resizeQRCode(size)');
    console.log('- changeQRCodeColors(dark, light)');
});

// ============================================
// EXPORT FOR MODULE USAGE
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        QR_CONFIG,
        initializeQRCode,
        downloadQRCode,
        printQRCode,
        copyQRURLToClipboard,
        shareQRCode,
        getQRCodeDataURL,
        resizeQRCode,
        changeQRCodeColors,
        validateQRConfiguration
    };
}
