import Bench from './bench';
import { xxhash32 as wasmXXHASH32, createXXHash32 } from 'hash-wasm';
import xxhashjs from 'xxhashjs';
import xxhashWasm from 'xxhash-wasm';
import { getVersion } from '../utils';

let hashInstance = null;
let xxhashHashInstance = null;
const SEED = 0;

const suite = new Bench([
  { size: 32, divisor: 200 },
  { size: 1 * 1024 * 1024, divisor: 1 },
], async () => {
  hashInstance = await createXXHash32();
  xxhashHashInstance = await xxhashWasm();
});

suite.addAsync(`hash-wasm ${getVersion('hash-wasm')} xxhash32()`, buf => {
  return wasmXXHASH32(buf, SEED);
});

suite.addSync(`hash-wasm ${getVersion('hash-wasm')} createXXHash32()`, buf => {
  hashInstance.init();
  hashInstance.update(buf);
  return hashInstance.digest();
});

suite.addSync(`xxhashjs ${getVersion('xxhashjs')}`, buf => {
  return xxhashjs.h32(buf, SEED).toString(16);
});

suite.addSync(`xxhash-wasm ${getVersion('xxhash-wasm')}`, async buf => {
  const res = xxhashHashInstance.h32Raw(buf, SEED);
  return res.toString(16);
});
