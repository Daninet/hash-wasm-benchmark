import Bench from './bench';
import { xxhash64 as wasmXXHASH64 } from 'hash-wasm';
import xxhashjs from 'xxhashjs';
// import xxhash from 'xxhash';
import xxhashWasm from 'xxhash-wasm';
import { getVersion } from '../utils';

const SEED = 0;

const suite = new Bench([
  { size: 32, divisor: 200 },
  { size: 1 * 1024 * 1024, divisor: 1 },
]);

suite.add(`hash-wasm ${getVersion('hash-wasm')}`, async buf => {
  return wasmXXHASH64(buf, SEED);
});

// suite.add('xxhash', buf => {
//   xxhash
//     .hash64(buf, SEED)
//     .swap64()
//     .toString('hex');
// });

suite.add(`xxhashjs ${getVersion('xxhashjs')}`, buf => {
  return xxhashjs.h64(buf, SEED).toString(16);
});

suite.add(`xxhashWasm ${getVersion('xxhash-wasm')}`, async buf => {
  const hasher = await xxhashWasm();
  return hasher.h64(buf.toString(), 0, SEED);
});
