const express = require('express');
const PORT = 2001;
const db = require('./config/mongoose');
const env = require('./config/env');
const session = require('express-session');
const passport = require('passport');
const passportJWT = require('./config/passport-jwt');
const rateLimit = require("express-rate-limit");

const app = express();

app.use(express.urlencoded());

//Creating a session on express-session
app.use(session({         
    name:'Session',
    secret:`${env.SESSION_SECRET}`,
    saveUninitialized: false,
    resave: false,
    cookie:{
        maxAge:(1000*60*100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(
    rateLimit({
      windowMs: 12 * 60 * 60 * 1000, // 12 hour duration in milliseconds
      max: 100,
      message: "You exceeded 100 requests in 12 hour limit!",
      headers: true,
    })
  );

app.use('/',require('./routes'));

app.listen(PORT,()=>{
    console.log(`Server is up and running on http://localhost:${PORT}`);
})