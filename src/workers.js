import MD4Worker from './benchmark/md4.worker.js';
import MD5Worker from './benchmark/md5.worker.js';
import CRC32Worker from './benchmark/crc32.worker.js';
import SHA1Worker from './benchmark/sha1.worker.js';
import SHA3Worker from './benchmark/sha3.worker.js';
import SHA256Worker from './benchmark/sha256.worker.js';
import SHA512Worker from './benchmark/sha512.worker.js';
import XXHash64Worker from './benchmark/xxhash64.worker.js';

const workerData = [
  {
    name: 'md4',
    factory: MD4Worker,
  },
  {
    name: 'md5',
    factory: MD5Worker,
  },
  {
    name: 'crc32',
    factory: CRC32Worker,
  },
  {
    name: 'sha1',
    factory: SHA1Worker,
  },
  {
    name: 'sha256',
    factory: SHA256Worker,
  },
  {
    name: 'sha512',
    factory: SHA512Worker,
  },
  {
    name: 'sha3-512',
    factory: SHA3Worker,
  },
  {
    name: 'xxhash64',
    factory: XXHash64Worker,
  },
];

export default workerData;
