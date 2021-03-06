import Bench from './bench';
import { xxhash64 as wasmXXHASH64, createXXHash64 } from 'hash-wasm';
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
  hashInstance = await createXXHash64();
  xxhashHashInstance = await xxhashWasm();
});

suite.addAsync(`hash-wasm ${getVersion('hash-wasm')} xxhash64()`, buf => {
  return wasmXXHASH64(buf, SEED);
});

suite.addSync(`hash-wasm ${getVersion('hash-wasm')} createXXHash64()`, buf => {
  hashInstance.init();
  hashInstance.update(buf);
  return hashInstance.digest();
});

suite.addSync(`xxhashjs ${getVersion('xxhashjs')}`, buf => {
  return xxhashjs.h64(buf, SEED).toString(16);
});

suite.addSync(`xxhash-wasm ${getVersion('xxhash-wasm')}`, async buf => {
  const res = xxhashHashInstance.h64Raw(buf, 0, SEED);
  const out = Buffer.from(res);
  out.swap32();
  return out.toString('hex');
});
