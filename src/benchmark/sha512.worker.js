import Bench from './bench';
import { sha512 as wasmSHA512, createSHA512 } from 'hash-wasm';
import nodeForge from 'node-forge';
import cryptoJsSHA512 from 'crypto-js/sha512';
import cryptoJsHex from 'crypto-js/enc-hex';
import cryptoJsLib from 'crypto-js/lib-typedarrays';
import JsSHA from 'jssha';
import sha512Wasm from 'sha512-wasm';
import { sha512 as nobleSha512 } from 'noble-hashes/lib/sha512';
import { bytesToHex as nobleToHex } from 'noble-hashes/lib/utils';
import { getVersion } from '../utils';

let hashInstance = null;

const suite = new Bench([
  { size: 32, divisor: 200 },
  { size: 1 * 1024 * 1024, divisor: 1 },
], async () => {
  hashInstance = await createSHA512();
});

suite.addAsync(`hash-wasm ${getVersion('hash-wasm')} sha512()`, buf => {
  return wasmSHA512(buf);
});

suite.addSync(`hash-wasm ${getVersion('hash-wasm')} createSHA512()`, buf => {
  hashInstance.init();
  hashInstance.update(buf);
  return hashInstance.digest();
});

suite.addSync(`node-forge ${getVersion('node-forge')}`, buf => {
  const md = nodeForge.md.sha512.create();
  const forgeBuffer = nodeForge.util.createBuffer(buf.toString('binary'));
  md.update(forgeBuffer.data);
  return md.digest().toHex();
});

suite.addSync(`crypto-js ${getVersion('crypto-js')}`, buf => {
  return cryptoJsSHA512(cryptoJsLib.create(buf)).toString(cryptoJsHex);
});

suite.addSync(`jsSHA ${getVersion('jssha')}`, buf => {
  const hasher = new JsSHA('SHA-512', 'UINT8ARRAY', { encoding: 'UTF8' });
  hasher.update(buf);
  return hasher.getHash('HEX');
});

suite.addSync(`sha512-wasm ${getVersion('sha512-wasm')}`, buf => {
  const hashObj = sha512Wasm();
  hashObj.update(buf);
  return hashObj.digest('hex');
});

suite.addSync(`noble-hashes ${getVersion('noble-hashes')}`, buf => {
  const hash = nobleSha512(buf);
  return nobleToHex(hash);
});
