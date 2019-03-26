const path = require('path')
const hugo = require('hugo')

module.exports = (neutrino, opts = {}) => {
  var site_config = hugo.loadHugoConfig()

  neutrino.config.entry(path.join(site_config.staticDir, 'css', 'site')).add('src/scss/main.scss')
  neutrino.config.output.path(site_config.staticDir)
    .filename('[name].js')
    .chunkFilename('[name].[chunkhash].js')
    .end()

  // Test the fork middleware to split site & theme building in separate webpack configs
  // https://neutrino.js.org/packages/fork/
  // https://github.com/webpack/webpack/tree/master/examples/multi-compiler

  // Filed: https://github.com/mozilla-neutrino/neutrino-dev/issues/876

  // Hugo site has theme defined
  if (site_config.theme) {
    // Add theme entry & output for theme
    var theme = path.join(site_config.themesDir, site_config.theme)
    var themeCSS = path.join(theme, site_config.staticDir, 'css', 'theme')
    neutrino.config.entry(themeCSS).add(path.join(theme, 'src', 'scss', 'main.scss'))
  }
}
