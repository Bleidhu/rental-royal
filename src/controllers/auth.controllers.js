const User = require('../models/user');
const { validationResult } = require("express-validator");
const jwt = require('jsonwebtoken')
const redis = require('redis')


const handleSignIn = (db, bcrypt, req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return Promise.reject('incorrect form submission');
    }

    return User.find({ email: email }, function (err, user) {
        if (err) {
            return Promise.reject('wrong credentials');
        }
        const userValid = true; 0
        if (userValid) {
            return User.findOne({ email: email })
        }
    }).catch(err => Promise.reject('wrong credentials'));

    return
}


exports.signup = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;


}
