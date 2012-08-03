/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var JSON5 = require("json5");
module.exports = function(source) {
	this.cacheable && this.cacheable();
	var value = JSON5.parse(source);
	this.values = [value];
	return "module.exports = " + JSON.stringify(value, undefined, "\t");
}