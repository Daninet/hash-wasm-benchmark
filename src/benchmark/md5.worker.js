import Bench from './bench';
import { md5 as wasmMD5, createMD5 } from 'hash-wasm';
import npmMD5 from 'md5';
import nodeForge from 'node-forge';
import npmMD5Wasm from 'md5-wasm';
import sparkmd5 from 'spark-md5';
import cryptoJsMD5 from 'crypto-js/md5';
import cryptoJsHex from 'crypto-js/enc-hex';
import cryptoJsLib from 'crypto-js/lib-typedarrays';
import { getVersion } from '../utils';
let md5hasher = null;

const suite = new Bench(
  [
    { size: 32, divisor: 200 },
    { size: 1 * 1024 * 1024, divisor: 1 },
  ],
  async () => {
    md5hasher = await createMD5();
  },
);

suite.addAsync(`hash-wasm ${getVersion('hash-wasm')} md5()`, async (buf) => {
  return wasmMD5(buf);
});

suite.addSync(`hash-wasm ${getVersion('hash-wasm')} createMD5()`, (buf) => {
  md5hasher.init();
  md5hasher.update(buf);
  return md5hasher.digest();
});

suite.addSync(`spark-md5 ${getVersion('spark-md5')}`, (buf) => {
  return sparkmd5.ArrayBuffer.hash(buf);
});

suite.addSync(`md5-wasm ${getVersion('md5-wasm')}`, (buf) => {
  return npmMD5Wasm(buf);
});

suite.addSync(`md5 ${getVersion('md5')}`, (buf) => {
  return npmMD5(buf);
});

suite.addSync(`crypto-js ${getVersion('crypto-js')}`, buf => {
  return cryptoJsMD5(cryptoJsLib.create(buf)).toString(cryptoJsHex);
});

suite.addSync(`node-forge ${getVersion('node-forge')}`, (buf) => {
  const md = nodeForge.md.md5.create();
  const forgeBuffer = nodeForge.util.createBuffer(buf.toString('binary'));
  md.update(forgeBuffer.data);
  return md.digest().toHex();
});
