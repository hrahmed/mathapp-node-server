/**
 * Created by ahmha02 on 16-03-05.
 */

var mathops = require('mathjs');
var fs = require('fs');

module.exports = {
    add: function (value1, value2, callback) {
        process.nextTick(function(){
            var result = mathops.eval(value1 + value2);
            process.nextTick(function(){
                setTimeout(function() {
                    callback(result);
                }, 2000);
            });
        });
    },
    subtract: function (value1, value2, callback) {
        process.nextTick(function(){
            var result = mathops.eval(value1 - value2);
            process.nextTick(function(){
                setTimeout(function() {
                    callback(result);
                }, 2000);

            });
        });
    },
    multiply: function (value1, value2, callback) {
        process.nextTick(function(){
            var result = mathops.eval(value1 * value2);
            process.nextTick(function(){
                setTimeout(function() {
                    callback(result);
                }, 2000);

            });
        });
    },
    divide: function (value1, value2, callback) {
        process.nextTick(function(){
            var result = mathops.eval(value1 / value2);
            process.nextTick(function(){
                setTimeout(function() {
                    callback(result);
                }, 2000);

            });
        });
    },
    sqrt: function (value1, callback) {
        process.nextTick(function(){
            var result = mathops.sqrt(value1);
            process.nextTick(function(){
                setTimeout(function() {
                    callback(result);
                }, 2000);

            });
        });
    }
};

