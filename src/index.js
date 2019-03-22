/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

import util from 'util';

import JSON5 from 'json5';

import { getOptions } from 'loader-utils';
import validateOptions from 'schema-utils';

import schema from './options.json';

export default function loader(source) {
  const options = getOptions(this) || {};

  validateOptions(schema, options, 'Loader');

  let value;

  try {
    value = JSON5.parse(source);
  } catch (error) {
    this.emitError(error);
  }

  return `module.exports = ${util.inspect(value, { depth: null })}`;
}
