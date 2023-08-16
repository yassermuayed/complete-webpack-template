// /sw.js
self.addEventListener('install', (event) => {
  const cacheKey = 'MyFancyCacheName_v1';

  event.waitUntil(caches.open(cacheKey).then((cache) => cache.addAll([
    '/css/global.bc7b80b7.css',
    '/css/home.fe5d0b23.css',
    '/js/home.d3cc4ba4.js',
    '/js/jquery.43ca4933.js',
    '/index.html',
    '/manifest.json',
    '/sw.js',
    '/static/1.jpg',
    'index.css',
    'index.js',
  ])));
});
