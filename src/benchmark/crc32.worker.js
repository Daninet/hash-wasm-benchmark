import Bench from './bench';
import { crc32 as crc } from 'crc';
import crc32 from 'crc-32';
import bufferCRC32 from 'buffer-crc32';
import { crc32 as wasmCRC32, createCRC32 } from 'hash-wasm';
import { getVersion } from '../utils';
let crc32Instance = null;

const suite = new Bench([
    { size: 32, divisor: 200 },
    { size: 1 * 1024 * 1024, divisor: 1 },
  ],
  async () => {
    crc32Instance = await createCRC32();
  }
);

suite.addAsync(`hash-wasm ${getVersion('hash-wasm')} crc32()`, buf => {
  return wasmCRC32(buf);
});

suite.addSync(`hash-wasm ${getVersion('hash-wasm')} createCRC32()`, (buf) => {
  crc32Instance.init();
  crc32Instance.update(buf);
  return crc32Instance.digest();
});

suite.addSync(`crc ${getVersion('crc')}`, buf => {
  return crc(buf).toString(16);
});

suite.addSync(`crc-32 ${getVersion('crc-32')}`, buf => {
  return (crc32.buf(buf) >>> 0).toString(16);
});

suite.addSync(`buffer-crc32 ${getVersion('buffer-crc32')}`, buf => {
  return bufferCRC32(buf).toString('hex');
});
