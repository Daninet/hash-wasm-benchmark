import Bench from './bench';
import { crc32 as crc } from 'crc';
import crc32 from 'crc-32';
import bufferCRC32 from 'buffer-crc32';
import { crc32 as wasmCRC32 } from 'hash-wasm';
import { getVersion } from '../utils';

const suite = new Bench([
  { size: 32, divisor: 200 },
  { size: 1 * 1024 * 1024, divisor: 1 },
]);

suite.add(`hash-wasm ${getVersion('hash-wasm')}`, async buf => {
  return wasmCRC32(buf);
});

suite.add(`crc ${getVersion('crc')}`, buf => {
  return crc(buf).toString(16);
});

suite.add(`crc-32 ${getVersion('crc-32')}`, buf => {
  return (crc32.buf(buf) >>> 0).toString(16);
});

suite.add(`buffer-crc32 ${getVersion('buffer-crc32')}`, buf => {
  return bufferCRC32(buf).toString('hex');
});
