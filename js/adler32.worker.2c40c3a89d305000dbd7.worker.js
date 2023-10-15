/*! For license information please see adler32.worker.2c40c3a89d305000dbd7.worker.js.LICENSE.txt */
(()=>{var e={927:(e,t)=>{var r;r=function(e){e.version="1.3.1",e.bstr=function(e,t){var r=1,n=0,o=e.length,a=0;"number"==typeof t&&(r=65535&t,n=t>>>16);for(var i=0;i<o;){for(a=Math.min(o-i,2654)+i;i<a;i++)n+=r+=255&e.charCodeAt(i);r=15*(r>>>16)+(65535&r),n=15*(n>>>16)+(65535&n)}return n%65521<<16|r%65521},e.buf=function(e,t){var r=1,n=0,o=e.length,a=0;"number"==typeof t&&(r=65535&t,n=t>>>16&65535);for(var i=0;i<o;){for(a=Math.min(o-i,2654)+i;i<a;i++)n+=r+=255&e[i];r=15*(r>>>16)+(65535&r),n=15*(n>>>16)+(65535&n)}return n%65521<<16|r%65521},e.str=function(e,t){var r=1,n=0,o=e.length,a=0,i=0,s=0;"number"==typeof t&&(r=65535&t,n=t>>>16);for(var u=0;u<o;){for(a=Math.min(o-u,2918);a>0;)(i=e.charCodeAt(u++))<128?r+=i:i<2048?(n+=r+=192|i>>6&31,--a,r+=128|63&i):i>=55296&&i<57344?(n+=r+=240|(i=64+(1023&i))>>8&7,--a,n+=r+=128|i>>2&63,--a,n+=r+=128|(s=1023&e.charCodeAt(u++))>>6&15|(3&i)<<4,--a,r+=128|63&s):(n+=r+=224|i>>12&15,--a,n+=r+=128|i>>6&63,--a,r+=128|63&i),n+=r,--a;r=15*(r>>>16)+(65535&r),n=15*(n>>>16)+(65535&n)}return n%65521<<16|r%65521}},"undefined"==typeof DO_NOT_EXPORT_ADLER?r(t):r({})},61:(e,t,r)=>{var n=r(698).default;function o(){"use strict";e.exports=o=function(){return r},e.exports.__esModule=!0,e.exports.default=e.exports;var t,r={},a=Object.prototype,i=a.hasOwnProperty,s=Object.defineProperty||function(e,t,r){e[t]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",f=u.asyncIterator||"@@asyncIterator",l=u.toStringTag||"@@toStringTag";function h(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{h({},"")}catch(t){h=function(e,t,r){return e[t]=r}}function A(e,t,r,n){var o=t&&t.prototype instanceof b?t:b,a=Object.create(o.prototype),i=new S(n||[]);return s(a,"_invoke",{value:F(e,r,i)}),a}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}r.wrap=A;var y="suspendedStart",g="suspendedYield",d="executing",w="completed",m={};function b(){}function v(){}function E(){}var B={};h(B,c,(function(){return this}));var x=Object.getPrototypeOf,I=x&&x(x(D([])));I&&I!==a&&i.call(I,c)&&(B=I);var Q=E.prototype=b.prototype=Object.create(B);function C(e){["next","throw","return"].forEach((function(t){h(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function r(o,a,s,u){var c=p(e[o],e,a);if("throw"!==c.type){var f=c.arg,l=f.value;return l&&"object"==n(l)&&i.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,s,u)}),(function(e){r("throw",e,s,u)})):t.resolve(l).then((function(e){f.value=e,s(f)}),(function(e){return r("throw",e,s,u)}))}u(c.arg)}var o;s(this,"_invoke",{value:function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}})}function F(e,r,n){var o=y;return function(a,i){if(o===d)throw new Error("Generator is already running");if(o===w){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var s=n.delegate;if(s){var u=L(s,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=w,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var c=p(e,r,n);if("normal"===c.type){if(o=n.done?w:g,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=w,n.method="throw",n.arg=c.arg)}}}function L(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=p(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function H(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function G(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(H,this),this.reset(!0)}function D(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(i.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(n(e)+" is not iterable")}return v.prototype=E,s(Q,"constructor",{value:E,configurable:!0}),s(E,"constructor",{value:v,configurable:!0}),v.displayName=h(E,l,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,h(e,l,"GeneratorFunction")),e.prototype=Object.create(Q),e},r.awrap=function(e){return{__await:e}},C(k.prototype),h(k.prototype,f,(function(){return this})),r.AsyncIterator=k,r.async=function(e,t,n,o,a){void 0===a&&(a=Promise);var i=new k(A(e,t,n,o),a);return r.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},C(Q),h(Q,l,"Generator"),h(Q,c,(function(){return this})),h(Q,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=D,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(G),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),G(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;G(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:D(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},r}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},698:e=>{function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},687:(e,t,r)=>{var n=r(61)();e.exports=n;try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e,t,r,n,o,a,i){try{var s=e[a](i),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,o)}function t(t){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=t.apply(r,n);function s(t){e(i,o,a,s,u,"next",t)}function u(t){e(i,o,a,s,u,"throw",t)}s(void 0)}))}}var n=r(687),o=r.n(n);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,i(n.key),n)}}function u(e,t,r){return(t=i(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw a}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var l=self;const h=function(){function e(t){var r=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"init",null),u(this,"scenarios",[]),u(this,"functions",[]),this.init=n,this.scenarios=t,this.scenarios.forEach((function(e){e.buf=Buffer.alloc(e.size),e.buf.fill("\0\bÿ")})),l.onmessage=function(e){"run"===e.data&&r.run()},setTimeout((function(){l.postMessage({msg:"init",name:r.name,functions:r.functions.map((function(e){return e.name})),scenarios:t})}),50)}var r,n,a,i,f,h;return r=e,n=[{key:"addAsync",value:function(e,r){var n;this.functions.push({name:e,fn:(n=t(o().mark((function e(t,n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n>1)){e.next=3;break}return e.next=3,Promise.all([new Array(n-1).fill(0).map((function(){return r(t)}))]);case 3:return e.next=5,r(t);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),function(e,t){return n.apply(this,arguments)}),async:!0,sync:!1})}},{key:"addSync",value:function(e,t){this.functions.push({name:e,fn:function(e,r){for(var n="",o=0;o<r;o++)n=t(e);return n},async:!1,sync:!0})}},{key:"getResults",value:function(e,t,r,n,o){var a=n*r,i=a*t.size/1024/1024/(o/1e3);return{name:e.name,ops:a,cycles:n,totalDuration:o,avgCycleDuration:o/n,throughput:i,size:t.size,divisor:r}}},{key:"measureAsync",value:(h=t(o().mark((function e(t,r,n,a){var i,s,u,c,f;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0,s=performance.now(),u=s,c=s+a;case 4:if(!(s<c)){e.next=11;break}return e.next=7,t.fn(r.buf,n);case 7:i+=1,s=performance.now(),e.next=4;break;case 11:return f=s-u,e.abrupt("return",this.getResults(t,r,n,i,f));case 14:case"end":return e.stop()}}),e,this)}))),function(e,t,r,n){return h.apply(this,arguments)})},{key:"measureSync",value:function(e,t,r,n){for(var o=0,a=performance.now(),i=a,s=a+n;a<s;)e.fn(t.buf,r),o+=1,a=performance.now();var u=a-i;return this.getResults(e,t,r,o,u)}},{key:"measure",value:function(e,t,r,n){return e.async?this.measureAsync(e,t,r,n):this.measureSync(e,t,r,n)}},{key:"calibrateDivisor",value:(f=t(o().mark((function e(t,r){var n,a,i,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=1,a=10;case 2:return e.next=5,this.measure(t,r,n,a);case 5:if(!((i=e.sent).cycles<2)){e.next=8;break}return e.abrupt("break",11);case 8:i.avgCycleDuration<=a&&2*i.avgCycleDuration>=a?(s=(a-i.avgCycleDuration)/i.avgCycleDuration,n=Math.round(n+1+n*s)):n*=2,e.next=2;break;case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,this)}))),function(e,t){return f.apply(this,arguments)})},{key:"fail",value:function(e,t){throw new Error("Invalid result (".concat(e,", ").concat(t,")"))}},{key:"run",value:(i=t(o().mark((function e(){var t,r,n,a,i,s,u,f=this;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.init();case 2:return e.next=4,Promise.all(this.scenarios.map((function(e){return f.functions[0].fn(e.buf)})));case 4:t=e.sent,r=c(this.functions),e.prev=6,r.s();case 8:if((n=r.n()).done){e.next=22;break}a=n.value,i=o().mark((function e(){var r,n,i,s,c,h;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=f.scenarios[u],n=t[u],i=0;case 3:if(!(i<5)){e.next=12;break}return e.next=6,a.fn(r.buf,r.divisor);case 6:if((s=e.sent)===n){e.next=9;break}return e.abrupt("return",{v:f.fail(n,s)});case 9:i++,e.next=3;break;case 12:return e.next=14,new Promise((function(e){return setTimeout(e,100)}));case 14:return e.next=16,f.calibrateDivisor(a,r);case 16:return c=e.sent,e.next=19,new Promise((function(e){return setTimeout(e,100)}));case 19:return e.next=21,f.measure(a,r,c,1e3);case 21:return h=e.sent,setTimeout((function(){l.postMessage({msg:"progress",results:h})}),0),e.next=25,new Promise((function(e){return setTimeout(e,500)}));case 25:case"end":return e.stop()}}),e)})),e.t0=o().keys(this.scenarios);case 12:if((e.t1=e.t0()).done){e.next=20;break}return u=e.t1.value,e.delegateYield(i(),"t2",15);case 15:if(!(s=e.t2)){e.next=18;break}return e.abrupt("return",s.v);case 18:e.next=12;break;case 20:e.next=8;break;case 22:e.next=27;break;case 24:e.prev=24,e.t3=e.catch(6),r.e(e.t3);case 27:return e.prev=27,r.f(),e.finish(27);case 30:l.postMessage({msg:"finish"});case 31:case"end":return e.stop()}}),e,this,[[6,24,27,30]])}))),function(){return i.apply(this,arguments)})}],n&&s(r.prototype,n),a&&s(r,a),Object.defineProperty(r,"prototype",{writable:!1}),e}();var A,p=r(927),y=r.n(p);function g(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{u(n.next(e))}catch(e){a(e)}}function s(e){try{u(n.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,s)}u((n=n.apply(e,t||[])).next())}))}class d{constructor(){this.mutex=Promise.resolve()}lock(){let e=()=>{};return this.mutex=this.mutex.then((()=>new Promise(e))),new Promise((t=>{e=t}))}dispatch(e){return g(this,void 0,void 0,(function*(){const t=yield this.lock();try{return yield Promise.resolve(e())}finally{t()}}))}}const w="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:r.g,m=null!==(A=w.Buffer)&&void 0!==A?A:null,b=w.TextEncoder?new w.TextEncoder:null;function v(e,t){return(15&e)+(e>>6|e>>3&8)<<4|(15&t)+(t>>6|t>>3&8)}function E(e,t){const r=t.length>>1;for(let n=0;n<r;n++){const r=n<<1;e[n]=v(t.charCodeAt(r),t.charCodeAt(r+1))}}const B="a".charCodeAt(0)-10,x="0".charCodeAt(0);function I(e,t,r){let n=0;for(let o=0;o<r;o++){let r=t[o]>>>4;e[n++]=r>9?r+B:r+x,r=15&t[o],e[n++]=r>9?r+B:r+x}return String.fromCharCode.apply(null,e)}const Q=null!==m?e=>{if("string"==typeof e){const t=m.from(e,"utf8");return new Uint8Array(t.buffer,t.byteOffset,t.length)}if(m.isBuffer(e))return new Uint8Array(e.buffer,e.byteOffset,e.length);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw new Error("Invalid data type!")}:e=>{if("string"==typeof e)return b.encode(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw new Error("Invalid data type!")},C="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",k=new Uint8Array(256);for(let e=0;e<C.length;e++)k[C.charCodeAt(e)]=e;function F(e){let t=Math.floor(.75*e.length);const r=e.length;return"="===e[r-1]&&(t-=1,"="===e[r-2]&&(t-=1)),t}function L(e){const t=F(e),r=e.length,n=new Uint8Array(t);let o=0;for(let t=0;t<r;t+=4){const r=k[e.charCodeAt(t)],a=k[e.charCodeAt(t+1)],i=k[e.charCodeAt(t+2)],s=k[e.charCodeAt(t+3)];n[o]=r<<2|a>>4,o+=1,n[o]=(15&a)<<4|i>>2,o+=1,n[o]=(3&i)<<6|63&s,o+=1}return n}const H=16384,G=4,S=new d,D=new Map;function U(e,t){return g(this,void 0,void 0,(function*(){let r=null,n=null,o=!1;if("undefined"==typeof WebAssembly)throw new Error("WebAssembly is not supported in this environment!");const a=()=>new DataView(r.exports.memory.buffer).getUint32(r.exports.STATE_SIZE,!0),i=S.dispatch((()=>g(this,void 0,void 0,(function*(){if(!D.has(e.name)){const t=L(e.data),r=WebAssembly.compile(t);D.set(e.name,r)}const t=yield D.get(e.name);r=yield WebAssembly.instantiate(t,{})})))),s=(e=null)=>{o=!0,r.exports.Hash_Init(e)},u=e=>{if(!o)throw new Error("update() called before init()");(e=>{let t=0;for(;t<e.length;){const o=e.subarray(t,t+H);t+=o.length,n.set(o),r.exports.Hash_Update(o.length)}})(Q(e))},c=new Uint8Array(2*t),f=(e,a=null)=>{if(!o)throw new Error("digest() called before init()");return o=!1,r.exports.Hash_Final(a),"binary"===e?n.slice(0,t):I(c,n,t)},l=e=>"string"==typeof e?e.length<H/4:e.byteLength<H;let h=l;switch(e.name){case"argon2":case"scrypt":h=()=>!0;break;case"blake2b":case"blake2s":h=(e,t)=>t<=512&&l(e);break;case"blake3":h=(e,t)=>0===t&&l(e);break;case"xxhash64":case"xxhash3":case"xxhash128":h=()=>!1}return yield(()=>g(this,void 0,void 0,(function*(){r||(yield i);const e=r.exports.Hash_GetBuffer(),t=r.exports.memory.buffer;n=new Uint8Array(t,e,H)})))(),{getMemory:()=>n,writeMemory:(e,t=0)=>{n.set(e,t)},getExports:()=>r.exports,setMemorySize:e=>{r.exports.Hash_SetMemorySize(e);const t=r.exports.Hash_GetBuffer(),o=r.exports.memory.buffer;n=new Uint8Array(o,t,e)},init:s,update:u,digest:f,save:()=>{if(!o)throw new Error("save() can only be called after init() and before digest()");const t=r.exports.Hash_GetState(),n=a(),i=r.exports.memory.buffer,s=new Uint8Array(i,t,n),u=new Uint8Array(G+n);return E(u,e.hash),u.set(s,G),u},load:t=>{if(!(t instanceof Uint8Array))throw new Error("load() expects an Uint8Array generated by save()");const n=r.exports.Hash_GetState(),i=a(),s=G+i,u=r.exports.memory.buffer;if(t.length!==s)throw new Error(`Bad state length (expected ${s} bytes, got ${t.length})`);if(!function(e,t){if(e.length!==2*t.length)return!1;for(let r=0;r<t.length;r++){const n=r<<1;if(t[r]!==v(e.charCodeAt(n),e.charCodeAt(n+1)))return!1}return!0}(e.hash,t.subarray(0,G)))throw new Error("This state was written by an incompatible hash implementation");const c=t.subarray(G);new Uint8Array(u,n,i).set(c),o=!0},calculate:(e,o=null,a=null)=>{if(!h(e,o))return s(o),u(e),f("hex",a);const i=Q(e);return n.set(i),r.exports.Hash_Calculate(i.length,o,a),I(c,n,t)},hashLength:t}}))}var _={name:"adler32",data:"AGFzbQEAAAABDANgAAF/YAAAYAF/AAMHBgABAgEAAgQFAXABAQEFBAEBAgIGDgJ/AUGAiQULfwBBgAgLB3AIBm1lbW9yeQIADkhhc2hfR2V0QnVmZmVyAAAJSGFzaF9Jbml0AAELSGFzaF9VcGRhdGUAAgpIYXNoX0ZpbmFsAAMNSGFzaF9HZXRTdGF0ZQAEDkhhc2hfQ2FsY3VsYXRlAAUKU1RBVEVfU0laRQMBCoAIBgUAQYAJCwoAQQBBATYChAgL9gYBBn9BACgChAgiAUH//wNxIQIgAUEQdiEDAkACQCAAQQFHDQAgAkEALQCACWoiAUGPgHxqIAEgAUHw/wNLGyIBIANqIgRBEHQiBUGAgDxqIAUgBEHw/wNLGyABciEBDAELAkACQAJAAkACQCAAQRBJDQBBgAkhBiAAQbArSQ0BQYAJIQYDQEEAIQUDQCAGIAVqIgEoAgAiBEH/AXEgAmoiAiADaiACIARBCHZB/wFxaiICaiACIARBEHZB/wFxaiICaiACIARBGHZqIgJqIAIgAUEEaigCACIEQf8BcWoiAmogAiAEQQh2Qf8BcWoiAmogAiAEQRB2Qf8BcWoiAmogAiAEQRh2aiICaiACIAFBCGooAgAiBEH/AXFqIgJqIAIgBEEIdkH/AXFqIgJqIAIgBEEQdkH/AXFqIgJqIAIgBEEYdmoiBGogBCABQQxqKAIAIgFB/wFxaiIEaiAEIAFBCHZB/wFxaiIEaiAEIAFBEHZB/wFxaiIEaiAEIAFBGHZqIgJqIQMgBUEQaiIFQbArRw0ACyADQfH/A3AhAyACQfH/A3AhAiAGQbAraiEGIABB0FRqIgBBrytLDQALIABFDQQgAEEPSw0BDAILAkAgAEUNAEEAIQEDQCACIAFBgAlqLQAAaiICIANqIQMgACABQQFqIgFHDQALCyACQY+AfGogAiACQfD/A0sbIANB8f8DcEEQdHIhAQwECwNAIAYoAgAiAUH/AXEgAmoiBCADaiAEIAFBCHZB/wFxaiIEaiAEIAFBEHZB/wFxaiIEaiAEIAFBGHZqIgRqIAQgBkEEaigCACIBQf8BcWoiBGogBCABQQh2Qf8BcWoiBGogBCABQRB2Qf8BcWoiBGogBCABQRh2aiIEaiAEIAZBCGooAgAiAUH/AXFqIgRqIAQgAUEIdkH/AXFqIgRqIAQgAUEQdkH/AXFqIgRqIAQgAUEYdmoiBGogBCAGQQxqKAIAIgFB/wFxaiIEaiAEIAFBCHZB/wFxaiIEaiAEIAFBEHZB/wFxaiIEaiAEIAFBGHZqIgJqIQMgBkEQaiEGIABBcGoiAEEPSw0ACyAARQ0BCwNAIAIgBi0AAGoiAiADaiEDIAZBAWohBiAAQX9qIgANAAsLIANB8f8DcCEDIAJB8f8DcCECCyACIANBEHRyIQELQQAgATYChAgLMgEBf0EAQQAoAoQIIgBBGHQgAEEIdEGAgPwHcXIgAEEIdkGA/gNxIABBGHZycjYCgAkLBQBBhAgLPABBAEEBNgKECCAAEAJBAEEAKAKECCIAQRh0IABBCHRBgID8B3FyIABBCHZBgP4DcSAAQRh2cnI2AoAJCwsVAgBBgAgLBAQAAAAAQYQICwQBAAAA",hash:"321174b4"};function j(e,t,r){return g(this,void 0,void 0,(function*(){const n=yield e.lock(),o=yield U(t,r);return n(),o}))}const P=new d;let R=null;new d;new DataView(new ArrayBuffer(4));new d;new d;new d;new d;new d;new d;new d;new d;new d;new d;new d;new d;new d;new d;new d;new ArrayBuffer(8);new d;new ArrayBuffer(8);new d;new ArrayBuffer(8);new d;new d;new d;const O=JSON.parse('{"HO":{"@babel/core":"7.23.2","@babel/plugin-proposal-class-properties":"7.18.6","@babel/plugin-syntax-dynamic-import":"7.8.3","@babel/plugin-transform-runtime":"7.23.2","@babel/preset-env":"7.23.2","@babel/preset-react":"7.22.15","@noble/hashes":"1.3.2","adler-32":"1.3.1","argon2-browser":"1.18.0","argon2-wasm":"0.9.0","argon2-wasm-pro":"1.1.0","babel-loader":"9.1.3","base64-loader":"1.0.0","bcryptjs":"2.4.3","blake2b":"2.1.4","blake2b-wasm":"2.4.0","blake2s":"1.1.0","blake2s-js":"1.3.0","blake3":"2.1.7","blakejs":"1.2.1","buffer":"^6.0.3","buffer-crc32":"0.2.13","clean-webpack-plugin":"^4.0.0","crc":"4.3.2","crc-32":"1.2.2","crypto-js":"4.1.1","css-loader":"^6.8.1","file-loader":"6.2.0","hash-wasm":"4.9.0","html-webpack-plugin":"^5.5.3","js-md4":"0.3.2","jssha":"3.3.1","lodash":"4.17.21","md5":"2.3.0","md5-wasm":"2.0.0","mini-css-extract-plugin":"2.7.6","node-forge":"1.3.1","pbkdf2":"3.1.2","react":"17.0.2","react-dom":"17.0.2","ripemd160":"2.0.2","scrypt-js":"3.0.1","sha1":"1.1.1","sha256-wasm":"2.2.2","sha3":"2.1.4","sha3-wasm":"1.0.0","sha512-wasm":"2.3.4","spark-md5":"3.0.2","style-loader":"^3.3.3","terser-webpack-plugin":"^5.3.9","url-loader":"^4.1.1","webpack":"^5.89.0","webpack-cli":"^5.1.4","webpack-dev-server":"^4.15.1","worker-loader":"^3.0.8","xxhash":"0.3.0","xxhash-wasm":"1.0.2","xxhashjs":"0.2.2"}}');function q(e){var t;return null!==(t=O.HO[e])&&void 0!==t?t:""}var T=null,N=new h([{size:32,divisor:200},{size:1048576,divisor:1}],t(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U(_,4).then((e=>{e.init();const t={init:()=>(e.init(),t),update:r=>(e.update(r),t),digest:t=>e.digest(t),save:()=>e.save(),load:r=>(e.load(r),t),blockSize:4,digestSize:4};return t}));case 2:T=e.sent;case 3:case"end":return e.stop()}}),e)}))));N.addAsync("hash-wasm ".concat(q("hash-wasm")," adler32()"),(function(e){return function(e){if(null===R)return j(P,_,4).then((t=>(R=t,R.calculate(e))));try{const t=R.calculate(e);return Promise.resolve(t)}catch(e){return Promise.reject(e)}}(e)})),N.addSync("hash-wasm ".concat(q("hash-wasm")," createAdler32()"),(function(e){return T.init(),T.update(e),T.digest()})),N.addSync("adler-32 ".concat(q("adler-32")),(function(e){return(y().buf(e)>>>0).toString(16)}))})()})();