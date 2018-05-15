export function loadHugoConfig () {
  require('toml-require').install({})

  var defaultConfig = {
    contentDir: "content",
    dataDir: "data",
    layoutDir: "layouts",
    publishDir: "public",
    staticDir: "static",
    themesDir: "themes"
  }
  var localConfig;
  try {
    localConfig = require('./config.toml')
  } catch (e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      // Re-throw as "No config.toml file found." error
      throw new Error("No config.toml file found.");
    }

  }
  // Merge defaults with local config
  return { ...defaultConfig, ...localConfig }
}
