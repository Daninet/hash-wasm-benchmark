import Bench from './bench';
import { crc32 } from 'crc';
import { crc32 as wasmCRC32 } from 'hash-wasm';
import jsMD4 from 'js-md4';

const suite = new Bench([
  { size: 32, divisor: 200 },
  { size: 1 * 1024 * 1024, divisor: 1 },
]);

suite.add('hash-wasm', async buf => {
  return wasmCRC32(buf);
});

suite.add('crc', buf => {
  crc32(buf);
});
