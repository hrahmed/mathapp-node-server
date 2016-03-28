/**
 * Created by ahmha02 on 16-03-04.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var OperationSchema   = new Schema({
    id: Number,
    operation: String,
    symbol: String
});

module.exports = mongoose.model('Operation', OperationSchema);