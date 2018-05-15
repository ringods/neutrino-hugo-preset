import { Neutrino } from 'neutrino';

jest.mock('hugo')

test('uses preset', () => {
  const api = Neutrino();

  expect(() => api.use(require('index'))).not.toThrow()
});
