function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},r=n.parcelRequire7d2c;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},n.parcelRequire7d2c=r),r.register("kyEFX",(function(t,n){var i,s;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return s}),(function(e){return s=e}));var r={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},s=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),r.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),r.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),r("kyEFX").register(JSON.parse('{"hZ8Bi":"shopping-list.25588985.js","14R9o":"apple-books.652b354e.png","5buYK":"book-shop.1d091ebd.png","3NWVH":"amazon.626c9508.png","iBhy2":"shoppingbook1.6c062fbc.png","aKCGF":"symbol-defs.65baa2ba.svg","l01RG":"1_save children@1x-min.144656ee.png","kqemy":"1_save children@2x-min.0660afb8.png","36zgu":"2_project_hope@1x-min.5879854c.png","hVrkw":"2_project_hope@2x-min.3da4efbf.png","7puOq":"3_united24@1x-min.7e58352b.png","1bXYs":"3_united24@2x-min.472db2ce.png","9SFQK":"4_medical_groups@1x-min.bcacdce8.png","9G1BH":"4_medical_groups@2x-min.953eb4e8.png","eFJjp":"5_medicine@1x-min.3125e7a3.png","bjhm6":"5_medicine@2x-min.3ed2f67e.png","ljdSm":"6_razom@1x-min.fd446c8a.png","efbls":"6_razom@2x-min.ec16288e.png","6pnsS":"7_actionagain@1x-min.53afbe8b.png","1Ilg8":"7_actionagain@2x-min.52b41605.png","6rNIT":"8_wordvision@1x-min.a349eac9.png","cKshg":"8_wordvision@2x-min.a2943152.png","6t3Gk":"9_prytula@1x-min.ad8be370.png","eks2N":"9_prytula@2x-min.9ab1f22a.png","1XaNB":"index.10d5333f.css"}'));var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,t){var n=a.default(e,t,"get");return l.default(e,n)};var a=c(r("fExtF")),l=c(r("iaRLo"));function c(e){return e&&e.__esModule?e:{default:e}}var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t,n){d.default(e,t),t.set(e,n)};var h,d=(h=r("7K24o"))&&h.__esModule?h:{default:h};var f=new WeakMap,p=new WeakMap;class m{async getBookCategories(){const e=await fetch(`${t(o)(this,f)}${t(o)(this,p).categoryList}`);if(!e.ok)throw new Error;return e.json()}async getTopBooks(){const e=await fetch(`${t(o)(this,f)}${t(o)(this,p).topBooks}`);if(!e.ok)throw new Error;return e.json()}async getBooksByCategory(e){const n=await fetch(`${t(o)(this,f)}${t(o)(this,p).category}?category=${e}`);if(!n.ok)throw new Error;return n.json()}async getBookInfo(e){const n=await fetch(`${t(o)(this,f)}${t(o)(this,p).bookInfo(e)}`);if(!n.ok)throw new Error;return n.json()}constructor(){t(u)(this,f,{writable:!0,value:"https://books-backend.p.goit.global"}),t(u)(this,p,{writable:!0,value:{categoryList:"/books/category-list",topBooks:"/books/top-books",category:"/books/category",bookInfo:e=>`/books/${e}`}}),this.page=1}}class g{handleBook(e){this.isBookAlreadyInShoppingList?(this.currentShoppingListItems.splice(this.index,1),this.index=-1,this.isBookAlreadyInShoppingList=!1,this.notification.remove()):(this.index=this.currentShoppingListItems.length,this.currentShoppingListItems.push(this.book),this.isBookAlreadyInShoppingList=!0,this.linkToBtn.insertAdjacentElement("afterend",this.notification)),localStorage.setItem("shoppingList",JSON.stringify(this.currentShoppingListItems)),this.linkToBtn.textContent=(this.isBookAlreadyInShoppingList?"Remove from the ":"Add to ")+"Shopping List",this.linkToBtn.setAttribute("data-action",this.isBookAlreadyInShoppingList?"toAdd":"toRemove")}constructor(e,t){this.book=e,this.currentShoppingListItems=localStorage.getItem("shoppingList"),null==this.currentShoppingListItems?this.currentShoppingListItems=[]:this.currentShoppingListItems=JSON.parse(this.currentShoppingListItems),this.index=this.currentShoppingListItems.findIndex((t=>t._id==e._id)),this.isBookAlreadyInShoppingList=this.index>-1,this.linkToBtn=t,this.linkToBtn.textContent=(this.isBookAlreadyInShoppingList?"Remove from the ":"Add to ")+"Shopping List",this.linkToBtn.setAttribute("data-action",this.isBookAlreadyInShoppingList?"toAdd":"toRemove"),this.notification=document.createElement("div"),this.notification.textContent="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",this.notification.className="notification",this.isBookAlreadyInShoppingList&&t.insertAdjacentElement("afterend",this.notification)}}const v={btnLogOut:document.querySelector(".js-logOut"),btnOpenLogInModal:document.querySelector(".js-open-modal"),greeting:document.querySelector(".js-greeting"),closeBtn:{},switchModalBtns:{},form:{},modalForm:{},isAuthElements:[]};var y,w,b,E=y={};function T(){throw new Error("setTimeout has not been defined")}function _(){throw new Error("clearTimeout has not been defined")}function S(e){if(w===setTimeout)return setTimeout(e,0);if((w===T||!w)&&setTimeout)return w=setTimeout,setTimeout(e,0);try{return w(e,0)}catch(t){try{return w.call(null,e,0)}catch(t){return w.call(this,e,0)}}}!function(){try{w="function"==typeof setTimeout?setTimeout:T}catch(e){w=T}try{b="function"==typeof clearTimeout?clearTimeout:_}catch(e){b=_}}();var I,k=[],x=!1,C=-1;function A(){x&&I&&(x=!1,I.length?k=I.concat(k):C=-1,k.length&&N())}function N(){if(!x){var e=S(A);x=!0;for(var t=k.length;t;){for(I=k,k=[];++C<t;)I&&I[C].run();C=-1,t=k.length}I=null,x=!1,function(e){if(b===clearTimeout)return clearTimeout(e);if((b===_||!b)&&clearTimeout)return b=clearTimeout,clearTimeout(e);try{b(e)}catch(t){try{return b.call(null,e)}catch(t){return b.call(this,e)}}}(e)}}function L(e,t){this.fun=e,this.array=t}function P(){}E.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];k.push(new L(e,t)),1!==k.length||x||S(N)},L.prototype.run=function(){this.fun.apply(null,this.array)},E.title="browser",E.browser=!0,E.env={},E.argv=[],E.version="",E.versions={},E.on=P,E.addListener=P,E.once=P,E.off=P,E.removeListener=P,E.removeAllListeners=P,E.emit=P,E.prependListener=P,E.prependOnceListener=P,E.listeners=function(e){return[]},E.binding=function(e){throw new Error("process.binding is not supported")},E.cwd=function(){return"/"},E.chdir=function(e){throw new Error("process.chdir is not supported")},E.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const R=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},O={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const s=e[t],r=t+1<e.length,o=r?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=s>>2,u=(3&s)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,r||(h=64)),i.push(n[c],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(R(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(r>>10)),t[i++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],r=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==r||null==o||null==a)throw new M;const l=s<<2|r>>4;if(i.push(l),64!==o){const e=r<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const D=function(e){return function(e){const t=R(e);return O.encodeByteArray(t,!0)}(e).replace(/\./g,"")},F=function(e){try{return O.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const U=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,V=()=>{try{return U()||(()=>{if(void 0===y||void 0===y.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&F(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},B=e=>{var t,n;return null===(n=null===(t=V())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},j=e=>{const t=B(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},z=()=>{var e;return null===(e=V())||void 0===e?void 0:e.config},$=e=>{var t;return null===(t=V())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class H{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[D(JSON.stringify({alg:"none",type:"JWT"})),D(JSON.stringify(r)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function W(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function K(){const e=G();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function X(){try{return"object"==typeof indexedDB}catch(e){return!1}}class Q extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Q.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Y.prototype.create)}}class Y{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?function(e,t){return e.replace(J,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new Q(i,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const J=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ee(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if(te(n)&&te(r)){if(!ee(n,r))return!1}else if(n!==r)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function te(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ne(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function ie(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function se(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e,t){const n=new oe(e,t);return n.subscribe.bind(n)}class oe{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=ae),void 0===i.error&&(i.error=ae),void 0===i.complete&&(i.complete=ae);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function ae(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function le(e){return e&&e._delegate?e._delegate:e}class ce{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new H;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class he{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ue(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de=[];var fe,pe;(pe=fe||(fe={}))[pe.DEBUG=0]="DEBUG",pe[pe.VERBOSE=1]="VERBOSE",pe[pe.INFO=2]="INFO",pe[pe.WARN=3]="WARN",pe[pe.ERROR=4]="ERROR",pe[pe.SILENT=5]="SILENT";const me={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},ge=fe.INFO,ve={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},ye=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=ve[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class we{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?me[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}constructor(e){this.name=e,this._logLevel=ge,this._logHandler=ye,this._userLogHandler=null,de.push(this)}}let be,Ee;const Te=new WeakMap,_e=new WeakMap,Se=new WeakMap,Ie=new WeakMap,ke=new WeakMap;let xe={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return _e.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Se.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ne(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ce(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ee||(Ee=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Le(this),t),Ne(Te.get(this))}:function(...t){return Ne(e.apply(Le(this),t))}:function(t,...n){const i=e.call(Le(this),t,...n);return Se.set(i,t.sort?t.sort():[t]),Ne(i)}}function Ae(e){return"function"==typeof e?Ce(e):(e instanceof IDBTransaction&&function(e){if(_e.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",r),e.removeEventListener("abort",r)},s=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",r),e.addEventListener("abort",r)}));_e.set(e,t)}(e),t=e,(be||(be=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,xe):e);var t}function Ne(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",r)},s=()=>{t(Ne(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&Te.set(t,e)})).catch((()=>{})),ke.set(t,e),t}(e);if(Ie.has(e))return Ie.get(e);const t=Ae(e);return t!==e&&(Ie.set(e,t),ke.set(t,e)),t}const Le=e=>ke.get(e);function Pe(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=Ne(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(Ne(o.result),e.oldVersion,e.newVersion,Ne(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{r&&e.addEventListener("close",(()=>r())),s&&e.addEventListener("versionchange",(e=>s(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const Re=["get","getKey","getAll","getAllKeys","count"],Oe=["put","add","delete","clear"],Me=new Map;function De(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Me.get(t))return Me.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=Oe.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!Re.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&r.done]))[0]};return Me.set(t,r),r}xe=(e=>({...e,get:(t,n,i)=>De(t,n)||e.get(t,n,i),has:(t,n)=>!!De(t,n)||e.has(t,n)}))(xe);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fe{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const Ue=new we("@firebase/app"),Ve={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Be=new Map,je=new Map;function ze(e,t){try{e.container.addComponent(t)}catch(n){Ue.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function $e(e){const t=e.name;if(je.has(t))return Ue.debug(`There were multiple attempts to register component ${t}.`),!1;je.set(t,e);for(const t of Be.values())ze(t,e);return!0}function He(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qe=new Y("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ge{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qe.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ce("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw qe.create("bad-app-name",{appName:String(s)});if(n||(n=z()),!n)throw qe.create("no-options");const r=Be.get(s);if(r){if(ee(n,r.options)&&ee(i,r.config))return r;throw qe.create("duplicate-app",{appName:s})}const o=new he(s);for(const e of je.values())o.addComponent(e);const a=new Ge(n,i,o);return Be.set(s,a),a}function Ke(e="[DEFAULT]"){const t=Be.get(e);if(!t&&"[DEFAULT]"===e&&z())return We();if(!t)throw qe.create("no-app",{appName:e});return t}function Xe(e,t,n){var i;let s=null!==(i=Ve[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const e=[`Unable to register library "${s}" with version "${t}":`];return r&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ue.warn(e.join(" "))}$e(new ce(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}let Qe=null;function Ye(){return Qe||(Qe=Pe("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw qe.create("idb-open",{originalErrorMessage:e.message})}))),Qe}async function Je(e,t){try{const n=(await Ye()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");await i.put(t,Ze(e)),await n.done}catch(e){if(e instanceof Q)Ue.warn(e.message);else{const t=qe.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Ue.warn(t.message)}}}function Ze(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=tt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=tt(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),it(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),it(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=D(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new nt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function tt(){return(new Date).toISOString().substring(0,10)}class nt{async runIndexedDBEnvironmentCheck(){return!!X()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{const t=await Ye();return await t.transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Ze(e))}catch(e){if(e instanceof Q)Ue.warn(e.message);else{const t=qe.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Ue.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Je(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Je(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function it(e){return D(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st;st="",$e(new ce("platform-logger",(e=>new Fe(e)),"PRIVATE")),$e(new ce("heartbeat",(e=>new et(e)),"PRIVATE")),Xe("@firebase/app","0.9.12",st),Xe("@firebase/app","0.9.12","esm2017"),Xe("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Xe("firebase","9.22.2","app");function rt(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]])}return n}Object.create;Object.create;function ot(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const at=ot,lt=new Y("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ct=new we("@firebase/auth");function ut(e,...t){ct.logLevel<=fe.ERROR&&ct.error(`Auth (9.22.2): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(e,...t){throw pt(e,...t)}function dt(e,...t){return pt(e,...t)}function ft(e,t,n){const i=Object.assign(Object.assign({},at()),{[t]:n});return new Y("auth","Firebase",i).create(t,{appName:e.name})}function pt(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return lt.create(e,...t)}function mt(e,t,...n){if(!e)throw pt(t,...n)}function gt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ut(t),new Error(t)}function vt(e,t){e||gt(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function wt(){return"http:"===bt()||"https:"===bt()}function bt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(wt()||W()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt{get(){return Et()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,vt(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(G())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(e,t){vt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},kt=new Tt(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ct(e,t,n,i,s={}){return At(e,s,(async()=>{let s={},r={};i&&("GET"===t?r=i:s={body:JSON.stringify(i)});const o=ne(Object.assign({key:e.config.apiKey},r)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),St.fetch()(Lt(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},s))}))}async function At(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},It),t);try{const t=new Pt(e),s=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const r=await s.json();if("needConfirmation"in r)throw Rt(e,"account-exists-with-different-credential",r);if(s.ok&&!("errorMessage"in r))return r;{const t=s.ok?r.errorMessage:r.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Rt(e,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw Rt(e,"email-already-in-use",r);if("USER_DISABLED"===n)throw Rt(e,"user-disabled",r);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw ft(e,a,o);ht(e,a)}}catch(t){if(t instanceof Q)throw t;ht(e,"network-request-failed",{message:String(t)})}}async function Nt(e,t,n,i,s={}){const r=await Ct(e,t,n,i,s);return"mfaPendingCredential"in r&&ht(e,"multi-factor-auth-required",{_serverResponse:r}),r}function Lt(e,t,n,i){const s=`${t}${n}?${i}`;return e.config.emulator?_t(e.config,s):`${e.config.apiScheme}://${s}`}class Pt{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(dt(this.auth,"network-request-failed"))),kt.get())}))}}function Rt(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=dt(e,t,i);return s.customData._tokenResponse=n,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ot(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(e){return 1e3*Number(e)}function Dt(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return ut("JWT malformed, contained fewer than 3 sections"),null;try{const e=F(n);return e?JSON.parse(e):(ut("Failed to decode base64 JWT payload"),null)}catch(e){return ut("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ft(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Q&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Ut{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{_initializeTime(){this.lastSignInTime=Ot(this.lastLoginAt),this.creationTime=Ot(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bt(e){var t;const n=e.auth,i=await e.getIdToken(),s=await Ft(e,async function(e,t){return Ct(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));mt(null==s?void 0:s.users.length,n,"internal-error");const r=s.users[0];e._notifyReloadListener(r);const o=(null===(t=r.providerUserInfo)||void 0===t?void 0:t.length)?r.providerUserInfo.map((e=>{var{providerId:t}=e,n=rt(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,h=!(e.email&&r.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Vt(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jt{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){mt(e.idToken,"internal-error"),mt(void 0!==e.idToken,"internal-error"),mt(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Dt(e);return mt(t,"internal-error"),mt(void 0!==t.exp,"internal-error"),mt(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return mt(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await At(e,{},(async()=>{const n=ne({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,r=Lt(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",St.fetch()(r,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,r=new jt;return n&&(mt("string"==typeof n,"internal-error",{appName:e}),r.refreshToken=n),i&&(mt("string"==typeof i,"internal-error",{appName:e}),r.accessToken=i),s&&(mt("number"==typeof s,"internal-error",{appName:e}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jt,this.toJSON())}_performRefresh(){return gt("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(e,t){mt("string"==typeof e||void 0===e,"internal-error",{appName:t})}class $t{async getIdToken(e){const t=await Ft(this,this.stsTokenManager.getToken(this.auth,e));return mt(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=le(e),i=await n.getIdToken(t),s=Dt(i);mt(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r="object"==typeof s.firebase?s.firebase:void 0,o=null==r?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Ot(Mt(s.auth_time)),issuedAtTime:Ot(Mt(s.iat)),expirationTime:Ot(Mt(s.exp)),signInProvider:o||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=le(e);await Bt(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(mt(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new $t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){mt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Bt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ft(this,async function(e,t){return Ct(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,r,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,f=null!==(r=t.photoURL)&&void 0!==r?r:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:w,isAnonymous:b,providerData:E,stsTokenManager:T}=t;mt(y&&T,e,"internal-error");const _=jt.fromJSON(this.name,T);mt("string"==typeof y,e,"internal-error"),zt(u,e.name),zt(h,e.name),mt("boolean"==typeof w,e,"internal-error"),mt("boolean"==typeof b,e,"internal-error"),zt(d,e.name),zt(f,e.name),zt(p,e.name),zt(m,e.name),zt(g,e.name),zt(v,e.name);const S=new $t({uid:y,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:_,createdAt:g,lastLoginAt:v});return E&&Array.isArray(E)&&(S.providerData=E.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const i=new jt;i.updateFromServerResponse(t);const s=new $t({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Bt(s),s}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=rt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ut(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Vt(s.createdAt||void 0,s.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht=new Map;function qt(e){vt(e instanceof Function,"Expected a class definition");let t=Ht.get(e);return t?(vt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ht.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}Gt.type="NONE";const Wt=Gt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(e,t,n){return`firebase:${e}:${t}:${n}`}class Xt{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$t._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Xt(qt(Wt),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=i[0]||qt(Wt);const r=Kt(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(r);if(t){const i=$t._fromJSON(e,t);n!==s&&(o=i),s=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(r,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(r)}catch(e){}}))),new Xt(s,e,n)):new Xt(s,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=Kt(this.userKey,i.apiKey,s),this.fullPersistenceKey=Kt("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(en(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Yt(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(nn(t))return"Blackberry";if(sn(t))return"Webos";if(Jt(t))return"Safari";if((t.includes("chrome/")||Zt(t))&&!t.includes("edge/"))return"Chrome";if(tn(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Yt(e=G()){return/firefox\//i.test(e)}function Jt(e=G()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Zt(e=G()){return/crios\//i.test(e)}function en(e=G()){return/iemobile/i.test(e)}function tn(e=G()){return/android/i.test(e)}function nn(e=G()){return/blackberry/i.test(e)}function sn(e=G()){return/webos/i.test(e)}function rn(e=G()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function on(){return K()&&10===document.documentMode}function an(e=G()){return rn(e)||tn(e)||sn(e)||nn(e)||/windows phone/i.test(e)||en(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ln(e,t=[]){let n;switch(e){case"Browser":n=Qt(G());break;case"Worker":n=`${Qt(G())}-${e}`;break;default:n=e}return`${n}/JsCore/9.22.2/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cn(e,t){return Ct(e,"GET","/v2/recaptchaConfig",xt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(e){return void 0!==e&&void 0!==e.enterprise}class hn{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(e){return new Promise(((t,n)=>{const i=document.createElement("script");var s,r;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=dt("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==r?r:document).appendChild(i)}))}function fn(e){return`__${e}${Math.floor(1e6*Math.random())}`}class pn{async verify(e="verify",t=!1){function n(t,n,i){const s=window.grecaptcha;un(s)?s.enterprise.ready((()=>{s.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{cn(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new hn(i);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((s=>{if(!t&&un(window.grecaptcha))n(s,e,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));dn("https://www.google.com/recaptcha/enterprise.js?render="+s).then((()=>{n(s,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}constructor(e){this.type="recaptcha-enterprise",this.auth=yn(e)}}async function mn(e,t,n,i=!1){const s=new pn(e);let r;try{r=await s.verify(n)}catch(e){r=await s.verify(n,!0)}const o=Object.assign({},t);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=qt(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Xt.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==r||!(null==o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return mt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Bt(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?le(e):null;return t&&mt(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&mt(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(qt(e))}))}async initializeRecaptchaConfig(){const e=await cn(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new hn(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new pn(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Y("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&qt(e)||this._popupRedirectResolver;mt(t,this,"argument-error"),this.redirectPersistenceManager=await Xt.create(this,[qt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t),r=this._isInitialized?Promise.resolve():this._initializationPromise;return mt(r,this,"internal-error"),r.then((()=>s(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return mt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ln(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){ct.logLevel<=fe.WARN&&ct.warn(`Auth (9.22.2): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wn(this),this.idTokenSubscription=new wn(this),this.beforeStateQueue=new gn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lt,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}}function yn(e){return le(e)}class wn{get next(){return mt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=re((e=>this.observer=e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(e,t,n){const i=yn(e);mt(i._canInitEmulator,i,"emulator-config-failed"),mt(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!!(null==n?void 0:n.disableWarnings),r=En(t),{host:o,port:a}=function(e){const t=En(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const e=s[1];return{host:e,port:Tn(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:Tn(t)}}}(t),l=null===a?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function En(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Tn(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class _n{toJSON(){return gt("not implemented")}_getIdTokenResponse(e){return gt("not implemented")}_linkToIdToken(e,t){return gt("not implemented")}_getReauthenticationResolver(e){return gt("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sn(e,t){return Ct(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function In(e,t){return Nt(e,"POST","/v1/accounts:signInWithPassword",xt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kn extends _n{static _fromEmailAndPassword(e,t){return new kn(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new kn(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await mn(e,n,"signInWithPassword");return In(e,t)}return In(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await mn(e,n,"signInWithPassword");return In(e,t)}return Promise.reject(t)}));case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Nt(e,"POST","/v1/accounts:signInWithEmailLink",xt(e,t))}(e,{email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Sn(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Nt(e,"POST","/v1/accounts:signInWithEmailLink",xt(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(e,t){return Nt(e,"POST","/v1/accounts:signInWithIdp",xt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends _n{static _fromParams(e){const t=new Cn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ht("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=rt(t,["providerId","signInMethod"]);if(!n||!i)return null;const r=new Cn(n,i);return r.idToken=s.idToken||void 0,r.accessToken=s.accessToken||void 0,r.secret=s.secret,r.nonce=s.nonce,r.pendingToken=s.pendingToken||null,r}_getIdTokenResponse(e){return xn(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,xn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xn(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ne(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nn extends _n{static _fromVerification(e,t){return new Nn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Nn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Nt(e,"POST","/v1/accounts:signInWithPhoneNumber",xt(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Nt(e,"POST","/v1/accounts:signInWithPhoneNumber",xt(e,t));if(n.temporaryProof)throw Rt(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Nt(e,"POST","/v1/accounts:signInWithPhoneNumber",xt(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),An)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}=e;return n||t||i||s?new Nn({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{static parseLink(e){const t=function(e){const t=ie(se(e)).link,n=t?ie(se(t)).deep_link_id:null,i=ie(se(e)).deep_link_id;return(i?ie(se(i)).link:null)||i||n||t||e}(e);try{return new Ln(t)}catch(e){return null}}constructor(e){var t,n,i,s,r,o;const a=ie(se(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);mt(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(s=a.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(r=a.languageCode)&&void 0!==r?r:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pn{static credential(e,t){return kn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ln.parseLink(t);return mt(n,"argument-error"),kn._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=Pn.PROVIDER_ID}}Pn.PROVIDER_ID="password",Pn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Pn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rn{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Rn{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mn extends On{static credential(e){return Cn._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Mn.FACEBOOK_SIGN_IN_METHOD="facebook.com",Mn.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dn extends On{static credential(e,t){return Cn._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Dn.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Dn.GOOGLE_SIGN_IN_METHOD="google.com",Dn.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fn extends On{static credential(e){return Cn._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Fn.GITHUB_SIGN_IN_METHOD="github.com",Fn.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Un extends On{static credential(e,t){return Cn._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Un.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Vn(e,t){return Nt(e,"POST","/v1/accounts:signUp",xt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Un.TWITTER_SIGN_IN_METHOD="twitter.com",Un.PROVIDER_ID="twitter.com";class Bn{static async _fromIdTokenResponse(e,t,n,i=!1){const s=await $t._fromIdTokenResponse(e,n,i),r=jn(n);return new Bn({user:s,providerId:r,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=jn(n);return new Bn({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function jn(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zn extends Q{static _fromErrorAndOperation(e,t,n,i){return new zn(e,t,n,i)}constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,zn.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function $n(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw zn._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(e,t,n=!1){const i=await Ft(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Bn._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function qn(e,t,n=!1){const{auth:i}=e,s="reauthenticate";try{const r=await Ft(e,$n(i,s,t,e),n);mt(r.idToken,i,"internal-error");const o=Dt(r.idToken);mt(o,i,"internal-error");const{sub:a}=o;return mt(e.uid===a,i,"user-mismatch"),Bn._forOperation(e,s,r)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&ht(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gn(e,t,n=!1){const i="signIn",s=await $n(e,i,t),r=await Bn._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(r.user),r}async function Wn(e,t){return Gn(yn(e),t)}async function Kn(e,t,n){var i;const s=yn(e),r={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(i=s._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled){const e=await mn(s,r,"signUpPassword");o=Vn(s,e)}else o=Vn(s,r).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await mn(s,r,"signUpPassword");return Vn(s,e)}return Promise.reject(e)}));const a=await o.catch((e=>Promise.reject(e))),l=await Bn._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(l.user),l}function Xn(e,t,n){return Wn(le(e),Pn.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Qn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=le(e),s={idToken:await i.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},r=await Ft(i,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return Ct(e,"POST","/v1/accounts:update",t)}(i.auth,s));i.displayName=r.displayName||null,i.photoURL=r.photoUrl||null;const o=i.providerData.find((({providerId:e})=>"password"===e));o&&(o.displayName=i.displayName,o.photoURL=i.photoURL),await i._updateTokensIfNecessary(r)}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yn{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Yn{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);on()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=G();return Jt(e)||rn(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=an(),this._shouldAllowMigration=!0}}Jn.type="LOCAL";const Zn=Jn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends Yn{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}ei.type="SESSION";const ti=ei;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ni{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new ni(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(r).map((async e=>e(t.origin,s))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ii(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ni.receivers=[];class si{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,r;return new Promise(((o,a)=>{const l=ii("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function oi(){return void 0!==ri().WorkerGlobalScope&&"function"==typeof ri().importScripts}class ai{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function li(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function ci(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new ai(e).toPromise()}(),t(await ci()))}))}))}async function ui(e,t,n){const i=li(e,!0).put({fbase_key:t,value:n});return new ai(i).toPromise()}function hi(e,t){const n=li(e,!0).delete(t);return new ai(n).toPromise()}class di{async _openDb(){return this.db||(this.db=await ci()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return oi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ni._getInstance(oi()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new si(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ci();return await ui(e,"__sak","1"),await hi(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>ui(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=li(e,!1).get(t),i=await new ai(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>hi(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=li(e,!1).getAll();return new ai(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}di.type="LOCAL";const fi=di;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
fn("rcb"),new Tt(3e4,6e4);async function pi(e,t,n){var i;const s=await n.verify();try{let r;if(mt("string"==typeof s,e,"argument-error"),mt("recaptcha"===n.type,e,"argument-error"),r="string"==typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){mt("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Ct(e,"POST","/v2/accounts/mfaEnrollment:start",xt(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{mt("signin"===t.type,e,"internal-error");const n=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;mt(n,e,"missing-multi-factor-info");const o=await function(e,t){return Ct(e,"POST","/v2/accounts/mfaSignIn:start",xt(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Ct(e,"POST","/v1/accounts:sendVerificationCode",xt(e,t))}(e,{phoneNumber:r.phoneNumber,recaptchaToken:s});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mi{verifyPhoneNumber(e,t){return pi(this.auth,e,le(t))}static credential(e,t){return Nn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return mi.credentialFromTaggedObject(t)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Nn._fromTokenResponse(t,n):null}constructor(e){this.providerId=mi.PROVIDER_ID,this.auth=yn(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gi(e,t){return t?qt(t):(mt(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mi.PROVIDER_ID="phone",mi.PHONE_SIGN_IN_METHOD="phone";class vi extends _n{_getIdTokenResponse(e){return xn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function yi(e){return Gn(e.auth,new vi(e),e.bypassAuthState)}function wi(e){const{auth:t,user:n}=e;return mt(n,t,"internal-error"),qn(n,new vi(e),e.bypassAuthState)}async function bi(e){const{auth:t,user:n}=e;return mt(n,t,"internal-error"),Hn(n,new vi(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:r,type:o}=e;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yi;case"linkViaPopup":case"linkViaRedirect":return bi;case"reauthViaPopup":case"reauthViaRedirect":return wi;default:ht(this.auth,"internal-error")}}resolve(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=new Tt(2e3,1e4);class _i extends Ei{async executeNotNull(){const e=await this.execute();return mt(e,this.auth,"internal-error"),e}async onExecution(){vt(1===this.filter.length,"Popup operations only handle one event");const e=ii();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(dt(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_i.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(dt(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Ti.get())};e()}constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,_i.currentPopupAction&&_i.currentPopupAction.cancel(),_i.currentPopupAction=this}}_i.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Si=new Map;class Ii extends Ei{async execute(){let e=Si.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Ci(t),i=xi(e);if(!await i._isAvailable())return!1;const s="true"===await i._get(n);return await i._remove(n),s}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Si.set(this.auth._key(),e)}return this.bypassAuthState||Si.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function ki(e,t){Si.set(e._key(),t)}function xi(e){return qt(e._redirectPersistence)}function Ci(e){return Kt("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(e,t,n=!1){const i=yn(e),s=gi(i,t),r=new Ii(i,s,n),o=await r.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}class Ni{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pi(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Pi(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(dt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Li(e))}saveEventToCache(e){this.cachedEventUids.add(Li(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Li(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Pi({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ri=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Oi=/^https?/;async function Mi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Ct(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Di(e))return}catch(e){}ht(e,"unauthorized-domain")}function Di(e){const t=yt(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===i}if(!Oi.test(n))return!1;if(Ri.test(e))return i===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=new Tt(3e4,6e4);function Ui(){const e=ri().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Vi=null;function Bi(e){return Vi=Vi||function(e){return new Promise(((t,n)=>{var i,s,r;function o(){Ui(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ui(),n(dt(e,"network-request-failed"))},timeout:Fi.get()})}if(null===(s=null===(i=ri().gapi)||void 0===i?void 0:i.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(r=ri().gapi)||void 0===r?void 0:r.load)){const t=fn("iframefcb");return ri()[t]=()=>{gapi.load?o():n(dt(e,"network-request-failed"))},dn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Vi=null,e}))}(e),Vi}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=new Tt(5e3,15e3),zi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$i=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hi(e){const t=e.config;mt(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?_t(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:"9.22.2"},s=$i.get(e.config.apiHost);s&&(i.eid=s);const r=e._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${ne(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Gi{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Wi(e,t,n,i=500,s=600){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},qi),{width:i.toString(),height:s.toString(),top:r,left:o}),c=G().toLowerCase();n&&(a=Zt(c)?"_blank":n),Yt(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=G()){var t;return rn(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new Gi(null);const h=window.open(t||"",a,u);mt(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Gi(h)}const Ki=encodeURIComponent("fac");async function Xi(e,t,n,i,s,r){mt(e.config.authDomain,e,"auth-domain-config-required"),mt(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:"9.22.2",eventId:s};if(t instanceof Rn){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Z(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(r||{}))o[e]=t}if(t instanceof On){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const l=await e._getAppCheckToken(),c=l?`#${Ki}=${encodeURIComponent(l)}`:"";return`${function({config:e}){return e.emulator?_t(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${ne(a).slice(1)}${c}`}const Qi=class{async _openPopup(e,t,n,i){var s;vt(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return Wi(e,await Xi(e,t,n,yt(),i),ii())}async _openRedirect(e,t,n,i){await this._originValidation(e);return function(e){ri().location.href=e}(await Xi(e,t,n,yt(),i)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(vt(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Bi(e),n=ri().gapi;return mt(n,e,"internal-error"),t.open({where:document.body,url:Hi(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zi,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const s=dt(e,"network-request-failed"),r=ri().setTimeout((()=>{i(s)}),ji.get());function o(){ri().clearTimeout(r),n(t)}t.ping(o).then(o,(()=>{i(s)}))}))))}(e),n=new Ni(e);return t.register("authEvent",(t=>{mt(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const s=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==s&&t(!!s),ht(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Mi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return an()||Jt()||rn()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ti,this._completeRedirectFn=Ai,this._overrideRedirectResult=ki}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yi{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){mt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ji=$("authIdTokenMaxAge")||300;let Zi=null;var es;es="Browser",$e(new ce("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:r,authDomain:o}=n.options;mt(r&&!r.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:r,authDomain:o,clientPlatform:es,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ln(es)},l=new vn(n,i,s,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(qt);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),$e(new ce("auth-internal",(e=>{const t=yn(e.getProvider("auth").getImmediate());return new Yi(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Xe("@firebase/auth","0.23.2",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(es)),Xe("@firebase/auth","0.23.2","esm2017");var ts,ns="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{},is={},ss=ss||{},rs=ns||self;function os(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function as(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var ls="closure_uid_"+(1e9*Math.random()>>>0),cs=0;function us(e,t,n){return e.call.apply(e.bind,arguments)}function hs(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function ds(e,t,n){return(ds=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?us:hs).apply(null,arguments)}function fs(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function ps(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return t.prototype[n].apply(e,s)}}function ms(){this.s=this.s,this.o=this.o}ms.prototype.s=!1,ms.prototype.sa=function(){var e;!this.s&&(this.s=!0,this.N(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,ls)&&e[ls]||(e[ls]=++cs))},ms.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const gs=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function vs(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function ys(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(os(n)){const t=e.length||0,i=n.length||0;e.length=t+i;for(let s=0;s<i;s++)e[t+s]=n[s]}else e.push(n)}}function ws(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ws.prototype.h=function(){this.defaultPrevented=!0};var bs=function(){if(!rs.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{rs.addEventListener("test",(()=>{}),t),rs.removeEventListener("test",(()=>{}),t)}catch(e){}return e}();function Es(e){return/^[\s\xa0]*$/.test(e)}function Ts(){var e=rs.navigator;return e&&(e=e.userAgent)?e:""}function _s(e){return-1!=Ts().indexOf(e)}function Ss(e){return Ss[" "](e),e}Ss[" "]=function(){};var Is,ks,xs,Cs=_s("Opera"),As=_s("Trident")||_s("MSIE"),Ns=_s("Edge"),Ls=Ns||As,Ps=_s("Gecko")&&!(-1!=Ts().toLowerCase().indexOf("webkit")&&!_s("Edge"))&&!(_s("Trident")||_s("MSIE"))&&!_s("Edge"),Rs=-1!=Ts().toLowerCase().indexOf("webkit")&&!_s("Edge");function Os(){var e=rs.document;return e?e.documentMode:void 0}e:{var Ms="",Ds=(ks=Ts(),Ps?/rv:([^\);]+)(\)|;)/.exec(ks):Ns?/Edge\/([\d\.]+)/.exec(ks):As?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(ks):Rs?/WebKit\/(\S+)/.exec(ks):Cs?/(?:Version)[ \/]?(\S+)/.exec(ks):void 0);if(Ds&&(Ms=Ds?Ds[1]:""),As){var Fs=Os();if(null!=Fs&&Fs>parseFloat(Ms)){Is=String(Fs);break e}}Is=Ms}if(rs.document&&As){var Us=Os();xs=Us||(parseInt(Is,10)||void 0)}else xs=void 0;var Vs=xs;function Bs(e,t){if(ws.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ps){e:{try{Ss(t.nodeName);var s=!0;break e}catch(e){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:js[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Bs.$.h.call(this)}}ps(Bs,ws);var js={2:"touch",3:"pen",4:"mouse"};Bs.prototype.h=function(){Bs.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var zs="closure_listenable_"+(1e6*Math.random()|0),$s=0;function Hs(e,t,n,i,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.la=s,this.key=++$s,this.fa=this.ia=!1}function qs(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Gs(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function Ws(e){const t={};for(const n in e)t[n]=e[n];return t}const Ks="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xs(e,t){let n,i;for(let t=1;t<arguments.length;t++){for(n in i=arguments[t],i)e[n]=i[n];for(let t=0;t<Ks.length;t++)n=Ks[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function Qs(e){this.src=e,this.g={},this.h=0}function Ys(e,t){var n=t.type;if(n in e.g){var i,s=e.g[n],r=gs(s,t);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(qs(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Js(e,t,n,i){for(var s=0;s<e.length;++s){var r=e[s];if(!r.fa&&r.listener==t&&r.capture==!!n&&r.la==i)return s}return-1}Qs.prototype.add=function(e,t,n,i,s){var r=e.toString();(e=this.g[r])||(e=this.g[r]=[],this.h++);var o=Js(e,t,i,s);return-1<o?(t=e[o],n||(t.ia=!1)):((t=new Hs(t,this.src,r,!!i,s)).ia=n,e.push(t)),t};var Zs="closure_lm_"+(1e6*Math.random()|0),er={};function tr(e,t,n,i,s){if(i&&i.once)return ir(e,t,n,i,s);if(Array.isArray(t)){for(var r=0;r<t.length;r++)tr(e,t[r],n,i,s);return null}return n=ur(n),e&&e[zs]?e.O(t,n,as(i)?!!i.capture:!!i,s):nr(e,t,n,!1,i,s)}function nr(e,t,n,i,s,r){if(!t)throw Error("Invalid event type");var o=as(s)?!!s.capture:!!s,a=lr(e);if(a||(e[Zs]=a=new Qs(e)),(n=a.add(t,n,i,o,r)).proxy)return n;if(i=function(){function e(n){return t.call(e.src,e.listener,n)}const t=ar;return e}(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)bs||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),i,s);else if(e.attachEvent)e.attachEvent(or(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function ir(e,t,n,i,s){if(Array.isArray(t)){for(var r=0;r<t.length;r++)ir(e,t[r],n,i,s);return null}return n=ur(n),e&&e[zs]?e.P(t,n,as(i)?!!i.capture:!!i,s):nr(e,t,n,!0,i,s)}function sr(e,t,n,i,s){if(Array.isArray(t))for(var r=0;r<t.length;r++)sr(e,t[r],n,i,s);else i=as(i)?!!i.capture:!!i,n=ur(n),e&&e[zs]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=Js(r=e.g[t],n,i,s))&&(qs(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete e.g[t],e.h--)))):e&&(e=lr(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Js(t,n,i,s)),(n=-1<e?t[e]:null)&&rr(n))}function rr(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[zs])Ys(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(or(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=lr(t))?(Ys(n,e),0==n.h&&(n.src=null,t[Zs]=null)):qs(e)}}}function or(e){return e in er?er[e]:er[e]="on"+e}function ar(e,t){if(e.fa)e=!0;else{t=new Bs(t,this);var n=e.listener,i=e.la||e.src;e.ia&&rr(e),e=n.call(i,t)}return e}function lr(e){return(e=e[Zs])instanceof Qs?e:null}var cr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ur(e){return"function"==typeof e?e:(e[cr]||(e[cr]=function(t){return e.handleEvent(t)}),e[cr])}function hr(){ms.call(this),this.i=new Qs(this),this.S=this,this.J=null}function dr(e,t){var n,i=e.J;if(i)for(n=[];i;i=i.J)n.push(i);if(e=e.S,i=t.type||t,"string"==typeof t)t=new ws(t,e);else if(t instanceof ws)t.target=t.target||e;else{var s=t;Xs(t=new ws(i,e),s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];s=fr(o,i,!0,t)&&s}if(s=fr(o=t.g=e,i,!0,t)&&s,s=fr(o,i,!1,t)&&s,n)for(r=0;r<n.length;r++)s=fr(o=t.g=n[r],i,!1,t)&&s}function fr(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var s=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Ys(e.i,o),s=!1!==a.call(l,i)&&s}}return s&&!i.defaultPrevented}ps(hr,ms),hr.prototype[zs]=!0,hr.prototype.removeEventListener=function(e,t,n,i){sr(this,e,t,n,i)},hr.prototype.N=function(){if(hr.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)qs(n[i]);delete t.g[e],t.h--}}this.J=null},hr.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},hr.prototype.P=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var pr=rs.JSON.stringify;function mr(){var e=Tr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var gr=new class{get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}}((()=>new vr),(e=>e.reset()));class vr{set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function yr(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function wr(e){rs.setTimeout((()=>{throw e}),0)}let br,Er=!1,Tr=new class{add(e,t){const n=gr.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}},_r=()=>{const e=rs.Promise.resolve(void 0);br=()=>{e.then(Sr)}};var Sr=()=>{for(var e;e=mr();){try{e.h.call(e.g)}catch(e){wr(e)}var t=gr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Er=!1};function Ir(e,t){hr.call(this),this.h=e||1,this.g=t||rs,this.j=ds(this.qb,this),this.l=Date.now()}function kr(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function xr(e,t,n){if("function"==typeof e)n&&(e=ds(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=ds(e.handleEvent,e)}return 2147483647<Number(t)?-1:rs.setTimeout(e,t||0)}function Cr(e){e.g=xr((()=>{e.g=null,e.i&&(e.i=!1,Cr(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}ps(Ir,hr),(ts=Ir.prototype).ga=!1,ts.T=null,ts.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),dr(this,"tick"),this.ga&&(kr(this),this.start()))}},ts.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},ts.N=function(){Ir.$.N.call(this),kr(this),delete this.g};class Ar extends ms{l(e){this.h=arguments,this.g?this.i=!0:Cr(this)}N(){super.N(),this.g&&(rs.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}}function Nr(e){ms.call(this),this.h=e,this.g={}}ps(Nr,ms);var Lr=[];function Pr(e,t,n,i){Array.isArray(n)||(n&&(Lr[0]=n.toString()),n=Lr);for(var s=0;s<n.length;s++){var r=tr(t,n[s],i||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Rr(e){Gs(e.g,(function(e,t){this.g.hasOwnProperty(t)&&rr(e)}),e),e.g={}}function Or(){this.g=!0}function Mr(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return pr(n)}catch(e){return t}}(e,n)+(i?" "+i:"")}))}Nr.prototype.N=function(){Nr.$.N.call(this),Rr(this)},Nr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Or.prototype.Ea=function(){this.g=!1},Or.prototype.info=function(){};var Dr={},Fr=null;function Ur(){return Fr=Fr||new hr}function Vr(e){ws.call(this,Dr.Ta,e)}function Br(e){const t=Ur();dr(t,new Vr(t))}function jr(e,t){ws.call(this,Dr.STAT_EVENT,e),this.stat=t}function zr(e){const t=Ur();dr(t,new jr(t,e))}function $r(e,t){ws.call(this,Dr.Ua,e),this.size=t}function Hr(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return rs.setTimeout((function(){e()}),t)}Dr.Ta="serverreachability",ps(Vr,ws),Dr.STAT_EVENT="statevent",ps(jr,ws),Dr.Ua="timingevent",ps($r,ws);var qr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Gr={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Wr(){}function Kr(e){return e.h||(e.h=e.i())}function Xr(){}Wr.prototype.h=null;var Qr,Yr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Jr(){ws.call(this,"d")}function Zr(){ws.call(this,"c")}function eo(){}function to(e,t,n,i){this.l=e,this.j=t,this.m=n,this.W=i||1,this.U=new Nr(this),this.P=io,e=Ls?125:void 0,this.V=new Ir(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new no}function no(){this.i=null,this.g="",this.h=!1}ps(Jr,ws),ps(Zr,ws),ps(eo,Wr),eo.prototype.g=function(){return new XMLHttpRequest},eo.prototype.i=function(){return{}},Qr=new eo;var io=45e3,so={},ro={};function oo(e,t,n){e.L=1,e.v=ko(Eo(t)),e.s=n,e.S=!0,ao(e,null)}function ao(e,t){e.G=Date.now(),ho(e),e.A=Eo(e.v);var n=e.A,i=e.W;Array.isArray(i)||(i=[String(i)]),Vo(n.i,"t",i),e.C=0,n=e.l.J,e.h=new no,e.g=Fa(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Ar(ds(e.Pa,e,e.g),e.O)),Pr(e.U,e.g,"readystatechange",e.nb),t=e.I?Ws(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Br(),function(e,t,n,i,s,r){e.info((function(){if(e.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.W,e.s)}function lo(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function co(e,t,n){let i,s=!0;for(;!e.J&&e.C<n.length;){if(i=uo(e,n),i==ro){4==t&&(e.o=4,zr(14),s=!1),Mr(e.j,e.m,null,"[Incomplete Response]");break}if(i==so){e.o=4,zr(15),Mr(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}Mr(e.j,e.m,i,null),vo(e,i)}lo(e)&&i!=ro&&i!=so&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,zr(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Aa(t),t.M=!0,zr(11))):(Mr(e.j,e.m,n,"[Invalid Chunked Response]"),go(e),mo(e))}function uo(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?ro:(n=Number(t.substring(n,i)),isNaN(n)?so:(i+=1)+n>t.length?ro:(t=t.slice(i,i+n),e.C=i+n,t))}function ho(e){e.Y=Date.now()+e.P,fo(e,e.P)}function fo(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Hr(ds(e.lb,e),t)}function po(e){e.B&&(rs.clearTimeout(e.B),e.B=null)}function mo(e){0==e.l.H||e.J||Pa(e.l,e)}function go(e){po(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,kr(e.V),Rr(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function vo(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||qo(n.i,e)))if(!e.K&&qo(n.i,e)&&3==n.H){try{var i=n.Ja.g.parse(t)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;La(n),Ea(n)}Ca(n),zr(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&0==n.A&&!n.v&&(n.v=Hr(ds(n.ib,n),6e3));if(1>=Ho(n.i)&&n.oa){try{n.oa()}catch(e){}n.oa=void 0}}else Oa(n,11)}else if((e.K||n.g==e)&&La(n),!Es(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(n.V=c[0],c=c[1],2==n.H)if("c"==c[0]){n.K=c[1],n.pa=c[2];const t=c[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const s=c[4];null!=s&&(n.Ga=s,n.l.info("SVER="+n.Ga));const u=c[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var r=i.i;r.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(Go(r,r.h),r.h=null))}if(i.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.Da=e,Io(i.I,i.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=e;if((i=n).wa=Da(i,i.J?i.pa:null,i.Y),o.K){Wo(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.B&&(po(a),ho(a)),i.g=o}else xa(i);0<n.j.length&&_a(n)}else"stop"!=c[0]&&"close"!=c[0]||Oa(n,7);else 3==n.H&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Oa(n,7):ba(n):"noop"!=c[0]&&n.h&&n.h.Aa(c),n.A=0)}Br()}catch(e){}}function yo(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(os(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(os(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}(e),i=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(os(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}(e),s=i.length,r=0;r<s;r++)t.call(void 0,i[r],n&&n[r],e)}(ts=to.prototype).setTimeout=function(e){this.P=e},ts.nb=function(e){e=e.target;const t=this.M;t&&3==pa(e)?t.l():this.Pa(e)},ts.Pa=function(e){try{if(e==this.g)e:{const u=pa(this.g);var t=this.g.Ia();this.g.da();if(!(3>u)&&(3!=u||Ls||this.g&&(this.h.h||this.g.ja()||ma(this.g)))){this.J||4!=u||7==t||Br(),po(this);var n=this.g.da();this.ca=n;t:if(lo(this)){var i=ma(this.g);e="";var s=i.length,r=4==pa(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){go(this),mo(this);var o="";break t}this.h.i=new rs.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:r&&t==s-1});i.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(e,t,n,i,s,r,o){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Es(a)){var c=a;break t}}c=null}if(!(n=c)){this.i=!1,this.o=3,zr(12),go(this),mo(this);break e}Mr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vo(this,n)}this.S?(co(this,u,o),Ls&&this.i&&3==u&&(Pr(this.U,this.V,"tick",this.mb),this.V.start())):(Mr(this.j,this.m,o,null),vo(this,o)),4==u&&go(this),this.i&&!this.J&&(4==u?Pa(this.l,this):(this.i=!1,ho(this)))}else(function(e){const t={};e=(e.g&&2<=pa(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<e.length;i++){if(Es(e[i]))continue;var n=yr(e[i]);const s=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const r=t[s]||[];t[s]=r,r.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,zr(12)):(this.o=0,zr(13)),go(this),mo(this)}}}catch(e){}},ts.mb=function(){if(this.g){var e=pa(this.g),t=this.g.ja();this.C<t.length&&(po(this),co(this,e,t),this.i&&4!=e&&ho(this))}},ts.cancel=function(){this.J=!0,go(this)},ts.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.L&&(Br(),zr(17)),go(this),this.o=2,mo(this)):fo(this,this.Y-e)};var wo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bo(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof bo){this.h=e.h,To(this,e.j),this.s=e.s,this.g=e.g,_o(this,e.m),this.l=e.l;var t=e.i,n=new Mo;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),So(this,n),this.o=e.o}else e&&(t=String(e).match(wo))?(this.h=!1,To(this,t[1]||"",!0),this.s=xo(t[2]||""),this.g=xo(t[3]||"",!0),_o(this,t[4]),this.l=xo(t[5]||"",!0),So(this,t[6]||"",!0),this.o=xo(t[7]||"")):(this.h=!1,this.i=new Mo(null,this.h))}function Eo(e){return new bo(e)}function To(e,t,n){e.j=n?xo(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function _o(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function So(e,t,n){t instanceof Mo?(e.i=t,function(e,t){t&&!e.j&&(Do(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Fo(this,t),Vo(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=Co(t,Ro)),e.i=new Mo(t,e.h))}function Io(e,t,n){e.i.set(t,n)}function ko(e){return Io(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function xo(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Co(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Ao),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ao(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}bo.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Co(t,No,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Co(t,No,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Co(n,"/"==n.charAt(0)?Po:Lo,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Co(n,Oo)),e.join("")};var No=/[#\/\?@]/g,Lo=/[#\?:]/g,Po=/[#\?]/g,Ro=/[#\?@]/g,Oo=/#/g;function Mo(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Do(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),s=null;if(0<=i){var r=e[n].substring(0,i);s=e[n].substring(i+1)}else r=e[n];t(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Fo(e,t){Do(e),t=Bo(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Uo(e,t){return Do(e),t=Bo(e,t),e.g.has(t)}function Vo(e,t,n){Fo(e,t),0<n.length&&(e.i=null,e.g.set(Bo(e,t),vs(n)),e.h+=n.length)}function Bo(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(ts=Mo.prototype).add=function(e,t){Do(this),this.i=null,e=Bo(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},ts.forEach=function(e,t){Do(this),this.g.forEach((function(n,i){n.forEach((function(n){e.call(t,n,i,this)}),this)}),this)},ts.ta=function(){Do(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const s=e[i];for(let e=0;e<s.length;e++)n.push(t[i])}return n},ts.Z=function(e){Do(this);let t=[];if("string"==typeof e)Uo(this,e)&&(t=t.concat(this.g.get(Bo(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},ts.set=function(e,t){return Do(this),this.i=null,Uo(this,e=Bo(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},ts.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},ts.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;""!==o[i]&&(s+="="+encodeURIComponent(String(o[i]))),e.push(s)}}return this.i=e.join("&")};function jo(e){this.l=e||zo,rs.PerformanceNavigationTiming?e=0<(e=rs.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(rs.g&&rs.g.Ka&&rs.g.Ka()&&rs.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var zo=10;function $o(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Ho(e){return e.h?1:e.g?e.g.size:0}function qo(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Go(e,t){e.g?e.g.add(t):e.h=t}function Wo(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Ko(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return vs(e.i)}jo.prototype.cancel=function(){if(this.i=Ko(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};function Xo(){this.g=new class{stringify(e){return rs.JSON.stringify(e,void 0)}parse(e){return rs.JSON.parse(e,void 0)}}}function Qo(e,t,n){const i=n||"";try{yo(e,(function(e,n){let s=e;as(e)&&(s=pr(e)),t.push(i+n+"="+encodeURIComponent(s))}))}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}function Yo(e,t,n,i,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(i)}catch(e){}}function Jo(e){this.l=e.fc||null,this.j=e.ob||!1}function Zo(e,t){hr.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=ea,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ps(Jo,Wr),Jo.prototype.g=function(){return new Zo(this.l,this.j)},Jo.prototype.i=function(e){return function(){return e}}({}),ps(Zo,hr);var ea=0;function ta(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function na(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ia(e)}function ia(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(ts=Zo.prototype).open=function(e,t){if(this.readyState!=ea)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ia(this)},ts.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||rs).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},ts.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,na(this)),this.readyState=ea},ts.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ia(this)),this.g&&(this.readyState=3,ia(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==rs.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ta(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},ts.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?na(this):ia(this),3==this.readyState&&ta(this)}},ts.Za=function(e){this.g&&(this.response=this.responseText=e,na(this))},ts.Ya=function(e){this.g&&(this.response=e,na(this))},ts.ka=function(){this.g&&na(this)},ts.setRequestHeader=function(e,t){this.v.append(e,t)},ts.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},ts.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Zo.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var sa=rs.JSON.parse;function ra(e){hr.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=oa,this.L=this.M=!1}ps(ra,hr);var oa="",aa=/^https?$/i,la=["POST","PUT"];function ca(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,ua(e),da(e)}function ua(e){e.F||(e.F=!0,dr(e,"complete"),dr(e,"error"))}function ha(e){if(e.h&&void 0!==ss&&(!e.C[1]||4!=pa(e)||2!=e.da()))if(e.v&&4==pa(e))xr(e.La,0,e);else if(dr(e,"readystatechange"),4==pa(e)){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===o){var s=String(e.I).match(wo)[1]||null;!s&&rs.self&&rs.self.location&&(s=rs.self.location.protocol.slice(0,-1)),i=!aa.test(s?s.toLowerCase():"")}n=i}if(n)dr(e,"complete"),dr(e,"success");else{e.m=6;try{var r=2<pa(e)?e.g.statusText:""}catch(e){r=""}e.j=r+" ["+e.da()+"]",ua(e)}}finally{da(e)}}}function da(e,t){if(e.g){fa(e);const n=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||dr(e,"ready");try{n.onreadystatechange=i}catch(e){}}}function fa(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(rs.clearTimeout(e.A),e.A=null)}function pa(e){return e.g?e.g.readyState:0}function ma(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case oa:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ga(e){let t="";return Gs(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function va(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=ga(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Io(e,t,n))}function ya(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function wa(e){this.Ga=0,this.j=[],this.l=new Or,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ya("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ya("baseRetryDelayMs",5e3,e),this.hb=ya("retryDelaySeedMs",1e4,e),this.eb=ya("forwardChannelMaxRetries",2,e),this.xa=ya("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new jo(e&&e.concurrentRequestLimit),this.Ja=new Xo,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function ba(e){if(Ta(e),3==e.H){var t=e.W++,n=Eo(e.I);if(Io(n,"SID",e.K),Io(n,"RID",t),Io(n,"TYPE","terminate"),Ia(e,n),(t=new to(e,e.l,t)).L=2,t.v=ko(Eo(n)),n=!1,rs.navigator&&rs.navigator.sendBeacon)try{n=rs.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!n&&rs.Image&&((new Image).src=t.v,n=!0),n||(t.g=Fa(t.l,null),t.g.ha(t.v)),t.G=Date.now(),ho(t)}Ma(e)}function Ea(e){e.g&&(Aa(e),e.g.cancel(),e.g=null)}function Ta(e){Ea(e),e.u&&(rs.clearTimeout(e.u),e.u=null),La(e),e.i.cancel(),e.m&&("number"==typeof e.m&&rs.clearTimeout(e.m),e.m=null)}function _a(e){if(!$o(e.i)&&!e.m){e.m=!0;var t=e.Na;br||_r(),Er||(br(),Er=!0),Tr.add(t,e),e.C=0}}function Sa(e,t){var n;n=t?t.m:e.W++;const i=Eo(e.I);Io(i,"SID",e.K),Io(i,"RID",n),Io(i,"AID",e.V),Ia(e,i),e.o&&e.s&&va(i,e.o,e.s),n=new to(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=ka(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Go(e.i,n),oo(n,i,t)}function Ia(e,t){e.na&&Gs(e.na,(function(e,n){Io(t,n,e)})),e.h&&yo({},(function(e,n){Io(t,n,e)}))}function ka(e,t,n){n=Math.min(e.j.length,n);var i=e.h?ds(e.h.Va,e.h,e):null;e:{var s=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let r=!0;for(let o=0;o<n;o++){let n=s[o].g;const a=s[o].map;if(n-=t,0>n)t=Math.max(0,s[o].g-100),r=!1;else try{Qo(a,e,"req"+n+"_")}catch(e){i&&i(a)}}if(r){i=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,i}function xa(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;br||_r(),Er||(br(),Er=!0),Tr.add(t,e),e.A=0}}function Ca(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=Hr(ds(e.Ma,e),Ra(e,e.A)),e.A++,!0)}function Aa(e){null!=e.B&&(rs.clearTimeout(e.B),e.B=null)}function Na(e){e.g=new to(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=Eo(e.wa);Io(t,"RID","rpc"),Io(t,"SID",e.K),Io(t,"AID",e.V),Io(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&Io(t,"TO",e.qa),Io(t,"TYPE","xmlhttp"),Ia(e,t),e.o&&e.s&&va(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=ko(Eo(t)),n.s=null,n.S=!0,ao(n,e)}function La(e){null!=e.v&&(rs.clearTimeout(e.v),e.v=null)}function Pa(e,t){var n=null;if(e.g==t){La(e),Aa(e),e.g=null;var i=2}else{if(!qo(e.i,t))return;n=t.F,Wo(e.i,t),i=1}if(0!=e.H)if(t.i)if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.G;var s=e.C;dr(i=Ur(),new $r(i,n)),_a(e)}else xa(e);else if(3==(s=t.o)||0==s&&0<t.ca||!(1==i&&function(e,t){return!(Ho(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.j=t.F.concat(e.j),0):1==e.H||2==e.H||e.C>=(e.cb?0:e.eb)||(e.m=Hr(ds(e.Na,e,t),Ra(e,e.C)),e.C++,0)))}(e,t)||2==i&&Ca(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Oa(e,5);break;case 4:Oa(e,10);break;case 3:Oa(e,6);break;default:Oa(e,2)}}function Ra(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Oa(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var i=ds(e.pb,e);n||(n=new bo("//www.google.com/images/cleardot.gif"),rs.location&&"http"==rs.location.protocol||To(n,"https"),ko(n)),function(e,t){const n=new Or;if(rs.Image){const i=new Image;i.onload=fs(Yo,n,i,"TestLoadImage: loaded",!0,t),i.onerror=fs(Yo,n,i,"TestLoadImage: error",!1,t),i.onabort=fs(Yo,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=fs(Yo,n,i,"TestLoadImage: timeout",!1,t),rs.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}(n.toString(),i)}else zr(2);e.H=0,e.h&&e.h.za(t),Ma(e),Ta(e)}function Ma(e){if(e.H=0,e.ma=[],e.h){const t=Ko(e.i);0==t.length&&0==e.j.length||(ys(e.ma,t),ys(e.ma,e.j),e.i.i.length=0,vs(e.j),e.j.length=0),e.h.ya()}}function Da(e,t,n){var i=n instanceof bo?Eo(n):new bo(n);if(""!=i.g)t&&(i.g=t+"."+i.g),_o(i,i.m);else{var s=rs.location;i=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var r=new bo(null);i&&To(r,i),t&&(r.g=t),s&&_o(r,s),n&&(r.l=n),i=r}return n=e.F,t=e.Da,n&&t&&Io(i,n,t),Io(i,"VER",e.ra),Ia(e,i),i}function Fa(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ha&&!e.va?new ra(new Jo({ob:!0})):new ra(e.va)).Oa(e.J),t}function Ua(){}function Va(){if(As&&!(10<=Number(Vs)))throw Error("Environmental error: no available transport.")}function Ba(e,t){hr.call(this),this.g=new wa(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Es(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Es(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new $a(this)}function ja(e){Jr.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function za(){Zr.call(this),this.status=1}function $a(e){this.g=e}function Ha(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function qa(e,t,n){n||(n=0);var i=Array(16);if("string"==typeof t)for(var s=0;16>s;++s)i[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var r=e.g[3],o=t+(r^n&(s^r))+i[0]+3614090360&4294967295;o=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=n+(o<<7&4294967295|o>>>25))+((o=r+(s^t&(n^s))+i[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(t^n))+i[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(r^t))+i[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(r^n&(s^r))+i[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=r+(s^t&(n^s))+i[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(t^n))+i[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(r^t))+i[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(r^n&(s^r))+i[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=r+(s^t&(n^s))+i[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(t^n))+i[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(r^t))+i[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(r^n&(s^r))+i[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=r+(s^t&(n^s))+i[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(t^n))+i[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(r^t))+i[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^r&(n^s))+i[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(t^n))+i[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(r^t))+i[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(s^r))+i[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^r&(n^s))+i[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(t^n))+i[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(r^t))+i[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(s^r))+i[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^r&(n^s))+i[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(t^n))+i[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(r^t))+i[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(s^r))+i[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^r&(n^s))+i[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(t^n))+i[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(r^t))+i[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(s^r))+i[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^s^r)+i[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^s)+i[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^t^n)+i[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^t)+i[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^r)+i[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^s)+i[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^t^n)+i[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^t)+i[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^r)+i[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^s)+i[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^t^n)+i[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^t)+i[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^r)+i[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^s)+i[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^t^n)+i[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^t)+i[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(s^(n|~r))+i[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~s))+i[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(r|~n))+i[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(s|~t))+i[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(s^(n|~r))+i[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~s))+i[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(r|~n))+i[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(s|~t))+i[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(s^(n|~r))+i[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~s))+i[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(r|~n))+i[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(s|~t))+i[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((r=(t=n+((o=t+(s^(n|~r))+i[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~s))+i[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((s=r+((o=s+(t^(r|~n))+i[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+r&4294967295}function Ga(e,t){this.h=t;for(var n=[],i=!0,s=e.length-1;0<=s;s--){var r=0|e[s];i&&r==t||(n[s]=r,i=!1)}this.g=n}(ts=ra.prototype).Oa=function(e){this.M=e},ts.ha=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Qr.g(),this.C=this.u?Kr(this.u):Kr(Qr),this.g.onreadystatechange=ds(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){return void ca(this,e)}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const e of i.keys())n.set(e,i.get(e))}i=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),s=rs.FormData&&e instanceof rs.FormData,!(0<=gs(la,t))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{fa(this),0<this.B&&((this.L=function(e){return As&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ds(this.ua,this)):this.A=xr(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){ca(this,e)}},ts.ua=function(){void 0!==ss&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,dr(this,"timeout"),this.abort(8))},ts.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,dr(this,"complete"),dr(this,"abort"),da(this))},ts.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),da(this,!0)),ra.$.N.call(this)},ts.La=function(){this.s||(this.G||this.v||this.l?ha(this):this.kb())},ts.kb=function(){ha(this)},ts.isActive=function(){return!!this.g},ts.da=function(){try{return 2<pa(this)?this.g.status:-1}catch(e){return-1}},ts.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},ts.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),sa(t)}},ts.Ia=function(){return this.m},ts.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(ts=wa.prototype).ra=8,ts.H=1,ts.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new to(this,this.l,e);let r=this.s;if(this.U&&(r?(r=Ws(r),Xs(r,this.U)):r=this.U),null!==this.o||this.O||(s.I=r,r=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var i=this.j[n];if(void 0===(i="__data__"in i.map&&"string"==typeof(i=i.map.__data__)?i.length:void 0))break;if(4096<(t+=i)){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=ka(this,s,t),Io(n=Eo(this.I),"RID",e),Io(n,"CVER",22),this.F&&Io(n,"X-HTTP-Session-Id",this.F),Ia(this,n),r&&(this.O?t="headers="+encodeURIComponent(String(ga(r)))+"&"+t:this.o&&va(n,this.o,r)),Go(this.i,s),this.bb&&Io(n,"TYPE","init"),this.P?(Io(n,"$req",t),Io(n,"SID","null"),s.aa=!0,oo(s,n,null)):oo(s,n,t),this.H=2}}else 3==this.H&&(e?Sa(this,e):0==this.j.length||$o(this.i)||Sa(this))},ts.Ma=function(){if(this.u=null,Na(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Hr(ds(this.jb,this),e)}},ts.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,zr(10),Ea(this),Na(this))},ts.ib=function(){null!=this.v&&(this.v=null,Ea(this),Ca(this),zr(19))},ts.pb=function(e){e?(this.l.info("Successfully pinged google.com"),zr(2)):(this.l.info("Failed to ping google.com"),zr(1))},ts.isActive=function(){return!!this.h&&this.h.isActive(this)},(ts=Ua.prototype).Ba=function(){},ts.Aa=function(){},ts.za=function(){},ts.ya=function(){},ts.isActive=function(){return!0},ts.Va=function(){},Va.prototype.g=function(e,t){return new Ba(e,t)},ps(Ba,hr),Ba.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;zr(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Da(e,null,e.Y),_a(e)},Ba.prototype.close=function(){ba(this.g)},Ba.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=pr(e),e=n);t.j.push(new class{constructor(e,t){this.g=e,this.map=t}}(t.fb++,e)),3==t.H&&_a(t)},Ba.prototype.N=function(){this.g.h=null,delete this.j,ba(this.g),delete this.g,Ba.$.N.call(this)},ps(ja,Jr),ps(za,Zr),ps($a,Ua),$a.prototype.Ba=function(){dr(this.g,"a")},$a.prototype.Aa=function(e){dr(this.g,new ja(e))},$a.prototype.za=function(e){dr(this.g,new za)},$a.prototype.ya=function(){dr(this.g,"b")},ps(Ha,(function(){this.blockSize=-1})),Ha.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Ha.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,i=this.m,s=this.h,r=0;r<t;){if(0==s)for(;r<=n;)qa(this,e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[s++]=e.charCodeAt(r++),s==this.blockSize){qa(this,i),s=0;break}}else for(;r<t;)if(i[s++]=e[r++],s==this.blockSize){qa(this,i),s=0;break}}this.h=s,this.i+=t},Ha.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var i=0;32>i;i+=8)e[n++]=this.g[t]>>>i&255;return e};var Wa={};function Ka(e){return-128<=e&&128>e?function(e,t){var n=Wa;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(e){return new Ga([0|e],0>e?-1:0)})):new Ga([0|e],0>e?-1:0)}function Xa(e){if(isNaN(e)||!isFinite(e))return Ya;if(0>e)return nl(Xa(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=Qa;return new Ga(t,0)}var Qa=4294967296,Ya=Ka(0),Ja=Ka(1),Za=Ka(16777216);function el(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function tl(e){return-1==e.h}function nl(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new Ga(n,~e.h).add(Ja)}function il(e,t){return e.add(nl(t))}function sl(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function rl(e,t){this.g=e,this.h=t}function ol(e,t){if(el(t))throw Error("division by zero");if(el(e))return new rl(Ya,Ya);if(tl(e))return t=ol(nl(e),t),new rl(nl(t.g),nl(t.h));if(tl(t))return t=ol(e,nl(t)),new rl(nl(t.g),t.h);if(30<e.g.length){if(tl(e)||tl(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Ja,i=t;0>=i.X(e);)n=al(n),i=al(i);var s=ll(n,1),r=ll(i,1);for(i=ll(i,2),n=ll(n,2);!el(i);){var o=r.add(i);0>=o.X(e)&&(s=s.add(n),r=o),i=ll(i,1),n=ll(n,1)}return t=il(e,s.R(t)),new rl(s,t)}for(s=Ya;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),i=48>=(i=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,i-48),o=(r=Xa(n)).R(t);tl(o)||0<o.X(e);)o=(r=Xa(n-=i)).R(t);el(r)&&(r=Ja),s=s.add(r),e=il(e,o)}return new rl(s,e)}function al(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.D(i)<<1|e.D(i-1)>>>31;return new Ga(n,e.h)}function ll(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],r=0;r<i;r++)s[r]=0<t?e.D(r+n)>>>t|e.D(r+n+1)<<32-t:e.D(r+n);return new Ga(s,e.h)}(ts=Ga.prototype).ea=function(){if(tl(this))return-nl(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var i=this.D(n);e+=(0<=i?i:Qa+i)*t,t*=Qa}return e},ts.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(el(this))return"0";if(tl(this))return"-"+nl(this).toString(e);for(var t=Xa(Math.pow(e,6)),n=this,i="";;){var s=ol(n,t).g,r=((0<(n=il(n,s.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(el(n=s))return r+i;for(;6>r.length;)r="0"+r;i=r+i}},ts.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},ts.X=function(e){return tl(e=il(this,e))?-1:el(e)?0:1},ts.abs=function(){return tl(this)?nl(this):this},ts.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var r=i+(65535&this.D(s))+(65535&e.D(s)),o=(r>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new Ga(n,-2147483648&n[n.length-1]?-1:0)},ts.R=function(e){if(el(this)||el(e))return Ya;if(tl(this))return tl(e)?nl(this).R(nl(e)):nl(nl(this).R(e));if(tl(e))return nl(this.R(nl(e)));if(0>this.X(Za)&&0>e.X(Za))return Xa(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var r=this.D(i)>>>16,o=65535&this.D(i),a=e.D(s)>>>16,l=65535&e.D(s);n[2*i+2*s]+=o*l,sl(n,2*i+2*s),n[2*i+2*s+1]+=r*l,sl(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,sl(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,sl(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new Ga(n,0)},ts.gb=function(e){return ol(this,e).h},ts.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)&e.D(i);return new Ga(n,this.h&e.h)},ts.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)|e.D(i);return new Ga(n,this.h|e.h)},ts.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)^e.D(i);return new Ga(n,this.h^e.h)},Va.prototype.createWebChannel=Va.prototype.g,Ba.prototype.send=Ba.prototype.u,Ba.prototype.open=Ba.prototype.m,Ba.prototype.close=Ba.prototype.close,qr.NO_ERROR=0,qr.TIMEOUT=8,qr.HTTP_ERROR=6,Gr.COMPLETE="complete",Xr.EventType=Yr,Yr.OPEN="a",Yr.CLOSE="b",Yr.ERROR="c",Yr.MESSAGE="d",hr.prototype.listen=hr.prototype.O,ra.prototype.listenOnce=ra.prototype.P,ra.prototype.getLastError=ra.prototype.Sa,ra.prototype.getLastErrorCode=ra.prototype.Ia,ra.prototype.getStatus=ra.prototype.da,ra.prototype.getResponseJson=ra.prototype.Wa,ra.prototype.getResponseText=ra.prototype.ja,ra.prototype.send=ra.prototype.ha,ra.prototype.setWithCredentials=ra.prototype.Oa,Ha.prototype.digest=Ha.prototype.l,Ha.prototype.reset=Ha.prototype.reset,Ha.prototype.update=Ha.prototype.j,Ga.prototype.add=Ga.prototype.add,Ga.prototype.multiply=Ga.prototype.R,Ga.prototype.modulo=Ga.prototype.gb,Ga.prototype.compare=Ga.prototype.X,Ga.prototype.toNumber=Ga.prototype.ea,Ga.prototype.toString=Ga.prototype.toString,Ga.prototype.getBits=Ga.prototype.D,Ga.fromNumber=Xa,Ga.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return nl(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=Xa(Math.pow(n,8)),s=Ya,r=0;r<t.length;r+=8){var o=Math.min(8,t.length-r),a=parseInt(t.substring(r,r+o),n);8>o?(o=Xa(Math.pow(n,o)),s=s.R(o).add(Xa(a))):s=(s=s.R(i)).add(Xa(a))}return s};var cl=is.createWebChannelTransport=function(){return new Va},ul=is.getStatEventTarget=function(){return Ur()},hl=is.ErrorCode=qr,dl=is.EventType=Gr,fl=is.Event=Dr,pl=is.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ml=is.FetchXmlHttpFactory=Jo,gl=is.WebChannel=Xr,vl=is.XhrIo=ra,yl=is.Md5=Ha,wl=is.Integer=Ga;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bl{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}constructor(e){this.uid=e}}bl.UNAUTHENTICATED=new bl(null),bl.GOOGLE_CREDENTIALS=new bl("google-credentials-uid"),bl.FIRST_PARTY=new bl("first-party-uid"),bl.MOCK_USER=new bl("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let El="9.22.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=new we("@firebase/firestore");function _l(){return Tl.logLevel}function Sl(e,...t){if(Tl.logLevel<=fe.DEBUG){const n=t.map(xl);Tl.debug(`Firestore (${El}): ${e}`,...n)}}function Il(e,...t){if(Tl.logLevel<=fe.ERROR){const n=t.map(xl);Tl.error(`Firestore (${El}): ${e}`,...n)}}function kl(e,...t){if(Tl.logLevel<=fe.WARN){const n=t.map(xl);Tl.warn(`Firestore (${El}): ${e}`,...n)}}function xl(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(e="Unexpected state"){const t=`FIRESTORE (${El}) INTERNAL ASSERTION FAILED: `+e;throw Il(t),new Error(t)}function Al(e,t){e||Cl()}function Nl(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Pl extends Q{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ml{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(bl.UNAUTHENTICATED)))}shutdown(){}}class Dl{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}constructor(e){this.token=e,this.changeListener=null}}class Fl{start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new Rl;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Rl,e.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const t=s;e.enqueueRetryable((async()=>{await t.promise,await i(this.currentUser)}))},o=e=>{Sl("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Sl("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Rl)}}),0),r()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Sl("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Al("string"==typeof t.accessToken),new Ol(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Al(null===e||"string"==typeof e),new bl(e)}constructor(e){this.t=e,this.currentUser=bl.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class Ul{p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=bl.FIRST_PARTY,this.g=new Map}}class Vl{getToken(){return Promise.resolve(new Ul(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(bl.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(e,t,n){this.h=e,this.l=t,this.m=n}}class Bl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jl{start(e,t){const n=e=>{null!=e.error&&Sl("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,Sl("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const i=e=>{Sl("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>i(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?i(e):Sl("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Al("string"==typeof e.token),this.T=e.token,new Bl(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zl(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=zl(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%e.length))}return n}}function Hl(e,t){return e<t?-1:e>t?1:0}function ql(e,t,n){return e.length===t.length&&e.every(((e,i)=>n(e,t[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gl{static now(){return Gl.fromMillis(Date.now())}static fromDate(e){return Gl.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Gl(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Hl(this.nanoseconds,e.nanoseconds):Hl(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Pl(Ll.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Pl(Ll.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Pl(Ll.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Pl(Ll.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{static fromTimestamp(e){return new Wl(e)}static min(){return new Wl(new Gl(0,0))}static max(){return new Wl(new Gl(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(e){this.timestamp=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{get length(){return this.len}isEqual(e){return 0===Kl.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Kl?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),s=t.get(i);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}constructor(e,t,n){void 0===t?t=0:t>e.length&&Cl(),void 0===n?n=e.length-t:n>e.length-t&&Cl(),this.segments=e,this.offset=t,this.len=n}}class Xl extends Kl{construct(e,t,n){return new Xl(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Pl(Ll.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Xl(t)}static emptyPath(){return new Xl([])}}const Ql=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Yl extends Kl{construct(e,t,n){return new Yl(e,t,n)}static isValidIdentifier(e){return Ql.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Yl.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Yl(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(0===n.length)throw new Pl(Ll.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let r=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new Pl(Ll.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Pl(Ll.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(r=!r,i++):"."!==t||r?(n+=t,i++):(s(),i++)}if(s(),r)throw new Pl(Ll.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Yl(t)}static emptyPath(){return new Yl([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{static fromPath(e){return new Jl(Xl.fromString(e))}static fromName(e){return new Jl(Xl.fromString(e).popFirst(5))}static empty(){return new Jl(Xl.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Xl.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Xl.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Jl(new Xl(e.slice()))}constructor(e){this.path=e}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}Zl.UNKNOWN_ID=-1;function ec(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,s=Wl.fromTimestamp(1e9===i?new Gl(n+1,0):new Gl(n,i));return new nc(s,Jl.empty(),t)}function tc(e){return new nc(e.readTime,e.key,-1)}class nc{static min(){return new nc(Wl.min(),Jl.empty(),-1)}static max(){return new nc(Wl.max(),Jl.empty(),-1)}constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}}function ic(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Jl.comparator(e.documentKey,t.documentKey),0!==n?n:Hl(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rc{addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}constructor(){this.onCommittedListeners=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oc(e){if(e.code!==Ll.FAILED_PRECONDITION||e.message!==sc)throw e;Sl("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Cl(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ac(((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof ac?t:ac.resolve(t)}catch(e){return ac.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):ac.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):ac.reject(t)}static resolve(e){return new ac(((t,n)=>{t(e)}))}static reject(e){return new ac(((t,n)=>{n(e)}))}static waitFor(e){return new ac(((t,n)=>{let i=0,s=0,r=!1;e.forEach((e=>{++i,e.next((()=>{++s,r&&s===i&&t()}),(e=>n(e)))})),r=!0,s===i&&t()}))}static or(e){let t=ac.resolve(!1);for(const n of e)t=t.next((e=>e?ac.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,i)=>{n.push(t.call(this,e,i))})),this.waitFor(n)}static mapArray(e,t){return new ac(((n,i)=>{const s=e.length,r=new Array(s);let o=0;for(let a=0;a<s;a++){const l=a;t(e[l]).next((e=>{r[l]=e,++o,o===s&&n(r)}),(e=>i(e)))}}))}static doWhile(e,t){return new ac(((n,i)=>{const s=()=>{!0===e()?t().next((()=>{s()}),i):n()};s()}))}constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cc{ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}}function uc(e){return null==e}function hc(e){return 0===e&&1/e==-1/0}function dc(e){return"number"==typeof e&&Number.isInteger(e)&&!hc(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cc.ct=-1;const fc=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],pc=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],mc=pc;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gc(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function vc(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function yc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{insert(e,t){return new wc(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ec.BLACK,null,null))}remove(e){return new wc(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ec.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bc(this.root,e,this.comparator,!1)}getReverseIterator(){return new bc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bc(this.root,e,this.comparator,!0)}constructor(e,t){this.comparator=e,this.root=t||Ec.EMPTY}}class bc{getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}}class Ec{copy(e,t,n,i,s){return new Ec(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ec.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return Ec.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ec.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ec.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Cl();if(this.right.isRed())throw Cl();const e=this.left.check();if(e!==this.right.check())throw Cl();return e+(this.isRed()?0:1)}constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:Ec.RED,this.left=null!=i?i:Ec.EMPTY,this.right=null!=s?s:Ec.EMPTY,this.size=this.left.size+1+this.right.size}}Ec.EMPTY=null,Ec.RED=!0,Ec.BLACK=!1,Ec.EMPTY=new class{get key(){throw Cl()}get value(){throw Cl()}get color(){throw Cl()}get left(){throw Cl()}get right(){throw Cl()}copy(e,t,n,i,s){return this}insert(e,t,n){return new Ec(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tc{has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new _c(this.data.getIterator())}getIteratorFrom(e){return new _c(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Tc))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Tc(this.comparator);return t.data=e,t}constructor(e){this.comparator=e,this.data=new wc(this.comparator)}}class _c{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(e){this.iter=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sc{static empty(){return new Sc([])}unionWith(e){let t=new Tc(Yl.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new Sc(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ql(this.fields,e.fields,((e,t)=>e.isEqual(t)))}constructor(e){this.fields=e,e.sort(Yl.comparator)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kc=Symbol.iterator;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Ic("Invalid base64 string: "+e):e}}(e);return new xc(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new xc(t)}[kc](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Hl(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}constructor(e){this.binaryString=e}}xc.EMPTY_BYTE_STRING=new xc("");const Cc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ac(e){if(Al(!!e),"string"==typeof e){let t=0;const n=Cc.exec(e);if(Al(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Nc(e.seconds),nanos:Nc(e.nanos)}}function Nc(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Lc(e){return"string"==typeof e?xc.fromBase64String(e):xc.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Rc(e){const t=e.mapValue.fields.__previous_value__;return Pc(t)?Rc(t):t}function Oc(e){const t=Ac(e.mapValue.fields.__local_write_time__.timestampValue);return new Gl(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,t,n,i,s,r,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}class Dc{static empty(){return new Dc("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Dc&&e.projectId===this.projectId&&e.database===this.database}constructor(e,t){this.projectId=e,this.database=t||"(default)"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Uc(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Pc(e)?4:Yc(e)?9007199254740991:10:Cl()}function Vc(e,t){if(e===t)return!0;const n=Uc(e);if(n!==Uc(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Oc(e).isEqual(Oc(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Ac(e.timestampValue),i=Ac(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return i=t,Lc(e.bytesValue).isEqual(Lc(i.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Nc(e.geoPointValue.latitude)===Nc(t.geoPointValue.latitude)&&Nc(e.geoPointValue.longitude)===Nc(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Nc(e.integerValue)===Nc(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Nc(e.doubleValue),i=Nc(t.doubleValue);return n===i?hc(n)===hc(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return ql(e.arrayValue.values||[],t.arrayValue.values||[],Vc);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(gc(n)!==gc(i))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===i[e]||!Vc(n[e],i[e])))return!1;return!0}(e,t);default:return Cl()}var i}function Bc(e,t){return void 0!==(e.values||[]).find((e=>Vc(e,t)))}function jc(e,t){if(e===t)return 0;const n=Uc(e),i=Uc(t);if(n!==i)return Hl(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Hl(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Nc(e.integerValue||e.doubleValue),i=Nc(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return zc(e.timestampValue,t.timestampValue);case 4:return zc(Oc(e),Oc(t));case 5:return Hl(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Lc(e),i=Lc(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let e=0;e<n.length&&e<i.length;e++){const t=Hl(n[e],i[e]);if(0!==t)return t}return Hl(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Hl(Nc(e.latitude),Nc(t.latitude));return 0!==n?n:Hl(Nc(e.longitude),Nc(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let e=0;e<n.length&&e<i.length;++e){const t=jc(n[e],i[e]);if(t)return t}return Hl(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Fc.mapValue&&t===Fc.mapValue)return 0;if(e===Fc.mapValue)return 1;if(t===Fc.mapValue)return-1;const n=e.fields||{},i=Object.keys(n),s=t.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let e=0;e<i.length&&e<r.length;++e){const t=Hl(i[e],r[e]);if(0!==t)return t;const o=jc(n[i[e]],s[r[e]]);if(0!==o)return o}return Hl(i.length,r.length)}(e.mapValue,t.mapValue);default:throw Cl()}}function zc(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Hl(e,t);const n=Ac(e),i=Ac(t),s=Hl(n.seconds,i.seconds);return 0!==s?s:Hl(n.nanos,i.nanos)}function $c(e){return Hc(e)}function Hc(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Ac(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Lc(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Jl.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=Hc(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const s of t)i?i=!1:n+=",",n+=`${s}:${Hc(e.fields[s])}`;return n+"}"}(e.mapValue):Cl()}function qc(e){return!!e&&"integerValue"in e}function Gc(e){return!!e&&"arrayValue"in e}function Wc(e){return!!e&&"nullValue"in e}function Kc(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Xc(e){return!!e&&"mapValue"in e}function Qc(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return vc(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Qc(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Qc(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Yc(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jc{static empty(){return new Jc({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Xc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qc(t)}setAll(e){let t=Yl.emptyPath(),n={},i=[];e.forEach(((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=s.popLast()}e?n[s.lastSegment()]=Qc(e):i.push(s.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());Xc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Vc(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Xc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){vc(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new Jc(Qc(this.value))}constructor(e){this.value=e}}function Zc(e){const t=[];return vc(e.fields,((e,n)=>{const i=new Yl([e]);if(Xc(n)){const e=Zc(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)})),new Sc(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class eu{static newInvalidDocument(e){return new eu(e,0,Wl.min(),Wl.min(),Wl.min(),Jc.empty(),0)}static newFoundDocument(e,t,n,i){return new eu(e,1,t,Wl.min(),n,i,0)}static newNoDocument(e,t){return new eu(e,2,t,Wl.min(),Wl.min(),Jc.empty(),0)}static newUnknownDocument(e,t){return new eu(e,3,t,Wl.min(),Wl.min(),Jc.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Wl.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jc.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Wl.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof eu&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new eu(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(e,t,n,i,s,r,o){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=r,this.documentState=o}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,t){this.position=e,this.inclusive=t}}function nu(e,t,n){let i=0;for(let s=0;s<e.position.length;s++){const r=t[s],o=e.position[s];if(i=r.field.isKeyField()?Jl.comparator(Jl.fromName(o.referenceValue),n.key):jc(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function iu(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Vc(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,t="asc"){this.field=e,this.dir=t}}function ru(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{}class au extends ou{static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new mu(e,t,n):"array-contains"===t?new wu(e,n):"in"===t?new bu(e,n):"not-in"===t?new Eu(e,n):"array-contains-any"===t?new Tu(e,n):new au(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new gu(e,n):new vu(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(jc(t,this.value)):null!==t&&Uc(this.value)===Uc(t)&&this.matchesComparison(jc(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Cl()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}}class lu extends ou{static create(e,t){return new lu(e,t)}matches(e){return cu(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft((e=>e.isInequality()));return null!==e?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}}function cu(e){return"and"===e.op}function uu(e){return hu(e)&&cu(e)}function hu(e){for(const t of e.filters)if(t instanceof lu)return!1;return!0}function du(e){if(e instanceof au)return e.field.canonicalString()+e.op.toString()+$c(e.value);if(uu(e))return e.filters.map((e=>du(e))).join(",");{const t=e.filters.map((e=>du(e))).join(",");return`${e.op}(${t})`}}function fu(e,t){return e instanceof au?(n=e,(i=t)instanceof au&&n.op===i.op&&n.field.isEqual(i.field)&&Vc(n.value,i.value)):e instanceof lu?function(e,t){return t instanceof lu&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,i)=>e&&fu(n,t.filters[i])),!0)}(e,t):void Cl();var n,i}function pu(e){return e instanceof au?`${(t=e).field.canonicalString()} ${t.op} ${$c(t.value)}`:e instanceof lu?function(e){return e.op.toString()+" {"+e.getFilters().map(pu).join(" ,")+"}"}(e):"Filter";var t}class mu extends au{matches(e){const t=Jl.comparator(e.key,this.key);return this.matchesComparison(t)}constructor(e,t,n){super(e,t,n),this.key=Jl.fromName(n.referenceValue)}}class gu extends au{matches(e){return this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"in",t),this.keys=yu("in",t)}}class vu extends au{matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"not-in",t),this.keys=yu("not-in",t)}}function yu(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Jl.fromName(e.referenceValue)))}class wu extends au{matches(e){const t=e.data.field(this.field);return Gc(t)&&Bc(t.arrayValue,this.value)}constructor(e,t){super(e,"array-contains",t)}}class bu extends au{matches(e){const t=e.data.field(this.field);return null!==t&&Bc(this.value.arrayValue,t)}constructor(e,t){super(e,"in",t)}}class Eu extends au{matches(e){if(Bc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Bc(this.value.arrayValue,t)}constructor(e,t){super(e,"not-in",t)}}class Tu extends au{matches(e){const t=e.data.field(this.field);return!(!Gc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Bc(this.value.arrayValue,e)))}constructor(e,t){super(e,"array-contains-any",t)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,t=null,n=[],i=[],s=null,r=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.dt=null}}function Su(e,t=null,n=[],i=[],s=null,r=null,o=null){return new _u(e,t,n,i,s,r,o)}function Iu(e){const t=Nl(e);if(null===t.dt){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>du(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),uc(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>$c(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>$c(e))).join(",")),t.dt=e}return t.dt}function ku(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!ru(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!fu(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!iu(e.startAt,t.startAt)&&iu(e.endAt,t.endAt)}function xu(e){return Jl.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cu{constructor(e,t=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function Au(e,t,n,i,s,r,o,a){return new Cu(e,t,n,i,s,r,o,a)}function Nu(e){return new Cu(e)}function Lu(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Pu(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Ru(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function Ou(e){return null!==e.collectionGroup}function Mu(e){const t=Nl(e);if(null===t.wt){t.wt=[];const e=Ru(t),n=Pu(t);if(null!==e&&null===n)e.isKeyField()||t.wt.push(new su(e)),t.wt.push(new su(Yl.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new su(Yl.keyField(),e))}}}return t.wt}function Du(e){const t=Nl(e);if(!t._t)if("F"===t.limitType)t._t=Su(t.path,t.collectionGroup,Mu(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of Mu(t)){const t="desc"===n.dir?"asc":"desc";e.push(new su(n.field,t))}const n=t.endAt?new tu(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new tu(t.startAt.position,t.startAt.inclusive):null;t._t=Su(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}return t._t}function Fu(e,t,n){return new Cu(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Uu(e,t){return ku(Du(e),Du(t))&&e.limitType===t.limitType}function Vu(e){return`${Iu(Du(e))}|lt:${e.limitType}`}function Bu(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>pu(e))).join(", ")}]`),uc(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>$c(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>$c(e))).join(",")),`Target(${t})`}(Du(e))}; limitType=${e.limitType})`}function ju(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Jl.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Mu(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(i=t,!((n=e).startAt&&!function(e,t,n){const i=nu(e,t,n);return e.inclusive?i<=0:i<0}(n.startAt,Mu(n),i)||n.endAt&&!function(e,t,n){const i=nu(e,t,n);return e.inclusive?i>=0:i>0}(n.endAt,Mu(n),i)));var n,i}function zu(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function $u(e){return(t,n)=>{let i=!1;for(const s of Mu(e)){const e=Hu(s,t,n);if(0!==e)return e;i=i||s.field.isKeyField()}return 0}}function Hu(e,t,n){const i=e.field.isKeyField()?Jl.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),s=n.data.field(e);return null!==i&&null!==s?jc(i,s):Cl()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return Cl()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,i]of n)if(this.equalsFn(t,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return void(i[n]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){vc(this.inner,((t,n)=>{for(const[t,i]of n)e(t,i)}))}isEmpty(){return yc(this.inner)}size(){return this.innerSize}constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=new wc(Jl.comparator);function Wu(){return Gu}const Ku=new wc(Jl.comparator);function Xu(...e){let t=Ku;for(const n of e)t=t.insert(n.key,n);return t}function Qu(e){let t=Ku;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Yu(){return Zu()}function Ju(){return Zu()}function Zu(){return new qu((e=>e.toString()),((e,t)=>e.isEqual(t)))}const eh=new wc(Jl.comparator),th=new Tc(Jl.comparator);function nh(...e){let t=th;for(const n of e)t=t.add(n);return t}const ih=new Tc(Hl);function sh(){return ih}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hc(t)?"-0":t}}function oh(e){return{integerValue:""+e}}function ah(e,t){return dc(t)?oh(t):rh(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(){this._=void 0}}function ch(e,t,n){return e instanceof dh?fh(e,t):e instanceof ph?mh(e,t):n}function uh(e,t){var n,i;return e instanceof gh?qc(n=t)||(i=n)&&"doubleValue"in i?t:{integerValue:0}:null}class hh extends lh{}class dh extends lh{constructor(e){super(),this.elements=e}}function fh(e,t){const n=yh(t);for(const t of e.elements)n.some((e=>Vc(e,t)))||n.push(t);return{arrayValue:{values:n}}}class ph extends lh{constructor(e){super(),this.elements=e}}function mh(e,t){let n=yh(t);for(const t of e.elements)n=n.filter((e=>!Vc(e,t)));return{arrayValue:{values:n}}}class gh extends lh{constructor(e,t){super(),this.serializer=e,this.gt=t}}function vh(e){return Nc(e.integerValue||e.doubleValue)}function yh(e){return Gc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,t){this.field=e,this.transform=t}}class bh{constructor(e,t){this.version=e,this.transformResults=t}}class Eh{static none(){return new Eh}static exists(e){return new Eh(void 0,e)}static updateTime(e){return new Eh(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}constructor(e,t){this.updateTime=e,this.exists=t}}function Th(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class _h{}function Sh(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Oh(e.key,Eh.none()):new Ah(e.key,e.data,Eh.none());{const n=e.data,i=Jc.empty();let s=new Tc(Yl.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),s=s.add(e)}return new Nh(e.key,i,new Sc(s.toArray()),Eh.none())}}function Ih(e,t,n){var i;e instanceof Ah?function(e,t,n){const i=e.value.clone(),s=Ph(e.fieldTransforms,t,n.transformResults);i.setAll(s),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof Nh?function(e,t,n){if(!Th(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=Ph(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(Lh(e)),s.setAll(i),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):(i=n,t.convertToNoDocument(i.version).setHasCommittedMutations())}function kh(e,t,n,i){return e instanceof Ah?function(e,t,n,i){if(!Th(e.precondition,t))return n;const s=e.value.clone(),r=Rh(e.fieldTransforms,i,t);return s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,i):e instanceof Nh?function(e,t,n,i){if(!Th(e.precondition,t))return n;const s=Rh(e.fieldTransforms,i,t),r=t.data;return r.setAll(Lh(e)),r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,i):(s=t,r=n,Th(e.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):r);var s,r}function xh(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),s=uh(i.transform,e||null);null!=s&&(null===n&&(n=Jc.empty()),n.set(i.field,s))}return n||null}function Ch(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,i=t.fieldTransforms,!!(void 0===n&&void 0===i||n&&i&&ql(n,i,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,i=t.transform,n instanceof dh&&i instanceof dh||n instanceof ph&&i instanceof ph?ql(n.elements,i.elements,Vc):n instanceof gh&&i instanceof gh?Vc(n.gt,i.gt):n instanceof hh&&i instanceof hh);var n,i}(e,t)))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,i}class Ah extends _h{getFieldMask(){return null}constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}}class Nh extends _h{getFieldMask(){return this.fieldMask}constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}}function Lh(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}})),t}function Ph(e,t,n){const i=new Map;Al(e.length===n.length);for(let s=0;s<n.length;s++){const r=e[s],o=r.transform,a=t.data.field(r.field);i.set(r.field,ch(o,a,n[s]))}return i}function Rh(e,t,n){const i=new Map;for(const a of e){const e=a.transform,l=n.data.field(a.field);i.set(a.field,(r=l,o=t,(s=e)instanceof hh?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Pc(t)&&(t=Rc(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(o,r):s instanceof dh?fh(s,r):s instanceof ph?mh(s,r):function(e,t){const n=uh(e,t),i=vh(n)+vh(e.gt);return qc(n)&&qc(e.gt)?oh(i):rh(e.serializer,i)}(s,r)))}var s,r,o;return i}class Oh extends _h{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Mh extends _h{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const i=this.mutations[t];i.key.isEqual(e.key)&&Ih(i,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=kh(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=kh(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Ju();return this.mutations.forEach((i=>{const s=e.get(i.key),r=s.overlayedDocument;let o=this.applyToLocalView(r,s.mutatedFields);o=t.has(i.key)?null:o;const a=Sh(r,o);null!==a&&n.set(i.key,a),r.isValidDocument()||r.convertToNoDocument(Wl.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),nh())}isEqual(e){return this.batchId===e.batchId&&ql(this.mutations,e.mutations,((e,t)=>Ch(e,t)))&&ql(this.baseMutations,e.baseMutations,((e,t)=>Ch(e,t)))}constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}}class Fh{static from(e,t,n){Al(e.mutations.length===n.length);let i=eh;const s=e.mutations;for(let e=0;e<s.length;e++)i=i.insert(s[e].key,n[e].version);return new Fh(e,t,n,i)}constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(e,t){this.largestBatchId=e,this.mutation=t}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vh{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bh,jh;function zh(e){switch(e){default:return Cl();case Ll.CANCELLED:case Ll.UNKNOWN:case Ll.DEADLINE_EXCEEDED:case Ll.RESOURCE_EXHAUSTED:case Ll.INTERNAL:case Ll.UNAVAILABLE:case Ll.UNAUTHENTICATED:return!1;case Ll.INVALID_ARGUMENT:case Ll.NOT_FOUND:case Ll.ALREADY_EXISTS:case Ll.PERMISSION_DENIED:case Ll.FAILED_PRECONDITION:case Ll.ABORTED:case Ll.OUT_OF_RANGE:case Ll.UNIMPLEMENTED:case Ll.DATA_LOSS:return!0}}function $h(e){if(void 0===e)return Il("GRPC error has no .code"),Ll.UNKNOWN;switch(e){case Bh.OK:return Ll.OK;case Bh.CANCELLED:return Ll.CANCELLED;case Bh.UNKNOWN:return Ll.UNKNOWN;case Bh.DEADLINE_EXCEEDED:return Ll.DEADLINE_EXCEEDED;case Bh.RESOURCE_EXHAUSTED:return Ll.RESOURCE_EXHAUSTED;case Bh.INTERNAL:return Ll.INTERNAL;case Bh.UNAVAILABLE:return Ll.UNAVAILABLE;case Bh.UNAUTHENTICATED:return Ll.UNAUTHENTICATED;case Bh.INVALID_ARGUMENT:return Ll.INVALID_ARGUMENT;case Bh.NOT_FOUND:return Ll.NOT_FOUND;case Bh.ALREADY_EXISTS:return Ll.ALREADY_EXISTS;case Bh.PERMISSION_DENIED:return Ll.PERMISSION_DENIED;case Bh.FAILED_PRECONDITION:return Ll.FAILED_PRECONDITION;case Bh.ABORTED:return Ll.ABORTED;case Bh.OUT_OF_RANGE:return Ll.OUT_OF_RANGE;case Bh.UNIMPLEMENTED:return Ll.UNIMPLEMENTED;case Bh.DATA_LOSS:return Ll.DATA_LOSS;default:return Cl()}}(jh=Bh||(Bh={}))[jh.OK=0]="OK",jh[jh.CANCELLED=1]="CANCELLED",jh[jh.UNKNOWN=2]="UNKNOWN",jh[jh.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",jh[jh.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",jh[jh.NOT_FOUND=5]="NOT_FOUND",jh[jh.ALREADY_EXISTS=6]="ALREADY_EXISTS",jh[jh.PERMISSION_DENIED=7]="PERMISSION_DENIED",jh[jh.UNAUTHENTICATED=16]="UNAUTHENTICATED",jh[jh.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",jh[jh.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",jh[jh.ABORTED=10]="ABORTED",jh[jh.OUT_OF_RANGE=11]="OUT_OF_RANGE",jh[jh.UNIMPLEMENTED=12]="UNIMPLEMENTED",jh[jh.INTERNAL=13]="INTERNAL",jh[jh.UNAVAILABLE=14]="UNAVAILABLE",jh[jh.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hh{static get instance(){return qh}static getOrCreateInstance(){return null===qh&&(qh=new Hh),qh}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}constructor(){this.onExistenceFilterMismatchCallbacks=new Map}}let qh=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh=new wl([4294967295,4294967295],0);function Kh(e){const t=Gh().encode(e),n=new yl;return n.update(t),new Uint8Array(n.digest())}function Xh(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new wl([n,i],0),new wl([s,r],0)]}class Qh{Et(e,t,n){let i=e.add(t.multiply(wl.fromNumber(n)));return 1===i.compare(Wh)&&(i=new wl([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}vt(e){if(0===this.It)return!1;const t=Kh(e),[n,i]=Xh(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,i,e);if(!this.At(t))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),r=new Qh(s,i,t);return n.forEach((e=>r.insert(e))),r}insert(e){if(0===this.It)return;const t=Kh(e),[n,i]=Xh(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,i,e);this.Rt(t)}}Rt(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Yh(`Invalid padding: ${t}`);if(n<0)throw new Yh(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Yh(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Yh(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=wl.fromNumber(this.It)}}class Yh extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,Zh.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Jh(Wl.min(),i,new wc(Hl),Wu(),nh())}constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}}class Zh{static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Zh(n,t,nh(),nh(),nh())}constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,t,n,i){this.Pt=e,this.removedTargetIds=t,this.key=n,this.bt=i}}class td{constructor(e,t){this.targetId=e,this.Vt=t}}class nd{constructor(e,t,n=xc.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class id{get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=nh(),t=nh(),n=nh();return this.Dt.forEach(((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:Cl()}})),new Zh(this.Ct,this.xt,e,t,n)}Ft(){this.Nt=!1,this.Dt=od()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}constructor(){this.St=0,this.Dt=od(),this.Ct=xc.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}}class sd{Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,(t=>{const n=this.Zt(t);switch(e.state){case 0:this.te(t)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(t);break;case 3:this.te(t)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),n.$t(e.resumeToken));break;default:Cl()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach(((e,n)=>{this.te(n)&&t(n)}))}ne(e){var t;const n=e.targetId,i=e.Vt.count,s=this.se(n);if(s){const r=s.target;if(xu(r))if(0===i){const e=new Jl(r.path);this.Yt(n,e,eu.newNoDocument(e,Wl.min()))}else Al(1===i);else{const s=this.ie(n);if(s!==i){const i=this.re(e,s);if(0!==i){this.ee(n);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,e)}null===(t=Hh.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var i,s,r,o,a,l;const c={localCacheCount:t,existenceFilterCount:n.count},u=n.unchangedNames;return u&&(c.bloomFilter={applied:0===e,hashCount:null!==(i=null==u?void 0:u.hashCount)&&void 0!==i?i:0,bitmapLength:null!==(o=null===(r=null===(s=null==u?void 0:u.bits)||void 0===s?void 0:s.bitmap)||void 0===r?void 0:r.length)&&void 0!==o?o:0,padding:null!==(l=null===(a=null==u?void 0:u.bits)||void 0===a?void 0:a.padding)&&void 0!==l?l:0}),c}(i,s,e.Vt))}}}}re(e,t){const{unchangedNames:n,count:i}=e.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:s="",padding:r=0},hashCount:o=0}=n;let a,l;try{a=Lc(s).toUint8Array()}catch(e){if(e instanceof Ic)return kl("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{l=new Qh(a,r,o)}catch(e){return kl(e instanceof Yh?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===l.It?1:i!==t-this.oe(e.targetId,l)?2:0}oe(e,t){const n=this.Gt.getRemoteKeysForTarget(e);let i=0;return n.forEach((n=>{const s=this.Gt.ue(),r=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;t.vt(r)||(this.Yt(e,n,null),i++)})),i}ce(e){const t=new Map;this.Qt.forEach(((n,i)=>{const s=this.se(i);if(s){if(n.current&&xu(s.target)){const t=new Jl(s.target.path);null!==this.jt.get(t)||this.ae(i,t)||this.Yt(i,t,eu.newNoDocument(t,e))}n.Mt&&(t.set(i,n.Ot()),n.Ft())}}));let n=nh();this.zt.forEach(((e,t)=>{let i=!0;t.forEachWhile((e=>{const t=this.se(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(i=!1,!1)})),i&&(n=n.add(e))})),this.jt.forEach(((t,n)=>n.setReadTime(e)));const i=new Jh(e,t,this.Wt,this.jt,n);return this.jt=Wu(),this.zt=rd(),this.Wt=new wc(Hl),i}Jt(e,t){if(!this.te(e))return;const n=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,n),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,n){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,t)?i.Bt(t,1):i.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),n&&(this.jt=this.jt.insert(t,n))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new id,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new Tc(Hl),this.zt=this.zt.insert(e,t)),t}te(e){const t=null!==this.se(e);return t||Sl("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new id),this.Gt.getRemoteKeysForTarget(e).forEach((t=>{this.Yt(e,t,null)}))}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Wu(),this.zt=rd(),this.Wt=new wc(Hl)}}function rd(){return new wc(Jl.comparator)}function od(){return new wc(Jl.comparator)}const ad={asc:"ASCENDING",desc:"DESCENDING"},ld={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cd={and:"AND",or:"OR"};class ud{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function hd(e,t){return e.useProto3Json||uc(t)?t:{value:t}}function dd(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function fd(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function pd(e,t){return dd(e,t.toTimestamp())}function md(e){return Al(!!e),Wl.fromTimestamp(function(e){const t=Ac(e);return new Gl(t.seconds,t.nanos)}(e))}function gd(e,t){return(n=e,new Xl(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function vd(e){const t=Xl.fromString(e);return Al(Dd(t)),t}function yd(e,t){return gd(e.databaseId,t.path)}function wd(e,t){const n=vd(t);if(n.get(1)!==e.databaseId.projectId)throw new Pl(Ll.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Pl(Ll.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Jl(_d(n))}function bd(e,t){return gd(e.databaseId,t)}function Ed(e){const t=vd(e);return 4===t.length?Xl.emptyPath():_d(t)}function Td(e){return new Xl(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function _d(e){return Al(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Sd(e,t,n){return{name:yd(e,t),fields:n.value.mapValue.fields}}function Id(e,t){let n;if(t instanceof Ah)n={update:Sd(e,t.key,t.value)};else if(t instanceof Oh)n={delete:yd(e,t.key)};else if(t instanceof Nh)n={update:Sd(e,t.key,t.data),updateMask:Md(t.fieldMask)};else{if(!(t instanceof Mh))return Cl();n={verify:yd(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof hh)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof dh)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ph)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof gh)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw Cl()}(0,e)))),t.precondition.isNone||(n.currentDocument=(i=e,void 0!==(s=t.precondition).updateTime?{updateTime:pd(i,s.updateTime)}:void 0!==s.exists?{exists:s.exists}:Cl())),n;var i,s}function kd(e,t){return{documents:[bd(e,t.path)]}}function xd(e,t){const n={structuredQuery:{}},i=t.path;null!==t.collectionGroup?(n.parent=bd(e,i),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=bd(e,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(e){if(0!==e.length)return Od(lu.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const r=function(e){if(0!==e.length)return e.map((e=>{return{field:Pd((t=e).field),direction:Nd(t.dir)};var t}))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=hd(e,t.limit);var a,l;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt={before:!(l=t.endAt).inclusive,values:l.position}),n}function Cd(e){let t=Ed(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Al(1===i);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let r=[];n.where&&(r=function(e){const t=Ad(e);return t instanceof lu&&uu(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new su(Rd((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,uc(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new tu(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new tu(n,t)}(n.endAt)),Au(t,s,o,r,a,"F",l,c)}function Ad(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Rd(e.unaryFilter.field);return au.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Rd(e.unaryFilter.field);return au.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Rd(e.unaryFilter.field);return au.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Rd(e.unaryFilter.field);return au.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Cl()}}(e):void 0!==e.fieldFilter?(n=e,au.create(Rd(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Cl()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==e.compositeFilter?(t=e,lu.create(t.compositeFilter.filters.map((e=>Ad(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Cl()}}(t.compositeFilter.op))):Cl();var t,n}function Nd(e){return ad[e]}function Ld(e){return ld[e]}function Pd(e){return{fieldPath:e.canonicalString()}}function Rd(e){return Yl.fromServerFormat(e.fieldPath)}function Od(e){return e instanceof au?function(e){if("=="===e.op){if(Kc(e.value))return{unaryFilter:{field:Pd(e.field),op:"IS_NAN"}};if(Wc(e.value))return{unaryFilter:{field:Pd(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Kc(e.value))return{unaryFilter:{field:Pd(e.field),op:"IS_NOT_NAN"}};if(Wc(e.value))return{unaryFilter:{field:Pd(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pd(e.field),op:Ld(e.op),value:e.value}}}(e):e instanceof lu?function(e){const t=e.getFilters().map((e=>Od(e)));return 1===t.length?t[0]:{compositeFilter:{op:(n=e.op,cd[n]),filters:t}};var n}(e):Cl()}function Md(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Dd(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{withSequenceNumber(e){return new Fd(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Fd(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fd(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fd(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}constructor(e,t,n,i,s=Wl.min(),r=Wl.min(),o=xc.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o,this.expectedCount=a}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e){this.fe=e}}function Vd(e){const t=Cd({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Fu(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(Nc(e.integerValue));else if("doubleValue"in e){const n=Nc(e.doubleValue);isNaN(n)?this.ye(t,13):(this.ye(t,15),hc(n)?t.pe(0):t.pe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ye(t,20),"string"==typeof n?t.Ie(n):(t.Ie(`${n.seconds||""}`),t.pe(n.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(Lc(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ye(t,45),t.pe(n.latitude||0),t.pe(n.longitude||0)}else"mapValue"in e?Yc(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):Cl()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const n=e.fields||{};this.ye(t,55);for(const e of Object.keys(n))this.Te(e,t),this.me(n[e],t)}Pe(e,t){const n=e.values||[];this.ye(t,50);for(const e of n)this.me(e,t)}ve(e,t){this.ye(t,37),Jl.fromName(e).path.forEach((e=>{this.ye(t,60),this.be(e,t)}))}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}constructor(){}}Bd.Ve=new Bd;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jd{addToCollectionParentIndex(e,t){return this.rn.add(t),ac.resolve()}getCollectionParents(e,t){return ac.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return ac.resolve()}deleteFieldIndex(e,t){return ac.resolve()}getDocumentsMatchingTarget(e,t){return ac.resolve(null)}getIndexType(e,t){return ac.resolve(0)}getFieldIndexes(e,t){return ac.resolve([])}getNextCollectionGroupToUpdate(e){return ac.resolve(null)}getMinOffset(e,t){return ac.resolve(nc.min())}getMinOffsetFromCollectionGroup(e,t){return ac.resolve(nc.min())}updateCollectionGroup(e,t,n){return ac.resolve()}updateIndexEntries(e,t){return ac.resolve()}constructor(){this.rn=new zd}}class zd{add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new Tc(Xl.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new Tc(Xl.comparator)).toArray()}constructor(){this.index={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class $d{static withCacheSize(e){return new $d(e,$d.DEFAULT_COLLECTION_PERCENTILE,$d.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$d.DEFAULT_COLLECTION_PERCENTILE=10,$d.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$d.DEFAULT=new $d(41943040,$d.DEFAULT_COLLECTION_PERCENTILE,$d.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$d.DISABLED=new $d(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hd{next(){return this.Nn+=2,this.Nn}static kn(){return new Hd(0)}static Mn(){return new Hd(-1)}constructor(e){this.Nn=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qd{addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,eu.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?ac.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}constructor(){this.changes=new qu((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gd{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&kh(n.mutation,e,Sc.empty(),Gl.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,nh()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=nh()){const i=Yu();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((e=>{let t=Xu();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Yu();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,nh())))}populateOverlays(e,t,n){const i=[];return n.forEach((e=>{t.has(e)||i.push(e)})),this.documentOverlayCache.getOverlays(e,i).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,i){let s=Wu();const r=Zu(),o=Zu();return t.forEach(((e,t)=>{const o=n.get(t.key);i.has(t.key)&&(void 0===o||o.mutation instanceof Nh)?s=s.insert(t.key,t):void 0!==o?(r.set(t.key,o.mutation.getFieldMask()),kh(o.mutation,t,o.mutation.getFieldMask(),Gl.now())):r.set(t.key,Sc.empty())})),this.recalculateAndSaveOverlays(e,s).next((e=>(e.forEach(((e,t)=>r.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Gd(t,null!==(n=r.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Zu();let i=new wc(((e,t)=>e-t)),s=nh();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const s of e)s.keys().forEach((e=>{const r=t.get(e);if(null===r)return;let o=n.get(e)||Sc.empty();o=s.applyToLocalView(r,o),n.set(e,o);const a=(i.get(s.batchId)||nh()).add(e);i=i.insert(s.batchId,a)}))})).next((()=>{const r=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,l=i.value,c=Ju();l.forEach((e=>{if(!s.has(e)){const i=Sh(t.get(e),n.get(e));null!==i&&c.set(e,i),s=s.add(e)}})),r.push(this.documentOverlayCache.saveOverlays(e,a,c))}return ac.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return i=t,Jl.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):Ou(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n);var i}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((s=>{const r=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):ac.resolve(Yu());let o=-1,a=s;return r.next((t=>ac.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(t)?ac.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,s))).next((()=>this.computeViews(e,a,t,nh()))).next((e=>({batchId:o,changes:Qu(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Jl(t)).next((e=>{let t=Xu();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const i=t.collectionGroup;let s=Xu();return this.indexManager.getCollectionParents(e,i).next((r=>ac.forEach(r,(r=>{const o=(a=t,l=r.child(i),new Cu(l,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,l;return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i)))).next((e=>{i.forEach(((t,n)=>{const i=n.getKey();null===e.get(i)&&(e=e.insert(i,eu.newInvalidDocument(i)))}));let n=Xu();return e.forEach(((e,s)=>{const r=i.get(e);void 0!==r&&kh(r.mutation,s,Sc.empty(),Gl.now()),ju(t,s)&&(n=n.insert(e,s))})),n}))}constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{getBundleMetadata(e,t){return ac.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var n;return this.cs.set(t.id,{id:(n=t).id,version:n.version,createTime:md(n.createTime)}),ac.resolve()}getNamedQuery(e,t){return ac.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,{name:(n=t).name,query:Vd(n.bundledQuery),readTime:md(n.readTime)}),ac.resolve();var n}constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{getOverlay(e,t){return ac.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Yu();return ac.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,i)=>{this.we(e,t,i)})),ac.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.ls.get(n);return void 0!==i&&(i.forEach((e=>this.overlays=this.overlays.remove(e))),this.ls.delete(n)),ac.resolve()}getOverlaysForCollection(e,t,n){const i=Yu(),s=t.length+1,r=new Jl(t.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const e=o.getNext().value,r=e.getKey();if(!t.isPrefixOf(r.path))break;r.path.length===s&&e.largestBatchId>n&&i.set(e.getKey(),e)}return ac.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new wc(((e,t)=>e-t));const r=this.overlays.getIterator();for(;r.hasNext();){const e=r.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=Yu(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Yu(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=i)););return ac.resolve(o)}we(e,t,n){const i=this.overlays.get(n.key);if(null!==i){const e=this.ls.get(i.largestBatchId).delete(n.key);this.ls.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Uh(t,n));let s=this.ls.get(t);void 0===s&&(s=nh(),this.ls.set(t,s)),this.ls.set(t,s.add(n.key))}constructor(){this.overlays=new wc(Jl.comparator),this.ls=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{isEmpty(){return this.fs.isEmpty()}addReference(e,t){const n=new Yd(e,t);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.ys(new Yd(e,t))}ps(e,t){e.forEach((e=>this.removeReference(e,t)))}Is(e){const t=new Jl(new Xl([])),n=new Yd(t,e),i=new Yd(t,e+1),s=[];return this.ws.forEachInRange([n,i],(e=>{this.ys(e),s.push(e.key)})),s}Ts(){this.fs.forEach((e=>this.ys(e)))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new Jl(new Xl([])),n=new Yd(t,e),i=new Yd(t,e+1);let s=nh();return this.ws.forEachInRange([n,i],(e=>{s=s.add(e.key)})),s}containsKey(e){const t=new Yd(e,0),n=this.fs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}constructor(){this.fs=new Tc(Yd.ds),this.ws=new Tc(Yd._s)}}class Yd{static ds(e,t){return Jl.comparator(e.key,t.key)||Hl(e.As,t.As)}static _s(e,t){return Hl(e.As,t.As)||Jl.comparator(e.key,t.key)}constructor(e,t){this.key=e,this.As=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{checkEmpty(e){return ac.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new Dh(s,t,n,i);this.mutationQueue.push(r);for(const t of i)this.Rs=this.Rs.add(new Yd(t.key,s)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return ac.resolve(r)}lookupMutationBatch(e,t){return ac.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.bs(n),s=i<0?0:i;return ac.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return ac.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(e){return ac.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Yd(t,0),i=new Yd(t,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([n,i],(e=>{const t=this.Ps(e.As);s.push(t)})),ac.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Tc(Hl);return t.forEach((e=>{const t=new Yd(e,0),i=new Yd(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,i],(e=>{n=n.add(e.As)}))})),ac.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;Jl.isDocumentKey(s)||(s=s.child(""));const r=new Yd(new Jl(s),0);let o=new Tc(Hl);return this.Rs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e.As)),!0)}),r),ac.resolve(this.Vs(o))}Vs(e){const t=[];return e.forEach((e=>{const n=this.Ps(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Al(0===this.Ss(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return ac.forEach(t.mutations,(i=>{const s=new Yd(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Rs=n}))}Cn(e){}containsKey(e,t){const n=new Yd(t,0),i=this.Rs.firstAfterOrEqual(n);return ac.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,ac.resolve()}Ss(e,t){return this.bs(e)}bs(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new Tc(Yd.ds)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,r=this.Ds(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return ac.resolve(n?n.document.mutableCopy():eu.newInvalidDocument(t))}getEntries(e,t){let n=Wu();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():eu.newInvalidDocument(e))})),ac.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=Wu();const r=t.path,o=new Jl(r.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!r.isPrefixOf(e.path))break;e.path.length>r.length+1||ic(tc(o),n)<=0||(i.has(o.key)||ju(t,o))&&(s=s.insert(o.key,o.mutableCopy()))}return ac.resolve(s)}getAllFromCollectionGroup(e,t,n,i){Cl()}Cs(e,t){return ac.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new ef(this)}getSize(e){return ac.resolve(this.size)}constructor(e){this.Ds=e,this.docs=new wc(Jl.comparator),this.size=0}}class ef extends qd{applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.os.addEntry(e,i)):this.os.removeEntry(n)})),ac.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}constructor(e){super(),this.os=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{forEachTarget(e,t){return this.xs.forEach(((e,n)=>t(n))),ac.resolve()}getLastRemoteSnapshotVersion(e){return ac.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ac.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),ac.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ns&&(this.Ns=t),ac.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new Hd(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,ac.resolve()}updateTargetData(e,t){return this.Fn(t),ac.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,ac.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.xs.forEach(((r,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.xs.delete(r),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)})),ac.waitFor(s).next((()=>i))}getTargetCount(e){return ac.resolve(this.targetCount)}getTargetData(e,t){const n=this.xs.get(t)||null;return ac.resolve(n)}addMatchingKeys(e,t,n){return this.ks.gs(t,n),ac.resolve()}removeMatchingKeys(e,t,n){this.ks.ps(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((t=>{s.push(i.markPotentiallyOrphaned(e,t))})),ac.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),ac.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ks.Es(t);return ac.resolve(n)}containsKey(e,t){return ac.resolve(this.ks.containsKey(t))}constructor(e){this.persistence=e,this.xs=new qu((e=>Iu(e)),ku),this.lastRemoteSnapshotVersion=Wl.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Qd,this.targetCount=0,this.Ms=Hd.kn()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Xd,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.$s[e.toKey()];return n||(n=new Jd(t,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,n){Sl("MemoryPersistence","Starting transaction:",e);const i=new sf(this.Os.next());return this.referenceDelegate.Us(),n(i).next((e=>this.referenceDelegate.Ks(i).next((()=>e)))).toPromise().then((e=>(i.raiseOnCommittedEvent(),e)))}Gs(e,t){return ac.or(Object.values(this.$s).map((n=>()=>n.containsKey(e,t))))}constructor(e,t){this.$s={},this.overlays={},this.Os=new cc(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new tf(this),this.indexManager=new jd,this.remoteDocumentCache=new Zd((e=>this.referenceDelegate.Ls(e))),this.serializer=new Ud(t),this.qs=new Kd(this.serializer)}}class sf extends rc{constructor(e){super(),this.currentSequenceNumber=e}}class rf{static zs(e){return new rf(e)}get Ws(){if(this.js)return this.js;throw Cl()}addReference(e,t,n){return this.Qs.addReference(n,t),this.Ws.delete(n.toString()),ac.resolve()}removeReference(e,t,n){return this.Qs.removeReference(n,t),this.Ws.add(n.toString()),ac.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),ac.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach((e=>this.Ws.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ws.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ac.forEach(this.Ws,(n=>{const i=Jl.fromPath(n);return this.Hs(e,i).next((e=>{e||t.removeEntry(i,Wl.min())}))})).next((()=>(this.js=null,t.apply(e))))}updateLimboDocument(e,t){return this.Hs(e,t).next((e=>{e?this.Ws.delete(t.toString()):this.Ws.add(t.toString())}))}Ls(e){return 0}Hs(e,t){return ac.or([()=>ac.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}constructor(e){this.persistence=e,this.Qs=new Qd,this.js=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class of{static Li(e,t){let n=nh(),i=nh();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:i=i.add(e.doc.key)}return new of(e,t.fromCache,n,i)}constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Fi=n,this.Bi=i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,n,i){return this.Ki(e,t).next((s=>s||this.Gi(e,t,i,n))).next((n=>n||this.Qi(e,t)))}Ki(e,t){if(Lu(t))return ac.resolve(null);let n=Du(t);return this.indexManager.getIndexType(e,n).next((i=>0===i?null:(null!==t.limit&&1===i&&(t=Fu(t,null,"F"),n=Du(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const s=nh(...i);return this.Ui.getDocuments(e,s).next((i=>this.indexManager.getMinOffset(e,n).next((n=>{const r=this.ji(t,i);return this.zi(t,r,s,n.readTime)?this.Ki(e,Fu(t,null,"F")):this.Wi(e,r,t,n)}))))})))))}Gi(e,t,n,i){return Lu(t)||i.isEqual(Wl.min())?this.Qi(e,t):this.Ui.getDocuments(e,n).next((s=>{const r=this.ji(t,s);return this.zi(t,r,n,i)?this.Qi(e,t):(_l()<=fe.DEBUG&&Sl("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Bu(t)),this.Wi(e,r,t,ec(i,-1)))}))}ji(e,t){let n=new Tc($u(e));return t.forEach(((t,i)=>{ju(e,i)&&(n=n.add(i))})),n}zi(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,t){return _l()<=fe.DEBUG&&Sl("QueryEngine","Using full collection scan to execute query:",Bu(t)),this.Ui.getDocumentsMatchingQuery(e,t,nc.min())}Wi(e,t,n,i){return this.Ui.getDocumentsMatchingQuery(e,n,i).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}constructor(){this.qi=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Wd(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ji)))}constructor(e,t,n,i){this.persistence=e,this.Hi=t,this.serializer=i,this.Ji=new wc(Hl),this.Yi=new qu((e=>Iu(e)),ku),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}}function cf(e,t,n,i){return new lf(e,t,n,i)}async function uf(e,t){const n=Nl(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let i;return n.mutationQueue.getAllMutationBatches(e).next((s=>(i=s,n.tr(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const s=[],r=[];let o=nh();for(const e of i){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({er:e,removedBatchIds:s,addedBatchIds:r})))}))}))}function hf(e){const t=Nl(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Bs.getLastRemoteSnapshotVersion(e)))}function df(e,t,n){let i=nh(),s=nh();return n.forEach((e=>i=i.add(e))),t.getEntries(e,i).next((e=>{let i=Wu();return n.forEach(((n,r)=>{const o=e.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),r.isNoDocument()&&r.version.isEqual(Wl.min())?(t.removeEntry(n,r.readTime),i=i.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(r),i=i.insert(n,r)):Sl("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{nr:i,sr:s}}))}function ff(e,t){const n=Nl(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function pf(e,t){const n=Nl(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let i;return n.Bs.getTargetData(e,t).next((s=>s?(i=s,ac.resolve(i)):n.Bs.allocateTargetId(e).next((s=>(i=new Fd(t,s,"TargetPurposeListen",e.currentSequenceNumber),n.Bs.addTargetData(e,i).next((()=>i)))))))})).then((e=>{const i=n.Ji.get(e.targetId);return(null===i||e.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e}))}async function mf(e,t,n){const i=Nl(e),s=i.Ji.get(t),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,(e=>i.persistence.referenceDelegate.removeTarget(e,s)))}catch(e){if(!lc(e))throw e;Sl("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}i.Ji=i.Ji.remove(t),i.Yi.delete(s.target)}function gf(e,t,n){const i=Nl(e);let s=Wl.min(),r=nh();return i.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const i=Nl(e),s=i.Yi.get(n);return void 0!==s?ac.resolve(i.Ji.get(s)):i.Bs.getTargetData(t,n)}(i,e,Du(t)).next((t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,i.Bs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{r=e}))})).next((()=>i.Hi.getDocumentsMatchingQuery(e,t,n?s:Wl.min(),n?r:nh()))).next((e=>(vf(i,zu(t),e),{documents:e,ir:r})))))}function vf(e,t,n){let i=e.Xi.get(t)||Wl.min();n.forEach(((e,t)=>{t.readTime.compareTo(i)>0&&(i=t.readTime)})),e.Xi.set(t,i)}class yf{lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}constructor(){this.activeTargetIds=sh()}}class wf{addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,n){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new yf,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}constructor(){this.Hr=new yf,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{Yr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){Sl("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){Sl("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tf=null;function _f(){return null===Tf?Tf=268435456+Math.round(2147483648*Math.random()):Tf++,"0x"+Tf.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Sf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}constructor(e){this.ro=e.ro,this.oo=e.oo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf extends class{get po(){return!1}Io(e,t,n,i,s){const r=_f(),o=this.To(e,t);Sl("RestConnection",`Sending RPC '${e}' ${r}:`,o,n);const a={};return this.Eo(a,i,s),this.Ao(e,o,a,n).then((t=>(Sl("RestConnection",`Received RPC '${e}' ${r}: `,t),t)),(t=>{throw kl("RestConnection",`RPC '${e}' ${r} failed with error: `,t,"url: ",o,"request:",n),t}))}vo(e,t,n,i,s,r){return this.Io(e,t,n,i,s)}Eo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+El,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}To(e,t){const n=Sf[e];return`${this.mo}/v1/${t}:${n}`}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{Ao(e,t,n,i){const s=_f();return new Promise(((r,o)=>{const a=new vl;a.setWithCredentials(!0),a.listenOnce(dl.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case hl.NO_ERROR:const t=a.getResponseJson();Sl("WebChannelConnection",`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),r(t);break;case hl.TIMEOUT:Sl("WebChannelConnection",`RPC '${e}' ${s} timed out`),o(new Pl(Ll.DEADLINE_EXCEEDED,"Request time out"));break;case hl.HTTP_ERROR:const n=a.getStatus();if(Sl("WebChannelConnection",`RPC '${e}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Ll).indexOf(t)>=0?t:Ll.UNKNOWN}(t.status);o(new Pl(e,t.message))}else o(new Pl(Ll.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Pl(Ll.UNAVAILABLE,"Connection failed."));break;default:Cl()}}finally{Sl("WebChannelConnection",`RPC '${e}' ${s} completed.`)}}));const l=JSON.stringify(i);Sl("WebChannelConnection",`RPC '${e}' ${s} sending request:`,i),a.send(t,"POST",l,n,15)}))}Ro(e,t,n){const i=_f(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=cl(),o=ul(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.xmlHttpFactory=new ml({})),this.Eo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const c=s.join("");Sl("WebChannelConnection",`Creating RPC '${e}' stream ${i}: ${c}`,a);const u=r.createWebChannel(c,a);let h=!1,d=!1;const f=new If({ro:t=>{d?Sl("WebChannelConnection",`Not sending because RPC '${e}' stream ${i} is closed:`,t):(h||(Sl("WebChannelConnection",`Opening RPC '${e}' stream ${i} transport.`),u.open(),h=!0),Sl("WebChannelConnection",`RPC '${e}' stream ${i} sending:`,t),u.send(t))},oo:()=>u.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(u,gl.EventType.OPEN,(()=>{d||Sl("WebChannelConnection",`RPC '${e}' stream ${i} transport opened.`)})),p(u,gl.EventType.CLOSE,(()=>{d||(d=!0,Sl("WebChannelConnection",`RPC '${e}' stream ${i} transport closed`),f.wo())})),p(u,gl.EventType.ERROR,(t=>{d||(d=!0,kl("WebChannelConnection",`RPC '${e}' stream ${i} transport errored:`,t),f.wo(new Pl(Ll.UNAVAILABLE,"The operation could not be completed")))})),p(u,gl.EventType.MESSAGE,(t=>{var n;if(!d){const s=t.data[0];Al(!!s);const r=s,o=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(o){Sl("WebChannelConnection",`RPC '${e}' stream ${i} received error:`,o);const t=o.status;let n=function(e){const t=Bh[e];if(void 0!==t)return $h(t)}(t),s=o.message;void 0===n&&(n=Ll.INTERNAL,s="Unknown error status: "+t+" with message "+o.message),d=!0,f.wo(new Pl(n,s)),u.close()}else Sl("WebChannelConnection",`RPC '${e}' stream ${i} received:`,s),f._o(s)}})),p(o,fl.STAT_EVENT,(t=>{t.stat===pl.PROXY?Sl("WebChannelConnection",`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===pl.NOPROXY&&Sl("WebChannelConnection",`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{f.fo()}),0),f}constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(e){return new ud(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),i=Math.max(0,t-n);i>0&&Sl("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,(()=>(this.Co=Date.now(),e()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}constructor(e,t,n=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==e?this.qo.reset():t&&t.code===Ll.RESOURCE_EXHAUSTED?(Il(t.toString()),Il("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===Ll.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Fo===t&&this.Zo(e,n)}),(t=>{e((()=>{const e=new Pl(Ll.UNKNOWN,"Fetching auth token failed: "+t.message);return this.tu(e)}))}))}Zo(e,t){const n=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((e=>{n((()=>this.tu(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(e){return Sl("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget((()=>this.Fo===e?t():(Sl("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(e,t,n,i,s,r,o,a){this.ii=e,this.$o=n,this.Oo=i,this.connection=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Af(e,t)}}class Lf extends Nf{eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const s="NO_CHANGE"===(i=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===i?1:"REMOVE"===i?2:"CURRENT"===i?3:"RESET"===i?4:Cl(),r=t.targetChange.targetIds||[],o=function(e,t){return e.useProto3Json?(Al(void 0===t||"string"==typeof t),xc.fromBase64String(t||"")):(Al(void 0===t||t instanceof Uint8Array),xc.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(e){const t=void 0===e.code?Ll.UNKNOWN:$h(e.code);return new Pl(t,e.message||"")}(a);n=new nd(s,r,o,l||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=wd(e,i.document.name),r=md(i.document.updateTime),o=i.document.createTime?md(i.document.createTime):Wl.min(),a=new Jc({mapValue:{fields:i.document.fields}}),l=eu.newFoundDocument(s,r,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];n=new ed(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=wd(e,i.document),r=i.readTime?md(i.readTime):Wl.min(),o=eu.newNoDocument(s,r),a=i.removedTargetIds||[];n=new ed([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=wd(e,i.document),r=i.removedTargetIds||[];n=new ed([],r,s,null)}else{if(!("filter"in t))return Cl();{t.filter;const e=t.filter;e.targetId;const{count:i=0,unchangedNames:s}=e,r=new Vh(i,s),o=e.targetId;n=new td(o,r)}}var i;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return Wl.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Wl.min():t.readTime?md(t.readTime):Wl.min()}(e);return this.listener.nu(t,n)}su(e){const t={};t.database=Td(this.serializer),t.addTarget=function(e,t){let n;const i=t.target;if(n=xu(i)?{documents:kd(e,i)}:{query:xd(e,i)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=fd(e,t.resumeToken);const i=hd(e,t.expectedCount);null!==i&&(n.expectedCount=i)}else if(t.snapshotVersion.compareTo(Wl.min())>0){n.readTime=dd(e,t.snapshotVersion.toTimestamp());const i=hd(e,t.expectedCount);null!==i&&(n.expectedCount=i)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Cl()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Wo(t)}iu(e){const t={};t.database=Td(this.serializer),t.removeTarget=e,this.Wo(t)}constructor(e,t,n,i,s,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,r),this.serializer=s}}class Pf extends Nf{get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(Al(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const i=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(Al(void 0!==n),t.map((e=>function(e,t){let n=e.updateTime?md(e.updateTime):md(t);return n.isEqual(Wl.min())&&(n=md(t)),new bh(n,e.transformResults||[])}(e,n)))):[]),s=md(e.commitTime);return this.listener.cu(s,i)}var t,n;return Al(!e.writeResults||0===e.writeResults.length),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Td(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Id(this.serializer,e)))};this.Wo(t)}constructor(e,t,n,i,s,r){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,r),this.serializer=s,this.ru=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf extends class{}{fu(){if(this.lu)throw new Pl(Ll.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Io(e,t,n,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ll.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Pl(Ll.UNKNOWN,e.toString())}))}vo(e,t,n,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.connection.vo(e,t,n,s,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ll.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Pl(Ll.UNKNOWN,e.toString())}))}terminate(){this.lu=!0}constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.lu=!1}}class Of{gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(e){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,"Online"===e&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Il(t),this.mu=!1):Sl("OnlineStateTracker",t)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr((e=>{n.enqueueAndForget((async()=>{Hf(this)&&(Sl("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Nl(e);t.vu.add(4),await Ff(t),t.bu.set("Unknown"),t.vu.delete(4),await Df(t)}(this))}))})),this.bu=new Of(n,i)}}async function Df(e){if(Hf(e))for(const t of e.Ru)await t(!0)}async function Ff(e){for(const t of e.Ru)await t(!1)}function Uf(e,t){const n=Nl(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),$f(n)?zf(n):lp(n).Ko()&&Bf(n,t))}function Vf(e,t){const n=Nl(e),i=lp(n);n.Au.delete(t),i.Ko()&&jf(n,t),0===n.Au.size&&(i.Ko()?i.jo():Hf(n)&&n.bu.set("Unknown"))}function Bf(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Wl.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}lp(e).su(t)}function jf(e,t){e.Vu.qt(t),lp(e).iu(t)}function zf(e){e.Vu=new sd({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),lp(e).start(),e.bu.gu()}function $f(e){return Hf(e)&&!lp(e).Uo()&&e.Au.size>0}function Hf(e){return 0===Nl(e).vu.size}function qf(e){e.Vu=void 0}async function Gf(e){e.Au.forEach(((t,n)=>{Bf(e,t)}))}async function Wf(e,t){qf(e),$f(e)?(e.bu.Iu(t),zf(e)):e.bu.set("Unknown")}async function Kf(e,t,n){if(e.bu.set("Online"),t instanceof nd&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const i of t.targetIds)e.Au.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.Au.delete(i),e.Vu.removeTarget(i))}(e,t)}catch(n){Sl("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Xf(e,n)}else if(t instanceof ed?e.Vu.Ht(t):t instanceof td?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(Wl.min()))try{const t=await hf(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Vu.ce(t);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.Au.get(i);s&&e.Au.set(i,s.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const i=e.Au.get(t);if(!i)return;e.Au.set(t,i.withResumeToken(xc.EMPTY_BYTE_STRING,i.snapshotVersion)),jf(e,t);const s=new Fd(i.target,t,n,i.sequenceNumber);Bf(e,s)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Sl("RemoteStore","Failed to raise snapshot:",t),await Xf(e,t)}}async function Xf(e,t,n){if(!lc(t))throw t;e.vu.add(1),await Ff(e),e.bu.set("Offline"),n||(n=()=>hf(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Sl("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await Df(e)}))}function Qf(e,t){return t().catch((n=>Xf(e,n,t)))}async function Yf(e){const t=Nl(e),n=cp(t);let i=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;Jf(t);)try{const e=await ff(t.localStore,i);if(null===e){0===t.Eu.length&&n.jo();break}i=e.batchId,Zf(t,e)}catch(e){await Xf(t,e)}ep(t)&&tp(t)}function Jf(e){return Hf(e)&&e.Eu.length<10}function Zf(e,t){e.Eu.push(t);const n=cp(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function ep(e){return Hf(e)&&!cp(e).Uo()&&e.Eu.length>0}function tp(e){cp(e).start()}async function np(e){cp(e).hu()}async function ip(e){const t=cp(e);for(const n of e.Eu)t.uu(n.mutations)}async function sp(e,t,n){const i=e.Eu.shift(),s=Fh.from(i,t,n);await Qf(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await Yf(e)}async function rp(e,t){t&&cp(e).ou&&await async function(e,t){if(zh(n=t.code)&&n!==Ll.ABORTED){const n=e.Eu.shift();cp(e).Qo(),await Qf(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Yf(e)}var n}(e,t),ep(e)&&tp(e)}async function op(e,t){const n=Nl(e);n.asyncQueue.verifyOperationInProgress(),Sl("RemoteStore","RemoteStore received new credentials");const i=Hf(n);n.vu.add(3),await Ff(n),i&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await Df(n)}async function ap(e,t){const n=Nl(e);t?(n.vu.delete(2),await Df(n)):t||(n.vu.add(2),await Ff(n),n.bu.set("Unknown"))}function lp(e){return e.Su||(e.Su=function(e,t,n){const i=Nl(e);return i.fu(),new Lf(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(e.datastore,e.asyncQueue,{uo:Gf.bind(null,e),ao:Wf.bind(null,e),nu:Kf.bind(null,e)}),e.Ru.push((async t=>{t?(e.Su.Qo(),$f(e)?zf(e):e.bu.set("Unknown")):(await e.Su.stop(),qf(e))}))),e.Su}function cp(e){return e.Du||(e.Du=function(e,t,n){const i=Nl(e);return i.fu(),new Pf(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(e.datastore,e.asyncQueue,{uo:np.bind(null,e),ao:rp.bind(null,e),au:ip.bind(null,e),cu:sp.bind(null,e)}),e.Ru.push((async t=>{t?(e.Du.Qo(),await Yf(e)):(await e.Du.stop(),e.Eu.length>0&&(Sl("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))}))),e.Du
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class up{static createAndSchedule(e,t,n,i,s){const r=Date.now()+n,o=new up(e,t,r,i,s);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Pl(Ll.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new Rl,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}}function hp(e,t){if(Il("AsyncQueue",`${t}: ${e}`),lc(e))return new Pl(Ll.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{static emptySet(e){return new dp(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof dp))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new dp;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}constructor(e){this.comparator=e?(t,n)=>e(t,n)||Jl.comparator(t.key,n.key):(e,t)=>Jl.comparator(e.key,t.key),this.keyedMap=Xu(),this.sortedSet=new wc(this.comparator)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{track(e){const t=e.doc.key,n=this.Cu.get(t);n?0!==e.type&&3===n.type?this.Cu=this.Cu.insert(t,e):3===e.type&&1!==n.type?this.Cu=this.Cu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Cu=this.Cu.remove(t):1===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):Cl():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal(((t,n)=>{e.push(n)})),e}constructor(){this.Cu=new wc(Jl.comparator)}}class pp{static fromInitialDocuments(e,t,n,i,s){const r=[];return t.forEach((e=>{r.push({type:0,doc:e})})),new pp(e,t,dp.emptySet(t),r,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}constructor(e,t,n,i,s,r,o,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(){this.Nu=void 0,this.listeners=[]}}class gp{constructor(){this.queries=new qu((e=>Vu(e)),Uu),this.onlineState="Unknown",this.ku=new Set}}async function vp(e,t){const n=Nl(e),i=t.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new mp),s)try{r.Nu=await n.onListen(i)}catch(e){const n=hp(e,`Initialization of query '${Bu(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,r),r.listeners.push(t),t.Mu(n.onlineState),r.Nu&&t.$u(r.Nu)&&Ep(n)}async function yp(e,t){const n=Nl(e),i=t.query;let s=!1;const r=n.queries.get(i);if(r){const e=r.listeners.indexOf(t);e>=0&&(r.listeners.splice(e,1),s=0===r.listeners.length)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function wp(e,t){const n=Nl(e);let i=!1;for(const e of t){const t=e.query,s=n.queries.get(t);if(s){for(const t of s.listeners)t.$u(e)&&(i=!0);s.Nu=e}}i&&Ep(n)}function bp(e,t,n){const i=Nl(e),s=i.queries.get(t);if(s)for(const e of s.listeners)e.onError(n);i.queries.delete(t)}function Ep(e){e.ku.forEach((e=>{e.next()}))}class Tp{$u(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new pp(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Uu(e){e=pp.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}constructor(e,t,n){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _p{constructor(e){this.key=e}}class Sp{constructor(e){this.key=e}}class Ip{get nc(){return this.Yu}sc(e,t){const n=t?t.ic:new fp,i=t?t.ec:this.ec;let s=t?t.mutatedKeys:this.mutatedKeys,r=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,l="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((e,t)=>{const c=i.get(e),u=ju(this.query,t)?t:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;c&&u?c.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.rc(c,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.tc(u,a)>0||l&&this.tc(u,l)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),f=!0):c&&!u&&(n.track({type:1,doc:c}),f=!0,(a||l)&&(o=!0)),f&&(u?(r=r.add(u),s=d?s.add(e):s.delete(e)):(r=r.delete(e),s=s.delete(e)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const e="F"===this.query.limitType?r.last():r.first();r=r.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{ec:r,ic:n,zi:o,mutatedKeys:s}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Cl()}};return n(e)-n(t)}(e.type,t.type)||this.tc(e.doc,t.doc))),this.oc(n);const r=t?this.uc():[],o=0===this.Zu.size&&this.current?1:0,a=o!==this.Xu;return this.Xu=o,0!==s.length||a?{snapshot:new pp(this.query,e.ec,i,s,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:r}:{cc:r}}Mu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ec:this.ec,ic:new fp,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach((e=>this.Yu=this.Yu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Yu=this.Yu.delete(e))),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=nh(),this.ec.forEach((e=>{this.ac(e.key)&&(this.Zu=this.Zu.add(e.key))}));const t=[];return e.forEach((e=>{this.Zu.has(e)||t.push(new Sp(e))})),this.Zu.forEach((n=>{e.has(n)||t.push(new _p(n))})),t}hc(e){this.Yu=e.ir,this.Zu=nh();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return pp.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=nh(),this.mutatedKeys=nh(),this.tc=$u(e),this.ec=new dp(this.tc)}}class kp{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class xp{constructor(e){this.key=e,this.fc=!1}}class Cp{get isPrimaryClient(){return!0===this.vc}constructor(e,t,n,i,s,r){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.dc={},this.wc=new qu((e=>Vu(e)),Uu),this._c=new Map,this.mc=new Set,this.gc=new wc(Jl.comparator),this.yc=new Map,this.Ic=new Qd,this.Tc={},this.Ec=new Map,this.Ac=Hd.Mn(),this.onlineState="Unknown",this.vc=void 0}}async function Ap(e,t){const n=Wp(e);let i,s;const r=n.wc.get(t);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.lc();else{const e=await pf(n.localStore,Du(t)),r=n.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,s=await Np(n,t,i,"current"===r,e.resumeToken),n.isPrimaryClient&&Uf(n.remoteStore,e)}return s}async function Np(e,t,n,i,s){e.Rc=(t,n,i)=>async function(e,t,n,i){let s=t.view.sc(n);s.zi&&(s=await gf(e.localStore,t.query,!1).then((({documents:e})=>t.view.sc(e,s))));const r=i&&i.targetChanges.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,r);return jp(e,t.targetId,o.cc),o.snapshot}(e,t,n,i);const r=await gf(e.localStore,t,!0),o=new Ip(t,r.ir),a=o.sc(r.documents),l=Zh.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==e.onlineState,s),c=o.applyChanges(a,e.isPrimaryClient,l);jp(e,n,c.cc);const u=new kp(t,n,o);return e.wc.set(t,u),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),c.snapshot}async function Lp(e,t){const n=Nl(e),i=n.wc.get(t),s=n._c.get(i.targetId);if(s.length>1)return n._c.set(i.targetId,s.filter((e=>!Uu(e,t)))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await mf(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),Vf(n.remoteStore,i.targetId),Vp(n,i.targetId)})).catch(oc)):(Vp(n,i.targetId),await mf(n.localStore,i.targetId,!0))}async function Pp(e,t){const n=Nl(e);try{const e=await function(e,t){const n=Nl(e),i=t.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const r=n.Zi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const o=[];t.targetChanges.forEach(((r,a)=>{const l=s.get(a);if(!l)return;o.push(n.Bs.removeMatchingKeys(e,r.removedDocuments,a).next((()=>n.Bs.addMatchingKeys(e,r.addedDocuments,a))));let c=l.withSequenceNumber(e.currentSequenceNumber);var u,h,d;null!==t.targetMismatches.get(a)?c=c.withResumeToken(xc.EMPTY_BYTE_STRING,Wl.min()).withLastLimboFreeSnapshotVersion(Wl.min()):r.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(r.resumeToken,i)),s=s.insert(a,c),h=c,d=r,(0===(u=l).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Bs.updateTargetData(e,c))}));let a=Wu(),l=nh();if(t.documentUpdates.forEach((i=>{t.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,i))})),o.push(df(e,r,t.documentUpdates).next((e=>{a=e.nr,l=e.sr}))),!i.isEqual(Wl.min())){const t=n.Bs.getLastRemoteSnapshotVersion(e).next((t=>n.Bs.setTargetsMetadata(e,e.currentSequenceNumber,i)));o.push(t)}return ac.waitFor(o).next((()=>r.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,l))).next((()=>a))})).then((e=>(n.Ji=s,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const i=n.yc.get(t);i&&(Al(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?i.fc=!0:e.modifiedDocuments.size>0?Al(i.fc):e.removedDocuments.size>0&&(Al(i.fc),i.fc=!1))})),await Hp(n,e,t)}catch(e){await oc(e)}}function Rp(e,t,n){const i=Nl(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.wc.forEach(((n,i)=>{const s=i.view.Mu(t);s.snapshot&&e.push(s.snapshot)})),function(e,t){const n=Nl(e);n.onlineState=t;let i=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Mu(t)&&(i=!0)})),i&&Ep(n)}(i.eventManager,t),e.length&&i.dc.nu(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Op(e,t,n){const i=Nl(e);i.sharedClientState.updateQueryState(t,"rejected",n);const s=i.yc.get(t),r=s&&s.key;if(r){let e=new wc(Jl.comparator);e=e.insert(r,eu.newNoDocument(r,Wl.min()));const n=nh().add(r),s=new Jh(Wl.min(),new Map,new wc(Hl),e,n);await Pp(i,s),i.gc=i.gc.remove(r),i.yc.delete(t),$p(i)}else await mf(i.localStore,t,!1).then((()=>Vp(i,t,n))).catch(oc)}async function Mp(e,t){const n=Nl(e),i=t.batch.batchId;try{const e=await function(e,t){const n=Nl(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const i=t.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const s=n.batch,r=s.keys();let o=ac.resolve();return r.forEach((e=>{o=o.next((()=>i.getEntry(t,e))).next((t=>{const r=n.docVersions.get(e);Al(null!==r),t.version.compareTo(r)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),i.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,s)))}(n,e,t,s).next((()=>s.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=nh();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(n.localStore,t);Up(n,i,null),Fp(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Hp(n,e)}catch(e){await oc(e)}}async function Dp(e,t,n){const i=Nl(e);try{const e=await function(e,t){const n=Nl(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let i;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Al(null!==t),i=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,i))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(i.localStore,t);Up(i,t,n),Fp(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await Hp(i,e)}catch(e){await oc(e)}}function Fp(e,t){(e.Ec.get(t)||[]).forEach((e=>{e.resolve()})),e.Ec.delete(t)}function Up(e,t,n){const i=Nl(e);let s=i.Tc[i.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),i.Tc[i.currentUser.toKey()]=s}}function Vp(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e._c.get(t))e.wc.delete(i),n&&e.dc.Pc(i,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach((t=>{e.Ic.containsKey(t)||Bp(e,t)}))}function Bp(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);null!==n&&(Vf(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),$p(e))}function jp(e,t,n){for(const i of n)i instanceof _p?(e.Ic.addReference(i.key,t),zp(e,i)):i instanceof Sp?(Sl("SyncEngine","Document no longer in limbo: "+i.key),e.Ic.removeReference(i.key,t),e.Ic.containsKey(i.key)||Bp(e,i.key)):Cl()}function zp(e,t){const n=t.key,i=n.path.canonicalString();e.gc.get(n)||e.mc.has(i)||(Sl("SyncEngine","New document in limbo: "+n),e.mc.add(i),$p(e))}function $p(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new Jl(Xl.fromString(t)),i=e.Ac.next();e.yc.set(i,new xp(n)),e.gc=e.gc.insert(n,i),Uf(e.remoteStore,new Fd(Du(Nu(n.path)),i,"TargetPurposeLimboResolution",cc.ct))}}async function Hp(e,t,n){const i=Nl(e),s=[],r=[],o=[];i.wc.isEmpty()||(i.wc.forEach(((e,a)=>{o.push(i.Rc(a,t,n).then((e=>{if((e||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){s.push(e);const t=of.Li(a.targetId,e);r.push(t)}})))})),await Promise.all(o),i.dc.nu(s),await async function(e,t){const n=Nl(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>ac.forEach(t,(t=>ac.forEach(t.Fi,(i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i))).next((()=>ac.forEach(t.Bi,(i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))))))}catch(e){if(!lc(e))throw e;Sl("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Ji.get(t),i=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(i);n.Ji=n.Ji.insert(t,s)}}}(i.localStore,r))}async function qp(e,t){const n=Nl(e);if(!n.currentUser.isEqual(t)){Sl("SyncEngine","User change. New user:",t.toKey());const e=await uf(n.localStore,t);n.currentUser=t,(i=n).Ec.forEach((e=>{e.forEach((e=>{e.reject(new Pl(Ll.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),i.Ec.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Hp(n,e.er)}var i}function Gp(e,t){const n=Nl(e),i=n.yc.get(t);if(i&&i.fc)return nh().add(i.key);{let e=nh();const i=n._c.get(t);if(!i)return e;for(const t of i){const i=n.wc.get(t);e=e.unionWith(i.view.nc)}return e}}function Wp(e){const t=Nl(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Pp.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Gp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Op.bind(null,t),t.dc.nu=wp.bind(null,t.eventManager),t.dc.Pc=bp.bind(null,t.eventManager),t}function Kp(e){const t=Nl(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Mp.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Dp.bind(null,t),t}class Xp{async initialize(e){this.serializer=Cf(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return cf(this.persistence,new af,e.initialUser,this.serializer)}createPersistence(e){return new nf(rf.zs,this.serializer)}createSharedClientState(e){return new wf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class Qp{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Rp(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=qp.bind(null,this.syncEngine),await ap(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new gp}createDatastore(e){const t=Cf(e.databaseInfo.databaseId),n=(i=e.databaseInfo,new kf(i));var i,s,r;return s=e.authCredentials,r=e.appCheckCredentials,new Rf(s,r,n,t)}createRemoteStore(e){var t,n,i,s,r;return t=this.localStore,n=this.datastore,i=e.asyncQueue,s=e=>Rp(this.syncEngine,e,0),r=Ef.D()?new Ef:new bf,new Mf(t,n,i,s,r)}createSyncEngine(e,t){return function(e,t,n,i,s,r,o){const a=new Cp(e,t,n,i,s,r);return o&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Nl(e);Sl("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await Ff(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yp{next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Il("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}constructor(e){this.observer=e,this.muted=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jp{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Pl(Ll.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rl;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=hp(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=bl.UNAUTHENTICATED,this.clientId=$l.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Sl("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Sl("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}}async function Zp(e,t){e.asyncQueue.verifyOperationInProgress(),Sl("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener((async e=>{i.isEqual(e)||(await uf(t.localStore,e),i=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function em(e,t){e.asyncQueue.verifyOperationInProgress();const n=await nm(e);Sl("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener((e=>op(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>op(t.remoteStore,n))),e._onlineComponents=t}function tm(e){return"FirebaseError"===e.name?e.code===Ll.FAILED_PRECONDITION||e.code===Ll.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function nm(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Sl("FirestoreClient","Using user provided OfflineComponentProvider");try{await Zp(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!tm(n))throw n;kl("Error using user provided cache. Falling back to memory cache: "+n),await Zp(e,new Xp)}}else Sl("FirestoreClient","Using default OfflineComponentProvider"),await Zp(e,new Xp);return e._offlineComponents}async function im(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Sl("FirestoreClient","Using user provided OnlineComponentProvider"),await em(e,e._uninitializedComponentsProvider._online)):(Sl("FirestoreClient","Using default OnlineComponentProvider"),await em(e,new Qp))),e._onlineComponents}function sm(e){return im(e).then((e=>e.syncEngine))}async function rm(e){const t=await im(e),n=t.eventManager;return n.onListen=Ap.bind(null,t.syncEngine),n.onUnlisten=Lp.bind(null,t.syncEngine),n}function om(e,t,n={}){const i=new Rl;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,i,s){const r=new Yp({next:r=>{t.enqueueAndForget((()=>yp(e,o)));const a=r.docs.has(n);!a&&r.fromCache?s.reject(new Pl(Ll.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&i&&"server"===i.source?s.reject(new Pl(Ll.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(r)},error:e=>s.reject(e)}),o=new Tp(Nu(n.path),r,{includeMetadataChanges:!0,Ku:!0});return vp(e,o)}(await rm(e),e.asyncQueue,t,n,i))),i.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function am(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const lm=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(e,t,n){if(!n)throw new Pl(Ll.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function um(e){if(!Jl.isDocumentKey(e))throw new Pl(Ll.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function hm(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":Cl()}function dm(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Pl(Ll.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hm(e);throw new Pl(Ll.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fm{isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new Pl(Ll.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Pl(Ll.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,i){if(!0===t&&!0===i)throw new Pl(Ll.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=am(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new Pl(Ll.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new Pl(Ll.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new Pl(Ll.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}}class pm{get app(){if(!this._app)throw new Pl(Ll.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Pl(Ll.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fm(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Ml;switch(e.type){case"firstParty":return new Vl(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Pl(Ll.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=lm.get(e);t&&(Sl("ComponentProvider","Removing Datastore"),lm.delete(e),t.terminate())}(this),Promise.resolve()}constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fm({}),this._settingsFrozen=!1}}function mm(e,t,n,i={}){var s;const r=(e=dm(e,pm))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==r.host&&r.host!==o&&kl("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=bl.MOCK_USER;else{t=q(i.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);const r=i.mockUserToken.sub||i.mockUserToken.user_id;if(!r)throw new Pl(Ll.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new bl(r)}e._authCredentials=new Dl(new Ol(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ym(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gm(this.firestore,e,this._key)}constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}}class vm{withConverter(e){return new vm(this.firestore,e,this._query)}constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}}class ym extends vm{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gm(this.firestore,null,new Jl(e))}withConverter(e){return new ym(this.firestore,e,this._path)}constructor(e,t,n){super(e,t,Nu(n)),this._path=n,this.type="collection"}}function wm(e,t,...n){if(e=le(e),1===arguments.length&&(t=$l.A()),cm("doc","path",t),e instanceof pm){const i=Xl.fromString(t,...n);return um(i),new gm(e,null,new Jl(i))}{if(!(e instanceof gm||e instanceof ym))throw new Pl(Ll.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Xl.fromString(t,...n));return um(i),new gm(e.firestore,e instanceof ym?e.converter:null,new Jl(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bm{get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=xf();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise((()=>{}));const t=new Rl;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Qc.push(e),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!lc(e))throw e;Sl("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(e){const t=this.Gc.then((()=>(this.Hc=!0,e().catch((e=>{this.Wc=e,this.Hc=!1;throw Il("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.Hc=!1,e))))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const i=up.createAndSchedule(this,e,t,n,(e=>this.na(e)));return this.zc.push(i),i}Zc(){this.Wc&&Cl()}verifyOperationInProgress(){}async sa(){let e;do{e=this.Gc,await e}while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then((()=>{this.zc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.zc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.sa()}))}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Af(this,"async_queue_retry"),this.Xc=()=>{const e=xf();e&&Sl("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};const e=xf();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xc)}}function Em(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of["next","error","complete"])if(e in n&&"function"==typeof n[e])return!0;return!1}(e)}class Tm extends pm{_terminate(){return this._firestoreClient||Sm(this),this._firestoreClient.terminate()}constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new bm,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}}function _m(e){return e._firestoreClient||Sm(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Sm(e){var t,n,i;const s=e._freezeSettings(),r=(o=e._databaseId,a=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",l=e._persistenceKey,new Mc(o,a,l,(c=s).host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,am(c.experimentalLongPollingOptions),c.useFetchStreams));var o,a,l,c;e._firestoreClient=new Jp(e._authCredentials,e._appCheckCredentials,e._queue,r),(null===(n=s.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=s.cache)||void 0===i?void 0:i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Im{static fromBase64String(e){try{return new Im(xc.fromBase64String(e))}catch(e){throw new Pl(Ll.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Im(xc.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}constructor(e){this._byteString=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{isEqual(e){return this._internalPath.isEqual(e._internalPath)}constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Pl(Ll.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Yl(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xm{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Hl(this._lat,e._lat)||Hl(this._long,e._long)}constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Pl(Ll.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Pl(Ll.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am=/^__.*__$/;class Nm{toMutation(e,t){return null!==this.fieldMask?new Nh(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ah(e,this.data,t,this.fieldTransforms)}constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}}class Lm{toMutation(e,t){return new Nh(e,this.data,this.fieldMask,t,this.fieldTransforms)}constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}}function Pm(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Cl()}}class Rm{get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Rm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.aa({path:n,la:!1});return i.fa(e),i}da(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.aa({path:n,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Qm(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(0===e.length)throw this._a("Document fields must not be empty");if(Pm(this.ca)&&Am.test(e))throw this._a('Document fields cannot begin and end with "__"')}constructor(e,t,n,i,s,r){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===s&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=r||[]}}class Om{ya(e,t,n,i=!1){return new Rm({ca:e,methodName:t,ga:n,path:Yl.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Cf(e)}}function Mm(e){const t=e._freezeSettings(),n=Cf(e._databaseId);return new Om(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Dm(e,t,n,i,s,r={}){const o=e.ya(r.merge||r.mergeFields?2:0,t,n,s);Gm("Data must be an object, but it was:",o,i);const a=Hm(i,o);let l,c;if(r.merge)l=new Sc(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const e=[];for(const i of r.mergeFields){const s=Wm(t,i,n);if(!o.contains(s))throw new Pl(Ll.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Ym(e,s)||e.push(s)}l=new Sc(e),c=o.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,c=o.fieldTransforms;return new Nm(new Jc(a),l,c)}class Fm extends xm{_toFieldTransform(e){if(2!==e.ca)throw 1===e.ca?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Fm}}function Um(e,t,n){return new Rm({ca:3,ga:t.settings.ga,methodName:e._methodName,la:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Vm extends xm{_toFieldTransform(e){const t=Um(this,e,!0),n=this.pa.map((e=>$m(e,t))),i=new dh(n);return new wh(e.path,i)}isEqual(e){return this===e}constructor(e,t){super(e),this.pa=t}}class Bm extends xm{_toFieldTransform(e){const t=Um(this,e,!0),n=this.pa.map((e=>$m(e,t))),i=new ph(n);return new wh(e.path,i)}isEqual(e){return this===e}constructor(e,t){super(e),this.pa=t}}function jm(e,t,n,i){const s=e.ya(1,t,n);Gm("Data must be an object, but it was:",s,i);const r=[],o=Jc.empty();vc(i,((e,i)=>{const a=Xm(t,e,n);i=le(i);const l=s.da(a);if(i instanceof Fm)r.push(a);else{const e=$m(i,l);null!=e&&(r.push(a),o.set(a,e))}}));const a=new Sc(r);return new Lm(o,a,s.fieldTransforms)}function zm(e,t,n,i,s,r){const o=e.ya(1,t,n),a=[Wm(t,i,n)],l=[s];if(r.length%2!=0)throw new Pl(Ll.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<r.length;e+=2)a.push(Wm(t,r[e])),l.push(r[e+1]);const c=[],u=Jc.empty();for(let e=a.length-1;e>=0;--e)if(!Ym(c,a[e])){const t=a[e];let n=l[e];n=le(n);const i=o.da(t);if(n instanceof Fm)c.push(t);else{const e=$m(n,i);null!=e&&(c.push(t),u.set(t,e))}}const h=new Sc(c);return new Lm(u,h,o.fieldTransforms)}function $m(e,t){if(qm(e=le(e)))return Gm("Unsupported field value:",t,e),Hm(e,t);if(e instanceof xm)return function(e,t){if(!Pm(t.ca))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&4!==t.ca)throw t._a("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const s of e){let e=$m(s,t.wa(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=le(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return ah(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Gl.fromDate(e);return{timestampValue:dd(t.serializer,n)}}if(e instanceof Gl){const n=new Gl(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:dd(t.serializer,n)}}if(e instanceof Cm)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Im)return{bytesValue:fd(t.serializer,e._byteString)};if(e instanceof gm){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:gd(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${hm(e)}`)}(e,t)}function Hm(e,t){const n={};return yc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):vc(e,((e,i)=>{const s=$m(i,t.ha(e));null!=s&&(n[e]=s)})),{mapValue:{fields:n}}}function qm(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Gl||e instanceof Cm||e instanceof Im||e instanceof gm||e instanceof xm)}function Gm(e,t,n){if(!qm(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){const i=hm(n);throw"an object"===i?t._a(e+" a custom object"):t._a(e+" "+i)}var i}function Wm(e,t,n){if((t=le(t))instanceof km)return t._internalPath;if("string"==typeof t)return Xm(e,t);throw Qm("Field path arguments must be of type string or ",e,!1,void 0,n)}const Km=new RegExp("[~\\*/\\[\\]]");function Xm(e,t,n){if(t.search(Km)>=0)throw Qm(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new km(...t.split("."))._internalPath}catch(i){throw Qm(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Qm(e,t,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new Pl(Ll.INVALID_ARGUMENT,a+e+l)}function Ym(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{get id(){return this._key.path.lastSegment()}get ref(){return new gm(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Zm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(eg("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}}class Zm extends Jm{data(){return super.data()}}function eg(e,t){return"string"==typeof t?Xm(e,t):t instanceof km?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Pl(Ll.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ng{convertValue(e,t="none"){switch(Uc(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Nc(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Lc(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Cl()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return vc(e,((e,i)=>{n[e]=this.convertValue(i,t)})),n}convertGeoPoint(e){return new Cm(Nc(e.latitude),Nc(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Rc(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Oc(e));default:return null}}convertTimestamp(e){const t=Ac(e);return new Gl(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Xl.fromString(e);Al(Dd(n));const i=new Dc(n.get(1),n.get(3)),s=new Jl(n.popFirst(5));return i.isEqual(t)||Il(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sg{isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}}class rg extends Jm{exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new og(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(eg("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}constructor(e,t,n,i,s,r){super(e,t,n,i,r),this._firestore=e,this._firestoreImpl=e,this.metadata=s}}class og extends rg{data(e={}){return super.data(e)}}class ag{get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new og(this._firestore,this._userDataWriter,n.key,n,new sg(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Pl(Ll.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const i=new og(e._firestore,e._userDataWriter,n.doc.key,n.doc,new sg(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const i=new og(e._firestore,e._userDataWriter,t.doc.key,t.doc,new sg(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,r=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),r=n.indexOf(t.doc.key)),{type:lg(t.type),doc:i,oldIndex:s,newIndex:r}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new sg(i.hasPendingWrites,i.fromCache),this.query=n}}function lg(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Cl()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cg(e){e=dm(e,gm);const t=dm(e.firestore,Tm);return om(_m(t),e._key).then((n=>pg(t,e,n)))}class ug extends ng{convertBytes(e){return new Im(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new gm(this.firestore,null,t)}constructor(e){super(),this.firestore=e}}function hg(e,t,n){e=dm(e,gm);const i=dm(e.firestore,Tm),s=ig(e.converter,t,n);return fg(i,[Dm(Mm(i),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,Eh.none())])}function dg(e,t,n,...i){e=dm(e,gm);const s=dm(e.firestore,Tm),r=Mm(s);let o;return o="string"==typeof(t=le(t))||t instanceof km?zm(r,"updateDoc",e._key,t,n,i):jm(r,"updateDoc",e._key,t),fg(s,[o.toMutation(e._key,Eh.exists(!0))])}function fg(e,t){return function(e,t){const n=new Rl;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const i=Kp(e);try{const e=await function(e,t){const n=Nl(e),i=Gl.now(),s=t.reduce(((e,t)=>e.add(t.key)),nh());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Wu(),l=nh();return n.Zi.getEntries(e,s).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((s=>{r=s;const o=[];for(const e of t){const t=xh(e,r.get(e.key).overlayedDocument);null!=t&&o.push(new Nh(e.key,t,Zc(t.value.mapValue),Eh.exists(!0)))}return n.mutationQueue.addMutationBatch(e,i,o,t)})).next((t=>{o=t;const i=t.applyToLocalDocumentSet(r,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:Qu(r)})))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.Tc[e.currentUser.toKey()];i||(i=new wc(Hl)),i=i.insert(t,n),e.Tc[e.currentUser.toKey()]=i}(i,e.batchId,n),await Hp(i,e.changes),await Yf(i.remoteStore)}catch(e){const t=hp(e,"Failed to persist write");n.reject(t)}}(await sm(e),t,n))),n.promise}(_m(e),t)}function pg(e,t,n){const i=n.docs.get(t._key),s=new ug(e);return new rg(e,s,t._key,i,new sg(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(...e){return new Vm("arrayUnion",e)}function gg(...e){return new Bm("arrayRemove",e)}!function(e,t=!0){El="9.22.2",$e(new ce("firestore",((e,{instanceIdentifier:n,options:i})=>{const s=e.getProvider("app").getImmediate(),r=new Tm(new Fl(e.getProvider("auth-internal")),new jl(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Pl(Ll.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Dc(e.options.projectId,t)}(s,n),s);return i=Object.assign({useFetchStreams:t},i),r._setSettings(i),r}),"PUBLIC").setMultipleInstances(!0)),Xe("@firebase/firestore","3.12.2",e),Xe("@firebase/firestore","3.12.2","esm2017")}();const vg=We({apiKey:"AIzaSyAv9FmtcpRb4rflw6K6IuqfaJrJWVCYfkw",authDomain:"bookshelf-2f40f.firebaseapp.com",databaseURL:"https://bookshelf-2f40f-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bookshelf-2f40f",storageBucket:"bookshelf-2f40f.appspot.com",messagingSenderId:"578193415348",appId:"1:578193415348:web:8b4047b41c95ecc1278be1",measurementId:"G-B0N26TBFD1"}),yg=function(e=Ke()){const t=He(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=He(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(ee(n.getOptions(),null!=t?t:{}))return e;ht(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Qi,persistence:[fi,Zn,ti]}),i=$("authTokenSyncURL");if(i){const e=(s=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Ji)return;const i=null==t?void 0:t.token;Zi!==i&&(Zi=i,await fetch(s,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){le(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){le(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var s;const r=B("auth");return r&&bn(n,`http://${r}`),n}(vg),wg=function(e,t){const n="string"==typeof e?e:t||"(default)",i=He("object"==typeof e?e:Ke(),"firestore").getImmediate({identifier:n});if(!i._initialized){const e=j("firestore");e&&mm(i,...e)}return i}(vg);let bg={},Eg={};function Tg(){const e={txtUserName:document.querySelector("#txtName"),txtEmail:document.querySelector("#txtEmail"),txtPsw:document.querySelector("#txtPsw")};return{email:e.txtEmail.value,password:e.txtPsw.value,userName:e.txtUserName?e.txtUserName.value:""}}async function _g(e){await dg(bg,{books:mg(e)})}async function Sg(e){await dg(bg,{books:gg(e)})}async function Ig(){const e=Tg(),{email:t,password:n,userName:i}=e,s=await Kn(yg,t,n);return await Qn(yg.currentUser,{displayName:i}),s}async function kg(){const e=Tg(),{email:t,password:n}=e;return await Xn(yg,t,n)}async function xg(){const e=await cg(bg);e.exists()?console.log("Document data:",e.data().books):(console.log("No such document!"),await hg(bg,{books:[]}))}var Cg,Ag,Ng;Cg=e=>{if(e){bg=wm(wg,"users",yg.currentUser.uid);const t=e.uid;console.log(t),setTimeout((()=>{v.greeting.textContent=`${e.displayName}`,v.greeting.style.display="flex"}),500),v.btnLogOut.style.display="flex",v.btnOpenLogInModal.style.display="none",console.log("signet in"),xg(),Eg=function(e,...t){var n,i,s;e=le(e);let r={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||Em(t[o])||(r=t[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Em(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(i=e.error)||void 0===i?void 0:i.bind(e),t[o+2]=null===(s=e.complete)||void 0===s?void 0:s.bind(e)}let l,c,u;if(e instanceof gm)c=dm(e.firestore,Tm),u=Nu(e._key.path),l={next:n=>{t[o]&&t[o](pg(c,e,n))},error:t[o+1],complete:t[o+2]};else{const n=dm(e,vm);c=dm(n.firestore,Tm),u=n._query;const i=new ug(c);l={next:e=>{t[o]&&t[o](new ag(c,i,n,e))},error:t[o+1],complete:t[o+2]},tg(e._query)}return function(e,t,n,i){const s=new Yp(i),r=new Tp(t,s,n);return e.asyncQueue.enqueueAndForget((async()=>vp(await rm(e),r))),()=>{s.Dc(),e.asyncQueue.enqueueAndForget((async()=>yp(await rm(e),r)))}}(_m(c),u,a,l)}(bg,(e=>{const t=e.metadata.hasPendingWrites?"Local":"Server";console.log(t," data: ",e.data())}))}else v.isAuthElements=document.querySelectorAll("[data-is-auth]"),console.log(v.isAuthElements),v.greeting.style.display="none",v.btnLogOut.style.display="none",v.btnOpenLogInModal.style.display="flex",console.log("not signet in")},le(yg).onAuthStateChanged(Cg,Ag,Ng),v.btnLogOut.addEventListener("click",(async function(e){var t;e.preventDefault(),Eg(),(t=yg,le(t).signOut()).then((()=>{console.log("Sign-out successful.")})).catch((e=>{console.log(e)}))}));var Lg;Lg=new URL(r("kyEFX").resolve("14R9o"),import.meta.url).toString();var Pg;Pg=new URL(r("kyEFX").resolve("5buYK"),import.meta.url).toString();var Rg;Rg=new URL(r("kyEFX").resolve("3NWVH"),import.meta.url).toString();var Og;Og=new URL(r("kyEFX").resolve("iBhy2"),import.meta.url).toString();var Mg;function Dg(){return{appleBooksIconPath:new URL(Lg).href,bookShopIconPath:new URL(Pg).href,amazonIconPath:new URL(Rg).href,emptyListStubImage:new URL(Og).href,svgTrashIcon:new URL(Mg),svgClose:new URL(Mg)}}Mg=new URL(r("kyEFX").resolve("aKCGF"),import.meta.url).toString();const{appleBooksIconPath:Fg,bookShopIconPath:Ug,amazonIconPath:Vg,svgTrashIcon:Bg}=Dg();function jg(e){document.body.style.overflow="hidden";let t=document.createElement("div");t.className="modal_background";let n=document.createElement("div");n.className="modal_body",t.append(n);let i=e.buy_links.map((({url:e,name:t})=>{let n;if("Amazon"===t)n=`${Vg}`;else if("Apple Books"===t)n=`${Fg}`;else{if("Bookshop"!==t)return;n=`${Ug}`}return`\n        <li class="shoplist-url-item">\n          <a class="shoplist_url" href="${e}" target="_blank" rel="noopener noreferrer nofollow" aria-label="${t} link">\n            <img class="modal_img" src="${n}" alt="${t} link" width="48px" height="15px" />\n          </a>\n        </li>\n    `})).join("");n.innerHTML=`\n        <div class="modal_container">\n            <img class="modal_image" src="${e.book_image}" alt="">\n            <ul>\n                <li>\n                  <div class="card_title">${e.title}</div></li>\n                <li>\n                  <div class="card_author">${e.author}</div></li>\n                <li>\n                  <div class="card_description">${e.description}</div></li>\n                <li>\n                  <div>\n                  <ul class="modal_links">${i}</ul></div></li>\n            </ul>\n        </div>\n        `;let s=document.createElement("button");function r(){t.remove(),s.removeEventListener("click",r),t.removeEventListener("click",r),document.removeEventListener("keydown",o),document.body.removeAttribute("style")}function o(e){"Escape"==e.key&&r()}s.className="close_btn",s.innerHTML=`<svg class="icon_close" width="24" height="24">\n  <use href="${Bg}#icon-close"></use></svg>`,s.addEventListener("click",r),t.addEventListener("click",r),n.onclick=function(e){e.stopPropagation()};let a=document.createElement("button");a.className="btn",a.type="button",a.setAttribute("data-book-id",e._id),a.setAttribute("data-is-auth","false"),n.append(s,a),n.insertAdjacentElement("afterbegin",s),n.append(a);let l=new g(e,a);a.onclick=()=>{l.handleBook(),console.log(a.getAttribute("data-action")),"toAdd"===a.getAttribute("data-action")?_g(e):"toRemove"===a.getAttribute("data-action")&&Sg(e)},document.addEventListener("keydown",o),document.body.append(t)}document.querySelector(".category-books-wrapper");const zg=document.querySelector(".books_container"),$g=document.querySelector(".static-btn"),Hg=document.querySelector(".best-sellers-loader"),qg=new m;async function Gg(e){try{Hg.style.display="block";const t=await qg.getBooksByCategory(e);if($g.classList.remove("accent"),zg.innerHTML="",0===t.length)return void alert(`Sorry, but no books on the selected category '${e}' were found. \n      Please choose another category.`);!function(){const e=nv.split(" "),t=`<span class='section-books-header-span'>${e[e.length-1]}</span>`,n=`\n    <h1 class="section-books-header">${e.slice(0,-1).join(" ")+" "+t}</h1>\n    <div>\n      <ul class="card_list category-list"></ul>\n    </div>\n  `;zg.insertAdjacentHTML("beforeend",n)}(),Hg.style.display="none",function(e){const t=document.querySelector(".category-list");t.innerHTML="";const n=e.map((e=>{const{title:t,book_image:n,author:i}=e;let s=document.createElement("li");s.classList.add("category-item"),s.onclick=function(){jg(e)},s.classList.add("book-card");let r=document.createElement("button");return r.className="quick_view",r.textContent="QUICK VIEW",s.innerHTML=`\n        <div class='card-wrapper book-card'>\n        <img class='book_image' src=${n} alt='${t} width='335' height='485'/>\n        <div class='book-info'>         \n        <p class='book_title'>${t}</p>\n        <p class='book_author'>${i}</p>\n        </div>\n        </div>\n        `,s.append(r),r.onclick=function(){jg(e)},s}));t.append(...n)}(t),document.querySelectorAll(".card-wrapper").forEach((e=>{e.addEventListener("click",(()=>{const t=t.map({book_uri:book_uri,buy_links:buy_links});console.log(e),jg(t)}))}))}catch(e){console.log(e)}}const Wg=document.querySelector(".best-sellers-loader"),Kg=new m;let Xg=document.querySelector(".books_container");async function Qg(){let e=await Kg.getTopBooks();Wg.style.display="none",function(){const e='<h1 class="section-books-header">\n  Best Sellers <span class="section-books-header section-books-header-span">Books</span>\n</h1>';Xg.insertAdjacentHTML("beforeend",e)}(),0!==e.length?e.forEach((e=>{let t=e.books.slice(0,5).map(Yg),n=document.createElement("div");n.className="book-group",n.innerHTML=`\n        <div class="book-group_title">${e.list_name}</div>\n    `;let i=document.createElement("div");i.className="book-card_list",i.append(...t);let s=document.createElement("button");s.className="btn-main",s.textContent="See More",n.append(i,s),Xg.append(n)})):alert("Sorry, but no books on the all categories were found. \n    Please choose another category.")}function Yg(e){let t=document.createElement("div");t.className="book-card";let n=document.createElement("button");var i;return n.className="quick_view",n.textContent="QUICK VIEW",t.innerHTML=`\n        ${i=e,i.book_image?`<img class="book_image" src="${i.book_image}" alt="${i.title}"></img>`:'<div class="empty_img"></div>'}\n        <div class="book-info">\n        <p class="book_title">${e.title}</p>\n        <p class="book_author">${e.author}</p>\n      </div>\n    `,t.append(n),t.onclick=function(){jg(e)},t}Qg();const Jg=!1,Zg=document.querySelectorAll(".btn-main").forEach((e=>{e.getAttribute("id");e.addEventListener("click",(function(){Jg=!0;const e=Gg();e.forEach((e=>e.books.slice(6,11).map(Yg))),Jg?(Zg.innerHTML="See less",e.classList.remove(isHidden)):(Zg.innerHTML="See more",e.classList.add(isHidden))}))})),ev=document.querySelector(".list-js");let tv,nv="";const iv=document.querySelector(".static-btn"),sv=document.querySelector(".books_container"),rv=new m,ov=document.querySelector(".categories-loader"),av=document.querySelector(".best-sellers-loader");function lv(){iv.classList.contains("accent")&&iv.classList.contains("static-btn")||(av.style.display="block",iv.classList.add("accent"),tv.forEach((e=>{e.classList.remove("accent")})),sv.innerHTML="",Qg(),iv.classList.contains("accent"))}function cv(e){"Escape"===e.code&&this.close()}!async function(){try{const e=await rv.getBookCategories();iv.classList.add("accent"),ov.style.display="none",function(e){const t=e.map((e=>`<li class='genres-item'><button type='button' class='genres-btn genres-btn-js'>${e.list_name}</button></li>`)).join("");ev.insertAdjacentHTML("beforeend",t)}(e),iv.addEventListener("click",lv),tv=document.querySelectorAll(".genres-btn-js"),tv.forEach((e=>{e.addEventListener("click",(()=>{e.classList.contains("accent")&&e.classList.contains("genres-btn-js")||function(e){nv=e.target.textContent,sv.innerHTML="",Gg(nv),tv.forEach((e=>{e.textContent!==nv&&e.classList.remove("accent"),e.textContent===nv&&e.classList.add("accent")}))}(event)}))}))}catch(e){console.log(e)}}();class uv extends Error{constructor(e,...t){super(e),this.args=t}}const hv=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,dv=/^[+-]?\d+$/,fv=/^[+-]?(\d+|\d*\.\d*)$/,pv=/^[\p{L}\p{M}]+$/u,mv=/^[\p{L}\p{M}\p{N}]+$/u,gv=/^[\p{L}\p{M}\p{N}_-]+$/u,vv=/^[\p{N}_-]+$/u;const yv=new class{set(e){this.lang=e}get(){return"object"==typeof this.lang?this.lang:{}}};function wv(e){return e.replace(/-./g,(e=>e[1].toUpperCase()))}function bv(e){return e instanceof HTMLInputElement?"checkbox"===e.type||"radio"===e.type?e.checked?"checked":"":e.value:e instanceof HTMLTextAreaElement?e.value:e instanceof HTMLSelectElement?Array.from(e.selectedOptions).map((e=>e.value)).join(","):""}function Ev(e,t){let[n,i=""]=e.split(":");if(function(e){return e.startsWith("x-")}(e)){if(!function(e){return e.includes(":")&&2===e.split(":").length}(e))throw new Error(`${e}: x-rules require an argument that is defined in the config.xRules object`);n=n.substring(2),i=String(null==t?void 0:t[i])||""}return{name:n,argsText:i,args:Tv(i)}}function Tv(e){return e?e.split(","):[]}function _v(e){return{throwError(t){if(e)throw new Error(t)}}}function Sv(e){return dv.test(e)||new uv("integer")}function Iv(e){return e.trim().length>0||new uv("required")}function kv(e,t){const[n,...i]=Tv(t);if(_v(!n).throwError("An argument must be provided"),"array"===n){const t=Tv(e);for(const e of t)if(!i.includes(e))return new uv("within");return!0}return i.includes(e)||new uv("within")}const xv={__proto__:null,accepted:function(e){return"checked"===e||new uv("accepted")},alpha:function(e){return pv.test(e)||new uv("alpha")},alphaNum:function(e){return mv.test(e)||new uv("alpha-num")},alphaNumDash:function(e){return gv.test(e)||new uv("alpha-num-dash")},between:function(e,t=""){const[n,i,s]=Tv(t);_v(!n).throwError("An argument must be provided"),_v(!i||!s).throwError("An argument must be provided");const r=Number(i),o=Number(s);return _v(Number.isNaN(r)||Number.isNaN(o)).throwError("The argument must be a number"),_v(r>o).throwError("min must be less than max"),_v(r===o).throwError("min and max must not be equal"),"number"===n?function(e,t,n){const i=Number(e);return""!==e&&!Number.isNaN(i)&&i>=t&&i<=n||new uv("between-number",String(t),String(n))}(e,r,o):function(e,t,n){return _v(t<0||n<0).throwError("The argument must be a positive number"),e.length>=t&&e.length<=n||new uv("between-length",String(t),String(n))}(e,r,o)},digits:function(e,t=""){return _v(""===t).throwError("An argument must be provided"),_v(!0!==Sv(t)||+t<1).throwError("The argument must be an integer"),!!new RegExp(`^-?[0-9]{${t}}$`).test(e)||new uv("digits",t)},endsWith:function(e,t=""){return _v(""===t).throwError("An argument must be provided"),e.endsWith(t)||new uv("ends-with",t)},email:function(e){return hv.test(e)||new uv("email")},min:function(e,t=""){const[n,i]=Tv(t);_v(!n).throwError("An argument must be provided"),_v(!i).throwError("An argument must be provided");const s=Number(i);return _v(Number.isNaN(s)).throwError("The argument must be a number"),"number"===n?function(e,t){const n=Number(e);return""!==e&&!Number.isNaN(n)&&n>=t||new uv("greater-equal",String(t))}(e,s):function(e,t){return _v(t<0).throwError("The argument must be a positive number"),e.length>=t||new uv("min-length",String(t))}(e,s)},integer:Sv,int:Sv,max:function(e,t=""){const[n,i]=Tv(t);_v(!n).throwError("An argument must be provided"),_v(!i).throwError("An argument must be provided");const s=Number(i);return _v(Number.isNaN(s)).throwError("The argument must be a number"),"number"===n?function(e,t){const n=Number(e);return""!==e&&!Number.isNaN(n)&&n<=t||new uv("less-equal",String(t))}(e,s):function(e,t){return _v(t<0).throwError("The argument must be a positive number"),e.length<=t||new uv("max-length",String(t))}(e,s)},number:function(e){return fv.test(e)||new uv("number")},numDash:function(e){return vv.test(e)||new uv("num-dash")},regex:function(e,t){return _v(!t).throwError("An argument must be provided"),_v(!1===(e=>{try{return new RegExp(e),!0}catch{return!1}})(t)).throwError("Invalid pattern provided"),(e=>{var t,n,i;const s=null!==(i=null===(t=e.match(/\/(.+)\/.*/))||void 0===t?void 0:t[1])&&void 0!==i?i:"";var r;const o=null!==(r=null===(n=e.match(/\/.+\/(.*)/))||void 0===n?void 0:n[1])&&void 0!==r?r:"";return new RegExp(s,o)})(t).test(e)||new uv("regex")},required:Iv,requiredIf:function(e,t=""){return!0!==Iv(t)||Iv(e)},size:function(e,t=""){const[n,i]=Tv(t);_v(!n).throwError("An argument must be provided"),_v(!i).throwError("An argument must be provided");const s=Number(i);return _v(Number.isNaN(s)).throwError("The argument must be a number"),"number"===n?function(e,t){const n=Number(e);return""!==e&&!Number.isNaN(n)&&n===t||new uv("equal-number",String(t))}(e,s):function(e,t){return _v(t<0).throwError("The argument must be a positive number"),e.length===t||new uv("equal-length",String(t))}(e,s)},startsWith:function(e,t=""){return _v(""===t).throwError("An argument must be provided"),e.startsWith(t)||new uv("starts-with",t)},within:kv,in:kv};class Cv{setError(e,t,n){let i=this.errorsList.find((t=>t[0].element===e));i||(i=[],this.errorsList.push(i));const s={message:function(e,...t){const n=yv.get();let i=e;return Object.prototype.hasOwnProperty.call(n,e)&&(i=n[e]),function(e,...t){return e.replace(/\$(\d)/g,((e,n)=>(null==t?void 0:t[n-1])||""))}(i,...t)}(n.message,...n.args),element:e,rule:t,cause:n.message,args:n.args};i.push(s)}get hasError(){return Object.keys(this.errorsList).length>0}get errors(){return this.errorsList}clearErrors(){this.errorsList=[]}constructor(){this.lang=yv.get(),this.errorsList=[]}}class Av{on(e,t){this.events[e]||(this.events[e]=[]);this.events[e].push(t)}off(e,t){if(void 0===this.events[e])return;const n=this.events[e],i=n.indexOf(t);-1!==i&&n.splice(i,1)}call(e,...t){if(void 0!==this.events[e]){this.events[e].forEach((e=>{e(...t)}))}}clear(){this.events={}}constructor(e={}){this.events={};Object.keys(e).forEach((t=>{"function"==typeof e[t]&&(this.events[t]=[],this.events[t].push(e[t]))}))}}const Nv={requiredIf:function(e,t,n,i,s){const{name:r,args:o}=Ev(e,s);if(0===o.length)return r;let a="";if(o.length>0){const e=document.getElementById(o[0]);null!==e&&(a=bv(e))}return o.splice(0,1,a),`${r}:${o.join(",")}`},between:Lv,size:Lv,min:Lv,max:Lv,in:Lv};function Lv(e,t,n,i,s){const{name:r,argsText:o}=Ev(e,s),a=t.indexOf(e),l=t.slice(0,a);let c="string";return l.includes("number")||l.includes("int")||l.includes("integer")?c="number":l.includes("array")&&(c="array"),`${r}:${c},${o}`}const Pv={renderErrors:!0,onFieldChangeValidationDelay:500};const Rv=class{validate(e,t=!0){this.events.call("validation:start",this.container);let n=!0,i="success";return void 0===e&&(e=this.container.querySelectorAll("[data-rules]")),e.length>0&&(n=this.validateFields(Array.from(e)),i=n?"success":"failed"),this.events.call("validation:end",this.container,n),t&&this.events.call(`validation:${i}`,this.container),n}on(e,t){this.events.on(e,t)}off(e,t){this.events.off(e,t)}validateFields(e){for(const n of e){var t;const e=null===(t=n.getAttribute("data-rules"))||void 0===t?void 0:t.split("|");if(e&&e.length>0){const t=bv(n),i=this.shouldStopOnFirstFailure(e),s=this.getComputedFieldRules(e,n);for(const e of s){const{name:s,argsText:r}=Ev(e,this.options.xRules),o=wv(s);if(this.isNullable(o)&&""===t)break;if(o in xv)try{const e=xv[o](t,r);if(e instanceof uv&&(this.validatorError.setError(n,s,e),i))break}catch(e){return console.error(new Error(`${s}: ${e.message}`)),!1}}}}return!this.validatorError.hasError}shouldStopOnFirstFailure(e){return e.includes("bail")}isNullable(e){return"nullable"===e}getComputedFieldRules(e,t){return e.map((n=>function(e,t,n,i,s){var r;const o=wv(Ev(e,s).name);return(null===(r=Nv[o])||void 0===r?void 0:r.call(Nv,e,t,n,i,s))||e}(n,e,t,this.container,this.options.xRules)))}triggerFieldErrorEvent(){this.validatorError.errors.forEach((e=>{0!==e.length&&this.events.call("field:error",this.container,e[0].element,e)}))}validateOnFieldChange(){let e;this.container.addEventListener("input",(t=>{window.clearTimeout(e);const n=this.options.onFieldChangeValidationDelay;e=window.setTimeout((()=>{const e=t.target;if(e.matches("[data-rules]")){!1===this.validate([e],!1)&&this.triggerFieldErrorEvent()}}),n)}))}setLanguage(e){yv.set(e)}constructor(e,t={}){if(null===e||!(e instanceof HTMLElement))throw new Error("Invalid container element");var n;this.options=Object.assign(Pv,t),this.validatorError=new Cv,this.events=new Av(this.options.on),this.container=e,yv.set(this.options.lang),this.options.renderErrors&&((n=this.events).on("field:error",((e,t,n)=>{n.reverse().forEach((e=>{const n=document.createElement("p");n.classList.add("validator-err"),n.innerHTML=e.message,t.parentNode&&t.parentNode.insertBefore(n,t.nextSibling)}))})),n.on("validation:start",(e=>{e.querySelectorAll(".validator-err").forEach((e=>{e.remove()}))}))),this.events.on("validation:start",(()=>this.validatorError.clearErrors())),this.events.on("validation:failed",(()=>this.triggerFieldErrorEvent())),t.onFieldChangeValidation&&this.validateOnFieldChange()}},Ov={accepted:"Please accept this field",alpha:"Please enter only alphabetic characters","alpha-num":"Please enter only alpha-numeric characters","alpha-num-dash":"Please enter only alpha-numeric characters, dashes, and underscores","between-length":"The value must have between $1 and $2 characters","between-number":"Please enter a number between $1 and $2",digits:"The value must be a $1-digits number",email:"Please enter a valid email address","ends-with":'The value must ends with "$1"',"equal-length":"The value must have $1 characters","equal-number":"The value must be equal to $1","greater-equal":"Please enter a number greater than or equal to $1",integer:"The value must be a valid integer","less-equal":"Please enter a number less than or equal to $1","max-length":"Max length is $1","min-length":"Min length is $1","num-dash":"Please enter numbers with dashes and underscores",number:"Please enter a valid number",regex:"The value doesn't match the pattern",required:"This field is required","starts-with":'The value must start with "$1"',within:"The value is incorrect"};var Mv,Dv,Fv={};function Uv(e){let t="";switch(e.code){case"auth/email-already-exists":case"auth/email-already-in-use":t="The provided email is already in use by an existing user. Each user must have a unique email.";break;case"auth/invalid-password":case"auth/wrong-password":t="Wrong password.";break;case"auth/user-not-found":t="There is no existing user with this Email.";break;default:t=`${e.code}`}return t}Mv=void 0!==n?n:"undefined"!=typeof window?window:Fv,Dv=function(e){if(void 0===e&&void 0===e.document)return!1;var t,n="Success",i="Failure",s="Warning",r="Info",o={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},a=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},l=function(t){return t||(t="head"),null!==e.document[t]||(a('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},c=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t&&"[object Object]"===Object.prototype.toString.call(n[i])?e[i]=c(e[i],n[i]):e[i]=n[i])};n<arguments.length;n++)i(arguments[n]);return e},u=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},h=0,d=function(a,u,d,p){if(!l("body"))return!1;t||f.Notify.init({});var m=c(!0,t,{});if("object"==typeof d&&!Array.isArray(d)||"object"==typeof p&&!Array.isArray(p)){var g={};"object"==typeof d?g=d:"object"==typeof p&&(g=p),t=c(!0,t,g)}var v,y,w=t[a.toLocaleLowerCase("en")];h++,"string"!=typeof u&&(u="Notiflix "+a),t.plainText&&(v=u,(y=e.document.createElement("div")).innerHTML=v,u=y.textContent||y.innerText||""),!t.plainText&&u.length>t.messageMaxLength&&(t=c(!0,t,{closeButton:!0,messageMaxLength:150}),u='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),u.length>t.messageMaxLength&&(u=u.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(w.fontAwesomeIconColor=w.background),t.cssAnimation||(t.cssAnimationDuration=0);var b=e.document.getElementById(o.wrapID)||e.document.createElement("div");if(b.id=o.wrapID,b.style.width=t.width,b.style.zIndex=t.zindex,b.style.opacity=t.opacity,"center-center"===t.position?(b.style.left=t.distance,b.style.top=t.distance,b.style.right=t.distance,b.style.bottom=t.distance,b.style.margin="auto",b.classList.add("nx-flex-center-center"),b.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",b.style.display="flex",b.style.flexWrap="wrap",b.style.flexDirection="column",b.style.justifyContent="center",b.style.alignItems="center",b.style.pointerEvents="none"):"center-top"===t.position?(b.style.left=t.distance,b.style.right=t.distance,b.style.top=t.distance,b.style.bottom="auto",b.style.margin="auto"):"center-bottom"===t.position?(b.style.left=t.distance,b.style.right=t.distance,b.style.bottom=t.distance,b.style.top="auto",b.style.margin="auto"):"right-bottom"===t.position?(b.style.right=t.distance,b.style.bottom=t.distance,b.style.top="auto",b.style.left="auto"):"left-top"===t.position?(b.style.left=t.distance,b.style.top=t.distance,b.style.right="auto",b.style.bottom="auto"):"left-bottom"===t.position?(b.style.left=t.distance,b.style.bottom=t.distance,b.style.top="auto",b.style.right="auto"):(b.style.right=t.distance,b.style.top=t.distance,b.style.left="auto",b.style.bottom="auto"),t.backOverlay){var E=e.document.getElementById(o.overlayID)||e.document.createElement("div");E.id=o.overlayID,E.style.width="100%",E.style.height="100%",E.style.position="fixed",E.style.zIndex=t.zindex-1,E.style.left=0,E.style.top=0,E.style.right=0,E.style.bottom=0,E.style.background=w.backOverlayColor||t.backOverlayColor,E.className=t.cssAnimation?"nx-with-animation":"",E.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(o.overlayID)||e.document.body.appendChild(E)}e.document.getElementById(o.wrapID)||e.document.body.appendChild(b);var T=e.document.createElement("div");T.id=t.ID+"-"+h,T.className=t.className+" "+w.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof d?"nx-with-close-button":"")+" "+("function"==typeof d?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),T.style.fontSize=t.fontSize,T.style.color=w.textColor,T.style.background=w.background,T.style.borderRadius=t.borderRadius,T.style.pointerEvents="all",t.rtl&&(T.setAttribute("dir","rtl"),T.classList.add("nx-rtl-on")),T.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',t.cssAnimation&&(T.style.animationDuration=t.cssAnimationDuration+"ms");var _="";if(t.closeButton&&"function"!=typeof d&&(_='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+w.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)T.innerHTML='<i style="color:'+w.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+w.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+u+"</span>"+(t.closeButton?_:"");else{var S="";a===n?S='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':a===i?S='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':a===s?S='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':a===r&&(S='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),T.innerHTML=S+'<span class="nx-message nx-with-icon">'+u+"</span>"+(t.closeButton?_:"")}else T.innerHTML='<span class="nx-message">'+u+"</span>"+(t.closeButton?_:"");if("left-bottom"===t.position||"right-bottom"===t.position){var I=e.document.getElementById(o.wrapID);I.insertBefore(T,I.firstChild)}else e.document.getElementById(o.wrapID).appendChild(T);var k=e.document.getElementById(T.id);if(k){var x,C,A=function(){k.classList.add("nx-remove");var t=e.document.getElementById(o.overlayID);t&&b.childElementCount<=0&&t.classList.add("nx-remove"),clearTimeout(x)},N=function(){if(k&&null!==k.parentNode&&k.parentNode.removeChild(k),b.childElementCount<=0&&null!==b.parentNode){b.parentNode.removeChild(b);var t=e.document.getElementById(o.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(C)};if(t.closeButton&&"function"!=typeof d&&e.document.getElementById(T.id).querySelector("span.nx-close-button").addEventListener("click",(function(){A();var e=setTimeout((function(){N(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof d||t.clickToClose)&&k.addEventListener("click",(function(){"function"==typeof d&&d(),A();var e=setTimeout((function(){N(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof d){var L=function(){x=setTimeout((function(){A()}),t.timeout),C=setTimeout((function(){N()}),t.timeout+t.cssAnimationDuration)};L(),t.pauseOnHover&&(k.addEventListener("mouseenter",(function(){k.classList.add("nx-paused"),clearTimeout(x),clearTimeout(C)})),k.addEventListener("mouseleave",(function(){k.classList.remove("nx-paused"),L()})))}}if(t.showOnlyTheLastOne&&h>0)for(var P=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+h+"])"),R=0;R<P.length;R++){var O=P[R];null!==O.parentNode&&O.parentNode.removeChild(O)}t=c(!0,t,m)},f={Notify:{init:function(n){t=c(!0,o,n),function(t,n){if(!l("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var i=e.document.createElement("style");i.id=n,i.innerHTML=t(),e.document.head.appendChild(i)}}(u,"NotiflixNotifyInternalCSS")},merge:function(e){if(!t)return a("You have to initialize the Notify module before call Merge function."),!1;t=c(!0,t,e)},success:function(e,t,i){d(n,e,t,i)},failure:function(e,t,n){d(i,e,t,n)},warning:function(e,t,n){d(s,e,t,n)},info:function(e,t,n){d(r,e,t,n)}}};return"object"==typeof e.Notiflix?c(!0,e.Notiflix,{Notify:f.Notify}):{Notify:f.Notify}},"function"==typeof define&&define.amd?define([],(function(){return Dv(Mv)})):"object"==typeof Fv?Fv=Dv(Mv):Mv.Notiflix=Dv(Mv);let Vv={};function Bv(){v.modalForm=document.querySelector(".form");const{modalForm:e}=v;Vv=new Rv(e,{lang:Ov,xRules:{firstCapital:/[A-Z][a-z]/,password:/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,10}/},on:{"validation:start":e=>{e.querySelector("#txtName")?(e.querySelector("#txtName").style.borderColor="#111111",e.querySelector("#txtEmail").style.borderColor="#111111",e.querySelector("#txtPsw").style.borderColor="#111111"):(e.querySelector("#txtEmail").style.borderColor="#111111",e.querySelector("#txtPsw").style.borderColor="#111111")},"validation:failed":()=>{},"field:error":(e,t,n)=>{console.log(e.name),n.forEach((t=>{"signUpForm"===e.name?(t.element&&"userName"===t.element.name&&(t.element.style.borderColor="red",t.message='Please enter a valid username! Ex. "John"'),t.element.name,"psw"===t.element.name&&(t.message="Please enter a valid password! Password length from 6 to 10 characters, consists of the following - lowercase (a-z) and uppercase (A-Z).")):"logInForm"===e.name&&("email"===t.element.name&&(t.message="Required"),"psw"===t.element.name&&(console.log(t),t.message="Required")),"email"===t.element.name&&(t.element.style.borderColor="red"),"psw"===t.element.name&&(t.element.style.borderColor="red")}))},"validation:success":()=>{Hv?Ig().then((e=>{Gv()})).catch((e=>{Fv.Notify.failure(Uv(e))})):kg().then((e=>{Gv()})).catch((e=>{Fv.Notify.failure(Uv(e))}))}}}),e.addEventListener("submit",jv)}function jv(e){e.preventDefault(),Vv.validate()}var zv={};zv=function e(t,n,i){function s(o,a){if(!n[o]){if(!t[o]){var l=void 0;if(!a&&l)return l(o,!0);if(r)return r(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[o]={exports:{}};t[o][0].call(u.exports,(function(e){return s(t[o][1][e]||e)}),u,u.exports,e,t,n,i)}return n[o].exports}for(var r=void 0,o=0;o<i.length;o++)s(i[o]);return s}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},s=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},r=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=r,n.create=function(e,t){var n=function(e,t){var n=i('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),r=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return r.appendChild(e)}));var o=s(r,"IMG"),a=s(r,"VIDEO"),l=s(r,"IFRAME");return!0===o&&n.classList.add("basicLightbox--img"),!0===a&&n.classList.add("basicLightbox--video"),!0===l&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(i(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),o=function(e){return!1!==t.onClose(a)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===r(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(a)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&o()}));var a={element:function(){return n},visible:function(){return r(n)},show:function(e){return!1!==t.onShow(a)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(a)}))},close:o};return a}},{}]},{},[1])(1);let $v={},Hv=!1;const qv={handler:null,onShow(e){this.handler=cv.bind(e),document.addEventListener("keydown",this.handler),document.addEventListener("keydown",this.handler)},onClose(){document.removeEventListener("keydown",this.handler),v.closeBtn.removeEventListener("click",Gv)}};function Gv(){$v.close()}function Wv(e){const t=e.target.classList.value;t.includes("js-sign-up-btn")?(v.form.setAttribute("name","signUpForm"),v.form.innerHTML='\n        <div class="labels-wrapper">\n          <label>\n            <input\n              class="input-field"\n              id="txtName"\n              type="text"\n              placeholder="Name"\n              name="userName"\n              title="Example &quot;John&quot;"\n              data-rules="bail|required|alpha|between:2,32|x-regex:firstCapital"\n          /></label>\n          <label>\n            <input\n              class="input-field"\n              id="txtEmail"\n              type="text"\n              placeholder="Email"\n              name="email"\n              data-rules="bail|required|email"\n          /></label>\n\n          <label>\n            <input\n              class="input-field"\n              id="txtPsw"\n              type="password"\n              placeholder="Password"\n              name="psw"\n              title="Password length from 6 to 10 characters, consists of the following - lowercase (a-z) and uppercase (A-Z)."\n              data-rules="bail|required|x-regex:password"\n          /></label>\n        </div>\n\n        <button class="modal__btn modal__btn-primary" id="btnSignup" type="submit">\n          Sign-up\n        </button>\n      ',e.target.classList.add("accent"),e.target.nextElementSibling.classList.remove("accent"),Hv=!0):t.includes("js-sign-in-btn")&&(v.form.setAttribute("name","logInForm"),v.form.innerHTML='\n        <div class="labels-wrapper">\n          <label>\n            <input\n              class="input-field"\n              id="txtEmail"\n              type="text"\n              placeholder="Email"\n              name="email"\n              data-rules="bail|required"\n          /></label>\n\n          <label>\n            <input\n              class="input-field"\n              id="txtPsw"\n              type="password"\n              placeholder="Password"\n              name="psw"\n              title="Password length from 6 to 10 characters, consists of the following - lowercase (a-z) and uppercase (A-Z)."\n              data-rules="bail|required"\n          /></label>\n        </div>\n\n        <button class="modal__btn modal__btn-primary" id="btnSignin" type="submit">\n          Sign-in\n        </button>\n      ',e.target.classList.add("accent"),e.target.previousElementSibling.classList.remove("accent"),Hv=!1)}v.btnOpenLogInModal.addEventListener("click",(function(e){Hv=!1,$v=zv.create('<div class="modal_body">\n      <button class="close_btn" aria-label="Close modal">X</button>\n\n      <form class="form" name="logInForm">\n        <div class="labels-wrapper">\n          <label>\n            <input\n              class="input-field"\n              id="txtEmail"\n              type="text"\n              placeholder="Email"\n              name="email"\n              data-rules="bail|required|email"\n          /></label>\n\n          <label>\n            <input\n              class="input-field"\n              id="txtPsw"\n              type="password"\n              placeholder="Password"\n              name="psw"\n              title="Password length from 6 to 10 characters, consists of the following - lowercase (a-z) and uppercase (A-Z)."\n              data-rules="bail|required"\n          /></label>\n        </div>\n\n        <button class="modal__btn modal__btn-primary" id="btnSignin" type="submit">\n          Sign-in\n        </button>\n      </form>\n\n      <div class="switch-modal-btns">\n  <button class="modal__btn js-sign-up-btn" aria-label="Switch to sign up">\n    sign up\n  </button>\n  <button class="modal__btn accent js-sign-in-btn" aria-label="Switch to sign in">\n    sign in\n  </button>\n</div>\n    </div>',qv),$v.show((()=>{Bv(),v.closeBtn=document.querySelector(".close_btn"),v.switchModalBtns=document.querySelector(".switch-modal-btns"),v.form=document.querySelector(".form"),v.closeBtn.addEventListener("click",Gv),v.switchModalBtns.addEventListener("click",Wv)}))}));const Kv=()=>{const e={scrollProgress:document.querySelector(".progress"),progressValue:document.querySelector(".progress-value"),pos:document.documentElement.scrollTop},t=document.documentElement.scrollHeight-document.documentElement.clientHeight;Math.round(100*e.pos/t);e.pos>100?e.scrollProgress.style.display="grid":e.scrollProgress.style.display="none",e.scrollProgress.addEventListener("click",(()=>{document.documentElement.scrollTop=0}))};window.onscroll=Kv,window.onload=Kv;var Xv;Xv=new URL(r("kyEFX").resolve("l01RG"),import.meta.url).toString();var Qv;Qv=new URL(r("kyEFX").resolve("kqemy"),import.meta.url).toString();var Yv;Yv=new URL(r("kyEFX").resolve("36zgu"),import.meta.url).toString();var Jv;Jv=new URL(r("kyEFX").resolve("hVrkw"),import.meta.url).toString();var Zv;Zv=new URL(r("kyEFX").resolve("7puOq"),import.meta.url).toString();var ey;ey=new URL(r("kyEFX").resolve("1bXYs"),import.meta.url).toString();var ty;ty=new URL(r("kyEFX").resolve("9SFQK"),import.meta.url).toString();var ny;ny=new URL(r("kyEFX").resolve("9G1BH"),import.meta.url).toString();var iy;iy=new URL(r("kyEFX").resolve("eFJjp"),import.meta.url).toString();var sy;sy=new URL(r("kyEFX").resolve("bjhm6"),import.meta.url).toString();var ry;ry=new URL(r("kyEFX").resolve("ljdSm"),import.meta.url).toString();var oy;oy=new URL(r("kyEFX").resolve("efbls"),import.meta.url).toString();var ay;ay=new URL(r("kyEFX").resolve("6pnsS"),import.meta.url).toString();var ly;ly=new URL(r("kyEFX").resolve("1Ilg8"),import.meta.url).toString();var cy;cy=new URL(r("kyEFX").resolve("6rNIT"),import.meta.url).toString();var uy;uy=new URL(r("kyEFX").resolve("cKshg"),import.meta.url).toString();var hy;hy=new URL(r("kyEFX").resolve("6t3Gk"),import.meta.url).toString();var dy;dy=new URL(r("kyEFX").resolve("eks2N"),import.meta.url).toString();const fy=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:{x1:new URL(Xv).href,x2:new URL(Qv).href}},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:{x1:new URL(Yv).href,x2:new URL(Jv).href}},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:{x1:new URL(Zv).href,x2:new URL(ey).href}},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:{x1:new URL(ty).href,x2:new URL(ny).href}},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:{x1:new URL(iy).href,x2:new URL(sy).href}},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:{x1:new URL(ry).href,x2:new URL(oy).href}},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:{x1:new URL(ay).href,x2:new URL(ly).href}},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:{x1:new URL(cy).href,x2:new URL(uy).href}},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:{x1:new URL(hy).href,x2:new URL(dy).href}}];function py(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function my(e={},t={}){Object.keys(t).forEach((n=>{void 0===e[n]?e[n]=t[n]:py(t[n])&&py(e[n])&&Object.keys(t[n]).length>0&&my(e[n],t[n])}))}const gy={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function vy(){const e="undefined"!=typeof document?document:{};return my(e,gy),e}const yy={document:gy,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function wy(){const e="undefined"!=typeof window?window:{};return my(e,yy),e}function by(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}function Ey(e,t=0){return setTimeout(e,t)}function Ty(){return Date.now()}function _y(e,t="x"){const n=wy();let i,s,r;const o=function(e){const t=wy();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}(e);return n.WebKitCSSMatrix?(s=o.transform||o.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map((e=>e.replace(",","."))).join(", ")),r=new n.WebKitCSSMatrix("none"===s?"":s)):(r=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=r.toString().split(",")),"x"===t&&(s=n.WebKitCSSMatrix?r.m41:16===i.length?parseFloat(i[12]):parseFloat(i[4])),"y"===t&&(s=n.WebKitCSSMatrix?r.m42:16===i.length?parseFloat(i[13]):parseFloat(i[5])),s||0}function Sy(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function Iy(...e){const t=Object(e[0]),n=["__proto__","constructor","prototype"];for(let s=1;s<e.length;s+=1){const r=e[s];if(null!=r&&(i=r,!("undefined"!=typeof window&&void 0!==window.HTMLElement?i instanceof HTMLElement:i&&(1===i.nodeType||11===i.nodeType)))){const e=Object.keys(Object(r)).filter((e=>n.indexOf(e)<0));for(let n=0,i=e.length;n<i;n+=1){const i=e[n],s=Object.getOwnPropertyDescriptor(r,i);void 0!==s&&s.enumerable&&(Sy(t[i])&&Sy(r[i])?r[i].__swiper__?t[i]=r[i]:Iy(t[i],r[i]):!Sy(t[i])&&Sy(r[i])?(t[i]={},r[i].__swiper__?t[i]=r[i]:Iy(t[i],r[i])):t[i]=r[i])}}}var i;return t}function ky(e,t,n){e.style.setProperty(t,n)}function xy({swiper:e,targetPosition:t,side:n}){const i=wy(),s=-e.translate;let r,o=null;const a=e.params.speed;e.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(e.cssModeFrameID);const l=t>s?"next":"prev",c=(e,t)=>"next"===l&&e>=t||"prev"===l&&e<=t,u=()=>{r=(new Date).getTime(),null===o&&(o=r);const l=Math.max(Math.min((r-o)/a,1),0),h=.5-Math.cos(l*Math.PI)/2;let d=s+h*(t-s);if(c(d,t)&&(d=t),e.wrapperEl.scrollTo({[n]:d}),c(d,t))return e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout((()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:d})})),void i.cancelAnimationFrame(e.cssModeFrameID);e.cssModeFrameID=i.requestAnimationFrame(u)};u()}function Cy(e,t=""){return[...e.children].filter((e=>e.matches(t)))}function Ay(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:[t]),n}function Ny(e,t){const n=[];for(;e.previousElementSibling;){const i=e.previousElementSibling;t?i.matches(t)&&n.push(i):n.push(i),e=i}return n}function Ly(e,t){const n=[];for(;e.nextElementSibling;){const i=e.nextElementSibling;t?i.matches(t)&&n.push(i):n.push(i),e=i}return n}function Py(e,t){return wy().getComputedStyle(e,null).getPropertyValue(t)}function Ry(e){let t,n=e;if(n){for(t=0;null!==(n=n.previousSibling);)1===n.nodeType&&(t+=1);return t}}function Oy(e,t){const n=[];let i=e.parentElement;for(;i;)t?i.matches(t)&&n.push(i):n.push(i),i=i.parentElement;return n}function My(e,t,n){const i=wy();return n?e["width"===t?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-left":"margin-bottom")):e.offsetWidth}let Dy,Fy,Uy;function Vy(){return Dy||(Dy=function(){const e=wy(),t=vy();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}()),Dy}function By(e={}){return Fy||(Fy=function({userAgent:e}={}){const t=Vy(),n=wy(),i=n.navigator.platform,s=e||n.navigator.userAgent,r={ios:!1,android:!1},o=n.screen.width,a=n.screen.height,l=s.match(/(Android);?[\s\/]+([\d.]+)?/);let c=s.match(/(iPad).*OS\s([\d_]+)/);const u=s.match(/(iPod)(.*OS\s([\d_]+))?/),h=!c&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),d="Win32"===i;let f="MacIntel"===i;return!c&&f&&t.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${o}x${a}`)>=0&&(c=s.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),f=!1),l&&!d&&(r.os="android",r.android=!0),(c||h||u)&&(r.os="ios",r.ios=!0),r}(e)),Fy}function jy(){return Uy||(Uy=function(){const e=wy();let t=!1;function n(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}if(n()){const n=String(e.navigator.userAgent);if(n.includes("Version/")){const[e,i]=n.split("Version/")[1].split(" ")[0].split(".").map((e=>Number(e)));t=e<16||16===e&&i<2}}return{isSafari:t||n(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),Uy}const zy=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=t.closest(e.isElement?"swiper-slide":`.${e.params.slideClass}`);if(n){const t=n.querySelector(`.${e.params.lazyPreloaderClass}`);t&&t.remove()}},$y=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Hy=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const i="auto"===e.params.slidesPerView?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),s=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const n=s,r=[n-t];return r.push(...Array.from({length:t}).map(((e,t)=>n+i+t))),void e.slides.forEach(((t,n)=>{r.includes(t.column)&&$y(e,n)}))}const r=s+i-1;if(e.params.rewind||e.params.loop)for(let i=s-t;i<=r+t;i+=1){const t=(i%n+n)%n;(t<s||t>r)&&$y(e,t)}else for(let i=Math.max(s-t,0);i<=Math.min(r+t,n-1);i+=1)i!==s&&(i>r||i<s)&&$y(e,i)};function qy({swiper:e,runCallbacks:t,direction:n,step:i}){const{activeIndex:s,previousIndex:r}=e;let o=n;if(o||(o=s>r?"next":s<r?"prev":"reset"),e.emit(`transition${i}`),t&&s!==r){if("reset"===o)return void e.emit(`slideResetTransition${i}`);e.emit(`slideChangeTransition${i}`),"next"===o?e.emit(`slideNextTransition${i}`):e.emit(`slidePrevTransition${i}`)}}function Gy(e){const t=this,n=vy(),i=wy(),s=t.touchEventsData;s.evCache.push(e);const{params:r,touches:o,enabled:a}=t;if(!a)return;if(!r.simulateTouch&&"mouse"===e.pointerType)return;if(t.animating&&r.preventInteractionOnTransition)return;!t.animating&&r.cssMode&&r.loop&&t.loopFix();let l=e;l.originalEvent&&(l=l.originalEvent);let c=l.target;if("wrapper"===r.touchEventsTarget&&!t.wrapperEl.contains(c))return;if("which"in l&&3===l.which)return;if("button"in l&&l.button>0)return;if(s.isTouched&&s.isMoved)return;const u=!!r.noSwipingClass&&""!==r.noSwipingClass,h=e.composedPath?e.composedPath():e.path;u&&l.target&&l.target.shadowRoot&&h&&(c=h[0]);const d=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,f=!(!l.target||!l.target.shadowRoot);if(r.noSwiping&&(f?function(e,t=this){return function t(n){if(!n||n===vy()||n===wy())return null;n.assignedSlot&&(n=n.assignedSlot);const i=n.closest(e);return i||n.getRootNode?i||t(n.getRootNode().host):null}(t)}(d,c):c.closest(d)))return void(t.allowClick=!0);if(r.swipeHandler&&!c.closest(r.swipeHandler))return;o.currentX=l.pageX,o.currentY=l.pageY;const p=o.currentX,m=o.currentY,g=r.edgeSwipeDetection||r.iOSEdgeSwipeDetection,v=r.edgeSwipeThreshold||r.iOSEdgeSwipeThreshold;if(g&&(p<=v||p>=i.innerWidth-v)){if("prevent"!==g)return;e.preventDefault()}Object.assign(s,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=p,o.startY=m,s.touchStartTime=Ty(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,r.threshold>0&&(s.allowThresholdMove=!1);let y=!0;c.matches(s.focusableElements)&&(y=!1,"SELECT"===c.nodeName&&(s.isTouched=!1)),n.activeElement&&n.activeElement.matches(s.focusableElements)&&n.activeElement!==c&&n.activeElement.blur();const w=y&&t.allowTouchMove&&r.touchStartPreventDefault;!r.touchStartForcePreventDefault&&!w||c.isContentEditable||l.preventDefault(),r.freeMode&&r.freeMode.enabled&&t.freeMode&&t.animating&&!r.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",l)}function Wy(e){const t=vy(),n=this,i=n.touchEventsData,{params:s,touches:r,rtlTranslate:o,enabled:a}=n;if(!a)return;if(!s.simulateTouch&&"mouse"===e.pointerType)return;let l=e;if(l.originalEvent&&(l=l.originalEvent),!i.isTouched)return void(i.startMoving&&i.isScrolling&&n.emit("touchMoveOpposite",l));const c=i.evCache.findIndex((e=>e.pointerId===l.pointerId));c>=0&&(i.evCache[c]=l);const u=i.evCache.length>1?i.evCache[0]:l,h=u.pageX,d=u.pageY;if(l.preventedByNestedSwiper)return r.startX=h,void(r.startY=d);if(!n.allowTouchMove)return l.target.matches(i.focusableElements)||(n.allowClick=!1),void(i.isTouched&&(Object.assign(r,{startX:h,startY:d,prevX:n.touches.currentX,prevY:n.touches.currentY,currentX:h,currentY:d}),i.touchStartTime=Ty()));if(s.touchReleaseOnEdges&&!s.loop)if(n.isVertical()){if(d<r.startY&&n.translate<=n.maxTranslate()||d>r.startY&&n.translate>=n.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(h<r.startX&&n.translate<=n.maxTranslate()||h>r.startX&&n.translate>=n.minTranslate())return;if(t.activeElement&&l.target===t.activeElement&&l.target.matches(i.focusableElements))return i.isMoved=!0,void(n.allowClick=!1);if(i.allowTouchCallbacks&&n.emit("touchMove",l),l.targetTouches&&l.targetTouches.length>1)return;r.currentX=h,r.currentY=d;const f=r.currentX-r.startX,p=r.currentY-r.startY;if(n.params.threshold&&Math.sqrt(f**2+p**2)<n.params.threshold)return;if(void 0===i.isScrolling){let e;n.isHorizontal()&&r.currentY===r.startY||n.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:f*f+p*p>=25&&(e=180*Math.atan2(Math.abs(p),Math.abs(f))/Math.PI,i.isScrolling=n.isHorizontal()?e>s.touchAngle:90-e>s.touchAngle)}if(i.isScrolling&&n.emit("touchMoveOpposite",l),void 0===i.startMoving&&(r.currentX===r.startX&&r.currentY===r.startY||(i.startMoving=!0)),i.isScrolling||n.zoom&&n.params.zoom&&n.params.zoom.enabled&&i.evCache.length>1)return void(i.isTouched=!1);if(!i.startMoving)return;n.allowClick=!1,!s.cssMode&&l.cancelable&&l.preventDefault(),s.touchMoveStopPropagation&&!s.nested&&l.stopPropagation();let m=n.isHorizontal()?f:p,g=n.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;s.oneWayMovement&&(m=Math.abs(m)*(o?1:-1),g=Math.abs(g)*(o?1:-1)),r.diff=m,m*=s.touchRatio,o&&(m=-m,g=-g);const v=n.touchesDirection;n.swipeDirection=m>0?"prev":"next",n.touchesDirection=g>0?"prev":"next";const y=n.params.loop&&!s.cssMode;if(!i.isMoved){if(y&&n.loopFix({direction:n.swipeDirection}),i.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(e)}i.allowMomentumBounce=!1,!s.grabCursor||!0!==n.allowSlideNext&&!0!==n.allowSlidePrev||n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let w;i.isMoved&&v!==n.touchesDirection&&y&&Math.abs(m)>=1&&(n.loopFix({direction:n.swipeDirection,setTranslate:!0}),w=!0),n.emit("sliderMove",l),i.isMoved=!0,i.currentTranslate=m+i.startTranslate;let b=!0,E=s.resistanceRatio;if(s.touchReleaseOnEdges&&(E=0),m>0?(y&&!w&&i.currentTranslate>(s.centeredSlides?n.minTranslate()-n.size/2:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>n.minTranslate()&&(b=!1,s.resistance&&(i.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+i.startTranslate+m)**E))):m<0&&(y&&!w&&i.currentTranslate<(s.centeredSlides?n.maxTranslate()+n.size/2:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-("auto"===s.slidesPerView?n.slidesPerViewDynamic():Math.ceil(parseFloat(s.slidesPerView,10)))}),i.currentTranslate<n.maxTranslate()&&(b=!1,s.resistance&&(i.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-i.startTranslate-m)**E))),b&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&"next"===n.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!n.allowSlidePrev&&"prev"===n.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),n.allowSlidePrev||n.allowSlideNext||(i.currentTranslate=i.startTranslate),s.threshold>0){if(!(Math.abs(m)>s.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,void(r.diff=n.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY)}s.followFinger&&!s.cssMode&&((s.freeMode&&s.freeMode.enabled&&n.freeMode||s.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),s.freeMode&&s.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(i.currentTranslate),n.setTranslate(i.currentTranslate))}function Ky(e){const t=this,n=t.touchEventsData,i=n.evCache.findIndex((t=>t.pointerId===e.pointerId));if(i>=0&&n.evCache.splice(i,1),["pointercancel","pointerout","pointerleave"].includes(e.type)){if(!("pointercancel"===e.type&&(t.browser.isSafari||t.browser.isWebView)))return}const{params:s,touches:r,rtlTranslate:o,slidesGrid:a,enabled:l}=t;if(!l)return;if(!s.simulateTouch&&"mouse"===e.pointerType)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),n.allowTouchCallbacks&&t.emit("touchEnd",c),n.allowTouchCallbacks=!1,!n.isTouched)return n.isMoved&&s.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,void(n.startMoving=!1);s.grabCursor&&n.isMoved&&n.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const u=Ty(),h=u-n.touchStartTime;if(t.allowClick){const e=c.path||c.composedPath&&c.composedPath();t.updateClickedSlide(e&&e[0]||c.target),t.emit("tap click",c),h<300&&u-n.lastClickTime<300&&t.emit("doubleTap doubleClick",c)}if(n.lastClickTime=Ty(),Ey((()=>{t.destroyed||(t.allowClick=!0)})),!n.isTouched||!n.isMoved||!t.swipeDirection||0===r.diff||n.currentTranslate===n.startTranslate)return n.isTouched=!1,n.isMoved=!1,void(n.startMoving=!1);let d;if(n.isTouched=!1,n.isMoved=!1,n.startMoving=!1,d=s.followFinger?o?t.translate:-t.translate:-n.currentTranslate,s.cssMode)return;if(s.freeMode&&s.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:d});let f=0,p=t.slidesSizesGrid[0];for(let e=0;e<a.length;e+=e<s.slidesPerGroupSkip?1:s.slidesPerGroup){const t=e<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;void 0!==a[e+t]?d>=a[e]&&d<a[e+t]&&(f=e,p=a[e+t]-a[e]):d>=a[e]&&(f=e,p=a[a.length-1]-a[a.length-2])}let m=null,g=null;s.rewind&&(t.isBeginning?g=s.virtual&&s.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(m=0));const v=(d-a[f])/p,y=f<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(h>s.longSwipesMs){if(!s.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(v>=s.longSwipesRatio?t.slideTo(s.rewind&&t.isEnd?m:f+y):t.slideTo(f)),"prev"===t.swipeDirection&&(v>1-s.longSwipesRatio?t.slideTo(f+y):null!==g&&v<0&&Math.abs(v)>s.longSwipesRatio?t.slideTo(g):t.slideTo(f))}else{if(!s.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(c.target===t.navigation.nextEl||c.target===t.navigation.prevEl)?c.target===t.navigation.nextEl?t.slideTo(f+y):t.slideTo(f):("next"===t.swipeDirection&&t.slideTo(null!==m?m:f+y),"prev"===t.swipeDirection&&t.slideTo(null!==g?g:f))}}function Xy(){const e=this,{params:t,el:n}=e;if(n&&0===n.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:s,snapGrid:r}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const a=o&&t.loop;!("auto"===t.slidesPerView||t.slidesPerView>1)||!e.isEnd||e.isBeginning||e.params.centeredSlides||a?e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0):e.slideTo(e.slides.length-1,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout((()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()}),500)),e.allowSlidePrev=s,e.allowSlideNext=i,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function Qy(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function Yy(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:i}=e;if(!i)return;let s;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const r=e.maxTranslate()-e.minTranslate();s=0===r?0:(e.translate-e.minTranslate())/r,s!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function Jy(e){const t=this;zy(t,e.target),t.params.cssMode||"auto"!==t.params.slidesPerView&&!t.params.autoHeight||t.update()}let Zy=!1;function ew(){}const tw=(e,t)=>{const n=vy(),{params:i,el:s,wrapperEl:r,device:o}=e,a=!!i.nested,l="on"===t?"addEventListener":"removeEventListener",c=t;s[l]("pointerdown",e.onTouchStart,{passive:!1}),n[l]("pointermove",e.onTouchMove,{passive:!1,capture:a}),n[l]("pointerup",e.onTouchEnd,{passive:!0}),n[l]("pointercancel",e.onTouchEnd,{passive:!0}),n[l]("pointerout",e.onTouchEnd,{passive:!0}),n[l]("pointerleave",e.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&s[l]("click",e.onClick,!0),i.cssMode&&r[l]("scroll",e.onScroll),i.updateOnWindowResize?e[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Xy,!0):e[c]("observerUpdate",Xy,!0),s[l]("load",e.onLoad,{capture:!0})};const nw=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var iw={setBreakpoint:function(){const e=this,{realIndex:t,initialized:n,params:i,el:s}=e,r=i.breakpoints;if(!r||r&&0===Object.keys(r).length)return;const o=e.getBreakpoint(r,e.params.breakpointsBase,e.el);if(!o||e.currentBreakpoint===o)return;const a=(o in r?r[o]:void 0)||e.originalParams,l=nw(e,i),c=nw(e,a),u=i.enabled;l&&!c?(s.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!l&&c&&(s.classList.add(`${i.containerModifierClass}grid`),(a.grid.fill&&"column"===a.grid.fill||!a.grid.fill&&"column"===i.grid.fill)&&s.classList.add(`${i.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach((t=>{if(void 0===a[t])return;const n=i[t]&&i[t].enabled,s=a[t]&&a[t].enabled;n&&!s&&e[t].disable(),!n&&s&&e[t].enable()}));const h=a.direction&&a.direction!==i.direction,d=i.loop&&(a.slidesPerView!==i.slidesPerView||h);h&&n&&e.changeDirection(),Iy(e.params,a);const f=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),u&&!f?e.disable():!u&&f&&e.enable(),e.currentBreakpoint=o,e.emit("_beforeBreakpoint",a),d&&n&&(e.loopDestroy(),e.loopCreate(t),e.updateSlides()),e.emit("breakpoint",a)},getBreakpoint:function(e,t="window",n){if(!e||"container"===t&&!n)return;let i=!1;const s=wy(),r="window"===t?s.innerHeight:n.clientHeight,o=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:r*t,point:e}}return{value:e,point:e}}));o.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<o.length;e+=1){const{point:r,value:a}=o[e];"window"===t?s.matchMedia(`(min-width: ${a}px)`).matches&&(i=r):a<=n.clientWidth&&(i=r)}return i||"max"}};var sw={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function rw(e,t){return function(n={}){const i=Object.keys(n)[0],s=n[i];"object"==typeof s&&null!==s?(["navigation","pagination","scrollbar"].indexOf(i)>=0&&!0===e[i]&&(e[i]={auto:!0}),i in e&&"enabled"in s?(!0===e[i]&&(e[i]={enabled:!0}),"object"!=typeof e[i]||"enabled"in e[i]||(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Iy(t,n)):Iy(t,n)):Iy(t,n)}}const ow={eventsEmitter:{on(e,t,n){const i=this;if(!i.eventsListeners||i.destroyed)return i;if("function"!=typeof t)return i;const s=n?"unshift":"push";return e.split(" ").forEach((e=>{i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e][s](t)})),i},once(e,t,n){const i=this;if(!i.eventsListeners||i.destroyed)return i;if("function"!=typeof t)return i;function s(...n){i.off(e,s),s.__emitterProxy&&delete s.__emitterProxy,t.apply(i,n)}return s.__emitterProxy=t,i.on(e,s,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed)return n;if("function"!=typeof e)return n;const i=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[i](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed?n:n.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].forEach(((i,s)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[e].splice(s,1)}))})),n):n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsListeners)return t;let n,i,s;"string"==typeof e[0]||Array.isArray(e[0])?(n=e[0],i=e.slice(1,e.length),s=t):(n=e[0].events,i=e[0].data,s=e[0].context||t),i.unshift(s);return(Array.isArray(n)?n:n.split(" ")).forEach((e=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach((t=>{t.apply(s,[e,...i])})),t.eventsListeners&&t.eventsListeners[e]&&t.eventsListeners[e].forEach((e=>{e.apply(s,i)}))})),t}},update:{updateSize:function(){const e=this;let t,n;const i=e.el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:i.clientWidth,n=void 0!==e.params.height&&null!==e.params.height?e.params.height:i.clientHeight,0===t&&e.isHorizontal()||0===n&&e.isVertical()||(t=t-parseInt(Py(i,"padding-left")||0,10)-parseInt(Py(i,"padding-right")||0,10),n=n-parseInt(Py(i,"padding-top")||0,10)-parseInt(Py(i,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))},updateSlides:function(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function n(e,n){return parseFloat(e.getPropertyValue(t(n))||0)}const i=e.params,{wrapperEl:s,slidesEl:r,size:o,rtlTranslate:a,wrongRTL:l}=e,c=e.virtual&&i.virtual.enabled,u=c?e.virtual.slides.length:e.slides.length,h=Cy(r,`.${e.params.slideClass}, swiper-slide`),d=c?e.virtual.slides.length:h.length;let f=[];const p=[],m=[];let g=i.slidesOffsetBefore;"function"==typeof g&&(g=i.slidesOffsetBefore.call(e));let v=i.slidesOffsetAfter;"function"==typeof v&&(v=i.slidesOffsetAfter.call(e));const y=e.snapGrid.length,w=e.slidesGrid.length;let b=i.spaceBetween,E=-g,T=0,_=0;if(void 0===o)return;"string"==typeof b&&b.indexOf("%")>=0?b=parseFloat(b.replace("%",""))/100*o:"string"==typeof b&&(b=parseFloat(b)),e.virtualSize=-b,h.forEach((e=>{a?e.style.marginLeft="":e.style.marginRight="",e.style.marginBottom="",e.style.marginTop=""})),i.centeredSlides&&i.cssMode&&(ky(s,"--swiper-centered-offset-before",""),ky(s,"--swiper-centered-offset-after",""));const S=i.grid&&i.grid.rows>1&&e.grid;let I;S&&e.grid.initSlides(d);const k="auto"===i.slidesPerView&&i.breakpoints&&Object.keys(i.breakpoints).filter((e=>void 0!==i.breakpoints[e].slidesPerView)).length>0;for(let s=0;s<d;s+=1){let r;if(I=0,h[s]&&(r=h[s]),S&&e.grid.updateSlide(s,r,d,t),!h[s]||"none"!==Py(r,"display")){if("auto"===i.slidesPerView){k&&(h[s].style[t("width")]="");const o=getComputedStyle(r),a=r.style.transform,l=r.style.webkitTransform;if(a&&(r.style.transform="none"),l&&(r.style.webkitTransform="none"),i.roundLengths)I=e.isHorizontal()?My(r,"width",!0):My(r,"height",!0);else{const e=n(o,"width"),t=n(o,"padding-left"),i=n(o,"padding-right"),s=n(o,"margin-left"),a=n(o,"margin-right"),l=o.getPropertyValue("box-sizing");if(l&&"border-box"===l)I=e+s+a;else{const{clientWidth:n,offsetWidth:o}=r;I=e+t+i+s+a+(o-n)}}a&&(r.style.transform=a),l&&(r.style.webkitTransform=l),i.roundLengths&&(I=Math.floor(I))}else I=(o-(i.slidesPerView-1)*b)/i.slidesPerView,i.roundLengths&&(I=Math.floor(I)),h[s]&&(h[s].style[t("width")]=`${I}px`);h[s]&&(h[s].swiperSlideSize=I),m.push(I),i.centeredSlides?(E=E+I/2+T/2+b,0===T&&0!==s&&(E=E-o/2-b),0===s&&(E=E-o/2-b),Math.abs(E)<.001&&(E=0),i.roundLengths&&(E=Math.floor(E)),_%i.slidesPerGroup==0&&f.push(E),p.push(E)):(i.roundLengths&&(E=Math.floor(E)),(_-Math.min(e.params.slidesPerGroupSkip,_))%e.params.slidesPerGroup==0&&f.push(E),p.push(E),E=E+I+b),e.virtualSize+=I+b,T=I,_+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+v,a&&l&&("slide"===i.effect||"coverflow"===i.effect)&&(s.style.width=`${e.virtualSize+b}px`),i.setWrapperSize&&(s.style[t("width")]=`${e.virtualSize+b}px`),S&&e.grid.updateWrapperSize(I,f,t),!i.centeredSlides){const t=[];for(let n=0;n<f.length;n+=1){let s=f[n];i.roundLengths&&(s=Math.floor(s)),f[n]<=e.virtualSize-o&&t.push(s)}f=t,Math.floor(e.virtualSize-o)-Math.floor(f[f.length-1])>1&&f.push(e.virtualSize-o)}if(c&&i.loop){const t=m[0]+b;if(i.slidesPerGroup>1){const n=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/i.slidesPerGroup),s=t*i.slidesPerGroup;for(let e=0;e<n;e+=1)f.push(f[f.length-1]+s)}for(let n=0;n<e.virtual.slidesBefore+e.virtual.slidesAfter;n+=1)1===i.slidesPerGroup&&f.push(f[f.length-1]+t),p.push(p[p.length-1]+t),e.virtualSize+=t}if(0===f.length&&(f=[0]),0!==b){const n=e.isHorizontal()&&a?"marginLeft":t("marginRight");h.filter(((e,t)=>!(i.cssMode&&!i.loop)||t!==h.length-1)).forEach((e=>{e.style[n]=`${b}px`}))}if(i.centeredSlides&&i.centeredSlidesBounds){let e=0;m.forEach((t=>{e+=t+(b||0)})),e-=b;const t=e-o;f=f.map((e=>e<=0?-g:e>t?t+v:e))}if(i.centerInsufficientSlides){let e=0;if(m.forEach((t=>{e+=t+(b||0)})),e-=b,e<o){const t=(o-e)/2;f.forEach(((e,n)=>{f[n]=e-t})),p.forEach(((e,n)=>{p[n]=e+t}))}}if(Object.assign(e,{slides:h,snapGrid:f,slidesGrid:p,slidesSizesGrid:m}),i.centeredSlides&&i.cssMode&&!i.centeredSlidesBounds){ky(s,"--swiper-centered-offset-before",-f[0]+"px"),ky(s,"--swiper-centered-offset-after",e.size/2-m[m.length-1]/2+"px");const t=-e.snapGrid[0],n=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+n))}if(d!==u&&e.emit("slidesLengthChange"),f.length!==y&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),p.length!==w&&e.emit("slidesGridLengthChange"),i.watchSlidesProgress&&e.updateSlidesOffset(),!(c||i.cssMode||"slide"!==i.effect&&"fade"!==i.effect)){const t=`${i.containerModifierClass}backface-hidden`,n=e.el.classList.contains(t);d<=i.maxBackfaceHiddenSlides?n||e.el.classList.add(t):n&&e.el.classList.remove(t)}},updateAutoHeight:function(e){const t=this,n=[],i=t.virtual&&t.params.virtual.enabled;let s,r=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const o=e=>i?t.slides[t.getSlideIndexByData(e)]:t.slides[e];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach((e=>{n.push(e)}));else for(s=0;s<Math.ceil(t.params.slidesPerView);s+=1){const e=t.activeIndex+s;if(e>t.slides.length&&!i)break;n.push(o(e))}else n.push(o(t.activeIndex));for(s=0;s<n.length;s+=1)if(void 0!==n[s]){const e=n[s].offsetHeight;r=e>r?e:r}(r||0===r)&&(t.wrapperEl.style.height=`${r}px`)},updateSlidesOffset:function(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let i=0;i<t.length;i+=1)t[i].swiperSlideOffset=(e.isHorizontal()?t[i].offsetLeft:t[i].offsetTop)-n-e.cssOverflowAdjustment()},updateSlidesProgress:function(e=this&&this.translate||0){const t=this,n=t.params,{slides:i,rtlTranslate:s,snapGrid:r}=t;if(0===i.length)return;void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();let o=-e;s&&(o=e),i.forEach((e=>{e.classList.remove(n.slideVisibleClass)})),t.visibleSlidesIndexes=[],t.visibleSlides=[];let a=n.spaceBetween;"string"==typeof a&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*t.size:"string"==typeof a&&(a=parseFloat(a));for(let e=0;e<i.length;e+=1){const l=i[e];let c=l.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=i[0].swiperSlideOffset);const u=(o+(n.centeredSlides?t.minTranslate():0)-c)/(l.swiperSlideSize+a),h=(o-r[0]+(n.centeredSlides?t.minTranslate():0)-c)/(l.swiperSlideSize+a),d=-(o-c),f=d+t.slidesSizesGrid[e];(d>=0&&d<t.size-1||f>1&&f<=t.size||d<=0&&f>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(e),i[e].classList.add(n.slideVisibleClass)),l.progress=s?-u:u,l.originalProgress=s?-h:h}},updateProgress:function(e){const t=this;if(void 0===e){const n=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*n||0}const n=t.params,i=t.maxTranslate()-t.minTranslate();let{progress:s,isBeginning:r,isEnd:o,progressLoop:a}=t;const l=r,c=o;if(0===i)s=0,r=!0,o=!0;else{s=(e-t.minTranslate())/i;const n=Math.abs(e-t.minTranslate())<1,a=Math.abs(e-t.maxTranslate())<1;r=n||s<=0,o=a||s>=1,n&&(s=0),a&&(s=1)}if(n.loop){const n=t.getSlideIndexByData(0),i=t.getSlideIndexByData(t.slides.length-1),s=t.slidesGrid[n],r=t.slidesGrid[i],o=t.slidesGrid[t.slidesGrid.length-1],l=Math.abs(e);a=l>=s?(l-s)/o:(l+o-r)/o,a>1&&(a-=1)}Object.assign(t,{progress:s,progressLoop:a,isBeginning:r,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),r&&!l&&t.emit("reachBeginning toEdge"),o&&!c&&t.emit("reachEnd toEdge"),(l&&!r||c&&!o)&&t.emit("fromEdge"),t.emit("progress",s)},updateSlidesClasses:function(){const e=this,{slides:t,params:n,slidesEl:i,activeIndex:s}=e,r=e.virtual&&n.virtual.enabled,o=e=>Cy(i,`.${n.slideClass}${e}, swiper-slide${e}`)[0];let a;if(t.forEach((e=>{e.classList.remove(n.slideActiveClass,n.slideNextClass,n.slidePrevClass)})),r)if(n.loop){let t=s-e.virtual.slidesBefore;t<0&&(t=e.virtual.slides.length+t),t>=e.virtual.slides.length&&(t-=e.virtual.slides.length),a=o(`[data-swiper-slide-index="${t}"]`)}else a=o(`[data-swiper-slide-index="${s}"]`);else a=t[s];if(a){a.classList.add(n.slideActiveClass);let e=Ly(a,`.${n.slideClass}, swiper-slide`)[0];n.loop&&!e&&(e=t[0]),e&&e.classList.add(n.slideNextClass);let i=Ny(a,`.${n.slideClass}, swiper-slide`)[0];n.loop,i&&i.classList.add(n.slidePrevClass)}e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:i,params:s,activeIndex:r,realIndex:o,snapIndex:a}=t;let l,c=e;const u=e=>{let n=e-t.virtual.slidesBefore;return n<0&&(n=t.virtual.slides.length+n),n>=t.virtual.slides.length&&(n-=t.virtual.slides.length),n};if(void 0===c&&(c=function(e){const{slidesGrid:t,params:n}=e,i=e.rtlTranslate?e.translate:-e.translate;let s;for(let e=0;e<t.length;e+=1)void 0!==t[e+1]?i>=t[e]&&i<t[e+1]-(t[e+1]-t[e])/2?s=e:i>=t[e]&&i<t[e+1]&&(s=e+1):i>=t[e]&&(s=e);return n.normalizeSlideIndex&&(s<0||void 0===s)&&(s=0),s}(t)),i.indexOf(n)>=0)l=i.indexOf(n);else{const e=Math.min(s.slidesPerGroupSkip,c);l=e+Math.floor((c-e)/s.slidesPerGroup)}if(l>=i.length&&(l=i.length-1),c===r)return l!==a&&(t.snapIndex=l,t.emit("snapIndexChange")),void(t.params.loop&&t.virtual&&t.params.virtual.enabled&&(t.realIndex=u(c)));let h;h=t.virtual&&s.virtual.enabled&&s.loop?u(c):t.slides[c]?parseInt(t.slides[c].getAttribute("data-swiper-slide-index")||c,10):c,Object.assign(t,{previousSnapIndex:a,snapIndex:l,previousRealIndex:o,realIndex:h,previousIndex:r,activeIndex:c}),t.initialized&&Hy(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),o!==h&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")},updateClickedSlide:function(e){const t=this,n=t.params,i=e.closest(`.${n.slideClass}, swiper-slide`);let s,r=!1;if(i)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===i){r=!0,s=e;break}if(!i||!r)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=s,n.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}},translate:{getTranslate:function(e=(this.isHorizontal()?"x":"y")){const{params:t,rtlTranslate:n,translate:i,wrapperEl:s}=this;if(t.virtualTranslate)return n?-i:i;if(t.cssMode)return i;let r=_y(s,e);return r+=this.cssOverflowAdjustment(),n&&(r=-r),r||0},setTranslate:function(e,t){const n=this,{rtlTranslate:i,params:s,wrapperEl:r,progress:o}=n;let a,l=0,c=0;n.isHorizontal()?l=i?-e:e:c=e,s.roundLengths&&(l=Math.floor(l),c=Math.floor(c)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:c,s.cssMode?r[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-c:s.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():c-=n.cssOverflowAdjustment(),r.style.transform=`translate3d(${l}px, ${c}px, 0px)`);const u=n.maxTranslate()-n.minTranslate();a=0===u?0:(e-n.minTranslate())/u,a!==o&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e=0,t=this.params.speed,n=!0,i=!0,s){const r=this,{params:o,wrapperEl:a}=r;if(r.animating&&o.preventInteractionOnTransition)return!1;const l=r.minTranslate(),c=r.maxTranslate();let u;if(u=i&&e>l?l:i&&e<c?c:e,r.updateProgress(u),o.cssMode){const e=r.isHorizontal();if(0===t)a[e?"scrollLeft":"scrollTop"]=-u;else{if(!r.support.smoothScroll)return xy({swiper:r,targetPosition:-u,side:e?"left":"top"}),!0;a.scrollTo({[e?"left":"top"]:-u,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(u),n&&(r.emit("beforeTransitionStart",t,s),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(u),n&&(r.emit("beforeTransitionStart",t,s),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,n&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}},transition:{setTransition:function(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`),n.emit("setTransition",e,t)},transitionStart:function(e=!0,t){const n=this,{params:i}=n;i.cssMode||(i.autoHeight&&n.updateAutoHeight(),qy({swiper:n,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e=!0,t){const n=this,{params:i}=n;n.animating=!1,i.cssMode||(n.setTransition(0),qy({swiper:n,runCallbacks:e,direction:t,step:"End"}))}},slide:{slideTo:function(e=0,t=this.params.speed,n=!0,i,s){"string"==typeof e&&(e=parseInt(e,10));const r=this;let o=e;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:h,rtlTranslate:d,wrapperEl:f,enabled:p}=r;if(r.animating&&a.preventInteractionOnTransition||!p&&!i&&!s)return!1;const m=Math.min(r.params.slidesPerGroupSkip,o);let g=m+Math.floor((o-m)/r.params.slidesPerGroup);g>=l.length&&(g=l.length-1);const v=-l[g];if(a.normalizeSlideIndex)for(let e=0;e<c.length;e+=1){const t=-Math.floor(100*v),n=Math.floor(100*c[e]),i=Math.floor(100*c[e+1]);void 0!==c[e+1]?t>=n&&t<i-(i-n)/2?o=e:t>=n&&t<i&&(o=e+1):t>=n&&(o=e)}if(r.initialized&&o!==h){if(!r.allowSlideNext&&(d?v>r.translate&&v>r.minTranslate():v<r.translate&&v<r.minTranslate()))return!1;if(!r.allowSlidePrev&&v>r.translate&&v>r.maxTranslate()&&(h||0)!==o)return!1}let y;if(o!==(u||0)&&n&&r.emit("beforeSlideChangeStart"),r.updateProgress(v),y=o>h?"next":o<h?"prev":"reset",d&&-v===r.translate||!d&&v===r.translate)return r.updateActiveIndex(o),a.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==a.effect&&r.setTranslate(v),"reset"!==y&&(r.transitionStart(n,y),r.transitionEnd(n,y)),!1;if(a.cssMode){const e=r.isHorizontal(),n=d?v:-v;if(0===t){const t=r.virtual&&r.params.virtual.enabled;t&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),t&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame((()=>{f[e?"scrollLeft":"scrollTop"]=n}))):f[e?"scrollLeft":"scrollTop"]=n,t&&requestAnimationFrame((()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1}))}else{if(!r.support.smoothScroll)return xy({swiper:r,targetPosition:n,side:e?"left":"top"}),!0;f.scrollTo({[e?"left":"top"]:n,behavior:"smooth"})}return!0}return r.setTransition(t),r.setTranslate(v),r.updateActiveIndex(o),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,i),r.transitionStart(n,y),0===t?r.transitionEnd(n,y):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(n,y))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e=0,t=this.params.speed,n=!0,i){if("string"==typeof e){e=parseInt(e,10)}const s=this;let r=e;return s.params.loop&&(s.virtual&&s.params.virtual.enabled?r+=s.virtual.slidesBefore:r=s.getSlideIndexByData(r)),s.slideTo(r,t,n,i)},slideNext:function(e=this.params.speed,t=!0,n){const i=this,{enabled:s,params:r,animating:o}=i;if(!s)return i;let a=r.slidesPerGroup;"auto"===r.slidesPerView&&1===r.slidesPerGroup&&r.slidesPerGroupAuto&&(a=Math.max(i.slidesPerViewDynamic("current",!0),1));const l=i.activeIndex<r.slidesPerGroupSkip?1:a,c=i.virtual&&r.virtual.enabled;if(r.loop){if(o&&!c&&r.loopPreventsSliding)return!1;i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft}return r.rewind&&i.isEnd?i.slideTo(0,e,t,n):i.slideTo(i.activeIndex+l,e,t,n)},slidePrev:function(e=this.params.speed,t=!0,n){const i=this,{params:s,snapGrid:r,slidesGrid:o,rtlTranslate:a,enabled:l,animating:c}=i;if(!l)return i;const u=i.virtual&&s.virtual.enabled;if(s.loop){if(c&&!u&&s.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}function h(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const d=h(a?i.translate:-i.translate),f=r.map((e=>h(e)));let p=r[f.indexOf(d)-1];if(void 0===p&&s.cssMode){let e;r.forEach(((t,n)=>{d>=t&&(e=n)})),void 0!==e&&(p=r[e>0?e-1:e])}let m=0;if(void 0!==p&&(m=o.indexOf(p),m<0&&(m=i.activeIndex-1),"auto"===s.slidesPerView&&1===s.slidesPerGroup&&s.slidesPerGroupAuto&&(m=m-i.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),s.rewind&&i.isBeginning){const s=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(s,e,t,n)}return i.slideTo(m,e,t,n)},slideReset:function(e=this.params.speed,t=!0,n){return this.slideTo(this.activeIndex,e,t,n)},slideToClosest:function(e=this.params.speed,t=!0,n,i=.5){const s=this;let r=s.activeIndex;const o=Math.min(s.params.slidesPerGroupSkip,r),a=o+Math.floor((r-o)/s.params.slidesPerGroup),l=s.rtlTranslate?s.translate:-s.translate;if(l>=s.snapGrid[a]){const e=s.snapGrid[a];l-e>(s.snapGrid[a+1]-e)*i&&(r+=s.params.slidesPerGroup)}else{const e=s.snapGrid[a-1];l-e<=(s.snapGrid[a]-e)*i&&(r-=s.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,s.slidesGrid.length-1),s.slideTo(r,e,t,n)},slideToClickedSlide:function(){const e=this,{params:t,slidesEl:n}=e,i="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let s,r=e.clickedIndex;const o=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;s=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-i/2||r>e.slides.length-e.loopedSlides+i/2?(e.loopFix(),r=e.getSlideIndex(Cy(n,`${o}[data-swiper-slide-index="${s}"]`)[0]),Ey((()=>{e.slideTo(r)}))):e.slideTo(r):r>e.slides.length-i?(e.loopFix(),r=e.getSlideIndex(Cy(n,`${o}[data-swiper-slide-index="${s}"]`)[0]),Ey((()=>{e.slideTo(r)}))):e.slideTo(r)}else e.slideTo(r)}},loop:{loopCreate:function(e){const t=this,{params:n,slidesEl:i}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;Cy(i,`.${n.slideClass}, swiper-slide`).forEach(((e,t)=>{e.setAttribute("data-swiper-slide-index",t)})),t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})},loopFix:function({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:i,activeSlideIndex:s,byController:r,byMousewheel:o}={}){const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:l,allowSlidePrev:c,allowSlideNext:u,slidesEl:h,params:d}=a;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&d.virtual.enabled)return t&&(d.centeredSlides||0!==a.snapIndex?d.centeredSlides&&a.snapIndex<d.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0):a.slideTo(a.virtual.slides.length,0,!1,!0)),a.allowSlidePrev=c,a.allowSlideNext=u,void a.emit("loopFix");const f="auto"===d.slidesPerView?a.slidesPerViewDynamic():Math.ceil(parseFloat(d.slidesPerView,10));let p=d.loopedSlides||f;p%d.slidesPerGroup!=0&&(p+=d.slidesPerGroup-p%d.slidesPerGroup),a.loopedSlides=p;const m=[],g=[];let v=a.activeIndex;void 0===s?s=a.getSlideIndex(a.slides.filter((e=>e.classList.contains(d.slideActiveClass)))[0]):v=s;const y="next"===n||!n,w="prev"===n||!n;let b=0,E=0;if(s<p){b=Math.max(p-s,d.slidesPerGroup);for(let e=0;e<p-s;e+=1){const t=e-Math.floor(e/l.length)*l.length;m.push(l.length-t-1)}}else if(s>a.slides.length-2*p){E=Math.max(s-(a.slides.length-2*p),d.slidesPerGroup);for(let e=0;e<E;e+=1){const t=e-Math.floor(e/l.length)*l.length;g.push(t)}}if(w&&m.forEach((e=>{a.slides[e].swiperLoopMoveDOM=!0,h.prepend(a.slides[e]),a.slides[e].swiperLoopMoveDOM=!1})),y&&g.forEach((e=>{a.slides[e].swiperLoopMoveDOM=!0,h.append(a.slides[e]),a.slides[e].swiperLoopMoveDOM=!1})),a.recalcSlides(),"auto"===d.slidesPerView&&a.updateSlides(),d.watchSlidesProgress&&a.updateSlidesOffset(),t)if(m.length>0&&w)if(void 0===e){const e=a.slidesGrid[v],t=a.slidesGrid[v+b]-e;o?a.setTranslate(a.translate-t):(a.slideTo(v+b,0,!1,!0),i&&(a.touches[a.isHorizontal()?"startX":"startY"]+=t))}else i&&a.slideToLoop(e,0,!1,!0);else if(g.length>0&&y)if(void 0===e){const e=a.slidesGrid[v],t=a.slidesGrid[v-E]-e;o?a.setTranslate(a.translate-t):(a.slideTo(v-E,0,!1,!0),i&&(a.touches[a.isHorizontal()?"startX":"startY"]+=t))}else a.slideToLoop(e,0,!1,!0);if(a.allowSlidePrev=c,a.allowSlideNext=u,a.controller&&a.controller.control&&!r){const t={slideRealIndex:e,slideTo:!1,direction:n,setTranslate:i,activeSlideIndex:s,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach((e=>{!e.destroyed&&e.params.loop&&e.loopFix(t)})):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix(t)}a.emit("loopFix")},loopDestroy:function(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const i=[];e.slides.forEach((e=>{const t=void 0===e.swiperSlideIndex?1*e.getAttribute("data-swiper-slide-index"):e.swiperSlideIndex;i[t]=e})),e.slides.forEach((e=>{e.removeAttribute("data-swiper-slide-index")})),i.forEach((e=>{n.append(e)})),e.recalcSlides(),e.slideTo(e.realIndex,0)}},grabCursor:{setGrabCursor:function(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame((()=>{t.__preventObserver__=!1}))},unsetGrabCursor:function(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame((()=>{e.__preventObserver__=!1})))}},events:{attachEvents:function(){const e=this,t=vy(),{params:n}=e;e.onTouchStart=Gy.bind(e),e.onTouchMove=Wy.bind(e),e.onTouchEnd=Ky.bind(e),n.cssMode&&(e.onScroll=Yy.bind(e)),e.onClick=Qy.bind(e),e.onLoad=Jy.bind(e),Zy||(t.addEventListener("touchstart",ew),Zy=!0),tw(e,"on")},detachEvents:function(){tw(this,"off")}},breakpoints:iw,checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:i}=n;if(i){const t=e.slides.length-1,n=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*i;e.isLocked=e.size>n}else e.isLocked=1===e.snapGrid.length;!0===n.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===n.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:{addClasses:function(){const e=this,{classNames:t,params:n,rtl:i,el:s,device:r}=e,o=function(e,t){const n=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((i=>{e[i]&&n.push(t+i)})):"string"==typeof e&&n.push(t+e)})),n}(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:i},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&"column"===n.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),s.classList.add(...t),e.emitContainerClasses()},removeClasses:function(){const{el:e,classNames:t}=this;e.classList.remove(...t),this.emitContainerClasses()}}},aw={};class lw{getSlideIndex(e){const{slidesEl:t,params:n}=this,i=Ry(Cy(t,`.${n.slideClass}, swiper-slide`)[0]);return Ry(e)-i}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter((t=>1*t.getAttribute("data-swiper-slide-index")===e))[0])}recalcSlides(){const{slidesEl:e,params:t}=this;this.slides=Cy(e,`.${t.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const i=n.minTranslate(),s=(n.maxTranslate()-i)*e+i;n.translateTo(s,void 0===t?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach((n=>{const i=e.getSlideClasses(n);t.push({slideEl:n,classNames:i}),e.emit("_slideClass",n,i)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const{params:n,slides:i,slidesGrid:s,slidesSizesGrid:r,size:o,activeIndex:a}=this;let l=1;if(n.centeredSlides){let e,t=i[a]?i[a].swiperSlideSize:0;for(let n=a+1;n<i.length;n+=1)i[n]&&!e&&(t+=i[n].swiperSlideSize,l+=1,t>o&&(e=!0));for(let n=a-1;n>=0;n-=1)i[n]&&!e&&(t+=i[n].swiperSlideSize,l+=1,t>o&&(e=!0))}else if("current"===e)for(let e=a+1;e<i.length;e+=1){(t?s[e]+r[e]-s[a]<o:s[e]-s[a]<o)&&(l+=1)}else for(let e=a-1;e>=0;e-=1){s[a]-s[e]<o&&(l+=1)}return l}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;function i(){const t=e.rtlTranslate?-1*e.translate:e.translate,n=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses()}let s;if(n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach((t=>{t.complete&&zy(e,t)})),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),n.freeMode&&n.freeMode.enabled&&!n.cssMode)i(),n.autoHeight&&e.updateAutoHeight();else{if(("auto"===n.slidesPerView||n.slidesPerView>1)&&e.isEnd&&!n.centeredSlides){const t=e.virtual&&n.virtual.enabled?e.virtual.slides:e.slides;s=e.slideTo(t.length-1,0,!1,!0)}else s=e.slideTo(e.activeIndex,0,!1,!0);s||i()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const n=this,i=n.params.direction;return e||(e="horizontal"===i?"vertical":"horizontal"),e===i||"horizontal"!==e&&"vertical"!==e||(n.el.classList.remove(`${n.params.containerModifierClass}${i}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach((t=>{"vertical"===e?t.style.width="":t.style.height=""})),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let n=e||t.params.el;if("string"==typeof n&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.shadowEl&&(t.isElement=!0);const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let s=(()=>{if(n&&n.shadowRoot&&n.shadowRoot.querySelector){return n.shadowRoot.querySelector(i())}return Cy(n,i())[0]})();return!s&&t.params.createElements&&(s=Ay("div",t.params.wrapperClass),n.append(s),Cy(n,`.${t.params.slideClass}`).forEach((e=>{s.append(e)}))),Object.assign(t,{el:n,wrapperEl:s,slidesEl:t.isElement?n:s,mounted:!0,rtl:"rtl"===n.dir.toLowerCase()||"rtl"===Py(n,"direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===n.dir.toLowerCase()||"rtl"===Py(n,"direction")),wrongRTL:"-webkit-box"===Py(s,"display")}),!0}init(e){const t=this;if(t.initialized)return t;return!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach((e=>{e.complete?zy(t,e):e.addEventListener("load",(e=>{zy(t,e.target)}))})),Hy(t),t.initialized=!0,Hy(t),t.emit("init"),t.emit("afterInit")),t}destroy(e=!0,t=!0){const n=this,{params:i,el:s,wrapperEl:r,slides:o}=n;return void 0===n.params||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),i.loop&&n.loopDestroy(),t&&(n.removeClasses(),s.removeAttribute("style"),r.removeAttribute("style"),o&&o.length&&o.forEach((e=>{e.classList.remove(i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),e.removeAttribute("style"),e.removeAttribute("data-swiper-slide-index")}))),n.emit("destroy"),Object.keys(n.eventsListeners).forEach((e=>{n.off(e)})),!1!==e&&(n.el.swiper=null,by(n)),n.destroyed=!0),null}static extendDefaults(e){Iy(aw,e)}static get extendedDefaults(){return aw}static get defaults(){return sw}static installModule(e){lw.prototype.__modules__||(lw.prototype.__modules__=[]);const t=lw.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>lw.installModule(e))),lw):(lw.installModule(e),lw)}constructor(...e){let t,n;1===e.length&&e[0].constructor&&"Object"===Object.prototype.toString.call(e[0]).slice(8,-1)?n=e[0]:[t,n]=e,n||(n={}),n=Iy({},n),t&&!n.el&&(n.el=t);const i=vy();if(n.el&&"string"==typeof n.el&&i.querySelectorAll(n.el).length>1){const e=[];return i.querySelectorAll(n.el).forEach((t=>{const i=Iy({},n,{el:t});e.push(new lw(i))})),e}const s=this;s.__swiper__=!0,s.support=Vy(),s.device=By({userAgent:n.userAgent}),s.browser=jy(),s.eventsListeners={},s.eventsAnyListeners=[],s.modules=[...s.__modules__],n.modules&&Array.isArray(n.modules)&&s.modules.push(...n.modules);const r={};s.modules.forEach((e=>{e({params:n,swiper:s,extendParams:rw(n,r),on:s.on.bind(s),once:s.once.bind(s),off:s.off.bind(s),emit:s.emit.bind(s)})}));const o=Iy({},sw,r);return s.params=Iy({},o,aw,n),s.originalParams=Iy({},s.params),s.passedParams=Iy({},n),s.params&&s.params.on&&Object.keys(s.params.on).forEach((e=>{s.on(e,s.params.on[e])})),s.params&&s.params.onAny&&s.onAny(s.params.onAny),Object.assign(s,{enabled:s.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===s.params.direction,isVertical:()=>"vertical"===s.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return 8388608*Math.trunc(this.translate/8388608)},allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:s.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:s.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),s.emit("_swiper"),s.params.init&&s.init(),s}}Object.keys(ow).forEach((e=>{Object.keys(ow[e]).forEach((t=>{lw.prototype[t]=ow[e][t]}))})),lw.use([function({swiper:e,on:t,emit:n}){const i=wy();let s=null,r=null;const o=()=>{e&&!e.destroyed&&e.initialized&&(n("beforeResize"),n("resize"))},a=()=>{e&&!e.destroyed&&e.initialized&&n("orientationchange")};t("init",(()=>{e.params.resizeObserver&&void 0!==i.ResizeObserver?e&&!e.destroyed&&e.initialized&&(s=new ResizeObserver((t=>{r=i.requestAnimationFrame((()=>{const{width:n,height:i}=e;let s=n,r=i;t.forEach((({contentBoxSize:t,contentRect:n,target:i})=>{i&&i!==e.el||(s=n?n.width:(t[0]||t).inlineSize,r=n?n.height:(t[0]||t).blockSize)})),s===n&&r===i||o()}))})),s.observe(e.el)):(i.addEventListener("resize",o),i.addEventListener("orientationchange",a))})),t("destroy",(()=>{r&&i.cancelAnimationFrame(r),s&&s.unobserve&&e.el&&(s.unobserve(e.el),s=null),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",a)}))},function({swiper:e,extendParams:t,on:n,emit:i}){const s=[],r=wy(),o=(t,n={})=>{const o=new(r.MutationObserver||r.WebkitMutationObserver)((t=>{if(e.__preventObserver__)return;if(1===t.length)return void i("observerUpdate",t[0]);const n=function(){i("observerUpdate",t[0])};r.requestAnimationFrame?r.requestAnimationFrame(n):r.setTimeout(n,0)}));o.observe(t,{attributes:void 0===n.attributes||n.attributes,childList:void 0===n.childList||n.childList,characterData:void 0===n.characterData||n.characterData}),s.push(o)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",(()=>{if(e.params.observer){if(e.params.observeParents){const t=Oy(e.el);for(let e=0;e<t.length;e+=1)o(t[e])}o(e.el,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}})),n("destroy",(()=>{s.forEach((e=>{e.disconnect()})),s.splice(0,s.length)}))}]);var cw=lw;function uw(e,t,n,i){return e.params.createElements&&Object.keys(i).forEach((s=>{if(!n[s]&&!0===n.auto){let r=Cy(e.el,`.${i[s]}`)[0];r||(r=Ay("div",i[s]),r.className=i[s],e.el.append(r)),n[s]=r,t[s]=r}})),n}const hw=document.querySelector(".support-list");const dw=fy.map((function({title:e,url:t,img:n},i){return`<li class="swiper-slide support-slide">\n        <div class="support-item">\n        <span class="support-index">${(i+1).toString().padStart(2,"0")}</span>\n        <a class="support-link" href="${t}" target="_blank" rel="noopener noreferrer nofollow">\n            <img class="support-image"\n                srcset="${n.x1} 1x, ${n.x2} 2x"\n                src="${n.x1}" type="image/png" alt="${e}">\n        </a>\n    </li>`})).join("");hw.innerHTML=dw;new cw(".swiper",{direction:"vertical",slidesPerView:4,slidesOffsetAfter:0,rewind:!0,spaceBetween:20,effect:"slide",breakpoints:{376:{slidesPerView:6}},modules:[function({swiper:e,extendParams:t,on:n,emit:i}){t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const s=e=>(Array.isArray(e)||(e=[e].filter((e=>!!e))),e);function r(t){let n;return t&&"string"==typeof t&&e.isElement&&(n=e.el.shadowRoot.querySelector(t),n)?n:(t&&("string"==typeof t&&(n=[...document.querySelectorAll(t)]),e.params.uniqueNavElements&&"string"==typeof t&&n.length>1&&1===e.el.querySelectorAll(t).length&&(n=e.el.querySelector(t))),t&&!n?t:n)}function o(t,n){const i=e.params.navigation;(t=s(t)).forEach((t=>{t&&(t.classList[n?"add":"remove"](...i.disabledClass.split(" ")),"BUTTON"===t.tagName&&(t.disabled=n),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?"add":"remove"](i.lockClass))}))}function a(){const{nextEl:t,prevEl:n}=e.navigation;if(e.params.loop)return o(n,!1),void o(t,!1);o(n,e.isBeginning&&!e.params.rewind),o(t,e.isEnd&&!e.params.rewind)}function l(t){t.preventDefault(),(!e.isBeginning||e.params.loop||e.params.rewind)&&(e.slidePrev(),i("navigationPrev"))}function c(t){t.preventDefault(),(!e.isEnd||e.params.loop||e.params.rewind)&&(e.slideNext(),i("navigationNext"))}function u(){const t=e.params.navigation;if(e.params.navigation=uw(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!t.nextEl&&!t.prevEl)return;let n=r(t.nextEl),i=r(t.prevEl);Object.assign(e.navigation,{nextEl:n,prevEl:i}),n=s(n),i=s(i);const o=(n,i)=>{n&&n.addEventListener("click","next"===i?c:l),!e.enabled&&n&&n.classList.add(...t.lockClass.split(" "))};n.forEach((e=>o(e,"next"))),i.forEach((e=>o(e,"prev")))}function h(){let{nextEl:t,prevEl:n}=e.navigation;t=s(t),n=s(n);const i=(t,n)=>{t.removeEventListener("click","next"===n?c:l),t.classList.remove(...e.params.navigation.disabledClass.split(" "))};t.forEach((e=>i(e,"next"))),n.forEach((e=>i(e,"prev")))}n("init",(()=>{!1===e.params.navigation.enabled?d():(u(),a())})),n("toEdge fromEdge lock unlock",(()=>{a()})),n("destroy",(()=>{h()})),n("enable disable",(()=>{let{nextEl:t,prevEl:n}=e.navigation;t=s(t),n=s(n),[...t,...n].filter((e=>!!e)).forEach((t=>t.classList[e.enabled?"remove":"add"](e.params.navigation.lockClass)))})),n("click",((t,n)=>{let{nextEl:r,prevEl:o}=e.navigation;r=s(r),o=s(o);const a=n.target;if(e.params.navigation.hideOnClick&&!o.includes(a)&&!r.includes(a)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===a||e.pagination.el.contains(a)))return;let t;r.length?t=r[0].classList.contains(e.params.navigation.hiddenClass):o.length&&(t=o[0].classList.contains(e.params.navigation.hiddenClass)),i(!0===t?"navigationShow":"navigationHide"),[...r,...o].filter((e=>!!e)).forEach((t=>t.classList.toggle(e.params.navigation.hiddenClass)))}}));const d=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),h()};Object.assign(e.navigation,{enable:()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),a()},disable:d,update:a,init:u,destroy:h})}],navigation:{nextEl:".swiper-next"}});var fw={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */!function(e,t){fw=t()}(window,(function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist",n(n.s=10)}([function(e,t,n){e.exports=function(e,t){var n,i,s,r,o=Object.prototype.hasOwnProperty;for(s=1,r=arguments.length;s<r;s+=1)for(i in n=arguments[s])o.call(n,i)&&(e[i]=n[i]);return e}},function(e,t,n){e.exports=function(e){return void 0===e}},function(e,t,n){e.exports=function(e){return e instanceof Array}},function(e,t,n){var i=n(2),s=n(17),r=n(6);e.exports=function(e,t,n){i(e)?s(e,t,n):r(e,t,n)}},function(e,t,n){e.exports=function(e){return"string"==typeof e||e instanceof String}},function(e,t,n){e.exports=function(e){return e instanceof Function}},function(e,t,n){e.exports=function(e,t,n){var i;for(i in n=n||null,e)if(e.hasOwnProperty(i)&&!1===t.call(n,e[i],i,e))break}},function(e,t,n){var i=n(18),s=n(0);e.exports=function(e,t){var n;return t||(t=e,e=null),n=t.init||function(){},e&&i(n,e),t.hasOwnProperty("static")&&(s(n,t.static),delete t.static),s(n.prototype,t),n}},function(e,t,n){var i=n(2);e.exports=function(e,t,n){var s,r;if(n=n||0,!i(t))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e,n);for(r=t.length,s=n;n>=0&&s<r;s+=1)if(t[s]===e)return s;return-1}},function(e,t,n){var i=n(29),s=n(30),r=n(5),o={capitalizeFirstLetter:function(e){return e.substring(0,1).toUpperCase()+e.substring(1,e.length)},isContained:function(e,t){return!!t&&(e===t||t.contains(e))},createElementByTemplate:function(e,t){var n=document.createElement("div"),s=r(e)?e(t):i(e,t);return n.innerHTML=s,n.firstChild},bind:function(e,t){var n,i=Array.prototype.slice;return e.bind?e.bind.apply(e,i.call(arguments,1)):(n=i.call(arguments,2),function(){return e.apply(t,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){s("pagination","UA-129987462-1")}};e.exports=o},function(e,t,n){n(11),e.exports=n(12)},function(e,t,n){},function(e,t,n){var i=n(13),s=n(7),r=n(0),o=n(1),a=n(20),l=n(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},u=s({init:function(e,t){this._options=r({},c,t),this._currentPage=0,this._view=new a(e,this._options,l.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&l.sendHostName()},_setCurrentPage:function(e){this._currentPage=e||this._options.page},_getLastPage:function(){var e=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return e||1},_getPageIndex:function(e){var t;return this._options.centerAlign?(t=e-Math.floor(this._options.visiblePages/2),t=Math.max(t,1),t=Math.min(t,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(e/this._options.visiblePages)},_getRelativePage:function(e){var t="prev"===e,n=this.getCurrentPage();return t?n-1:n+1},_getMorePageIndex:function(e){var t=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===e;return this._options.centerAlign?i?t-1:t+n:i?(t-1)*n:t*n+1},_convertToValidPage:function(e){var t=this._getLastPage();return e=Math.max(e,1),e=Math.min(e,t)},_paginate:function(e){var t=this._makeViewData(e||this._options.page);this._setCurrentPage(e),this._view.update(t)},_makeViewData:function(e){var t={},n=this._getLastPage(),i=this._getPageIndex(e),s=this._getPageIndex(n),r=this._getEdge(e);return t.leftPageNumber=r.left,t.rightPageNumber=r.right,t.prevMore=i>1,t.nextMore=i<s,t.page=e,t.currentPageIndex=e,t.lastPage=n,t.lastPageListIndex=n,t},_getEdge:function(e){var t,n,i,s=this._getLastPage(),r=this._options.visiblePages,o=this._getPageIndex(e);return this._options.centerAlign?(i=Math.floor(r/2),(n=(t=Math.max(e-i,1))+r-1)>s&&(t=Math.max(s-r+1,1),n=s)):(t=(o-1)*r+1,n=o*r,n=Math.min(n,s)),{left:t,right:n}},_onClickHandler:function(e,t){switch(e){case"first":t=1;break;case"prev":t=this._getRelativePage("prev");break;case"next":t=this._getRelativePage("next");break;case"prevMore":t=this._getMorePageIndex("prev");break;case"nextMore":t=this._getMorePageIndex("next");break;case"last":t=this._getLastPage();break;default:if(!t)return}this.movePageTo(t)},reset:function(e){o(e)&&(e=this._options.totalItems),this._options.totalItems=e,this._paginate(1)},movePageTo:function(e){e=this._convertToValidPage(e),this.invoke("beforeMove",{page:e})&&(this._paginate(e),this.fire("afterMove",{page:e}))},setTotalItems:function(e){this._options.totalItems=e},setItemsPerPage:function(e){this._options.itemsPerPage=e},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(u),e.exports=u},function(e,t,n){var i=n(0),s=n(14),r=n(4),o=n(16),a=n(2),l=n(5),c=n(3),u=/\s+/g;function h(){this.events=null,this.contexts=null}h.mixin=function(e){i(e.prototype,h.prototype)},h.prototype._getHandlerItem=function(e,t){var n={handler:e};return t&&(n.context=t),n},h.prototype._safeEvent=function(e){var t,n=this.events;return n||(n=this.events={}),e&&((t=n[e])||(t=[],n[e]=t),n=t),n},h.prototype._safeContext=function(){var e=this.contexts;return e||(e=this.contexts=[]),e},h.prototype._indexOfContext=function(e){for(var t=this._safeContext(),n=0;t[n];){if(e===t[n][0])return n;n+=1}return-1},h.prototype._memorizeContext=function(e){var t,n;s(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1?t[n][1]+=1:t.push([e,1]))},h.prototype._forgetContext=function(e){var t,n;s(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1&&(t[n][1]-=1,t[n][1]<=0&&t.splice(n,1)))},h.prototype._bindEvent=function(e,t,n){var i=this._safeEvent(e);this._memorizeContext(n),i.push(this._getHandlerItem(t,n))},h.prototype.on=function(e,t,n){var i=this;r(e)?(e=e.split(u),c(e,(function(e){i._bindEvent(e,t,n)}))):o(e)&&(n=t,c(e,(function(e,t){i.on(t,e,n)})))},h.prototype.once=function(e,t,n){var i=this;if(o(e))return n=t,void c(e,(function(e,t){i.once(t,e,n)}));this.on(e,(function s(){t.apply(n,arguments),i.off(e,s,n)}),n)},h.prototype._spliceMatches=function(e,t){var n,i=0;if(a(e))for(n=e.length;i<n;i+=1)!0===t(e[i])&&(e.splice(i,1),n-=1,i-=1)},h.prototype._matchHandler=function(e){var t=this;return function(n){var i=e===n.handler;return i&&t._forgetContext(n.context),i}},h.prototype._matchContext=function(e){var t=this;return function(n){var i=e===n.context;return i&&t._forgetContext(n.context),i}},h.prototype._matchHandlerAndContext=function(e,t){var n=this;return function(i){var s=e===i.handler,r=t===i.context,o=s&&r;return o&&n._forgetContext(i.context),o}},h.prototype._offByEventName=function(e,t){var n=this,i=l(t),s=n._matchHandler(t);e=e.split(u),c(e,(function(e){var t=n._safeEvent(e);i?n._spliceMatches(t,s):(c(t,(function(e){n._forgetContext(e.context)})),n.events[e]=[])}))},h.prototype._offByHandler=function(e){var t=this,n=this._matchHandler(e);c(this._safeEvent(),(function(e){t._spliceMatches(e,n)}))},h.prototype._offByObject=function(e,t){var n,i=this;this._indexOfContext(e)<0?c(e,(function(e,t){i.off(t,e)})):r(t)?(n=this._matchContext(e),i._spliceMatches(this._safeEvent(t),n)):l(t)?(n=this._matchHandlerAndContext(t,e),c(this._safeEvent(),(function(e){i._spliceMatches(e,n)}))):(n=this._matchContext(e),c(this._safeEvent(),(function(e){i._spliceMatches(e,n)})))},h.prototype.off=function(e,t){r(e)?this._offByEventName(e,t):arguments.length?l(e)?this._offByHandler(e):o(e)&&this._offByObject(e,t):(this.events={},this.contexts=[])},h.prototype.fire=function(e){this.invoke.apply(this,arguments)},h.prototype.invoke=function(e){var t,n,i,s;if(!this.hasListener(e))return!0;for(t=this._safeEvent(e),n=Array.prototype.slice.call(arguments,1),i=0;t[i];){if(!1===(s=t[i]).handler.apply(s.context,n))return!1;i+=1}return!0},h.prototype.hasListener=function(e){return this.getListenerLength(e)>0},h.prototype.getListenerLength=function(e){return this._safeEvent(e).length},e.exports=h},function(e,t,n){var i=n(1),s=n(15);e.exports=function(e){return!i(e)&&!s(e)}},function(e,t,n){e.exports=function(e){return null===e}},function(e,t,n){e.exports=function(e){return e===Object(e)}},function(e,t,n){e.exports=function(e,t,n){var i=0,s=e.length;for(n=n||null;i<s&&!1!==t.call(n,e[i],i,e);i+=1);}},function(e,t,n){var i=n(19);e.exports=function(e,t){var n=i(t.prototype);n.constructor=e,e.prototype=n}},function(e,t,n){e.exports=function(e){function t(){}return t.prototype=e,new t}},function(e,t,n){var i=n(3),s=n(7),r=n(21),o=n(22),a=n(24),l=n(25),c=n(0),u=n(4),h=n(28),d=n(9),f={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},p=["first","prev","next","last"],m=["prev","next"],g=s({init:function(e,t,n){this._containerElement=null,this._firstItemClassName=t.firstItemClassName,this._lastItemClassName=t.lastItemClassName,this._template=c({},f,t.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(e),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(e){if(u(e)?e=document.getElementById(e)||document.querySelector(e):e.jquery&&(e=e[0]),!h(e))throw new Error("The container element is invalid.");this._containerElement=e},_setMoveButtons:function(){i(p,(function(e){this._buttons[e]=d.createElementByTemplate(this._template.moveButton,{type:e})}),this)},_setDisabledMoveButtons:function(){i(p,(function(e){var t="disabled"+d.capitalizeFirstLetter(e);this._buttons[t]=d.createElementByTemplate(this._template.disabledMoveButton,{type:e})}),this)},_setMoreButtons:function(){i(m,(function(e){var t=e+"More";this._buttons[t]=d.createElementByTemplate(this._template.moreButton,{type:e})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(e){var t;t=e.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(t)},_appendPrevButton:function(e){var t;t=e.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(t)},_appendNextButton:function(e){var t;t=e.currentPageIndex<e.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(t)},_appendLastButton:function(e){var t;t=e.page<e.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(t)},_appendPrevMoreButton:function(e){var t;e.prevMore&&(t=this._buttons.prevMore,l(t,this._firstItemClassName),this._getContainerElement().appendChild(t))},_appendNextMoreButton:function(e){var t;e.nextMore&&(t=this._buttons.nextMore,l(t,this._lastItemClassName),this._getContainerElement().appendChild(t))},_appendPages:function(e){var t,n,i=e.leftPageNumber,s=e.rightPageNumber;for(n=i;n<=s;n+=1)n===e.page?t=d.createElementByTemplate(this._template.currentPage,{page:n}):(t=d.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(t)),n!==i||e.prevMore||l(t,this._firstItemClassName),n!==s||e.nextMore||l(t,this._lastItemClassName),this._getContainerElement().appendChild(t)},_attachClickEvent:function(e){var t=this._getContainerElement();o(t,"click",(function(t){var n,i,s=r(t);a(t),(i=this._getButtonType(s))||(n=this._getPageNumber(s)),e(i,n)}),this)},_getButtonType:function(e){var t,n=this._buttons;return i(n,(function(n,i){return!d.isContained(e,n)||(t=i,!1)}),this),t},_getPageNumber:function(e){var t,n=this._findPageElement(e);return n&&(t=parseInt(n.innerText,10)),t},_findPageElement:function(e){for(var t,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(t=this._enabledPageElements[n],d.isContained(e,t))return t;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(e,t){this._buttons[t]=e.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(e){this._empty(),this._appendFirstButton(e),this._appendPrevButton(e),this._appendPrevMoreButton(e),this._appendPages(e),this._appendNextMoreButton(e),this._appendNextButton(e),this._appendLastButton(e)}});e.exports=g},function(e,t,n){e.exports=function(e){return e.target||e.srcElement}},function(e,t,n){var i=n(4),s=n(3),r=n(23);function o(e,t,n,i){function o(t){n.call(i||e,t||window.event)}"addEventListener"in e?e.addEventListener(t,o):"attachEvent"in e&&e.attachEvent("on"+t,o),function(e,t,n,i){var o=r(e,t),a=!1;s(o,(function(e){return e.handler!==n||(a=!0,!1)})),a||o.push({handler:n,wrappedHandler:i})}(e,t,n,o)}e.exports=function(e,t,n,r){i(t)?s(t.split(/\s+/g),(function(t){o(e,t,n,r)})):s(t,(function(t,i){o(e,i,t,n)}))}},function(e,t,n){var i="_feEventKey";e.exports=function(e,t){var n,s=e[i];return s||(s=e[i]={}),(n=s[t])||(n=s[t]=[]),n}},function(e,t,n){e.exports=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},function(e,t,n){var i=n(3),s=n(8),r=n(26),o=n(27);e.exports=function(e){var t,n=Array.prototype.slice.call(arguments,1),a=e.classList,l=[];a?i(n,(function(t){e.classList.add(t)})):((t=r(e))&&(n=[].concat(t.split(/\s+/),n)),i(n,(function(e){s(e,l)<0&&l.push(e)})),o(e,l))}},function(e,t,n){var i=n(1);e.exports=function(e){return e&&e.className?i(e.className.baseVal)?e.className:e.className.baseVal:""}},function(e,t,n){var i=n(2),s=n(1);e.exports=function(e,t){t=(t=i(t)?t.join(" "):t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),s(e.className.baseVal)?e.className=t:e.className.baseVal=t}},function(e,t,n){e.exports=function(e){return"object"==typeof HTMLElement?e&&(e instanceof HTMLElement||!!e.nodeType):!(!e||!e.nodeType)}},function(e,t,n){var i=n(8),s=n(3),r=n(2),o=n(4),a=n(0),l=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,u=/\[\s?|\s?\]/,h=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,d=/\./,f=/^["']\w+["']$/,p=/"|'/g,m=/^-?\d+\.?\d*$/,g={if:function(e,t,n){var i=function(e,t){var n=[e],i=[],r=0,o=0;return s(t,(function(e,s){0===e.indexOf("if")?r+=1:"/if"===e?r-=1:r||0!==e.indexOf("elseif")&&"else"!==e||(n.push("else"===e?["true"]:e.split(" ").slice(1)),i.push(t.slice(o,s)),o=s+1)})),i.push(t.slice(o)),{exps:n,sourcesInsideIf:i}}(e,t),r=!1,o="";return s(i.exps,(function(e,t){return(r=b(e,n))&&(o=E(i.sourcesInsideIf[t],n)),!r})),o},each:function(e,t,n){var i=b(e,n),o=r(i)?"@index":"@key",l={},c="";return s(i,(function(e,i){l[o]=i,l["@this"]=e,a(n,l),c+=E(t.slice(),n)})),c},with:function(e,t,n){var s=i("as",e),r=e[s+1],o=b(e.slice(0,s),n),l={};return l[r]=o,E(t,a(n,l))||""}},v=3==="a".split(/a/).length?function(e,t){return e.split(t)}:function(e,t){var n,i,s=[],r=0;for(t.global||(t=new RegExp(t,"g")),n=t.exec(e);null!==n;)i=n.index,s.push(e.slice(r,i)),r=i+n[0].length,n=t.exec(e);return s.push(e.slice(r)),s};function y(e,t){var n,i=t[e];return"true"===e?i=!0:"false"===e?i=!1:f.test(e)?i=e.replace(p,""):c.test(e)?i=y((n=e.split(u))[0],t)[y(n[1],t)]:h.test(e)?i=y((n=e.split(d))[0],t)[n[1]]:m.test(e)&&(i=parseFloat(e)),i}function w(e,t,n){for(var i,s,r,a,l=g[e],c=1,u=2,h=t[u];c&&o(h);)0===h.indexOf(e)?c+=1:0===h.indexOf("/"+e)&&(c-=1,i=u),h=t[u+=2];if(c)throw Error(e+" needs {{/"+e+"}} expression.");return t[0]=l(t[0].split(" ").slice(1),(s=0,r=i,(a=t.splice(s+1,r-s)).pop(),a),n),t}function b(e,t){var n=y(e[0],t);return n instanceof Function?function(e,t,n){var i=[];return s(t,(function(e){i.push(y(e,n))})),e.apply(null,i)}(n,e.slice(1),t):n}function E(e,t){for(var n,i,s,r=1,a=e[r];o(a);)i=(n=a.split(" "))[0],g[i]?(s=w(i,e.splice(r,e.length-r),t),e=e.concat(s)):e[r]=b(n,t),a=e[r+=2];return e.join("")}e.exports=function(e,t){return E(v(e,l),t)}},function(e,t,n){var i=n(1),s=n(31);e.exports=function(e,t){var n=location.hostname,r="TOAST UI "+e+" for "+n+": Statistics",o=window.localStorage.getItem(r);(i(window.tui)||!1!==window.tui.usageStatistics)&&(o&&!function(e){return(new Date).getTime()-e>6048e5}(o)||(window.localStorage.setItem(r,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||s("https://www.google-analytics.com/collect",{v:1,t:"event",tid:t,cid:n,dp:n,dh:e,el:e,ec:"use"})}),1e3)))}},function(e,t,n){var i=n(6);e.exports=function(e,t){var n=document.createElement("img"),s="";return i(t,(function(e,t){s+="&"+t+"="+e})),s=s.substring(1),n.src=e+"?"+s,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])}));const pw=document.getElementById("booksContainer");let mw=null;pw&&function e(n,i){if(!i)return;const s="shoppingList";let r=JSON.parse(localStorage.getItem(s))||[];const{appleBooksIconPath:o,bookShopIconPath:a,amazonIconPath:l,svgTrashIcon:c,emptyListStubImage:u}=Dg(),h=3*(n-1),d=h+3,f=r.slice(h,d);if(i.innerHTML="",0===f.length){const e=document.createElement("div");e.className="shop-card-empty",e.innerHTML=`\n        <p class="shop-card-empty-text">\n          This page is empty, add some books and proceed to order.\n        </p>\n        <img class="shop-card-empty-picture" src="${u}" alt="Shop is Empty">\n      `,i.appendChild(e),document.getElementById("pagination").style.display="none"}else{const e=f.map((({_id:e,title:t,author:n,description:i,list_name:s,book_image:r,amazon_product_url:u,buy_links:[h,d]})=>`<article class="shopping__card">\n          <div class="about-img">\n            <img class="shopping-card-img" src="${r}" alt="${t}" />\n          </div>\n          <div class="about-content">\n              <div class="about-title">\n            <h3 class="shopping-card-title">${t}</h3>\n            <p class="shopping-card-category">${s}</p>\n          </div>\n          <div class="about-description">\n            <p class="shopping-card-description">${i}</p>\n          </div>\n          <div class="about-autor-url">\n          <div class="about-author">\n            <p class="shopping-card-author">${n}</p>\n          </div>\n          <div class="shoplist-url">\n            <ul class="shoplist-url-list">\n              <li class="shoplist-url-item">\n                <a class="shoplist-url-link" href="${u}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Amazon link">\n                  <img class="modal-shop-img shopping-shopimg amazon" src="${l}" alt="Amazon link" />\n                </a>\n              </li>\n              <li class="shoplist-url-item">\n                <a class="shoplist-url-link" href="${h.url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Apple Books link">\n                  <img class="modal-shop-img shopping-shopimg apple" src="${o}" alt="Apple Books link" />\n                </a>\n              </li>\n              <li class="shoplist-url-item">\n                <a class="shoplist-url-link" href="${d.url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="BookShop link">\n                  <img class="modal-shop-img shopping-shopimg book-shop" src="${a}" alt="BookShop link" />\n                </a>\n              </li>\n            </ul>\n          </div></div>\n          \n          <div>\n          <button class="shopping-card-btn" type="button" data-book-id="${e}" aria-label="Remove book from shopping list">\n            <svg class="icon-trash" data-book-id="${e}" width="17" height="17">\n              <use href="${c}#icon-trash"></use>\n            </svg>\n          </button>\n        </article>`));i.innerHTML=e.join("");i.querySelectorAll(".shopping-card-btn").forEach((e=>{e.addEventListener("click",(e=>{p(e.target.getAttribute("data-book-id"))}))})),document.getElementById("pagination").style.display="block"}function p(t){const n=r.filter((e=>e._id!==t));localStorage.setItem(s,JSON.stringify(n)),r=n,m();let o=mw.getCurrentPage();const a=Math.ceil(r.length/3);o>a&&mw.movePageTo(a);const l=mw.getCurrentPage();e(l,i)}function m(e){document.querySelector(".tui-pagination").querySelectorAll(".tui-page-btn").forEach((t=>{parseInt(t.innerText)>e&&t.remove()}))}const g=document.getElementById("pagination"),v={totalItems:r.length,itemsPerPage:3,visiblePages:15,page:n,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected current-page-button">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}} move-button"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-first tui-{{type}} disabled-move-button"><span class="tui-ico-{{type}}"></span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip more-button">{{type}}</a>'}};mw=new(t(fw))(g,v),mw.on("afterMove",(t=>{const n=t.page,s=3*(n-1),o=s+3,a=r.slice(s,o);e(n,i),0===a.length&&n>1&&(mw.movePageTo(n-1),e(n-1,i));m(Math.ceil(r.length/3))}))}(1,pw),(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),i=()=>{const n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),t.classList.toggle(".active_btn");bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",i),n.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",(n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();
//# sourceMappingURL=shopping-list.25588985.js.map
