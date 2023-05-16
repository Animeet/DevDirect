//puling in router and the MODEL
const router = require('express').Router();
const Recruiter = require('../models/Recruiter');

//creating a new recruiter
router.post('/register', async (req, res) => {
    //creating a new recruiter
    try {
      const recruiter = await Recruiter.create(req.body);
      //creating session
      req.session.recruiter_id = recruiter._id; 
      //sending recruiter back to client
      res.send({ recruiter });
      //if error, send error
    } catch (err) {
      res.status(403).send({ error: err.message });
    }
});

//route to login
router.post('/login', async (req, res) => {
    //finding recruiter by email
    const recruiter = await recruiter.findOne({
      email: req.body.email
    });
    //if recruiter is not found, send error
    if (!recruiter) return res.status(402).send({ error: 'Recruiter with that email not found.' });
    //if recruiter is found, validate password
    const valid_password = await recruiter.validatePass(req.body.password);
    //if password is not valid, send error
    if (!valid_password) return res.status(401).send({ error: 'Password does not match.' });
    //if password is valid, create session
    req.session.recruiter_id = recruiter._id;
    //send recruiter back to client
    res.send({ recruiter: recruiter });
  });

//route to logout
router.get('/logout', (req, res) => {
    //destroying session
    req.session.destroy();
    //sending message to client
    res.send({ message: 'Recruiter logged out' });
  });
  //route to check if recruiter is authenticated
  router.get('/authenticated', async (req, res) => {
    //finding recruiter by id
    const recruiter_id = req.session.recruiter_id;
    //if recruiter is not found, send null
    if (!recruiter_id) return res.send({ recruiter: null });
    //if recruiter is found, send recruiter
    res.send({ recruiter: recruiter });
  });

//exporting router
module.exports = router;