//pulling in packages
const router = require('express').Router();
const User = require('../models/User');  

//test route
router.get('/test', (req, res) => {
    res.send({ message: 'api test route' });
    });

module.exports = router;