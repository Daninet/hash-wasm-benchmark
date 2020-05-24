import Bench from './bench';
import { sha3 as wasmSHA3 } from 'hash-wasm';
import { SHA3 as npmSHA3 } from 'sha3';
import JsSHA from 'jssha';

const suite = new Bench([
  { size: 32, divisor: 200 },
  { size: 1 * 1024 * 1024, divisor: 1 },
]);

suite.add('hash-wasm', async buf => {
  return wasmSHA3(buf);
});

suite.add('sha3 (from npm)', buf => {
  const hasher = new npmSHA3(512);
  hasher.update(buf);
  hasher.digest('hex');
});

suite.add('jsSHA', buf => {
  const hasher = new JsSHA('SHA3-512', 'UINT8ARRAY', { encoding: 'UTF8' });
  hasher.update(buf);
  hasher.getHash('HEX');
});
