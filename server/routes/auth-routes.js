//puling in router and the MODEL
const router = require('express').Router();
const { request } = require('express');
const User = require('../models/User');
const Recruiter = require('../models/Recruiter');

//creating a new user
router.post('/register', async (req, res) => {
    //creating a new user
    try {
      let user;
      const type = req.query.type;
      if(type === 'student'){
          user = await User.create(req.body);
      }
      else user = await Recruiter.create(req.body);
      //creating session
      req.session.user = {
        user_id: user._id,
        type
      }; 
      //sending user back to client
      res.send({ user, type });
      //if error, send error
    } catch (err) {
      res.status(403).send({ error: err.message });
    }
});

//route to login
router.post('/login', async (req, res) => {
    //finding user by email
    const type = req.query.type;
    let user;
    if(type === 'student'){
      user = await User.findOne({
        email: req.body.email
      });
    }else user = await Recruiter.findOne({email: req.body.email});
    //if user is not found, send error
    if (!user) return res.status(402).send({ error: 'User with that email not found.' });
    //if user is found, validate password
    const valid_password = await user.validatePass(req.body.password);
    //if password is not valid, send error
    if (!valid_password) return res.status(401).send({ error: 'Password does not match.' });
    //if password is valid, create session
    req.session.user = {
      user_id: user._id,
      type
    };
    //send user back to client
    res.send({ user, type });
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
  console.log(req.session.user);
    if(!req.session.user) return res.send({user: null})

    const user = await User.findById(req.session.user.user_id)

    res.send({
      user, 
      type: req.session.user.type,
    })
});


//exporting router
module.exports = router;