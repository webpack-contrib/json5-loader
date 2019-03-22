/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
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

  value = value
    ? JSON5.stringify(value, null)
        .replace(/\u2028/g, '\\u2028')
        .replace(/\u2029/g, '\\u2029')
    : source;

  return `module.exports = ${value}`;
}
