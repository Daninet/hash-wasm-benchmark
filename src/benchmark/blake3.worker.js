import Bench from './bench';
import { blake3 as wasmBLAKE3, createBLAKE3 } from 'hash-wasm';
import { blake3 as nobleBlake3 } from '@noble/hashes/blake3';

import { getVersion } from '../utils';
import { bytesToHex as nobleToHex } from '@noble/hashes/utils';
let hashInstance = null;
let blake3Instance = null;

const suite = new Bench(
  [
    { size: 32, divisor: 200 },
    { size: 1 * 1024 * 1024, divisor: 1 },
  ],
  async () => {
    hashInstance = await createBLAKE3();
    blake3Instance = await import('blake3/browser');
  },
);

suite.addAsync(`hash-wasm ${getVersion('hash-wasm')} blake3()`, (buf) => {
  return wasmBLAKE3(buf);
});

suite.addSync(`hash-wasm ${getVersion('hash-wasm')} createBLAKE3()`, (buf) => {
  hashInstance.init();
  hashInstance.update(buf);
  return hashInstance.digest();
});

suite.addSync(`blake3 ${getVersion('blake3')}`, (buf) => {
  return blake3Instance.hash(buf).toString('hex');
});

suite.addSync(`noble-hashes ${getVersion('@noble/hashes')}`, (buf) => {
  return nobleToHex(nobleBlake3(buf));
});
