import Bench from './bench';
import { ripemd160 as wasmRipemd160 } from 'hash-wasm';
import npmRipemd160 from 'ripemd160';
import cryptoJsRIPEMD160 from 'crypto-js/ripemd160';
import cryptoJsHex from 'crypto-js/enc-hex';
import cryptoJsLib from 'crypto-js/lib-typedarrays';
import { getVersion } from '../utils';

const suite = new Bench([
  { size: 32, divisor: 200 },
  { size: 1 * 1024 * 1024, divisor: 1 },
]);

suite.add(`hash-wasm ${getVersion('hash-wasm')}`, async buf => {
  return wasmRipemd160(buf);
});

suite.add(`crypto-js ${getVersion('crypto-js')}`, buf => {
  return cryptoJsRIPEMD160(cryptoJsLib.create(buf)).toString(cryptoJsHex);
});

suite.add(`ripemd160 ${getVersion('ripemd160')}`, buf => {
  return new npmRipemd160().update(buf).digest('hex');
});
