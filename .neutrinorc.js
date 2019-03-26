// .neutrinorc.js
module.exports = {
  use: [
    ['@neutrinojs/library', { name: 'neutrino-hugo-preset' }],
    ['@neutrinojs/jest', {
      "moduleDirectories": [
        "src"
      ]
    }]
  ]
}
