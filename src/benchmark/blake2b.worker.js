import Bench from './bench';
import { blake2b as wasmBLAKE2b, createBLAKE2b } from 'hash-wasm';
import npm_blake2b from 'blake2b';
import npm_blake2bwasm from 'blake2b-wasm';
import blakejs from 'blakejs';
import { blake2b as nobleBlake2b } from 'noble-hashes/lib/blake2b';
import { bytesToHex as nobleToHex } from 'noble-hashes/lib/utils';
import { getVersion } from '../utils';

npm_blake2bwasm.ready(() => []);
let blake2b = null;

const suite = new Bench(
  [
    { size: 32, divisor: 200 },
    { size: 1 * 1024 * 1024, divisor: 1 },
  ],
  async () => {
    blake2b = await createBLAKE2b();
  },
);

suite.addAsync(`hash-wasm ${getVersion('hash-wasm')} blake2b()`, (buf) => {
  return wasmBLAKE2b(buf);
});

suite.addSync(`hash-wasm ${getVersion('hash-wasm')} createBLAKE2b()`, (buf) => {
  blake2b.init();
  blake2b.update(buf);
  return blake2b.digest();
});

suite.addSync(`blake2b ${getVersion('blake2b')}`, (buf) => {
  const hasher = npm_blake2b(64);
  hasher.update(buf);
  return hasher.digest('hex');
});

suite.addSync(`blake2b-wasm ${getVersion('blake2b-wasm')}`, (buf) => {
  const hasher = npm_blake2bwasm(64);
  hasher.update(buf);
  return hasher.digest('hex');
});

suite.addSync(`blakejs ${getVersion('blakejs')}`, (buf) => {
  return blakejs.blake2bHex(buf);
});

suite.addSync(`noble-hashes ${getVersion('noble-hashes')}`, buf => {
  const hash = nobleBlake2b(buf);
  return nobleToHex(hash);
});
