import Bench from './bench';
import { md4 as wasmMD4 } from 'hash-wasm';
import jsMD4 from 'js-md4';

const suite = new Bench([
  { size: 32, divisor: 200 },
  { size: 1 * 1024 * 1024, divisor: 1 },
]);

suite.add('hash-wasm', async buf => {
  return wasmMD4(buf);
});

suite.add('js-md4', buf => {
  const hashObj = jsMD4.create();
  hashObj.update(buf);
  hashObj.hex();
});
