/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
import JSON5 from 'json5';

function Json5Loader(source) {
  let value;

  try {
    value = JSON5.parse(source);
  } catch (e) {
    throw new Error('Error parsing JSON5', (e));
  }

  return `module.exports = ${JSON.stringify(value, null, '\t')}`;
}

export default Json5Loader;
