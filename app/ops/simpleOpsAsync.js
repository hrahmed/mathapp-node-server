/**
 * Created by ahmha02 on 16-03-05.
 */

var mathops = require('mathjs');
var fs = require('fs');

module.exports = {
    add: function (value1, value2, callback) {
        process.nextTick(function(){
            var result = mathops.eval(value1 + value2);
            callback(result);
        });
    },
    subtract: function (value1, value2, callback) {
        process.nextTick(function(){
            var result = mathops.eval(value1 - value2);
            callback(result);
        });
    },
    multiply: function (value1, value2, callback) {
        process.nextTick(function(){
            var result = mathops.eval(value1 * value2);
            callback(result);
        });
    },
    divide: function (value1, value2, callback) {
        process.nextTick(function(){
            var result = mathops.eval(value1 / value2);
            callback(result);
        });
    },
    sqrt: function (value1, callback) {
        process.nextTick(function(){
            var result = mathops.sqrt(value1);
            callback(result);
        });
    }
};

