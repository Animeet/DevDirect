//pulling in packages
const router = require("express").Router();
const User = require("../models/User");
const Portfolio = require("../models/Portfolio");

//check if user is logged in
function isAuthenticated(req, res, next) {
  if (!req.session.user_id)
    return res.status(401).send({ error: "You must be logged in" });
  next();
}

//route to get all portfolios
router.get("/portfolios", isAuthenticated, async (req, res) => {
  //find all portfolios and populate user
  const portfolios = await Portfolio.find({}).populate("user");
  //return json of portfolios
  res.send(portfolios);
});

//route to get a single portfolio
router.get("/portfolios/:id", isAuthenticated, async (req, res) => {
  //find portfolio by id and populate user
  const portfolio = await Portfolio.findById(req.params.id).populate("user");
  //return json of portfolio
  res.send({ portfolio: portfolio });
});

//route to create a portfolio
router.post("/portfolios", isAuthenticated, async (req, res) => {
  //create new portfolio
  const portfolio = new Portfolio(req.body);
  //save portfolio
  await portfolio.save();
  //find user
  const user = await User.findById(req.session.user_id);
  //update user to include newly created portfolio
  user.portfolios.push(portfolio._id);
  //save updated user
  await user.save();
  //return json of portfolio
  res.send({ portfolio: portfolio });
});

module.exports = router;
