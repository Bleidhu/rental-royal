//const User = require('../models/user');

const handleSignup = (req, res, next) => {
    const { email, password } = req.body;
    console.log(email, password);
    res.send('ok')
    next();
}

const handleLogin = {

}

module.exports = {
    handleSignup,
}