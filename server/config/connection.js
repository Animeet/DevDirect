//pulling in mongoose
const mongoose = require('mongoose');

//pulling in PORT 
const PORT = process.env.PORT;

//connecting to db
mongoose.connect(PORT ? process.env.DB_URL : 'mongodb://127.0.0.1:27017/devdirect_db');

//exporting mongoose
module.exports = mongoose.connection;

