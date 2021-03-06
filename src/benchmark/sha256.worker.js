import Bench from './bench';
import { sha256 as wasmSHA256, createSHA256 } from 'hash-wasm';
import nodeForge from 'node-forge';
import cryptoJsSHA256 from 'crypto-js/sha256';
import cryptoJsHex from 'crypto-js/enc-hex';
import cryptoJsLib from 'crypto-js/lib-typedarrays';
import JsSHA from 'jssha';
import sha256Wasm from 'sha256-wasm';
import { getVersion } from '../utils';
let hashInstance = null;

const suite = new Bench([
  { size: 32, divisor: 200 },
  { size: 1 * 1024 * 1024, divisor: 1 },
], async () => {
  hashInstance = await createSHA256();
});

suite.addAsync(`hash-wasm ${getVersion('hash-wasm')} sha256()`, buf => {
  return wasmSHA256(buf);
});

suite.addSync(`hash-wasm ${getVersion('hash-wasm')} createSHA256()`, buf => {
  hashInstance.init();
  hashInstance.update(buf);
  return hashInstance.digest();
});

suite.addSync(`node-forge ${getVersion('node-forge')}`, buf => {
  const md = nodeForge.md.sha256.create();
  const forgeBuffer = nodeForge.util.createBuffer(buf.toString('binary'));
  md.update(forgeBuffer.data);
  return md.digest().toHex();
});

suite.addSync(`crypto-js ${getVersion('crypto-js')}`, buf => {
  return cryptoJsSHA256(cryptoJsLib.create(buf)).toString(cryptoJsHex);
});

suite.addSync(`jsSHA ${getVersion('jssha')}`, buf => {
  const hasher = new JsSHA('SHA-256', 'UINT8ARRAY', { encoding: 'UTF8' });
  hasher.update(buf);
  return hasher.getHash('HEX');
});

suite.addSync(`sha256-wasm ${getVersion('sha256-wasm')}`, buf => {
  const hashObj = sha256Wasm();
  hashObj.update(buf);
  return hashObj.digest('hex');
});
