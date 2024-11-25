const CACHE_NAME = 'offline-cache-v1';

self.addEventListener('install', event => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Opcional: Si tienes recursos iniciales locales, puedes incluirlos aquí
      return cache.addAll([]);
    })
  );
});

self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', key);
            return caches.delete(key);
          }
        })
      )
    )
  );
});

self.addEventListener('fetch', event => {
  // Maneja solo las solicitudes de la página `https://porttainobay.com`
  const requestUrl = new URL(event.request.url);

  if (requestUrl.origin === 'https://porttainobay.com') {
    event.respondWith(
      caches.match(event.request).then(response => {
        return (
          response ||
          fetch(event.request)
            .then(networkResponse => {
              return caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, networkResponse.clone());
                return networkResponse;
              });
            })
            .catch(() => {
              // Si la solicitud falla, opcionalmente devuelve un recurso predeterminado
              if (event.request.mode === 'navigate') {
                return caches.match('/offline.html'); // Puedes crear una página offline personalizada
              }
            })
        );
      })
    );
  }
});
