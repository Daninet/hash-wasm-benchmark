"use strict";(self.webpackChunkhash_wasm_benchmark=self.webpackChunkhash_wasm_benchmark||[]).push([[966],{966:(e,t,r)=>{r.r(t),r.d(t,{BaseHash:()=>v,BaseHashReader:()=>y,BrowserHasher:()=>x,createHash:()=>E,createKeyed:()=>B,defaultHashLength:()=>i,deriveKey:()=>w,hash:()=>_,inputToArray:()=>h,keyedHash:()=>g,maxHashBytes:()=>b,using:()=>k});var n={};let s;r.r(n),r.d(n,{Blake3Hash:()=>o.Tf,HashReader:()=>o.g1,__wbindgen_throw:()=>o.Or,create_derive:()=>o.q0,create_hasher:()=>o.dM,create_keyed:()=>o.jf,hash:()=>o.vp});const a=()=>{if(!s)throw new Error("BLAKE3 webassembly not loaded. Please import the module via `blake3/browser` or `blake3/browser-async`");return s};var o=r(741);const i=32,h=e=>e instanceof Uint8Array?e:new Uint8Array(e),d=new TextDecoder,c={base64:e=>btoa(String.fromCharCode(...e)),hex:e=>{let t="";for(const r of e)r<16&&(t+="0"),t+=r.toString(16);return t},utf8:e=>d.decode(e)},l=e=>{const t=c[e];if(!t)throw new Error(`Unknown encoding ${e}`);return t};class u extends Uint8Array{equals(e){if(!(e instanceof Uint8Array))return!1;if(e.length!==this.length)return!1;let t=0;for(let r=0;r<this.length;r++)t|=this[r]^e[r];return 0===t}toString(e="hex"){return l(e)(this)}}const f=new TextEncoder,p=e=>h("string"==typeof e?f.encode(e):e);function _(e,{length:t=i}={}){const r=new u(t);return a().hash(p(e),r),r}function w(e,t,{length:r=i}={}){const n=a().create_derive(e);n.update(p(t));const s=new u(r);return n.digest(s),s}function g(e,t,{length:r=i}={}){if(32!==e.length)throw new Error(`key provided to keyedHash must be 32 bytes, got ${e.length}`);const n=a().create_keyed(e);n.update(p(t));const s=new u(r);return n.digest(s),s}const b=BigInt("18446744073709551615");class y{constructor(e){this.pos=BigInt(0),this.reader=e}get position(){return this.pos}set position(e){var t;if("bigint"!=typeof e)throw new Error(`Got a ${typeof e} set in to reader.position, expected a bigint`);this.boundsCheck(e),this.pos=e,null===(t=this.reader)||void 0===t||t.set_position(e)}readInto(e){if(!this.reader)throw new Error("Cannot read from a hash after it was disposed");const t=this.pos+BigInt(e.length);this.boundsCheck(t),this.reader.fill(e),this.position=t}read(e){const t=this.alloc(e);return this.readInto(t),t}dispose(){var e,t;null===(t=null===(e=this.reader)||void 0===e?void 0:e.free)||void 0===t||t.call(e),this.reader=void 0}boundsCheck(e){if(e>b)throw new RangeError(`Cannot read past ${b} bytes in BLAKE3 hashes`);if(e<BigInt(0))throw new RangeError("Cannot read to a negative position")}}class v{constructor(e,t,r){this.alloc=t,this.getReader=r,this.hash=e}update(e){if(!this.hash)throw new Error("Cannot continue updating hashing after dispose() has been called");return this.hash.update(h(e)),this}digest({length:e=i,dispose:t=!0}={}){if(!this.hash)throw new Error("Cannot call digest() after dipose() has been called");const r=this.alloc(e);return this.hash.digest(r),t&&this.dispose(),r}reader({dispose:e=!0}={}){if(!this.hash)throw new Error("Cannot call reader() after dipose() has been called");const t=this.getReader(this.hash.reader());return e&&this.dispose(),t}dispose(){var e;null===(e=this.hash)||void 0===e||e.free(),this.hash=void 0}}const k=(e,t)=>{let r;try{r=t(e)}catch(t){throw e.dispose(),t}return"object"==typeof(n=r)&&n&&"then"in n?r.then((t=>(e.dispose(),t)),(t=>{throw e.dispose(),t})):(e.dispose(),r);var n};class m extends y{toString(e="hex"){return this.toArray().toString(e)}toArray(){return this.position=BigInt(0),this.read(i)}alloc(e){return new u(e)}}class x extends v{update(e){return super.update(p(e))}digest(e,t){let r,n;e&&"object"==typeof e?(r=e,n=void 0):(r=t,n=e);const s=super.digest(r);return n?l(n)(s):s}}const E=()=>new x(a().create_hasher(),(e=>new u(e)),(e=>new m(e))),B=e=>new x(a().create_keyed(e),(e=>new u(e)),(e=>new m(e)));s=n},741:(e,t,r)=>{r.d(t,{Or:()=>y,Tf:()=>g,dM:()=>c,g1:()=>b,jf:()=>l,q0:()=>p,vp:()=>d});var n=r(928);e=r.hmd(e);let s=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});s.decode();let a=null;function o(){return null!==a&&a.buffer===n.memory.buffer||(a=new Uint8Array(n.memory.buffer)),a}let i=0;function h(e,t){const r=t(1*e.length);return o().set(e,r/1),i=e.length,r}function d(e,t){try{var r=h(e,n.__wbindgen_malloc),s=i,a=h(t,n.__wbindgen_malloc),d=i;n.hash(r,s,a,d)}finally{t.set(o().subarray(a/1,a/1+d)),n.__wbindgen_free(a,1*d)}}function c(){var e=n.create_hasher();return g.__wrap(e)}function l(e){var t=h(e,n.__wbindgen_malloc),r=i,s=n.create_keyed(t,r);return g.__wrap(s)}let u=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8");const f="function"==typeof u.encodeInto?function(e,t){return u.encodeInto(e,t)}:function(e,t){const r=u.encode(e);return t.set(r),{read:e.length,written:r.length}};function p(e){var t=function(e,t,r){if(void 0===r){const r=u.encode(e),n=t(r.length);return o().subarray(n,n+r.length).set(r),i=r.length,n}let n=e.length,s=t(n);const a=o();let h=0;for(;h<n;h++){const t=e.charCodeAt(h);if(t>127)break;a[s+h]=t}if(h!==n){0!==h&&(e=e.slice(h)),s=r(s,n,n=h+3*e.length);const t=o().subarray(s+h,s+n);h+=f(e,t).written}return i=h,s}(e,n.__wbindgen_malloc,n.__wbindgen_realloc),r=i,s=n.create_derive(t,r);return g.__wrap(s)}const _=new Uint32Array(2),w=new BigUint64Array(_.buffer);class g{static __wrap(e){const t=Object.create(g.prototype);return t.ptr=e,t}free(){const e=this.ptr;this.ptr=0,n.__wbg_blake3hash_free(e)}reader(){var e=n.blake3hash_reader(this.ptr);return b.__wrap(e)}update(e){var t=h(e,n.__wbindgen_malloc),r=i;n.blake3hash_update(this.ptr,t,r)}digest(e){try{var t=h(e,n.__wbindgen_malloc),r=i;n.blake3hash_digest(this.ptr,t,r)}finally{e.set(o().subarray(t/1,t/1+r)),n.__wbindgen_free(t,1*r)}}}class b{static __wrap(e){const t=Object.create(b.prototype);return t.ptr=e,t}free(){const e=this.ptr;this.ptr=0,n.__wbg_hashreader_free(e)}fill(e){try{var t=h(e,n.__wbindgen_malloc),r=i;n.hashreader_fill(this.ptr,t,r)}finally{e.set(o().subarray(t/1,t/1+r)),n.__wbindgen_free(t,1*r)}}set_position(e){w[0]=e;const t=_[0],r=_[1];n.hashreader_set_position(this.ptr,t,r)}}const y=function(e,t){throw new Error((r=e,n=t,s.decode(o().subarray(r,r+n))));var r,n}},928:(e,t,r)=>{var n=r.w[e.id];e.exports=n;r(741);n[""]()}}]);