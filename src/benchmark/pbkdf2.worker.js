import Bench from './bench';
import { createSHA512, pbkdf2 as wasmPBKDF2 } from 'hash-wasm';
import pbkdf2 from 'pbkdf2';
import cryptojs from 'crypto-js';
import cryptoJsPBKDF2 from 'crypto-js/pbkdf2';
import cryptoJsHex from 'crypto-js/enc-hex';
import cryptoJsLib from 'crypto-js/lib-typedarrays';
import { sha512 as nobleSha512 } from '@noble/hashes/sha512';
import { pbkdf2 as noblePbkdf2 } from '@noble/hashes/pbkdf2';
import { bytesToHex as nobleToHex } from '@noble/hashes/utils';
import { getVersion } from '../utils';

const iterations = 1000;
const hashSize = 32;
const salt = 'MYSALT';

const suite = new Bench([{ size: 16, divisor: 1, showIterations: true }]);

const hasher = createSHA512();
suite.addAsync(`hash-wasm ${getVersion('hash-wasm')}`, (buf) => {
  return wasmPBKDF2({
    password: buf,
    salt,
    iterations,
    hashLength: hashSize,
    hashFunction: hasher,
  });
});

suite.addSync(`pbkdf2 ${getVersion('pbkdf2')}`, (buf) => {
  return pbkdf2.pbkdf2Sync(buf, salt, iterations, hashSize, 'sha512').toString('hex');
});

suite.addSync(`crypto-js ${getVersion('crypto-js')}`, (buf) => {
  return cryptoJsPBKDF2(cryptoJsLib.create(buf), salt, {
    keySize: hashSize / 4,
    iterations,
    hasher: cryptojs.algo.SHA512,
  }).toString(cryptoJsHex);
});

suite.addSync(`noble-hashes ${getVersion('@noble/hashes')}`, (buf) => {
  return nobleToHex(
    noblePbkdf2(
      nobleSha512,
      buf,
      salt,
      {
        c: iterations,
        dkLen: hashSize
      },
    )
  );
});
