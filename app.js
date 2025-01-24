console.log("Running PWA Version");

if (window.matchMedia('(display-mode: standalone)').matches) {
    console.log('App is running in standalone mode');
} else {
    window.location.href = "index.html";  // Redirect web users to index.html
}

// Register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(reg => console.log('Service Worker Registered for PWA'))
        .catch(err => console.error('Service Worker registration failed:', err));
}
