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

//route to get all portfolios
router.get('/portfolios', isAuthenticated, async (req, res) => {
  //find all portfolios and populate user
  const portfolios = await Portfolio.find({}).populate('user');
  //return json of portfolios
  res.send(portfolios);
});

//route to get a single portfolio
router.get('/portfolios/:id', isAuthenticated, async (req, res) => {
  //find portfolio by id and populate user
  const portfolio = await Portfolio.findById(req.params.id).populate('user');
  //return json of portfolio
  res.send({ portfolio: portfolio });
});

module.exports = router;