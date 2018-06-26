const mongoose = require('../utils/db.utils');
const crypto = require('crypto');
const config = require('../config');


const Filters = new mongoose.Schema({
    title : {
        type: String,
    },
    type : {
        type:String
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Filters ', Filters );