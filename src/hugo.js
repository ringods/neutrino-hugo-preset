const DEFAULT_HUGO_SITE_CONFIG = {
  contentDir: "content",
  dataDir: "data",
  layoutDir: "layouts",
  publishDir: "public",
  staticDir: "static",
  themesDir: "themes"
}

function loadHugoConfig () {
  require('toml-require').install({})

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
  return { ...DEFAULT_HUGO_SITE_CONFIG, ...localConfig }
}

module.exports = { DEFAULT_HUGO_SITE_CONFIG, loadHugoConfig }