const express = require('express');
//const { chech, body } = require('express-validator');
const authController = require('../controllers/auth.controllers.js');
//const User = require('../models/user');
const router = express.Router();

//router.get('/auth/login', authController.getLogin());

router.post('/api/signup', authController.handleSignup);
router.get("/api/signup", (req, res) => { res.send("ok") })

router.post('/api/login', authController.handleLogin);

module.exports = router