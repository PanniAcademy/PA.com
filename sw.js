// Firebase Messaging Service Worker

self.addEventListener("push", (event) => {

    const notif = event.data.json().notification;

    event.waitUntil(self.registration.showNotification(notif.title , {
        body: notif.body,
        icon: notif.image,
        data: {
            url: notif.click_action
        }
    }));

});

self.addEventListener("notificationclick", (event) => {

    event.waitUntil(clients.openWindow(event.notification.data.url));

});

// Push Notification Event
self.addEventListener('push', function(event) {
  const data = event.data.json(); 
  console.log('Received push message:', data);

  const notificationOptions = {
    body: data.message,
    icon: '/path/to/your/icon.png'
  };
  self.registration.showNotification(data.title, notificationOptions);
});

const CACHE_NAME = 'panni-academy-cache-v2';
const urlsToCache = [
  '/index.html',
  '/app.html',
  '/Js files/web.js',
  'Js files/app.js',
  '/manifest.json',
  '/Images/32x32.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
    self.skipWaiting();
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            return cachedResponse || fetch(event.request);
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});
