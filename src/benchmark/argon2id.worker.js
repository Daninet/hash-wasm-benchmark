import Bench from './bench';
import { argon2id as wasmArgon2 } from 'hash-wasm';
import argon2WasmPro from 'argon2-wasm-pro';
import argon2Wasm from 'argon2-wasm';
import argon2Browser from 'argon2-browser/lib/argon2';
import { getVersion } from '../utils';

const memorySize = 512;
const iterations = 8;
const hashLength = 32;
const parallelism = 1;
const salt = 'MYSALT123';

const suite = new Bench([{ size: 16, divisor: 1, showIterations: true }]);

suite.add(`hash-wasm ${getVersion('hash-wasm')}`, async (buf) => {
  return wasmArgon2({
    password: buf,
    salt,
    iterations,
    parallelism,
    memorySize,
    hashLength,
  });
});

suite.add(`argon2-wasm-pro ${getVersion('argon2-wasm-pro')}`, async (buf) => {
  const hash = await argon2WasmPro.hash({
    pass: buf,
    salt,
    time: iterations,
    mem: memorySize,
    hashLen: hashLength,
    parallelism,
    type: argon2WasmPro.argon2id,
  });
  return hash.hashHex;
});

suite.add(`argon2-wasm ${getVersion('argon2-wasm')}`, async (buf) => {
  const hash = await argon2Wasm.hash({
    pass: buf,
    salt,
    time: iterations,
    mem: memorySize,
    hashLen: hashLength,
    parallelism,
    type: argon2Wasm.types.Argon2id,
  });
  return hash.hashHex;
});

console.log(argon2Browser);

suite.add(`argon2-browser ${getVersion('argon2-browser')}`, async (buf) => {
  const hash = await argon2Browser.hash({
    pass: buf,
    salt,
    time: iterations,
    mem: memorySize,
    hashLen: hashLength,
    parallelism,
    type: argon2Browser.ArgonType.Argon2id,
  });
  return hash.hashHex;
});
