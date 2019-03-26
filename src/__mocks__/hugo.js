const hugo = jest.genMockFromModule('hugo');
const DEFAULT_HUGO_SITE_CONFIG = hugo.DEFAULT_HUGO_SITE_CONFIG;

let mockHugoConfig = Object.create(null);

function loadHugoConfig () {
  return { ...DEFAULT_HUGO_SITE_CONFIG, ...mockHugoConfig }
}

function setMockedHugoConfig (newMockedHugoConfig) {
  mockHugoConfig = newMockedHugoConfig
}

module.exports = { DEFAULT_HUGO_SITE_CONFIG, loadHugoConfig, setMockedHugoConfig }