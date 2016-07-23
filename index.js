/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
var JSON5 = require('json5');
module.exports = function Json5Plugin (source) {
  if (this.cacheable) {
    this.cacheable();
  }

  var value = undefined;

  try {
    value = JSON5.parse(source);
  } catch (e) {
    throw new Error('Error using JSON5 parsing')
  }

  this.values = [value];

  return 'module.exports = ' + JSON.stringify(value, null, '\t');
}
