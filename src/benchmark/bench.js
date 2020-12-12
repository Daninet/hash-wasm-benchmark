const TEST_LENGTH = 1000;

// eslint-disable-next-line no-restricted-globals
const worker = self;

class Bench {
  scenarios = [];
  functions = [];

  constructor(scenarios) {
    this.scenarios = scenarios;
    this.scenarios.forEach(scenario => {
      scenario.buf = Buffer.alloc(scenario.size);
      scenario.buf.fill('\x00\x01\x02\x03\x04\x05\x06\x07\x08\xFF');
    });

    worker.onmessage = event => {
      if (event.data === 'run') {
        this.run();
      }
    };

    setTimeout(() => {
      worker.postMessage({
        msg: 'init',
        name: this.name,
        functions: this.functions.map(fn => fn.name),
        scenarios,
      });
    }, 50);
  }

  add(name, fn) {
    this.functions.push({
      name,
      fn: async (buf, divisor) => {
        for (let i = 0; i < divisor; i++) {
          await fn(buf);
        }
      },
    });
  }

  getResults(fn, scenario, divisor, cycles, duration) {
    // cycle = op * division
    const ops = cycles * divisor;
    const totalSizeHashed = (ops * scenario.size) / 1024 / 1024;
    const durationSeconds = duration / 1000;
    const throughput = totalSizeHashed / durationSeconds;

    return {
      name: fn.name,
      ops,
      cycles,
      totalDuration: duration,
      avgCycleDuration: duration / cycles, // time requied for 1 cycle (it should be > 50ms to make precise measurements)
      throughput, // MB/s
      size: scenario.size,
      divisor,
    };
  }

  async measure(func, scenario, divisor, targetDuration) {
    let cycles = 0;
    let now = performance.now();
    const benchStart = now;
    const stopAt = now + targetDuration;
    while (now < stopAt) {
      await func.fn(scenario.buf, divisor);
      cycles = cycles + 1;
      now = performance.now();
    }
    const benchEnd = now;
    const duration = benchEnd - benchStart;

    return this.getResults(func, scenario, divisor, cycles, duration);
  }

  async calibrateDivisor(func, scenario) {
    let divisor = 1;
    const target = 10;
    while (true) {
      const results = await this.measure(func, scenario, divisor, target);
      if (results.cycles < 2) {
        break;
      }
      if (
        results.avgCycleDuration <= target &&
        results.avgCycleDuration * 2 >= target
      ) {
        const percentage =
          (target - results.avgCycleDuration) / results.avgCycleDuration;
        divisor = Math.round(divisor + 1 + divisor * percentage);
      } else {
        divisor = divisor * 2;
      }
    }

    return divisor;
  }

  async run() {
    for (const func of this.functions) {
      for (const scenario of this.scenarios) {
        // warm up
        for (let i = 0; i < 4; i++) {
          await func.fn(scenario.buf, scenario.divisor);
        }

        await new Promise(resolve => setTimeout(resolve, 100)); // sleep

        const divisor = await this.calibrateDivisor(func, scenario);

        await new Promise(resolve => setTimeout(resolve, 100)); // sleep

        const results = await this.measure(
          func,
          scenario,
          divisor,
          TEST_LENGTH,
        );

        setTimeout(() => {
          worker.postMessage({ msg: 'progress', results });
        }, 0);

        await new Promise(resolve => setTimeout(resolve, 500)); // sleep
      }
    }

    worker.postMessage({ msg: 'finish' });
  }
}

export default Bench;