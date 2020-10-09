# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [4.0.1](https://github.com/webpack-contrib/json5-loader/compare/v4.0.0...v4.0.1) (2020-10-09)

### Chore

* update `schema-utils`

## [4.0.0](https://github.com/webpack-contrib/json5-loader/compare/v3.0.0...v4.0.0) (2020-04-15)


### Features

* implement the `esModule` option

### ⚠ BREAKING CHANGES

* minimum required nodejs version is `10.13.0`
* use ES module syntax by default


## [3.0.0](https://github.com/webpack-contrib/json5-loader/compare/v2.0.0...v3.0.0) (2019-06-05)


### chore

* **deps:** update ([#40](https://github.com/webpack-contrib/json5-loader/issues/40)) ([b923cbf](https://github.com/webpack-contrib/json5-loader/commit/b923cbf))


### BREAKING CHANGES

* **deps:** minimum required nodejs version is `8.9.0`



<a name="2.0.0"></a>
# [2.0.0](https://github.com/webpack-contrib/json5-loader/compare/v2.0.0-beta.0...v2.0.0) (2019-03-22)

### Features

* update `json5` to `2.1.0` version
* use `JSON5.stringify` for output


### Bug Fixes

* avoid swallowing JSON5 error output ([#34](https://github.com/webpack-contrib/json5-loader/issues/34)) ([d050827](https://github.com/webpack-contrib/json5-loader/commit/d050827))
* support for `Infinity` && `NaN` ([#26](https://github.com/webpack-contrib/json5-loader/issues/26)) ([5a8ca43](https://github.com/webpack-contrib/json5-loader/commit/5a8ca43))
* fix output `\u2028\u2029` characters

### BREAKING CHANGES

* drop support for webpack < 4
* drop support for node < 6.9
* update `json5` to `2.1.0` version
* use `JSON5.stringify` for output



<a name="2.0.0-beta.0"></a>
# [2.0.0-beta.0](https://github.com/webpack-contrib/json5-loader/compare/v1.0.1...v2.0.0-beta.0) (2017-05-01)


### Code Refactoring

* apply webpack defaults ([#21](https://github.com/webpack-contrib/json5-loader/issues/21)) ([688b7a2](https://github.com/webpack-contrib/json5-loader/commit/688b7a2))


### BREAKING CHANGES

* Enforces a minimum NodeJS version of `4.3` via engines 
