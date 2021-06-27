import Bench from './bench';
import { xxhash3 as wasmXXHASH3, createXXHash3 } from 'hash-wasm';
import { getVersion } from '../utils';

let hashInstance = null;
const SEED = 0;

const suite = new Bench([
  { size: 32, divisor: 200 },
  { size: 1 * 1024 * 1024, divisor: 1 },
], async () => {
  hashInstance = await createXXHash3();
});

suite.addAsync(`hash-wasm ${getVersion('hash-wasm')} xxhash3()`, buf => {
  return wasmXXHASH3(buf, SEED);
});

suite.addSync(`hash-wasm ${getVersion('hash-wasm')} createXXHash3()`, buf => {
  hashInstance.init();
  hashInstance.update(buf);
  return hashInstance.digest();
});
