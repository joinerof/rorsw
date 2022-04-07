// simple worker that caches 404 page to be displayed on any fetch error
const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
    event.waitUntil(
        addResourcesToCache([
            "/404.html",
        ])
    );
});

const fetchWithFallback = async (request) => {
    try {
        const response = await fetch(request);
        return response;
    } catch(error) {
        const response = await caches.match("/404.html");
        console.error(error);
        return response;
    }
}

self.addEventListener("fetch", async (event) => {
    event.respondWith(fetchWithFallback(event.request));
});
