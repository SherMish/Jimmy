const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Cycle = require('./cycle')

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    hash: {
        type: String,
        require: true
    },
    salt: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    current_cycle: {
        type: Schema.Types.ObjectId,
        ref: 'Cycle'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);