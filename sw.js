const CACHE_NAME = 'farmcraft-v2';
const ASSETS = [
    './index.html',
    './manifest.json',
    'https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3',
    'https://cdn.pixabay.com/animation/2023/06/25/21/56/21-56-06-69_512.gif'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request))
    );
});
