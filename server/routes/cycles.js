const express = require('express');
const Cycle = require('../models/cycle');
const User = require('../models/user');
const mongoose = require('mongoose');
const passport = require('passport');
const router = express.Router();


//Add an expense for req.body.username of req.body.price as req.body.comment at req.body.category
router.post('/add-expense', (req,res) => {
    User.findOne({username: req.body.username}, (err,user) => {
        if (err) {
            res.json({success: false, msg:err});
            return;
        }

        if (!user) {
            res.json({success: false, msg:"error: user not found"});
            return;
        }
        console.log(user);

        Cycle.findOne({_id: user.current_cycle}, (err,cycle) => {
            if (err) {
                res.json({success: false, msg:err});
                return;
            }
    
            if (!user) {
                res.json({success: false, msg:"error: cycle not found"});
                return;
            }

            if (isNaN(req.body.price)) {
                res.json({success: false, msg:"error: invalid price"});

            }
            console.log(cycle);
            cycle.total_expense += req.body.price;
            
            cycle.expenses[req.body.category].push({comment: req.body.comment, price: req.body.price});
            cycle.save((err) => {
                if(err) {
                    res.json({success:false, msg: err})
                }
            })
            res.json({success: true, msg:"The expense was added succesfully"});
        })
    })
})

//Start a new cycle for req.body.username
router.post('/new-cycle', (req,res) => {
    User.findOne({username: req.body.username}, (err,user) => {
        if (err) {
            res.json({success: false, msg:err});
            return;
        }

        if (!user) {
            res.json({success: false, msg:"error: user not found"});
            return;
        }
        if (isNaN(req.body.income)) {
            res.json({success: false, msg: ""})
        }

        const cycle = new Cycle( {
            user: user._id,
            total_income: req.body.income,
            total_expense: 0,
            expenses: {
                housing: [],
                groceries: [],
                bills: [],
                pharmacy: [],
                entertainment: [],
                transportation: [],
                clothing: [],
                loans: [],
                fitness: [],
                selfCare: [],
                etc: []
        }
        })
            cycle.save((err, result) => {
            if (err) {
                res.json({success: false, message: err});
                return;
            }
            if (!result) {
                res.json({success: false, message: "Something went wrong"});
                return;
            }

            user.depopulate('current_cycle'); // adding the cycle to current_cycle of the user
            user.current_cycle = result._id
            user.save((err) => {
                if(err) {
                    res.json({success:false, msg:"ERROR"})
                    return;
                }  
            })

            Cycle.findOne({_id: cycle._id})
                .populate('user')
                .exec(function (err, result) {
                    if (err) {
                        res.json({result: false, msg: err});
                        return;
                    }
                    User.findOne({_id:user._id}).populate('current_cycle').exec(function (err, result) {
                    if (err) {
                        res.json({result: false, msg: err});
                        return;
                    }
                    
                    res.json({success: true, msg:"cycle created!"})
                })})
        });
        }
    )})


    router.get('/isAuth', passport.authenticate('jwt',{session: false}), (req,res) => {
        res.json({success:true});
    });
                    



module.exports = router;
