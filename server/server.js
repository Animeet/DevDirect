//pulling in all packages
const express = require('express');
const session = require('express-session');
const path = require('path');
require('dotenv').config();

//creating variables for db and port
const db = require('./config/connection');
const PORT = process.env.PORT || 3001;
const in_production = process.env.PORT;

//creating express app
const app = express();

//pulling in routes
const api_routes = require('./routes/api-routes');
const user_auth_routes = require('./routes/user-auth-routes');
const recruiter_auth_routes = require('./routes/recruiter-auth-routes.js');

//middleware functions
app.use(express.json());
app.use(express.static('../client/build'));
app.use('/api', api_routes);
app.use('/userauth', user_auth_routes);
app.use('/recauth', recruiter_auth_routes);


//trusting the proxy
if (in_production) {
    app.enable('trust proxy');
}

//creating session!
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {secure: process.env.PORT ? true : false}
}));

//check if current enviroment is in production
if (in_production) {
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
}

//check if db is connected
//if connected, start server
db.once('open', () => {
    app.listen(PORT, () => console.log('Server started on port %s', PORT));
});