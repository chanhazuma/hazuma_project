const CACHE = "hazuma-pwa-v2";

// install
self.addEventListener("install", e => {
  self.skipWaiting();
});

// activate
self.addEventListener("activate", e => {
  e.waitUntil(self.clients.claim());
});

// fetch
self.addEventListener("fetch", e => {
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(cache => cache.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});