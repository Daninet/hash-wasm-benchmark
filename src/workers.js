import Adler32Worker from './benchmark/adler32.worker.js';
import Argon2idWorker from './benchmark/argon2id.worker.js';
import BcryptWorker from './benchmark/bcrypt.worker.js';
import BLAKE2bWorker from './benchmark/blake2b.worker.js';
import BLAKE2sWorker from './benchmark/blake2s.worker.js';
import BLAKE3Worker from './benchmark/blake3.worker.js';
import MD4Worker from './benchmark/md4.worker.js';
import MD5Worker from './benchmark/md5.worker.js';
import CRC32Worker from './benchmark/crc32.worker.js';
import RIPEMD160Worker from './benchmark/ripemd160.worker.js';
import SHA1Worker from './benchmark/sha1.worker.js';
import SHA3Worker from './benchmark/sha3.worker.js';
import SHA256Worker from './benchmark/sha256.worker.js';
import SHA512Worker from './benchmark/sha512.worker.js';
import XXHash32Worker from './benchmark/xxhash32.worker.js';
import XXHash64Worker from './benchmark/xxhash64.worker.js';
import XXHash3Worker from './benchmark/xxhash3.worker.js';
import XXHash128Worker from './benchmark/xxhash128.worker.js';
import PBKDF2Worker from './benchmark/pbkdf2.worker.js';
import ScryptWorker from './benchmark/scrypt.worker.js';

const workerData = [
  {
    name: 'adler32',
    factory: Adler32Worker,
  },
  {
    name: 'argon2id',
    factory: Argon2idWorker,
  },
  {
    name: 'bcrypt (cost = 8)',
    factory: BcryptWorker,
  },
  {
    name: 'blake2b',
    factory: BLAKE2bWorker,
  },
  {
    name: 'blake2s',
    factory: BLAKE2sWorker,
  },
  {
    name: 'blake3',
    factory: BLAKE3Worker,
  },
  {
    name: 'crc32',
    factory: CRC32Worker,
  },
  {
    name: 'md4',
    factory: MD4Worker,
  },
  {
    name: 'md5',
    factory: MD5Worker,
  },
  {
    name: 'ripemd160',
    factory: RIPEMD160Worker,
  },
  {
    name: 'scrypt (N=1024,r=8,p=2)',
    factory: ScryptWorker,
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
    name: 'pbkdf2 (1000 iterations)',
    factory: PBKDF2Worker,
  },
  {
    name: 'xxhash32',
    factory: XXHash32Worker,
  },
  {
    name: 'xxhash64',
    factory: XXHash64Worker,
  },
  {
    name: 'xxhash3',
    factory: XXHash3Worker,
  },
  {
    name: 'xxhash128',
    factory: XXHash128Worker,
  },
];

export default workerData;
