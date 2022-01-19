import Bench from './bench';
import { scrypt as wasmScrypt } from 'hash-wasm';
import scryptjs from 'scrypt-js';
import scryptsy from 'scryptsy';
import { scrypt as nobleScrypt } from '@noble/hashes/scrypt';
import { bytesToHex as nobleToHex } from '@noble/hashes/utils';
import { getVersion } from '../utils';

const costFactor = 1024;
const blockSize = 8;
const parallelism = 2;
const hashLength = 32;
const salt = 'MYSALT123';

const suite = new Bench([{ size: 16, divisor: 1, showIterations: true }]);

suite.addAsync(`hash-wasm ${getVersion('hash-wasm')}`, (buf) => {
  return wasmScrypt({
    password: buf,
    salt,
    costFactor,
    blockSize,
    parallelism,
    hashLength,
  });
});

suite.addAsync(`scrypt-js ${getVersion('scrypt-js')}`, async (buf) => {
  const hash = await scryptjs.scrypt(
    buf,
    Buffer.from(salt),
    costFactor,
    blockSize,
    parallelism,
    hashLength,
  );
  return Buffer.from(hash).toString('hex');
});

suite.addSync(`scryptsy ${getVersion('scryptsy')}`, (buf) => {
  return scryptsy(
    buf,
    salt,
    costFactor,
    blockSize,
    parallelism,
    hashLength,
  ).toString('hex');
});

suite.addSync(`noble-hashes ${getVersion('@noble/hashes')}`, (buf) => {
  return nobleToHex(
    nobleScrypt(
      buf,
      salt,
      {
        N: costFactor,
        r: blockSize,
        p: parallelism,
        dkLen: hashLength
      },
    )
  );
});
