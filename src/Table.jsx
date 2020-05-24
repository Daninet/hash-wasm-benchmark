import React from 'react';
import _ from 'lodash';

function bytesToSize(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes == 0) return '0 Byte';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

const Table = ({ worker, onMessage, onStart, running }) => {
  if (!worker) return null;

  const getResult = (scenario, fn) => {
    const resultItems = worker.results.filter(
      ({ name, size }) => name === fn && size === scenario.size,
    );
    if (!resultItems.length) return '';

    const format = throughput => `${throughput.toFixed(2)} MB/s`;
    const items = resultItems.map((item, key) => (
      <div key={key}>{format(item.throughput)}</div>
    ));
    const avg = _.meanBy(resultItems, item => item.throughput);

    return [
      ...items,
      <div className="bold" key="avg">{`Avg: ${format(avg)}`}</div>,
    ];
  };

  const onRun = () => {
    worker.w = new worker.factory(); // init web worker
    worker.w.onmessage = ({ data }) => onMessage(worker.name, data);
    worker.w.postMessage('run');
    onStart();
  };

  return (
    <table>
      <thead>
        <tr>
          <th>
            {worker.name}
            {!running && <button onClick={onRun}>Run</button>}
          </th>
          {worker.scenarios?.map(scenario => (
            <th key={scenario.size}>{bytesToSize(scenario.size)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {worker.functions?.map(fn => (
          <tr key={fn}>
            <td>{fn}</td>
            {worker.scenarios?.map(scenario => (
              <td>{getResult(scenario, fn)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
