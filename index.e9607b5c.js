function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequire7d2c;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,o){n[e]=o},o.parcelRequire7d2c=r),r.register("oGzBH",(function(e,o){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,o){if(e!==o)throw new TypeError("Private static access of wrong provenance")}})),r.register("iaRLo",(function(e,o){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,o){return o.get?o.get.call(e):o.value}}));const s=()=>{const e={scrollProgress:document.querySelector(".progress"),progressValue:document.querySelector(".progress-value"),pos:document.documentElement.scrollTop},o=document.documentElement.scrollHeight-document.documentElement.clientHeight;Math.round(100*e.pos/o);e.pos>100?e.scrollProgress.style.display="grid":e.scrollProgress.style.display="none",e.scrollProgress.addEventListener("click",(()=>{document.documentElement.scrollTop=0}))};window.onscroll=s,window.onload=s;var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e,o,t){return c.default(e,o),c.default(t,"get"),a.default(e,t)};var c=i(r("oGzBH")),a=i(r("iaRLo"));function i(e){return e&&e.__esModule?e:{default:e}}var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,o,t){o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t;return e};class d{async getBookCategories(){const o=await fetch(`${e(l)(d,d,f)}${d.endpoints.categoryList}`);if(!o.ok)throw new Error;return o.json()}async getTopBooks(){const o=await fetch(`${e(l)(d,d,f)}${d.endpoints.topBooks}`);if(!o.ok)throw new Error;return o.json()}async getBooksByCategory(o){const t=await fetch(`${e(l)(d,d,f)}${d.endpoints.category}?category=${o}`);if(!t.ok)throw new Error;return t.json()}async getBookInfo(o){const t=await fetch(`${e(l)(d,d,f)}${d.endpoints.bookInfo(o)}`);if(!t.ok)throw new Error;return t.json()}constructor(){this.page=1}}var f={writable:!0,value:"https://books-backend.p.goit.global"};e(u)(d,"endpoints",{categoryList:"/books/category-list",topBooks:"/books/top-books",category:"/books/category",bookInfo:e=>`/books/${e}`});const p=document.querySelector(".list-js"),g=new d;!async function(){try{!function(e){const o=e.map((e=>`<li class='genres-item'><button type='button' class='genres-btn genres-btn-js'>${e.list_name}</button></li>`)).join("");p.insertAdjacentHTML("beforeend",o)}(await g.getBookCategories())}catch(e){console.log(e)}}();
//# sourceMappingURL=index.e9607b5c.js.map
