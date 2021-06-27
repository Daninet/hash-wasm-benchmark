import Bench from './bench';
import { xxhash128 as wasmXXHASH128, createXXHash128 } from 'hash-wasm';
import { getVersion } from '../utils';

let hashInstance = null;
const SEED = 0;

const suite = new Bench([
  { size: 32, divisor: 200 },
  { size: 1 * 1024 * 1024, divisor: 1 },
], async () => {
  hashInstance = await createXXHash128();
});

suite.addAsync(`hash-wasm ${getVersion('hash-wasm')} xxhash128()`, buf => {
  return wasmXXHASH128(buf, SEED);
});

suite.addSync(`hash-wasm ${getVersion('hash-wasm')} createXXHash128()`, buf => {
  hashInstance.init();
  hashInstance.update(buf);
  return hashInstance.digest();
});
