!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=e.parcelRequire7d2c;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){r[t]=e},e.parcelRequire7d2c=o),o.register("1UHsN",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}})),o.register("ffZzF",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){return e.get?e.get.call(t):e.value}})),o.register("5k7tO",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),o.register("kMC0W",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if(Array.isArray(t))return r.default(t)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8NIkP",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}})),o.register("7AJDX",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}})),o.register("8CtQK",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!t)return;if("string"==typeof t)return r.default(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(t,e)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}}));var i={};function a(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){a(i,r,o,c,s,"next",t)}function s(t){a(i,r,o,c,s,"throw",t)}c(void 0)}))}};var c={},s=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new O(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return M()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?h:p,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=h,n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",p="suspendedYield",d="executing",h="completed",v={};function y(){}function m(){}function g(){}var b={};s(b,i,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(I([])));k&&k!==n&&r.call(k,i)&&(b=k);var x=g.prototype=y.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function n(o,i,a,c){var s=l(t[o],t,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function I(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:M}}function M(){return{value:e,done:!0}}return m.prototype=g,s(x,"constructor",g),s(g,"constructor",m),m.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},_(L.prototype),s(L.prototype,a,(function(){return this})),t.AsyncIterator=L,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new L(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(x),s(x,c,"Generator"),s(x,i,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=I,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:I(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(c);try{regeneratorRuntime=s}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=s:Function("r","regeneratorRuntime = r")(s)}var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(t,e){var n=f.default(t,e,"get");return p.default(t,n)};var f=d(o("1UHsN")),p=d(o("ffZzF"));function d(t){return t&&t.__esModule?t:{default:t}}var h={};Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(t,e,n){y.default(t,e),e.set(t,n)};var v,y=(v=o("5k7tO"))&&v.__esModule?v:{default:v};var m={};function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(m,"__esModule",{value:!0}),m.default=function(t,e,n){e&&g(t.prototype,e);n&&g(t,n);return t};var b=new WeakMap,w=new WeakMap,k=function(){"use strict";function e(){t(u)(this,e),t(h)(this,b,{writable:!0,value:"https://books-backend.p.goit.global"}),t(h)(this,w,{writable:!0,value:{categoryList:"/books/category-list",topBooks:"/books/top-books",category:"/books/category",bookInfo:function(t){return"/books/".concat(t)}}}),this.page=1}return t(m)(e,[{key:"getBookCategories",value:function(){var e=this;return t(i)(t(c).mark((function n(){var r;return t(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(t(l)(e,b)).concat(t(l)(e,w).categoryList));case 2:if((r=n.sent).ok){n.next=5;break}throw new Error;case 5:return n.abrupt("return",r.json());case 6:case"end":return n.stop()}}),n)})))()}},{key:"getTopBooks",value:function(){var e=this;return t(i)(t(c).mark((function n(){var r;return t(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(t(l)(e,b)).concat(t(l)(e,w).topBooks));case 2:if((r=n.sent).ok){n.next=5;break}throw new Error;case 5:return n.abrupt("return",r.json());case 6:case"end":return n.stop()}}),n)})))()}},{key:"getBooksByCategory",value:function(e){var n=this;return t(i)(t(c).mark((function r(){var o;return t(c).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("".concat(t(l)(n,b)).concat(t(l)(n,w).category,"?category=").concat(e));case 2:if((o=r.sent).ok){r.next=5;break}throw new Error;case 5:return r.abrupt("return",o.json());case 6:case"end":return r.stop()}}),r)})))()}},{key:"getBookInfo",value:function(e){var n=this;return t(i)(t(c).mark((function r(){var o;return t(c).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("".concat(t(l)(n,b)).concat(t(l)(n,w).bookInfo(e)));case 2:if((o=r.sent).ok){r.next=5;break}throw new Error;case 5:return r.abrupt("return",o.json());case 6:case"end":return r.stop()}}),r)})))()}}]),e}(),x=document.querySelector(".list-js"),_=new k;function L(){return(L=t(i)(t(c).mark((function e(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_.getBookCategories();case 3:E(t.sent),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function E(t){var e=t.map((function(t){return"<li class='genres-item'><button type='button' class='genres-btn genres-btn-js'>".concat(t.list_name,"</button></li>")})).join("");x.insertAdjacentHTML("beforeend",e)}!function(){L.apply(this,arguments)}();var j={};Object.defineProperty(j,"__esModule",{value:!0}),j.default=function(t){return S.default(t)||O.default(t)||M.default(t)||I.default()};var S=P(o("kMC0W")),O=P(o("7AJDX")),I=P(o("8CtQK")),M=P(o("auk6i"));function P(t){return t&&t.__esModule?t:{default:t}}var T=function(){"use strict";function e(n,r){t(u)(this,e),this.book=n,this.currentShoppingListItems=localStorage.getItem("shoppingList"),null==this.currentShoppingListItems?this.currentShoppingListItems=[]:this.currentShoppingListItems=JSON.parse(this.currentShoppingListItems),this.index=this.currentShoppingListItems.findIndex((function(t){return t._id==n._id})),this.isBookAlreadyInShoppingList=this.index>-1,this.linkToBtn=r,this.linkToBtn.textContent=(this.isBookAlreadyInShoppingList?"Remove from the ":"Add to ")+"Shopping List",this.notification=document.createElement("div"),this.notification.textContent="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",this.notification.className="notification",this.isBookAlreadyInShoppingList&&r.insertAdjacentElement("afterend",this.notification)}return t(m)(e,[{key:"handleBook",value:function(t){this.isBookAlreadyInShoppingList?(this.currentShoppingListItems.splice(this.index,1),this.index=-1,this.isBookAlreadyInShoppingList=!1,this.notification.remove()):(this.index=this.currentShoppingListItems.length,this.currentShoppingListItems.push(this.book),this.isBookAlreadyInShoppingList=!0,this.linkToBtn.insertAdjacentElement("afterend",this.notification)),localStorage.setItem("shoppingList",JSON.stringify(this.currentShoppingListItems)),this.linkToBtn.textContent=(this.isBookAlreadyInShoppingList?"Remove from the ":"Add to ")+"Shopping List"}}]),e}();function A(t){var e=document.createElement("div");e.className="modal_background";var n=document.createElement("div");n.className="modal_body",e.append(n);var r=t.buy_links.filter((function(t){return["Amazon","Apple Books","Bookshop"].includes(t.name)})).map((function(t){return'<a href="'.concat(t.url,'" title="').concat(t.name,'">SVG</a>')})).join("");n.innerHTML='\n        <div class="flex gap-24 mb-40">\n            <img src="'.concat(t.book_image,'" alt="">\n            <div>\n                <div class="card_title">').concat(t.title,'</div>\n                <div class="card_author">').concat(t.author,'</div>\n                <div class="card_description">').concat(t.description,'</div>\n                <div class="flex gap-20">\n                ').concat(r,"\n                </div>\n                \n\n            </div>\n        </div>\n        ");var o=document.createElement("button");function i(){e.remove(),o.removeEventListener("click",i),e.removeEventListener("click",i),document.removeEventListener("keydown",a)}function a(t){"Escape"==t.key&&i()}o.className="close_btn",o.textContent="x",o.addEventListener("click",i),e.addEventListener("click",i),n.onclick=function(t){t.stopPropagation()};var c=document.createElement("button");c.className="btn",n.append(o,c);var s=new T(t,c);c.onclick=function(){s.handleBook()},document.addEventListener("keydown",a),document.body.append(e)}var N=new k,B=document.querySelector(".books_container");function C(){return(C=t(i)(t(c).mark((function e(){var n;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.getTopBooks();case 2:n=e.sent,console.log(n),n.forEach((function(e){var n,r=e.books.slice(0,5).map(F),o=document.createElement("div");o.className="group",o.innerHTML='\n        <div class="group_title">'.concat(e.list_name,"</div>\n    ");var i=document.createElement("div");i.className="card_list",(n=i).append.apply(n,t(j)(r));var a=document.createElement("button");a.textContent="See More",o.append(i,a),B.append(o)}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(t){var e=document.createElement("div");return e.className="card",e.onclick=function(){A(t)},e.innerHTML='\n        <img src="'.concat(t.book_image,'" alt="').concat(t.title,'">\n        <div class="book_title">').concat(t.title,'</div>\n        <div class="book_author">').concat(t.author,"</div>\n    "),e}!function(){C.apply(this,arguments)}();var G=function(){var t={scrollProgress:document.querySelector(".progress"),progressValue:document.querySelector(".progress-value"),pos:document.documentElement.scrollTop},e=document.documentElement.scrollHeight-document.documentElement.clientHeight;Math.round(100*t.pos/e);t.pos>100?t.scrollProgress.style.display="grid":t.scrollProgress.style.display="none",t.scrollProgress.addEventListener("click",(function(){document.documentElement.scrollTop=0}))};window.onscroll=G,window.onload=G}();
//# sourceMappingURL=index.f1c8f0d3.js.map