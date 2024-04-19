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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "b364d94cc1e25cfe936b8ac89e62f3b6"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "api/index.html",
    "revision": "c9da01672b917b58ae401760623a16af"
  },
  {
    "url": "assets/css/0.styles.a8d88e37.css",
    "revision": "4b858335eab0b0b582d4fc916d8c8b09"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.cc316f46.js",
    "revision": "1d6a2f22c9b053365bfd582cf9901ed9"
  },
  {
    "url": "assets/js/11.f89fdfa3.js",
    "revision": "7032f6efeddcaa4b4d8e0f6f163e8511"
  },
  {
    "url": "assets/js/12.d9af3753.js",
    "revision": "82ae2832a81ab95ad8a57eaee51dbbac"
  },
  {
    "url": "assets/js/13.b8dd9aae.js",
    "revision": "66acaad5a75aadc7c40d2732d6b34b55"
  },
  {
    "url": "assets/js/14.2151c016.js",
    "revision": "0d3ad9974bd029821c18eb312ebcefb7"
  },
  {
    "url": "assets/js/15.e0da15b6.js",
    "revision": "68534cbf3ceb0fb610645ef5dad4ff0f"
  },
  {
    "url": "assets/js/16.a73ffab0.js",
    "revision": "fed89de3a12337030156e95286fcde79"
  },
  {
    "url": "assets/js/17.c9d3c87f.js",
    "revision": "197693848932f2d6492f27211923c5b7"
  },
  {
    "url": "assets/js/18.12e8eed8.js",
    "revision": "c4ad1dab2f0e9896209d9d1d51da6969"
  },
  {
    "url": "assets/js/19.8005fc6f.js",
    "revision": "1c8e6d68c623321ec5e810f212573801"
  },
  {
    "url": "assets/js/2.99032d52.js",
    "revision": "d2f5f24249ac8ddd7ff685d95196f4b8"
  },
  {
    "url": "assets/js/20.e9837064.js",
    "revision": "477244f31fc2db7cc69e82be46d41232"
  },
  {
    "url": "assets/js/21.6caf781d.js",
    "revision": "b29b5145f2fe754e4ed50bfc89d63ed8"
  },
  {
    "url": "assets/js/22.8875f99f.js",
    "revision": "820c7ef9ce6ba38792558ec54a360f4d"
  },
  {
    "url": "assets/js/24.52ca8d4e.js",
    "revision": "7f2d060fdfdaced3bbdbc204dde6f669"
  },
  {
    "url": "assets/js/3.bb30875e.js",
    "revision": "ac280743ca97ab1997d6316250b95dfd"
  },
  {
    "url": "assets/js/4.5042fbeb.js",
    "revision": "90773e0bf4d6aedee55e1e07f94825f3"
  },
  {
    "url": "assets/js/5.59b22d4c.js",
    "revision": "4dc1e625971b922e44c6c5ecbdea0edf"
  },
  {
    "url": "assets/js/6.aeddef27.js",
    "revision": "f0306f9ae855a5709fc912bdfb73d3e8"
  },
  {
    "url": "assets/js/7.4bdd093e.js",
    "revision": "092f44f9b407c40b73864c16ea45c86b"
  },
  {
    "url": "assets/js/8.dbf56615.js",
    "revision": "cc9d30c4b89b786427cb4a13dad8b93e"
  },
  {
    "url": "assets/js/9.98cec62e.js",
    "revision": "7f4fee381eb140ed9f5231f5e2aceb6e"
  },
  {
    "url": "assets/js/app.b7b88ddd.js",
    "revision": "45e207204b3b7151e773e1c4765ab79a"
  },
  {
    "url": "conclusion/index.html",
    "revision": "0b136081bff8b8ae02787d3a9de3c56d"
  },
  {
    "url": "design/index.html",
    "revision": "0c149020bf10825cce7eec9a9a4f85a8"
  },
  {
    "url": "index.html",
    "revision": "bd41ded347b3a38dab0c5e7b3408dd85"
  },
  {
    "url": "intro/index.html",
    "revision": "2d2e7775ee4fd4ac1860e6a2cb443520"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "64a6d058b434b269162a31420680af8e"
  },
  {
    "url": "software/index.html",
    "revision": "6aff9dfe90de06b516c853635d2fc433"
  },
  {
    "url": "test/index.html",
    "revision": "3ab7b0a8c7bc4ed754145878f90a6f98"
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
