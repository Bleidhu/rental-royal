const User = require('../models/user');
const jwt = require('jsonwebtoken')

const handleSignup = async function (req, res, next) {
    if (!req.headers['Authorization']) {
        const { email, password } = req.body;

        const userFind = await User.findOne({ email: email });

        if (userFind) {
            return res.status(400).send('User already exists');
        }

        let newUser = new User({ email: email, password: password });

        console.log(newUser);

        await newUser.save();



        const token = jwt.sign({ userId: newUser._id, email: newUser.email }, 'secret-key', { expiresIn: '1h' });



        res.status(200).json({ token });
    }


    //console.log(email, password);
    //res.send('ok')

}

const handleLogin = async function (req, res) {
    if (!req.headers['authorization']) {
        const { email, password } = req.body;

        const userFind = await User.findOne({ email: email });



        //const token = jwt.sign({ userId: newUser._id }, 'secret-key', { expiresIn: '1h' });



        res.status(200).json({ "token": "lol" });
    } else {
        const token = req.headers['authorization'].split(' ')[1]
        console.log(token)
        jwt.verify(token, 'secret-key', function (err, decrypted) {
            if (err) {
                console.log(err);
                res.status(400).send("invalid token");
            }
            console.log(decrypted);
            res.status(200).json({ id: decrypted.userId });
        })
        //res.status(200).send();
    }

}

module.exports = {
    handleSignup, handleLogin
}