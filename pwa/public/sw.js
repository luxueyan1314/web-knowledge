const CACHE_NAME = "cache_v2";

//主要就是缓存内容
self.addEventListener("install", async e => {
        // console.log("install", e)
        //会让service worker跳过等待，直接进入到activate状态
        const cache = await caches.open(CACHE_NAME);
        await cache.addAll([
            '/',
            '/style.css',
            '/image/01.jpg',
            '/image/02.jpg',
            '/index.js',
            'manifest.json'
        ])
        self.skipWaiting()
            //e.waitUntil();
    })
    //主要清除旧的缓存
self.addEventListener("activate", async e => {
        // console.log("activate", e)
        const keys = await caches.keys();
        keys.forEach(key => {
                if (key != CACHE_NAME) {
                    caches.delete(key)
                }
            })
            //service work激活后，立即获取控制权
            //https://developer.mozilla.org/zh-CN/docs/Web/API/Clients/claim
        self.clients.claim();
    })
    //半段当前是否能够请求到，如果能够请求成功返回相应成功的结果，如果断网，请求失败，读取caches缓存。
self.addEventListener("fetch", e => {
    // console.log("fetch", e)
    const req = e.request;

    // 判断是否同源origin
    const url = new URL(req.url);

    if (url.origin !== self.origin) { //如果不同源
        return;
    }
    console.log("req.url------", req.url);

    if (req.url.includes("/api")) { //接口优先走网络
        //给浏览器
        e.respondWith(networkFirst(req));
    } else { //静态文件优先走缓存
        //给浏览器
        e.respondWith(cacheFirst(req));
    }
})

//网络优先
async function networkFirst(req) {
    const cache = await caches.open(CACHE_NAME);
    try {
        const fresh = await fetch(req);
        console.log("fresh----------", fresh);
        //网络优先拿到的数据应该放到缓存里
        cache.put(req, fresh.clone())
        return fresh
    } catch (error) {
        console.log("networkFirst======", error)

        const cached = await cache.match(req);
        return cached;
    }
}
//缓存优先
async function cacheFirst(req) {
    const cache = await caches.open(CACHE_NAME);
    try {

        const cached = await cache.match(req);
        return cached;
    } catch (error) {
        console.log("cacheFirst======", error)
        const fresh = await fetch(req)
        cache.put(req, fresh.clone())
        return fresh;
    }
}