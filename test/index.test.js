import { Neutrino } from 'neutrino';

jest.unmock('hugo')

test('loads preset', () => {
  expect(() => require('index')).not.toThrow();
});

test('throws when no config.toml', () => {
  const api = Neutrino();

  expect(() => api.use(require('index'))).toThrow('No config.toml file found.');
});
