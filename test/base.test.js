import { Neutrino } from 'neutrino';

jest.mock('hugo')
const { loadHugoConfig, setMockedHugoConfig } = require('hugo')

test('uses preset', () => {
  const api = Neutrino();

  expect(() => api.use(require('index'))).not.toThrow()
});

test('base directories without theme', () => {
  setMockedHugoConfig({
    baseURL: "https://www.safeimage.io/",
    languageCode: "en-us",
    title: "SafeImage.io"
  })

  const api = Neutrino({
    command: 'build',
    env: { NODE_ENV: 'production' }
  });

  api.use(require('index'));
  const config = api.config.toConfig();
  console.log(config)
  expect(config.target).toBe('web');
});
test('base directories with theme', () => {
  setMockedHugoConfig({
    baseURL: "https://www.safeimage.io/",
    languageCode: "en-us",
    title: "SafeImage.io",
    theme: "mytheme"
  })

  const api = Neutrino({
    command: 'build',
    env: { NODE_ENV: 'production' }
  });

  api.use(require('index'));
  const config = api.config.toConfig();
  console.log(config)
  expect(config.target).toBe('web');
});
