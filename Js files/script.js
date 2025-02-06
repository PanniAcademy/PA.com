// Open Sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

// Close Sidebar
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
console.log("Running Web Version");

// Ensure service worker is registered
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(reg => console.log('Service Worker Registered for Web'))
        .catch(err => console.error('Service Worker registration failed:', err));
}

// Install PWA Button
const installButton = document.getElementById("installButton");
installButton.style.display = "block";
installButton.addEventListener("click", () => {
    alert("Please install from the browser menu.");
});
function requestAvatarPermission() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            toggleAvatar();
            stream.getTracks().forEach(track => track.stop());
        })
        .catch(function (err) {
            console.error("Camera access denied:", err);
            alert("Camera access is required to view Panni AI Avatar.");
        });
}

function toggleAvatar() {
    const avatarContainer = document.getElementById('ar-avatar-container');
    avatarContainer.style.display = avatarContainer.style.display === 'none' ? 'block' : 'none';
}
