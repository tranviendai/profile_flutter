'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "ed59960d04ed624ce1a70bd87a81175c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "381d4384ea2f6afb543d739175a74471",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f554a7b2aea9ae33272a0127ce123d38",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "367b3d8b64afd7ea72663938498c5709",
".git/logs/refs/heads/main": "3e96972e4b4a1f9fbd87eaf6ff30f34f",
".git/logs/refs/remotes/origin/main": "28b4623480e46e27c945daa91aba5cbc",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0a/e0ec50709c51ef23690187d9559565f2a6aa94": "4f6519037290c03c7df3c2114b591d14",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/1a/f50146892ca74084fc8edab2a4c049cb7d126c": "39187e6d251aefb70d92bca80d990b33",
".git/objects/1d/9d0b0f7696614dc1fe129210fcbf00b06b8649": "18d0dafc0b557250be927f8b8949cb2f",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/21/2098a56da3dfe5ae39cf8c187dc6070238e908": "0a560f3cda80a533b094627d0b11b1e1",
".git/objects/21/9687af5c5cff492bdf566d079f711dd216c4a8": "2647e00cd3653f084ba9dd0988d549ec",
".git/objects/2e/58a9cec761ea7d8eda5e2deecdaffff1e2a641": "62957f2d99c402291390417210498da1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/4b7beb00797bf801aa42dbdb5ece4f6bce7172": "1d70ec1f38e3eef5b72a1b7058ce6bf4",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/39/080a0f03c003de9ec520d087eecfba5201824a": "f1ee66f59a7372fde126d113bbf87b0a",
".git/objects/3b/759ec4c4fde735dae559e0dfbcbf50641c1f3d": "2dae85bd3b07db15d85ef404ffa2483f",
".git/objects/40/382c62679662b0a91d665fc18189b20176fcf3": "81e535b5b1906f9edeb83e3aee51f4cf",
".git/objects/43/5be948b1b9a06f6e0a3daf0b36b5cda47f6635": "c4bf144bf50908b32a9d0e8840303d05",
".git/objects/48/930bbbc4aeb2bbca8b00156a3b90df91279bc5": "90a5ca5119e0c95916bef27938554b0c",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/56830abee32a8d91f3a446e308a84aed848d63": "7dd5ae281d5ecf91923b86441e4f3dff",
".git/objects/53/a9cce2095fc41a85591a0bbf047bbeddebe4e2": "19f51b02e78586b659b0b90031e53163",
".git/objects/5f/37eafcc932ee98a7f723a3ceb4245d9752b68e": "50d9982b779342eabd904b9b52658aff",
".git/objects/60/7e0bf33ea9ef42350414677bec0d37bb830227": "1ba3eff9fcf89615fb454007be3ee41b",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/65/f35118b024cca826d9dcdb59729d40bdef87b5": "1d2696ee61b1d82980e5a81a275be946",
".git/objects/69/22233abf19d73c60523b05fcaaa4d9e6b41ff4": "9112ebc50ccb055eeedfb285116d923f",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6a/64dc77c78e7a6808aa68180b4fdee52f0d5a35": "bdddeed19125153bac55a86253b70e18",
".git/objects/6a/e9cf8b9370eada215ad665509aaa6b31bab79b": "a1a49a6b98ed8fe43b5b0499336b48a0",
".git/objects/6e/89e50581d91524ba3802ed7731d615feb8c695": "af0ad6445526e1fffad68ccafc208861",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/84c2be3be1e88130906dacf373031e8c1390f8": "1b99bc7cd1293b503496fd21c0aa6c46",
".git/objects/72/b97d5fe13fccd56c9d7bc31c00fcf624647a9b": "11a289fdbfc6958ecfa1ef7764a9566a",
".git/objects/7c/d77145ae50d38c69453410053fe873bc63d47e": "a966fb66763e0b610def6952d5871e28",
".git/objects/7f/47c8971fcf9c3c7074437e95b1850f22e74ee4": "e5d783122d9e95d23679c37aa0a2f8d1",
".git/objects/82/333a7259118557b9b9a87b665ff1c72c2b46a6": "8351a4c93940a8a5b3847e0547874e09",
".git/objects/88/79a3045b5a437007b8ed9dce67572d675a9872": "3f9e5a5774103a6d71f55659505b6264",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/223bb8de1be1c03eb6278c94b42fd9fd7b28f6": "23af54a53e3deefda35629d81ea591c1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9c/c57b49029a1433229c6e47b8ac0f3d0dec0d78": "21df124426ee487dd23da251fa6e6038",
".git/objects/a0/15a852e15b2809766338eccbc0d8398461da34": "8c4801bc7b1c9bb652c88be2d0b1a51f",
".git/objects/a0/2e7c3e16cef65c3925fc15351d50e859b8b746": "1d2ccb2973c9dfe409e15a3ea5f2f31f",
".git/objects/af/e08bdfadfd67cc74342325fd03d86ff0deebe6": "4f770811c6e4bd035d3778e45e9f2f92",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b4/071ba3485031ef7223425e677829fdd8e6cd4b": "fb97789f32ed5c49e12cbc842687300a",
".git/objects/b5/55a7ce4cb15f5555a22d891182d4fa9982fcff": "988dd4eaa5cc921c9ecb8d1d227c11a7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/cb/faf71211423ab861bcf59191d9711d09c827b4": "6b589e5b1fd8d6c6e359ddad28aeff14",
".git/objects/d3/edc192b0dab2ca8da809e1a2cc13be51d6dcea": "e834551d51074978ccd099394634cc42",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/33e9524e6bc99577421dd63e9ffc5f9a70a1be": "87034909f0372af5e54db33161041b53",
".git/objects/df/9f24585c95848e16a9d9467b3a5442b556532b": "f23cbad974c5fca0adba6c2a49a029bd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/bd0dda855a88ebf0dcb7b975b055b8261f50b5": "a097b79aed57d5a185128fbb9b39e407",
".git/objects/f8/653b2100204e4adbfc2639266ed45a34550698": "4447c56172b6867e5ebeac891483e6f8",
".git/objects/fe/81cc1e29472f2c15723ee2f8a700cb4b5df01a": "c5b0fe451aabf02b5440776bd4c6b57d",
".git/refs/heads/main": "e9642a062994e3ea42777eff8da8420b",
".git/refs/remotes/origin/main": "e9642a062994e3ea42777eff8da8420b",
"assets/AssetManifest.bin": "942546c2c01b69723eb15dab5f799f11",
"assets/AssetManifest.json": "f2234c5c2c67190a68b11fe9c3cc1c9f",
"assets/FontManifest.json": "daa6cb4f3ef5c46795a886aa3d702712",
"assets/fonts/Lora-italic.ttf": "b1f251bc5aaa536a4d8c27223f3c3257",
"assets/fonts/Lora.ttf": "ea5cbfa365fc139fc6d7b4ad26287e2e",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/images/avt.jpg": "ef91d87fc7e9e2e198ea09beec448b00",
"assets/images/boostrap.png": "5c58e1a23accebe5e9db738f81306211",
"assets/images/c%2523.png": "327298ec25a4ae2661f2f9e74d9e17c4",
"assets/images/css.png": "f24364a348a9f91675db9ffe3c248088",
"assets/images/dart.png": "55fcf3fc1bff0c00ab8463c33ebfbbc0",
"assets/images/entityframe.png": "58fe7e59a768f4e4419c16a1c404d579",
"assets/images/flutter.png": "3b527b0f7559f4bb0786fe84bee20e68",
"assets/images/html.png": "b5508b02768fda19b844ae6da8586f58",
"assets/images/java.jpg": "46659831145900027eaae3c8ce7234d5",
"assets/images/javascript.png": "d5ee029a5980fc1e164d078b7801f2bb",
"assets/images/jquery.png": "6bc97da4142391e6a90b289601267c4a",
"assets/images/json.png": "0330b1f11baf3f6ba12ba4507aba8aba",
"assets/images/mysql.png": "75188fc6059274e782d243e64e5688c8",
"assets/images/netcore.png": "5b5ac2b4ed923c08887abb68a0fe661b",
"assets/images/project01.png": "4329eaecc40329cfc90da897b5466294",
"assets/images/project02.png": "bef8ffb1ddbb3888272ab7e05693767e",
"assets/images/project03.png": "f3ce3dbb2af57204ecabb0eb478b16ca",
"assets/images/sass.png": "3bd625947a6ac06505de5e3b60d20359",
"assets/images/sql.png": "7a76cff597d8b80b3f1dc36a28bdd39d",
"assets/NOTICES": "9e0f669355eb7dda9a592a1ed109be41",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "fd1483cb723d8dab4b2a7de246fe028d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a565d0ab8d80f6fcef15718258b08465",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "605ddac5f9a580e7eb92f7cd41589e95",
"/": "605ddac5f9a580e7eb92f7cd41589e95",
"main.dart.js": "8c7ab52d4518b17274316966b73b62aa",
"manifest.json": "a3fdbb211801b9ff37242ed3bb666f9e",
"version.json": "5419cba0fca8ac8a2a3cdf748a857f3f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
