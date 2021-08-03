const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user')

const CycleSchema = mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    total_income: Number,
    total_expense: Number,
    expenses: {
        housing: [{comment: String, price: Number}],
        groceries: [{comment: String, price: Number}],
        bills: [{comment: String, price: Number}],
        pharmacy: [{comment: String, price: Number}],
        entertainment: [{comment: String, price: Number}],
        transportation: [{comment: String, price: Number}],
        clothing: [{comment: String, price: Number}],
        loans: [{comment: String, price: Number}],
        fitness: [{comment: String, price: Number}],
        selfCare: [{comment: String, price: Number}],
        etc: [{comment: String, price: Number}]

    },
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Cycle', CycleSchema);
