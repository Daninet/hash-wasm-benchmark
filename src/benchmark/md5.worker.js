import Bench from './bench';
import { md5 as wasmMD5 } from 'hash-wasm';
import npmMD5 from 'md5';
import nodeForge from 'node-forge';

const suite = new Bench([
  { size: 32, divisor: 200 },
  { size: 1 * 1024 * 1024, divisor: 1 },
]);

suite.add('hash-wasm', async buf => {
  return wasmMD5(buf);
});

suite.add('npm-md5', buf => {
  npmMD5(buf);
});

suite.add('node-forge', buf => {
  const md = nodeForge.md.md5.create();
  const forgeBuffer = nodeForge.util.createBuffer(buf.toString('binary'));
  md.update(forgeBuffer.data);
  md.digest().toHex();
});
