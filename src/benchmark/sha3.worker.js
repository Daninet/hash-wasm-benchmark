import Bench from './bench';
import { sha3 as wasmSHA3, createSHA3 } from 'hash-wasm';
import { SHA3 as npmSHA3 } from 'sha3';
import JsSHA from 'jssha';
import sha3Wasm from 'sha3-wasm';
import { sha3_512 as nobleSha3 } from 'noble-hashes/lib/sha3';
import { bytesToHex as nobleToHex } from 'noble-hashes/lib/utils';
import { getVersion } from '../utils';
let hashInstance = null;

const suite = new Bench([
  { size: 32, divisor: 200 },
  { size: 1 * 1024 * 1024, divisor: 1 },
], async () => {
  hashInstance = await createSHA3();
});

suite.addAsync(`hash-wasm ${getVersion('hash-wasm')} sha3()`, buf => {
  return wasmSHA3(buf);
});

suite.addSync(`hash-wasm ${getVersion('hash-wasm')} createSHA3()`, buf => {
  hashInstance.init();
  hashInstance.update(buf);
  return hashInstance.digest();
});

suite.addSync(`sha3 (from npm) ${getVersion('sha3')}`, buf => {
  const hasher = new npmSHA3(512);
  hasher.update(buf);
  return hasher.digest('hex');
});

suite.addSync(`jsSHA ${getVersion('jssha')}`, buf => {
  const hasher = new JsSHA('SHA3-512', 'UINT8ARRAY', { encoding: 'UTF8' });
  hasher.update(buf);
  return hasher.getHash('HEX');
});

suite.addSync(`sha3-wasm ${getVersion('sha3-wasm')}`, buf => {
  const hashObj = sha3Wasm.sha3_512();
  hashObj.update(buf);
  return hashObj.digest('hex');
});

suite.addSync(`noble-hashes ${getVersion('noble-hashes')}`, buf => {
  const hash = nobleSha3(buf);
  return nobleToHex(hash);
});
