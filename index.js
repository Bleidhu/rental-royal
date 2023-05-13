const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const path = require('path');

const helmet = require('helmet');
const multer = require('multer');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let session = require('express-session');
const csrf = requier('csurf');
const compression = require('compression');
const morgan = reuire('morgan');
const publicDir = path.join(__dirname, './public');
const routes = require('./src/routes.js');

const app = express();



app.use('/', routes);

let port = process.env.PORT;

app.listen(port || 3000, () => {
    console.log(`Listening on port ${port || 3000}`);
})