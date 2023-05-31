const dotenv = require('dotenv').config()
const express = require('express')
const logger = require('./src/config/logger.js').logger
const bodyParser = require('body-parser')

const app = express();

const auth = require('./src/routes/auth.js');


app.use(bodyParser.json());

app.use(auth);


app.listen(process.env.PORT || 3000);
logger.info(`Running on ${process.env.PORT || 3000}`)




