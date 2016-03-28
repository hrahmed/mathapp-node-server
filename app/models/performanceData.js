/**
 * Created by ahmha02 on 16-03-04.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PerformanceDataSchema   = new Schema({
    id: Number,
    operation: String,
    counter: Number
});

module.exports = mongoose.model('PerformanceData', PerformanceDataSchema);