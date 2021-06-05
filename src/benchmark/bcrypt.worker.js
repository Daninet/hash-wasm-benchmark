import Bench from './bench';
import { bcrypt as hashWasmBcrypt } from 'hash-wasm';
import bcryptjs from 'bcryptjs';
import { getVersion } from '../utils';

const costFactor = 8;
const salt = '1234567890123456';
let encodedSalt = null;

const suite = new Bench([{ size: 16, divisor: 1, showIterations: true }], async () => {
  encodedSalt = (await hashWasmBcrypt({
    password: '1',
    salt,
    costFactor,
  })).slice(0, 29);
});

suite.addAsync(`hash-wasm ${getVersion('hash-wasm')}`, () => {
  return hashWasmBcrypt({
    password: '1234',
    salt,
    costFactor,
  });
});

suite.addAsync(`bcryptjs ${getVersion('bcryptjs')}`, () => {
  return bcryptjs.hashSync('1234', encodedSalt);
});
