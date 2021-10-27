import Bench from './bench';
import { blake2s as wasmBLAKE2s, createBLAKE2s } from 'hash-wasm';
import npm_blake2s from 'blake2s';
import blake2sJs from 'blake2s-js';
import blakejs from 'blakejs';
import { blake2s as nobleBlake2s } from 'noble-hashes/lib/blake2s';
import { bytesToHex as nobleToHex } from 'noble-hashes/lib/utils';
import { getVersion } from '../utils';
let blake2s = null;

const suite = new Bench(
  [
    { size: 32, divisor: 200 },
    { size: 1 * 1024 * 1024, divisor: 1 },
  ],
  async () => {
    blake2s = await createBLAKE2s();
  },
);

suite.addAsync(`hash-wasm ${getVersion('hash-wasm')} blake2s()`, (buf) => {
  return wasmBLAKE2s(buf);
});

suite.addSync(`hash-wasm ${getVersion('hash-wasm')} createBLAKE2s()`, (buf) => {
  blake2s.init();
  blake2s.update(buf);
  return blake2s.digest();
});

suite.addSync(`blake2s ${getVersion('blake2s')}`, (buf) => {
  const hasher = npm_blake2s(32);
  hasher.update(buf);
  return hasher.digest('hex');
});

suite.addSync(`blakejs ${getVersion('blakejs')}`, (buf) => {
  return blakejs.blake2sHex(buf);
});

suite.addSync(`blake2s-js ${getVersion('blake2s-js')}`, (buf) => {
  return new blake2sJs(32).update(buf).hexDigest();
});

suite.addSync(`noble-hashes ${getVersion('noble-hashes')}`, buf => {
  const hash = nobleBlake2s(buf);
  return nobleToHex(hash);
});
