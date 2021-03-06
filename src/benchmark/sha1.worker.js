import Bench from './bench';
import { sha1 as wasmSHA1, createSHA1 } from 'hash-wasm';
import nodeForge from 'node-forge';
import npmSHA1 from 'sha1';
import cryptoJsSHA1 from 'crypto-js/sha1';
import cryptoJsHex from 'crypto-js/enc-hex';
import cryptoJsLib from 'crypto-js/lib-typedarrays';
import JsSHA from 'jssha';
import { getVersion } from '../utils';

let hashInstance = null;

const suite = new Bench([
  { size: 32, divisor: 200 },
  { size: 1 * 1024 * 1024, divisor: 1 },
], async () => {
  hashInstance = await createSHA1();
});

suite.addAsync(`hash-wasm ${getVersion('hash-wasm')} sha1()`, buf => {
  return wasmSHA1(buf);
});

suite.addSync(`hash-wasm ${getVersion('hash-wasm')} createSHA1()`, buf => {
  hashInstance.init();
  hashInstance.update(buf);
  return hashInstance.digest();
});

// suite.addAsync('window.crypto', async buf => {
//   /* eslint-disable-next-line no-restricted-globals*/
//   return Buffer.from(await self.crypto.subtle.digest('SHA-1', buf)).toString('hex');
// });

suite.addSync(`node-forge ${getVersion('node-forge')}`, buf => {
  const md = nodeForge.md.sha1.create();
  const forgeBuffer = nodeForge.util.createBuffer(buf.toString('binary'));
  md.update(forgeBuffer.data);
  return md.digest().toHex();
});

suite.addSync(`sha1 (from npm) ${getVersion('sha1')}`, buf => {
  return npmSHA1(buf);
});

suite.addSync(`crypto-js ${getVersion('crypto-js')}`, buf => {
  return cryptoJsSHA1(cryptoJsLib.create(buf)).toString(cryptoJsHex);
});

suite.addSync(`jsSHA ${getVersion('jssha')}`, buf => {
  const hasher = new JsSHA('SHA-1', 'UINT8ARRAY', { encoding: 'UTF8' });
  hasher.update(buf);
  return hasher.getHash('HEX');
});
