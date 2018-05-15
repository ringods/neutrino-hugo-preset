const hugo = jest.genMockFromModule('hugo');

function loadHugoConfig () {
  return { something: "value" }
}

module.exports = { loadHugoConfig }