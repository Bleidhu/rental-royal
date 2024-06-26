const dotenv = require('dotenv').config()
const express = require('express')
const logger = require('./src/config/logger.js').logger
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors');

const app = express();
app.use(cors({ origin: true }));

mongoose.connect('mongodb://localhost/rental-royal-db', { useNewUrlParser: true });

const auth = require('./src/routes/auth.js');
//app.get('/', (req, res) => res.redirect("http://localhost:3002/"))


app.use(bodyParser.json());

app.use(auth);


app.listen(process.env.PORT || 3000);
logger.info(`Running on ${process.env.PORT || 3000}`)




