/**
 * Created by ahmha02 on 16-03-05.
 */

var mathops = require('mathjs');
var fs = require('fs');

module.exports = {
    add: function (value1, value2, callback) {
        var result = value1 + value2;
        return result;
    },
    subtract: function (value1, value2, callback) {
        var result = value1 - value2;
        return result;
    },
    multiply: function (value1, value2, callback) {
        var result = value1 * value2;
        return result;
    },
    divide: function (value1, value2, callback) {
        var result = value1 / value2;
        return result;
    }
};

