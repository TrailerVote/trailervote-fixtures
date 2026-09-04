const path = require('path')

function fixturePath(mediaType) {
  return path.join(__dirname, ...mediaType.split('/'))
}

module.exports = fixturePath
module.exports.default = fixturePath
