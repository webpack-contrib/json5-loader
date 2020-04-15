import fs from 'fs';
import path from 'path';

import JSON5 from 'json5';

import {
  compile,
  getCompiler,
  getErrors,
  execute,
  readAsset,
  getWarnings,
} from './helpers/index';

describe('loader', () => {
  it('should handle valid JSON5', async () => {
    const compiler = getCompiler('./simple.js');
    const stats = await compile(compiler);

    const result = execute(readAsset('main.bundle.js', compiler, stats));

    expect(result).toMatchSnapshot('result');
    expect(getWarnings(stats)).toMatchSnapshot('warnings');
    expect(getErrors(stats)).toMatchSnapshot('errors');

    const content = fs
      .readFileSync(path.resolve(__dirname, './fixtures/simple.json5'))
      .toString();

    // eslint-disable-next-line no-eval
    expect(result).toEqual(JSON5.parse(content));
  });

  it('should handle invalid JSON5', async () => {
    const compiler = getCompiler('./broken.js');
    const stats = await compile(compiler);

    expect(getWarnings(stats)).toMatchSnapshot('warnings');
    expect(getErrors(stats)).toMatchSnapshot('errors');
  });
});
