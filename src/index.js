var toml = require('toml');
var concat = require('concat-stream');
var fs = require('fs');

function loadHugoConfig () {
  var parsed;
  fs.createReadStream('config.toml', 'utf8').pipe(concat(function (data) {
    parsed = toml.parse(data);
  }));
  return parsed;
}

module.exports = (neutrino, opts = {}) => {

}
