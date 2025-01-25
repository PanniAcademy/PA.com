console.log("Checking PWA Mode...");

function isPWA() {
    return window.matchMedia('(display-mode: standalone)').matches ||
           navigator.standalone ||
           document.referrer.startsWith('android-app://');
}

if (isPWA()) {
    console.log('App is running as PWA');
} else {
    console.log('App is running in a browser');
    window.location.href = "index.html";  // Ensure web users go to the correct version
}

// Register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(reg => console.log('Service Worker Registered for PWA'))
        .catch(err => console.error('Service Worker registration failed:', err));
}

console.log("Running PWA Version");
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

