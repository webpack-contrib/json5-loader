import fs from 'fs';
import path from 'path';

import JSON5 from 'json5';

import loader from '../src';

import webpack from './helpers/compiler';

describe('loader', () => {
  it('should export the loader', () => {
    expect(loader).toBeInstanceOf(Function);
  });

  it('should handle valid JSON5', async () => {
    const testId = './test.json5';
    const stats = await webpack(testId);
    const { modules } = stats.toJson();
    const module = modules.find((m) => m.id === testId);

    expect(module.source).toMatchSnapshot('module');
    expect(stats.compilation.warnings).toMatchSnapshot('warnings');
    expect(stats.compilation.errors).toMatchSnapshot('errors');

    const content = fs
      .readFileSync(path.resolve(__dirname, './fixtures/test.json5'))
      .toString();

    // eslint-disable-next-line no-eval
    expect(eval(module.source)).toEqual(JSON5.parse(content));
  });

  it('should handle invalid JSON5', async () => {
    const testId = './broken.json5';
    const stats = await webpack(testId);

    expect(stats.compilation.warnings).toMatchSnapshot('warnings');
    expect(
      stats.compilation.errors.map((error) => {
        // eslint-disable-next-line no-param-reassign
        error.message = error.message.replace(
          /\(from .*?\)/i,
          '(replaced/path)'
        );

        return error;
      })
    ).toMatchSnapshot('errors');
  });
});
