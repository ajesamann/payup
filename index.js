//required packages
require('dotenv').config();
const path = require('path');
const express = require("express");
const session = require('express-session');

const app = express();

//routes
require('./third_party_apis/plaid')(app);
require('./session_api/session')(app);

//port
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(session({
    secret: 'production',
    resave: true,
    saveUninitialized: true
}));


//app starts on port or the environment port provided by the host
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});