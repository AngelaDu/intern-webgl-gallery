if(!self.define){let e,l={};const a=(a,s)=>(a=new URL(a+".js",s).href,l[a]||new Promise((l=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=l,document.head.appendChild(e)}else e=a,importScripts(a),l()})).then((()=>{let e=l[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(l[n])return;let i={};const r=e=>a(e,n),b={module:{uri:n},exports:i,require:r};l[n]=Promise.all(s.map((e=>b[e]||r(e)))).then((e=>(t(...e),i)))}}define(["./workbox-22294e6b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/intern-webgl-gallery/_next/server/middleware-manifest.json",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/362-0642aba0c2dcb1b8.js",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/362-0642aba0c2dcb1b8.js.map",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/674.0541a192ca2cc308.js",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/674.0541a192ca2cc308.js.map",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/954-5448d0f24a47e4cf.js",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/954-5448d0f24a47e4cf.js.map",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/ContentSecurityPolicy.2e6b79cf5ebd67b8.js",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/ContentSecurityPolicy.2e6b79cf5ebd67b8.js.map",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/FeaturePolicy.4444c52d936fbbf2.js",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/FeaturePolicy.4444c52d936fbbf2.js.map",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/fb7d5399-0246a67bea2c0cc3.js",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/fb7d5399-0246a67bea2c0cc3.js.map",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/framework-d525afb76575d773.js",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/framework-d525afb76575d773.js.map",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/main-a7ed43d0d893b7fd.js",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/main-a7ed43d0d893b7fd.js.map",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/pages/404-4614c003b2bdd0f4.js",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/pages/404-4614c003b2bdd0f4.js.map",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/pages/_app-d1bd07d58dcc8a06.js",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/pages/_app-d1bd07d58dcc8a06.js.map",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/pages/_error-8f217dcfc432571b.js",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/pages/_error-8f217dcfc432571b.js.map",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/pages/about-013a5273a7fc8fe2.js",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/pages/about-013a5273a7fc8fe2.js.map",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/pages/artwork-alastair-3090da7324f4aee3.js",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/pages/artwork-alastair-3090da7324f4aee3.js.map",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/pages/artwork-alastair/artwork-abf9ec3a88f4eb43.js",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/pages/artwork-alastair/artwork-abf9ec3a88f4eb43.js.map",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/pages/index-5bc17d1c705eb6c2.js",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/pages/index-5bc17d1c705eb6c2.js.map",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/pages/unsupported-8d392f1c01c20fe7.js",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/pages/unsupported-8d392f1c01c20fe7.js.map",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/webpack-315b4c3054a4827f.js",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/chunks/webpack-315b4c3054a4827f.js.map",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/css/11829f4f88db5002.css",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/css/11829f4f88db5002.css.map",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/css/40eaac1a9e0fc77c.css",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/css/40eaac1a9e0fc77c.css.map",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/css/687d423e46588c08.css",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/css/687d423e46588c08.css.map",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/css/808aa7b88630a36c.css",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/css/808aa7b88630a36c.css.map",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/css/9389575a0ff896f2.css",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/css/9389575a0ff896f2.css.map",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/css/9a3ecce5e1e491b2.css",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/css/9a3ecce5e1e491b2.css.map",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/css/a985707a73f80c5a.css",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/css/a985707a73f80c5a.css.map",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/media/WorkSans-Bold.58ef2631.woff",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/media/WorkSans-ExtraBold.de4d8401.woff",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/media/WorkSans-Light.5d46cb1d.woff",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/media/WorkSans-Medium.23a7bda8.woff",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/media/WorkSans-Regular.9d5ecc6a.woff",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/media/WorkSans-SemiBold.43675590.woff",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/tlGA0lRbbqG7x9NlMNbSz/_buildManifest.js",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/tlGA0lRbbqG7x9NlMNbSz/_middlewareManifest.js",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/_next/static/tlGA0lRbbqG7x9NlMNbSz/_ssgManifest.js",revision:"tlGA0lRbbqG7x9NlMNbSz"},{url:"/intern-webgl-gallery/assets/images/share-image.jpg",revision:"5ffd264c716e1f2820ade7bd679b23b2"},{url:"/intern-webgl-gallery/assets/static-alastair/models/coffeeMug1_free_obj/coffeMug1_free_obj.mtl",revision:"0fbdf39e0d7db72e44c43ee48944fb48"},{url:"/intern-webgl-gallery/assets/static-alastair/models/coffeeMug1_free_obj/coffeeMug.obj",revision:"5f855027e629984b03cfaa33a87689af"},{url:"/intern-webgl-gallery/assets/static-alastair/models/coffeeMug1_free_obj/freeMug3.png",revision:"370a602a5ccd76a7422479a619b23273"},{url:"/intern-webgl-gallery/assets/static-alastair/models/hand/Hand_GameRes_normals.bmp",revision:"558eaf352a78f094d1110970a092f617"},{url:"/intern-webgl-gallery/assets/static-alastair/models/hand/Hand_GameRes_occlusion.bmp",revision:"b8964e8db6bd3f94e4c14fb7b78fb433"},{url:"/intern-webgl-gallery/assets/static-alastair/models/hand/UVsnap.png",revision:"3acf4344eba27fdd98aa8ede9bd08f7a"},{url:"/intern-webgl-gallery/assets/static-alastair/models/hand/hand.obj",revision:"d17c675a586b28b9cb87035c6e2a7c48"},{url:"/intern-webgl-gallery/assets/static-alastair/models/male_head.obj",revision:"1aeed7afce39bbf99a42bd0a97ef04de"},{url:"/intern-webgl-gallery/assets/static-alastair/models/mandalorian.obj",revision:"2a4f1bf86ab01d17ea0b0e6ce9c9f094"},{url:"/intern-webgl-gallery/assets/static-alastair/models/skull.obj",revision:"d20e894531608d318233ffe690f7b4ba"},{url:"/intern-webgl-gallery/assets/static-alastair/models/studio_lights.fbx",revision:"5a261c40d788c215252e787c83ed5ecc"},{url:"/intern-webgl-gallery/assets/static-alastair/models/teapot.obj",revision:"0b56e4f80974fc425b4e0eb6cd21c5ef"},{url:"/intern-webgl-gallery/assets/static-alastair/models/tv.obj",revision:"41ea7140a028e6f9635bbd0f3015e202"},{url:"/intern-webgl-gallery/assets/static-alastair/textures/beads/disc.png",revision:"f1d753f1a8e6ebb30d283f17ca43a560"},{url:"/intern-webgl-gallery/assets/static-alastair/textures/cliff/cliff_Albedo.jpg",revision:"b8d82e14e894e4d6a4f52c461e93faec"},{url:"/intern-webgl-gallery/assets/static-alastair/textures/cliff/cliff_Displacement.jpg",revision:"ac04900d02ecebe5e5f63bed888a3dc6"},{url:"/intern-webgl-gallery/assets/static-alastair/textures/cliff/cliff_Normal.jpg",revision:"50691b2a225ea56fea63e92499b9710f"},{url:"/intern-webgl-gallery/assets/static-alastair/textures/cliff/cliff_Roughness.jpg",revision:"fd7b2e2a2f84759a4f5d9765958a369c"},{url:"/intern-webgl-gallery/assets/static-alastair/textures/envMap/0/nx.jpg",revision:"2e5df59866dbb6840c9ce2e7b631c509"},{url:"/intern-webgl-gallery/assets/static-alastair/textures/envMap/0/ny.jpg",revision:"2e5df59866dbb6840c9ce2e7b631c509"},{url:"/intern-webgl-gallery/assets/static-alastair/textures/envMap/0/nz.jpg",revision:"2e5df59866dbb6840c9ce2e7b631c509"},{url:"/intern-webgl-gallery/assets/static-alastair/textures/envMap/0/px.jpg",revision:"2e5df59866dbb6840c9ce2e7b631c509"},{url:"/intern-webgl-gallery/assets/static-alastair/textures/envMap/0/py.jpg",revision:"2e5df59866dbb6840c9ce2e7b631c509"},{url:"/intern-webgl-gallery/assets/static-alastair/textures/envMap/0/pz.jpg",revision:"2e5df59866dbb6840c9ce2e7b631c509"},{url:"/intern-webgl-gallery/assets/static-alastair/textures/lensflare/lensflare0.png",revision:"28ecca635ec4470ba55983a1c966b437"},{url:"/intern-webgl-gallery/assets/static-alastair/textures/lensflare/lensflare0_alpha.png",revision:"614e5f0fe84fa925c545775ff0d6b8de"},{url:"/intern-webgl-gallery/assets/static-alastair/textures/lensflare/lensflare1.png",revision:"20a2bd3c24508cc7d41a893ed208cab2"},{url:"/intern-webgl-gallery/favicons/android-chrome-192x192.png",revision:"685de29cf9f72fad7323c11d2fc589d9"},{url:"/intern-webgl-gallery/favicons/android-chrome-384x384.png",revision:"f6bd23f4ba0958ec8236df850a14b5b6"},{url:"/intern-webgl-gallery/favicons/android-chrome-512x512.png",revision:"8b4bf50ad396fba53ed4f81707b7090a"},{url:"/intern-webgl-gallery/favicons/apple-touch-icon.png",revision:"451517a8244b252acadd58a651afedc0"},{url:"/intern-webgl-gallery/favicons/browserconfig.xml",revision:"e24abe19b666a8bc433a1814fd46b629"},{url:"/intern-webgl-gallery/favicons/favicon-16x16.png",revision:"8286ee63d91b4702f049df6e7bd05dd5"},{url:"/intern-webgl-gallery/favicons/favicon-32x32.png",revision:"a9204f9c8dc8782710d5d359233ffdd8"},{url:"/intern-webgl-gallery/favicons/favicon.ico",revision:"c01913ba76397cfa0bfdbfd908bf3157"},{url:"/intern-webgl-gallery/favicons/html_code.html",revision:"f97a07e8546ca17b1c22572c9b17577b"},{url:"/intern-webgl-gallery/favicons/mstile-150x150.png",revision:"391d93e3d73d59551e0d70642fa7cd9c"},{url:"/intern-webgl-gallery/favicons/safari-pinned-tab.svg",revision:"38e15dfb54ab337f1131f160d359d750"},{url:"/intern-webgl-gallery/favicons/site.webmanifest",revision:"78d17a3b5b1776ea697de40a8e4b02c2"},{url:"/intern-webgl-gallery/robots.txt",revision:"81e94e920041c9fba26c2604a9f1cded"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/intern-webgl-gallery",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:l,event:a,state:s})=>l&&"opaqueredirect"===l.type?new Response(l.body,{status:200,statusText:"OK",headers:l.headers}):l}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const l=e.pathname;return!l.startsWith("/api/auth/")&&!!l.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
//# sourceMappingURL=sw.js.map
