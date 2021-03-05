import Bench from './bench';
import { sha3 as wasmSHA3 } from 'hash-wasm';
import { SHA3 as npmSHA3 } from 'sha3';
import JsSHA from 'jssha';
import sha3Wasm from 'sha3-wasm';
import { getVersion } from '../utils';

const suite = new Bench([
  { size: 32, divisor: 200 },
  { size: 1 * 1024 * 1024, divisor: 1 },
]);

suite.add(`hash-wasm ${getVersion('hash-wasm')}`, async buf => {
  return wasmSHA3(buf);
});

suite.add(`sha3 (from npm) ${getVersion('sha3')}`, buf => {
  const hasher = new npmSHA3(512);
  hasher.update(buf);
  return hasher.digest('hex');
});

suite.add(`jsSHA ${getVersion('jssha')}`, buf => {
  const hasher = new JsSHA('SHA3-512', 'UINT8ARRAY', { encoding: 'UTF8' });
  hasher.update(buf);
  return hasher.getHash('HEX');
});

suite.add(`sha3-wasm ${getVersion('sha3-wasm')}`, buf => {
  const hashObj = sha3Wasm.sha3_512();
  hashObj.update(buf);
  return hashObj.digest('hex');
});
