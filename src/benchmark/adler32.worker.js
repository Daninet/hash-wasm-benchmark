import Bench from './bench';
import adler32 from 'adler-32';
import { adler32 as wasmAdler32, createAdler32 } from 'hash-wasm';
import { getVersion } from '../utils';
let adler32Instance = null;

const suite = new Bench([
    { size: 32, divisor: 200 },
    { size: 1 * 1024 * 1024, divisor: 1 },
  ],
  async () => {
    adler32Instance = await createAdler32();
  }
);

suite.addAsync(`hash-wasm ${getVersion('hash-wasm')} adler32()`, buf => {
  return wasmAdler32(buf);
});

suite.addSync(`hash-wasm ${getVersion('hash-wasm')} createAdler32()`, (buf) => {
  adler32Instance.init();
  adler32Instance.update(buf);
  return adler32Instance.digest();
});

suite.addSync(`adler-32 ${getVersion('adler-32')}`, buf => {
  return (adler32.buf(buf) >>> 0).toString(16);
});
