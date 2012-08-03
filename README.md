# json5 loader for webpack

## Usage

``` javascript
var json = require("json5!./file.json5");
// => returns file.json5 content as json parsed object
```

Don't forget to polyfill `require` if you want to use it in node.
See `webpack` documentation.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)