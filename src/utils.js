import packageJSON from '../package.json';

export function getVersion(name) {
  return packageJSON.dependencies[name] ?? '';
}
