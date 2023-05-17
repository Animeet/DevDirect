//pulling in packages
const router = require('express').Router();
const User = require('../models/User');
const Portfolio = require('../models/Portfolio');  

//check if user is logged in
function isAuthenticated(req, res, next) {
    if (!req.session.user_id)
      return res.status(401).send({ error: 'You must be logged in' });
    next();
}

//test route
router.get('/test', (req, res) => {
    res.send({ message: 'api test route' });
    });

module.exports = router;