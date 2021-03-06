import Bench from './bench';
import { md4 as wasmMD4, createMD4 } from 'hash-wasm';
import jsMD4 from 'js-md4';
import { getVersion } from '../utils';
let md4Instance = null;

const suite = new Bench([
  { size: 32, divisor: 200 },
  { size: 1 * 1024 * 1024, divisor: 1 },
], async () => {
  md4Instance = await createMD4();
});

suite.addAsync(`hash-wasm ${getVersion('hash-wasm')} md4()`, buf => {
  return wasmMD4(buf);
});

suite.addSync(`hash-wasm ${getVersion('hash-wasm')} createMD4()`, buf => {
  md4Instance.init();
  md4Instance.update(buf);
  return md4Instance.digest();
});

suite.addSync(`js-md4 ${getVersion('js-md4')}`, buf => {
  const hashObj = jsMD4.create();
  hashObj.update(buf);
  return hashObj.hex();
});
