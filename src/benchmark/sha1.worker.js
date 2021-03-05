import Bench from './bench';
import { sha1 as wasmSHA1 } from 'hash-wasm';
import nodeForge from 'node-forge';
import npmSHA1 from 'sha1';
import cryptoJsSHA1 from 'crypto-js/sha1';
import cryptoJsHex from 'crypto-js/enc-hex';
import cryptoJsLib from 'crypto-js/lib-typedarrays';
import JsSHA from 'jssha';
import { getVersion } from '../utils';

const suite = new Bench([
  { size: 32, divisor: 200 },
  { size: 1 * 1024 * 1024, divisor: 1 },
]);

suite.add(`hash-wasm ${getVersion('hash-wasm')}`, async buf => {
  return wasmSHA1(buf);
});

// suite.add('window.crypto', buf => {
//   /* eslint-disable-next-line no-restricted-globals*/
//   self.crypto.subtle.digest('SHA-1', buf);
// });

suite.add(`node-forge ${getVersion('node-forge')}`, buf => {
  const md = nodeForge.md.sha1.create();
  const forgeBuffer = nodeForge.util.createBuffer(buf.toString('binary'));
  md.update(forgeBuffer.data);
  return md.digest().toHex();
});

suite.add(`sha1 (from npm) ${getVersion('sha1')}`, buf => {
  return npmSHA1(buf);
});

suite.add(`crypto-js ${getVersion('crypto-js')}`, buf => {
  return cryptoJsSHA1(cryptoJsLib.create(buf)).toString(cryptoJsHex);
});

suite.add(`jsSHA ${getVersion('jssha')}`, buf => {
  const hasher = new JsSHA('SHA-1', 'UINT8ARRAY', { encoding: 'UTF8' });
  hasher.update(buf);
  return hasher.getHash('HEX');
});
