const express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport')

const cycleRoute = require('./routes/cycles')
const userRoute = require('./routes/users')



require('dotenv').config();
app = express();
app.use(express.json());
app.use(cors());
require('./config/database');

/**
 * -------------- PASSPORT AUTHENTICATION ----------------
 */

// Pass the global passport object into the configuration function
require('./config/passport')(passport);

// Must first load the models
require('./models/user');

app.use(passport.initialize());
//app.use(passport.session());



app.use('/api/cycles', cycleRoute);
app.use('/api/users', userRoute);

app.listen(3000, () => {
    console.log("listening on port 3000")
});

