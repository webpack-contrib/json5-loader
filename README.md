<div align="center">
  <img width="200" height="200"
    src="https://cdn.rawgit.com/json5/json5-logo/master/json5-logo.svg">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![tests][tests]][tests-url]
[![cover][cover]][cover-url]
[![chat][chat]][chat-url]
[![size][size]][size-url]

# json5-loader

A webpack loader for parsing [json5](https://json5.org/) files into JavaScript objects.

## Getting Started

To begin, you'll need to install `json5-loader`:

```sh
$ npm install json5-loader --save-dev
```

You can use the loader either:

- by configuring the `json5-loader` in the `module.rules` object of the webpack configuration, or
- by directly using the `json5-loader!` prefix to the require statement.

Suppose we have the following `json5` file:

**file.json5**

```json5
{
  env: 'production',
  passwordStrength: 'strong',
}
```

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.json5$/i,
        loader: 'json5-loader',
        type: 'javascript/auto',
      },
    ],
  },
};
```

## Options

|            Name             |    Type     | Default | Description            |
| :-------------------------: | :---------: | :-----: | :--------------------- |
| **[`esModule`](#esmodule)** | `{Boolean}` | `true`  | Uses ES modules syntax |

### `esModule`

Type: `Boolean`
Default: `true`

There are some cases in which using ES modules is beneficial, like in the case of [module concatenation](https://webpack.js.org/plugins/module-concatenation-plugin/) and [tree shaking](https://webpack.js.org/guides/tree-shaking/).

You can enable a ES module syntax using:

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.json5$/i,
        loader: 'json5-loader',
        options: {
          esModule: false,
        },
        type: 'javascript/auto',
      },
    ],
  },
};
```

## Examples

### Usage with require statement loader prefix

**file.json5**

```json5
{
  env: 'production',
  passwordStrength: 'strong',
}
```

**index.js**

```js
import appConfig from 'json5-loader!./file.json5';

console.log(appConfig.env); // 'production'
```

Don't forget to polyfill require if you want to use it in Node.js. See the webpack documentation.

## Contributing

Please take a moment to read our contributing guidelines if you haven't yet done so.

[CONTRIBUTING](./.github/CONTRIBUTING.md)

## License

[MIT](./LICENSE)

[npm]: https://img.shields.io/npm/v/json5-loader.svg
[npm-url]: https://npmjs.com/package/json5-loader
[node]: https://img.shields.io/node/v/json5-loader.svg
[node-url]: https://nodejs.org
[deps]: https://david-dm.org/webpack-contrib/json5-loader.svg
[deps-url]: https://david-dm.org/webpack-contrib/json5-loader
[tests]: https://github.com/webpack-contrib/json5-loader/workflows/json5-loader/badge.svg
[tests-url]: https://github.com/webpack-contrib/json5-loader/actions
[cover]: https://codecov.io/gh/webpack-contrib/json5-loader/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/webpack-contrib/json5-loader
[chat]: https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg
[chat-url]: https://gitter.im/webpack/webpack
[size]: https://packagephobia.now.sh/badge?p=json5-loader
[size-url]: https://packagephobia.now.sh/result?p=json5-loader
