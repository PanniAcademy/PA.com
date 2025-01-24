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
