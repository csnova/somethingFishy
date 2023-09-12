(()=>{"use strict";var n,e,t,r,o,i,a,d,c,s,l,u,m,p,g={426:(n,e,t)=>{t.d(e,{Z:()=>g});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),d=t(667),c=t.n(d),s=new URL(t(340),t.b),l=new URL(t(259),t.b),u=a()(o()),m=c()(s),p=c()(l);u.push([n.id,`@font-face {\n  font-family: restaurantFont;\n  src: url(${m});\n}\n\nhtml {\n  background-image: url(${p});\n  background-color: aliceblue;\n  font-family: restaurantFont;\n}\n\n#content {\n  display: grid;\n  grid-template-columns: max(10px, 5%) 1600px max(10px, 5%);\n  grid-template-rows: max(10px, 5%) 770px max(10px, 20%);\n}\n\n.contentBox {\n  background-color: rgba(255, 255, 255, 0.85);\n  border-radius: 10px;\n  box-shadow: 5px 5px 10px rgb(161, 161, 161);\n  height: 750px;\n  min-width: 1200px;\n  margin: 10px;\n  grid-column-start: 2;\n  grid-column-end: 3;\n  grid-row-start: 2;\n  grid-row-end: 3;\n  display: grid;\n  grid-template-columns:\n    max(100px, 10%) max(100px, 10%) max(100px, 10%) max(100px, 10%)\n    max(100px, 10%) max(100px, 10%) max(100px, 10%) 420px;\n  grid-template-rows: 120px 100px 120px 400px;\n  justify-content: center;\n  align-items: center;\n}\n\nh1 {\n  font-size: 32px;\n  font-weight: 600;\n}\n\nbutton {\n  background-color: transparent;\n  background-repeat: no-repeat;\n  border: none;\n  cursor: pointer;\n  overflow: hidden;\n  outline: none;\n  color: rgb(94, 94, 94);\n}\n\nbutton:hover {\n  border: 1px solid grey;\n  border-radius: 10px;\n  background-color: aliceblue;\n}\n\nh2 {\n  font-size: 40px;\n  font-weight: 600;\n}\n\n.name {\n  grid-column-start: 1;\n  grid-column-end: 4;\n  grid-row-start: 1;\n  grid-row-end: 2;\n  text-align: center;\n}\n\n.homePage {\n  grid-column-start: 4;\n  grid-column-end: 5;\n  grid-row-start: 1;\n  grid-row-end: 2;\n  text-align: center;\n}\n\n.menu {\n  grid-column-start: 5;\n  grid-column-end: 6;\n  grid-row-start: 1;\n  grid-row-end: 2;\n  text-align: center;\n}\n\n.about {\n  grid-column-start: 6;\n  grid-column-end: 7;\n  grid-row-start: 1;\n  grid-row-end: 2;\n  text-align: center;\n}\n\n.contact {\n  grid-column-start: 7;\n  grid-column-end: 8;\n  grid-row-start: 1;\n  grid-row-end: 2;\n  text-align: center;\n}\n\n.header {\n  grid-column-start: 2;\n  grid-column-end: 6;\n  grid-row-start: 2;\n  grid-row-end: 3;\n  text-align: center;\n  align-self: end;\n}\n\n/* For the Home Page */\n.info {\n  grid-column-start: 2;\n  grid-column-end: 6;\n  grid-row-start: 3;\n  grid-row-end: 4;\n  text-align: center;\n}\n\n.restaurant {\n  grid-column-start: 1;\n  grid-column-end: 7;\n  grid-row-start: 4;\n  grid-row-end: 5;\n  width: 1100px;\n  height: 400px;\n  border-radius: 10px;\n}\n\n.map {\n  grid-column-start: 8;\n  grid-column-end: 9;\n  grid-row-start: 1;\n  grid-row-end: 7;\n  width: 420px;\n  height: 730px;\n  margin: 10px;\n  border-radius: 10px;\n}\n\n/* For the Menu Page */\n.menuList {\n  background-color: rgba(161, 158, 158, 0.5);\n  border-radius: 10px;\n  padding: 20px;\n  grid-column-start: 1;\n  grid-column-end: 9;\n  grid-row-start: 2;\n  grid-row-end: 7;\n  display: grid;\n  grid-template-columns: 50% 50%;\n  grid-auto-rows: 100px;\n}\n.menuHeader {\n  grid-column-start: 1;\n  grid-column-end: 3;\n  grid-row-start: 1;\n  grid-row-end: 2;\n  text-align: center;\n  align-self: end;\n}\n\nh3 {\n  font-size: 32px;\n  font-weight: 600;\n}\n\nh4 {\n  font-size: 24px;\n  font-weight: 600;\n}\n\n.title1 {\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 2;\n  grid-row-end: 3;\n}\n\n.item1 {\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 3;\n  grid-row-end: 4;\n}\n\n.item2 {\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 4;\n  grid-row-end: 5;\n}\n\n.item3 {\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 5;\n  grid-row-end: 6;\n}\n\n.title2 {\n  grid-column-start: 2;\n  grid-column-end: 3;\n  grid-row-start: 2;\n  grid-row-end: 3;\n}\n\n.item4 {\n  grid-column-start: 2;\n  grid-column-end: 3;\n  grid-row-start: 3;\n  grid-row-end: 4;\n}\n\n.item5 {\n  grid-column-start: 2;\n  grid-column-end: 3;\n  grid-row-start: 4;\n  grid-row-end: 5;\n}\n\n.item6 {\n  grid-column-start: 2;\n  grid-column-end: 3;\n  grid-row-start: 5;\n  grid-row-end: 6;\n}\n\n.item1,\n.item2,\n.item3,\n.item4,\n.item5,\n.item6 {\n  display: grid;\n  grid-template-columns: 200px 300px 100px;\n}\n\n.item1Title,\n.item2Title,\n.item3Title,\n.item4Title,\n.item5Title,\n.item6Title {\n  grid-column-start: 1;\n  grid-column-end: 2;\n  display: flex;\n  align-items: center;\n}\n\n.item1Desc,\n.item2Desc,\n.item3Desc,\n.item4Desc,\n.item5Desc,\n.item6Desc {\n  grid-column-start: 2;\n  grid-column-end: 3;\n  display: flex;\n  align-items: center;\n}\n\n.item1Price,\n.item2Price,\n.item3Price,\n.item4Price,\n.item5Price,\n.item6Price {\n  grid-column-start: 3;\n  grid-column-end: 4;\n  display: flex;\n  align-items: center;\n}\n`,""]);const g=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(a[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],d=0;d<n.length;d++){var c=n[d],s=r.base?c[0]+r.base:c[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var m=t(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var g=o(p,r);r.byIndex=d,e.splice(d,0,{identifier:u,updater:g,references:1})}a.push(u)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var d=t(i[a]);e[d].references--}for(var c=r(n,o),s=0;s<i.length;s++){var l=t(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},644:(n,e,t)=>{t.d(e,{Z:()=>i});const r=t.p+"5cd9ce481385ee143c09.png",o=t.p+"a7c1e836c95c7e8c55cc.jpg";function i(){const n=document.querySelector("#content"),e=document.createElement("div");e.classList.add("contentBox"),n.appendChild(e);const t=document.createElement("h1");t.classList.add("name"),t.textContent="Something Fishy",e.appendChild(t);const i=document.createElement("BUTTON");i.classList.add("homePage"),i.textContent="Home",e.appendChild(i);const a=document.createElement("BUTTON");a.classList.add("menu"),a.textContent="Menu",e.appendChild(a);const d=document.createElement("BUTTON");d.classList.add("about"),d.textContent="About",e.appendChild(d);const c=document.createElement("BUTTON");c.classList.add("contact"),c.textContent="Contact",e.appendChild(c);const s=document.createElement("h2");s.classList.add("header"),s.textContent="Sushi You Dream About",e.appendChild(s);const l=document.createElement("p");l.classList.add("info"),l.textContent="Do you wake up in the middle of the night dreaming of sushi? So do we. Now to easy your mind we introduce 24 hr sushi at our restaurant Something Fishy! Fresh fish when you crave it most!",e.appendChild(l);const u=document.createElement("img");u.src=r,u.classList.add("map"),e.appendChild(u);const m=document.createElement("img");m.src=o,m.classList.add("restaurant"),e.appendChild(m),console.log("homePage.js is loading")}},340:(n,e,t)=>{n.exports=t.p+"575ec9e676c7a85494bb.ttf"},259:(n,e,t)=>{n.exports=t.p+"6ff57e358340edd97e0e.jpg"}},f={};function h(n){var e=f[n];if(void 0!==e)return e.exports;var t=f[n]={id:n,exports:{}};return g[n](t,t.exports,h),t.exports}h.m=g,h.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return h.d(e,{a:e}),e},h.d=(n,e)=>{for(var t in e)h.o(e,t)&&!h.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},h.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),h.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;h.g.importScripts&&(n=h.g.location+"");var e=h.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&!n;)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),h.p=n})(),h.b=document.baseURI||self.location.href,h.nc=void 0,n=h(379),e=h.n(n),t=h(795),r=h.n(t),o=h(569),i=h.n(o),a=h(565),d=h.n(a),c=h(216),s=h.n(c),l=h(589),u=h.n(l),m=h(426),(p={}).styleTagTransform=u(),p.setAttributes=d(),p.insert=i().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=s(),e()(m.Z,p),m.Z&&m.Z.locals&&m.Z.locals,(0,h(644).Z)()})();