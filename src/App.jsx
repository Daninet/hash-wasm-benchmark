import React from 'react';
import workerData from './workers';
import Table from './Table';

import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { workers: [], running: false, cycleCount: 0 };
  }

  onStart = () => {
    this.setState({ running: true, cycleCount: 0 });
  };

  messageHandler = (name, data) => {
    this.setState(prevState => {
      const { workers, cycleCount } = prevState;
      console.log('worker', cycleCount, workers, name, data);
      const index = workers.findIndex(w => w.name === name);
      const worker = { ...workers[index] };
      let running = true;
      let newCycleCount = cycleCount;
      if (data.msg === 'init') {
        worker.results = [];
        worker.functions = data.functions;
        worker.scenarios = data.scenarios;
      } else if (data.msg === 'progress') {
        worker.results.push(data.results);
      } else if (data.msg === 'finish') {
        newCycleCount += 1;
        if (newCycleCount < 3) {
          worker.w.postMessage('run');
        } else {
          running = false;
          worker.w.terminate();
        }
      }

      const newArray = [...prevState.workers];
      newArray[index] = worker;
      return {
        running,
        cycleCount: newCycleCount,
        workers: newArray,
      };
    });
  };

  initWorkers = () => {
    this.setState({ workers: workerData });
  };

  componentDidMount() {
    this.initWorkers();
  }

  render() {
    const { workers, running } = this.state;

    return (
      <section className="app">
        <h2>
          Hash-wasm benchmark &nbsp;
          <a href="https://github.com/Daninet/hash-wasm-benchmark" target="_blank">
            <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/daninet/hash-wasm-benchmark?style=social"/>
          </a>
        </h2>
        <p>
          <a href="https://github.com/Daninet/hash-wasm-benchmark" target="_blank">
            Source code
          </a>
        </p>
        {running && <p>Running...</p>}
        {workers.map(worker => (
          <Table
            key={worker.name}
            worker={worker}
            running={running}
            onMessage={this.messageHandler}
            onStart={this.onStart}
          />
        ))}
      </section>
    );
  }
}

export default App;
