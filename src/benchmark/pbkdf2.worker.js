import Bench from './bench';
import { createSHA512, pbkdf2 as wasmPBKDF2 } from 'hash-wasm';
import pbkdf2 from 'pbkdf2';
import cryptojs from 'crypto-js';
import cryptoJsPBKDF2 from 'crypto-js/pbkdf2';
import cryptoJsHex from 'crypto-js/enc-hex';
import cryptoJsLib from 'crypto-js/lib-typedarrays';
import { getVersion } from '../utils';

const iterations = 1000;
const hashSize = 32;
const salt = 'MYSALT';

const suite = new Bench([{ size: 16, divisor: 1, showIterations: true }]);

const hasher = createSHA512();
suite.add(`hash-wasm ${getVersion('hash-wasm')}`, async (buf) => {
  return wasmPBKDF2({
    password: buf,
    salt,
    iterations,
    hashLength: hashSize,
    hashFunction: hasher,
  });
});

suite.add(`pbkdf2 ${getVersion('pbkdf2')}`, (buf) => {
  return pbkdf2.pbkdf2Sync(buf, salt, iterations, hashSize, 'sha512').toString('hex');
});

suite.add(`crypto-js ${getVersion('crypto-js')}`, (buf) => {
  return cryptoJsPBKDF2(cryptoJsLib.create(buf), salt, {
    keySize: hashSize / 4,
    iterations,
    hasher: cryptojs.algo.SHA512,
  }).toString(cryptoJsHex);
});
