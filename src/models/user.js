const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const User = new mongoose.Schema({
    email: String,
    name: String,
    surname: String,
    password: String,
}
)