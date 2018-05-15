import { Neutrino } from 'neutrino';

test('loads preset', () => {
  expect(() => require('index')).not.toThrow();
});

test('uses preset', () => {
  jest.mock('hugo')
  const api = Neutrino();

  expect(() => api.use(require('index'))).not.toThrow()
});

test('throws when no config.toml', () => {
  const api = Neutrino();

  expect(() => api.use(require('index'))).toThrow('No config.toml file found.');
});