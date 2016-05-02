/**
 * Created by ahmha02 on 16-03-05.
 */

var Promise = require('promise');
var fs = require('fs');

module.exports = {
    readFilePromise: function (filename, enc) {
        return new Promise(function (fulfill, reject) {
            fs.readFile(filename, enc, function (err, res) {
                if (err) {
                    console.log("Reject readOpsJson promise");
                    reject(err);
                }
                else {
                    console.log("Fulfill readOpsJson promise");
                    fulfill(res);
                }

            });
        });
    },

    flushDb: function (schema) {
        return new Promise(function (fulfill, reject) {
            schema.remove({}, function (err, res) {
                if (err) {
                    console.log("Reject flushDb promise");
                    reject(err);
                }
                else {
                    console.log("Fulfill flushDb promise");
                    fulfill(res);
                }

            });
        });
    },

    saveRecordToDb: function (operation) {
        console.log("In saveRecordToDb; Operation id is: " + operation.operation);
        return new Promise(function (fulfill, reject) {
            operation.save(function (err, res) {
                if (err) {
                    console.log("Reject saveRecordToDb promise");
                    reject(err);
                }
                else {
                    console.log("Fulfill saveRecordToDb promise");
                    fulfill(res);
                }

            });
        });
    },


    findRecords: function (schema) {
        return new Promise(function (fulfill, reject) {
            schema.find(function (err, res) {
                if (err) {
                    console.log("Reject findRecords promise");
                    reject(err);
                }
                else {
                    console.log("Fulfill findRecords promise");
                    console.log(res.valueOf());
                    fulfill(res);
                }

            });
        });
    },

    updateRecord: function (schema, key, keyValue, updateKey, updateValue) {
        return new Promise(function (fulfill, reject) {
            console.log(schema + ',' + key + ',' +  keyValue + ',' +  updateKey +',' +  updateValue);
            schema.update({ id: keyValue }, { updateKey: updateValue }, function (err, res) {
                if (err) {
                    console.log("Reject updateRecord promise");
                    console.log(err.valueOf());
                    reject(err);
                }
                else {
                    console.log("Fulfill updateRecord promise");
                    console.log(res.valueOf());
                    fulfill(res);
                }

            });
        });
    },

    insertManyArrayToDB: function (schema, array) {
        return new Promise(function (fulfill, reject) {
            schema.insertMany(array, function (err, res) {
                if (err) {
                    console.log("Reject insertArrayToDB promise");
                    reject(err);
                }
                else {
                    console.log("Fulfill insertArrayToDB promise");
                    fulfill(res);
                }

            });
        });
    }
}

