import { Neutrino } from 'neutrino';
import mock from 'mock-fs';

// Restore the mocked file system if it was used.
afterEach(() => {
  mock.restore();
});

test('loads preset', () => {
  expect(() => require('../src')).not.toThrow();
});

test('uses preset', () => {
  const api = Neutrino();

  expect(() => api.use(require('../src'))).not.toThrow()
});

test('throws when no config.toml', () => {
  const api = Neutrino();

  expect(() => api.use(require('../src'))).toThrow('You must specify a library name');
});

