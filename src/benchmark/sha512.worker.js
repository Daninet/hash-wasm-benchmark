import Bench from './bench';
import { sha512 as wasmSHA512 } from 'hash-wasm';
import nodeForge from 'node-forge';
import cryptoJsSHA512 from 'crypto-js/sha512';
import cryptoJsHex from 'crypto-js/enc-hex';
import JsSHA from 'jssha';

const suite = new Bench([
  { size: 32, divisor: 200 },
  { size: 1 * 1024 * 1024, divisor: 1 },
]);

suite.add('hash-wasm', async buf => {
  return wasmSHA512(buf);
});

suite.add('node-forge', buf => {
  const md = nodeForge.md.sha512.create();
  const forgeBuffer = nodeForge.util.createBuffer(buf.toString('binary'));
  md.update(forgeBuffer.data);
  md.digest().toHex();
});

suite.add('crypto-js', buf => {
  cryptoJsHex.stringify(cryptoJsSHA512(buf.toString('utf8')));
});

suite.add('jsSHA', buf => {
  const hasher = new JsSHA('SHA-512', 'UINT8ARRAY', { encoding: 'UTF8' });
  hasher.update(buf);
  hasher.getHash('HEX');
});
