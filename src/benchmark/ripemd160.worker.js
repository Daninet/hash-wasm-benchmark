import Bench from './bench';
import { ripemd160 as wasmRipemd160, createRIPEMD160 } from 'hash-wasm';
import npmRipemd160 from 'ripemd160';
import cryptoJsRIPEMD160 from 'crypto-js/ripemd160';
import cryptoJsHex from 'crypto-js/enc-hex';
import cryptoJsLib from 'crypto-js/lib-typedarrays';
import { ripemd160 as nobleRipeMd160 } from 'noble-hashes/lib/ripemd160';
import { bytesToHex as nobleToHex } from 'noble-hashes/lib/utils';
import { getVersion } from '../utils';
let hashInstance = null;

const suite = new Bench([
  { size: 32, divisor: 200 },
  { size: 1 * 1024 * 1024, divisor: 1 },
], async () => {
  hashInstance = await createRIPEMD160();
});

suite.addAsync(`hash-wasm ${getVersion('hash-wasm')} ripemd160()`, buf => {
  return wasmRipemd160(buf);
});

suite.addSync(`hash-wasm ${getVersion('hash-wasm')} createRIPEMD160()`, (buf) => {
  hashInstance.init();
  hashInstance.update(buf);
  return hashInstance.digest();
});

suite.addSync(`crypto-js ${getVersion('crypto-js')}`, buf => {
  return cryptoJsRIPEMD160(cryptoJsLib.create(buf)).toString(cryptoJsHex);
});

suite.addSync(`ripemd160 ${getVersion('ripemd160')}`, buf => {
  return new npmRipemd160().update(buf).digest('hex');
});

suite.addSync(`noble-hashes ${getVersion('noble-hashes')}`, buf => {
  const hash = nobleRipeMd160(buf);
  return nobleToHex(hash);
});
