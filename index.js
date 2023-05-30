const dotenv = require('dotenv').config();
const express = require('express')

const app = express();

const auth = require('./routes/auth.js');

app.use(auth);

app.get('/', (req, res) => {
    res.send('Hi');
})
