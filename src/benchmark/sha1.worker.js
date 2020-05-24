import Bench from './bench';
import { sha1 as wasmSHA1 } from 'hash-wasm';
import nodeForge from 'node-forge';
import npmSHA1 from 'sha1';
import cryptoJsSHA1 from 'crypto-js/sha1';
import cryptoJsHex from 'crypto-js/enc-hex';
import JsSHA from 'jssha';

const suite = new Bench([
  { size: 32, divisor: 200 },
  { size: 1 * 1024 * 1024, divisor: 1 },
]);

suite.add('hash-wasm', async buf => {
  return wasmSHA1(buf);
});

suite.add('node-forge', buf => {
  const md = nodeForge.md.sha1.create();
  const forgeBuffer = nodeForge.util.createBuffer(buf.toString('binary'));
  md.update(forgeBuffer.data);
  md.digest().toHex();
});

suite.add('sha1 (from npm)', buf => {
  npmSHA1(buf);
});

suite.add('crypto-js', buf => {
  cryptoJsHex.stringify(cryptoJsSHA1(buf.toString('utf8')));
});

suite.add('jsSHA', buf => {
  const hasher = new JsSHA('SHA-1', 'UINT8ARRAY', { encoding: 'UTF8' });
  hasher.update(buf);
  const hash = hasher.getHash('HEX');
});
