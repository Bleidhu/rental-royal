const express = require('express');
const router = express.Router();

router.get("/login", (req, res) => {
    res.send("Login page")
});

router.post('/auth/register', (req, res) => {

});



module.exports = router;