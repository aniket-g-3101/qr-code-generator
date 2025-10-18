
const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('gen-btn');
const downloadBtn = document.getElementById('download-btn');
const qrContainer = document.querySelector('.qr-body');

let qr;

// Generate QR
generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    generateQR();
});

function generateQR() {
    qrContainer.innerHTML = ''; // Clear old QR
    const size = sizes.value;
    if (qrText.value.trim().length === 0) {
        alert('Please enter text or URL!');
        return;
    }

    qr = new QRCode(qrContainer, {
        text: qrText.value,
        width: size,
        height: size,
        colorDark: '#000',
        colorLight: '#fff',
    });
}
sizes.addEventListener('change',(e)=>{
    size=e.target.value;
    generateQR();
})
// Download QR
downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const img = qrContainer.querySelector('img');
    if (img) {
        const link = document.createElement('a');
        link.href = img.src;
        link.download = 'qrcode.png';
        link.click();
    } else {
        alert('Please generate a QR code first!');
    }
});