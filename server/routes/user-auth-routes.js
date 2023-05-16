//puling in router and the MODEL
const router = require('express').Router();
const User = require('../models/User');

//creating a new user
router.post('/register', async (req, res) => {
    //creating a new user
    try {
      const user = await User.create(req.body);
      //creating session
      req.session.user_id = user._id; 
      //sending user back to client
      res.send({ user });
      //if error, send error
    } catch (err) {
      res.status(403).send({ error: err.message });
    }
});

//route to login
router.post('/login', async (req, res) => {
    //finding user by email
    const user = await User.findOne({
      email: req.body.email
    });
    //if user is not found, send error
    if (!user) return res.status(402).send({ error: 'User with that email not found.' });
    //if user is found, validate password
    const valid_password = await user.validatePass(req.body.password);
    //if password is not valid, send error
    if (!valid_password) return res.status(401).send({ error: 'Password does not match.' });
    //if password is valid, create session
    req.session.user_id = user._id;
    //send user back to client
    res.send({ user: user });
  });

//route to logout
router.get('/logout', (req, res) => {
    //destroying session
    req.session.destroy();
    //sending message to client
    res.send({ message: 'User logged out' });
  });
  //route to check if user is authenticated
  router.get('/authenticated', async (req, res) => {
    //finding user by id
    const user_id = req.session.user_id;
    //if user is not found, send null
    if (!user_id) return res.send({ user: null });
    //if user is found, send user
    res.send({ user: user });
  });

//exporting router
module.exports = router;