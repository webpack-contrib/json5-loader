import path from 'path';

import del from 'del';
import webpack from 'webpack';
import { createFsFromVolume, Volume } from 'memfs';

const moduleConfig = (config) => {
  return {
    rules: config.rules
      ? config.rules
      : [
          {
            test: (config.loader && config.loader.test) || /\.json5$/i,
            use: [
              {
                loader: path.resolve(__dirname, '../../src/index.js'),
                options: (config.loader && config.loader.options) || {},
              },
            ],
          },
        ],
  };
};
const pluginsConfig = (config) => [].concat(config.plugins || []);
const outputConfig = (config) => {
  return {
    path: path.resolve(
      __dirname,
      `../outputs/${config.output ? config.output : ''}`
    ),
    filename: '[name].bundle.js',
  };
};

function compile(fixture, config = {}, options = {}) {
  // webpack Config
  // eslint-disable-next-line no-param-reassign
  config = {
    mode: 'development',
    devtool: config.devtool || 'sourcemap',
    context: path.resolve(__dirname, '../fixtures'),
    entry: path.resolve(__dirname, '../fixtures', fixture),
    output: outputConfig(config),
    module: moduleConfig(config),
    plugins: pluginsConfig(config),
    optimization: {
      runtimeChunk: true,
    },
  };

  // Compiler Options
  // eslint-disable-next-line no-param-reassign
  options = Object.assign({ output: false }, options);

  if (options.output) {
    del.sync(config.output.path);
  }

  const compiler = webpack(config);

  if (!options.output) {
    compiler.outputFileSystem = createFsFromVolume(new Volume());
    compiler.outputFileSystem.join = path.join.bind(path);
  }

  return new Promise((resolve, reject) =>
    compiler.run((error, stats) => {
      if (error) {
        return reject(error);
      }
      return resolve(stats);
    })
  );
}

export default compile;
