/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d3cee70500e5d637df621076b3f3133f"
  },
  {
    "url": "about/index.html",
    "revision": "ff222f83a81ff42b37396b57fb1dcd62"
  },
  {
    "url": "assets/css/0.styles.e26da602.css",
    "revision": "97ea433acd1d70767f8144e1489e8277"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5ef41f5b.js",
    "revision": "206690807b71fa47ecb18e4c35db6636"
  },
  {
    "url": "assets/js/11.c24ed43a.js",
    "revision": "2a45685f97a7921c06f149dec0368a1e"
  },
  {
    "url": "assets/js/12.0565ff5c.js",
    "revision": "651bd4bac8fbfb3562a5fae810b0cf0f"
  },
  {
    "url": "assets/js/2.5b5f5760.js",
    "revision": "23457ff9b78b6cc54164e3ad4a49af7e"
  },
  {
    "url": "assets/js/3.3495b05e.js",
    "revision": "e83d71bc55c379da1025829c3985a2ca"
  },
  {
    "url": "assets/js/4.a217c04d.js",
    "revision": "e4e227e372f172adcb34a4a94cc831ef"
  },
  {
    "url": "assets/js/5.02c4e4dc.js",
    "revision": "0f979812ee941f97eed28b668470e2c5"
  },
  {
    "url": "assets/js/6.01982e5d.js",
    "revision": "78fcba3b3e366c1778e9aee3ab97a3cc"
  },
  {
    "url": "assets/js/7.f8950a9b.js",
    "revision": "7ac2562abcbf5561477cac2d50c32f7b"
  },
  {
    "url": "assets/js/8.f2c421bd.js",
    "revision": "c8e61e457429c08c4dc9db17512f201d"
  },
  {
    "url": "assets/js/9.373f0b30.js",
    "revision": "7733f69c07a7882a899b0fca413a66d1"
  },
  {
    "url": "assets/js/app.9498922a.js",
    "revision": "a3d7bc2a6ffe59ec2de60acae43e2c86"
  },
  {
    "url": "category/index.html",
    "revision": "56cdedea5f444a8c843a8daf047d912b"
  },
  {
    "url": "category/summary/index.html",
    "revision": "6a2371cdc68f30d6b464e781d023582c"
  },
  {
    "url": "img/cover.jpg",
    "revision": "8a8a9db70d3e9bc172fab277b92a539a"
  },
  {
    "url": "index.html",
    "revision": "f6322cbb063397edae2782ce72d378f0"
  },
  {
    "url": "posts/2019/07/10/hello/index.html",
    "revision": "ba00711d7fb7add033c8f295dfa4a028"
  },
  {
    "url": "posts/index.html",
    "revision": "23b4facff8d86a7da610e00dde91f33a"
  },
  {
    "url": "tag/index.html",
    "revision": "d72fa331ccfcb442ad4f6c929a7a1b00"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "0bbb8cdd0600015780faf3165d7a5f89"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "27192210cd04bd653266771389ab40fe"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
