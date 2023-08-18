const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy; //JWT stores and sends token from server side
const ExtractJWT = require('passport-jwt').ExtractJwt; // to extract JWT from Tokens
const User = require('../models/user');
const env = require('../config/env');

let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(), //header in req will have many keys in which authorization is 1 key and in which Bearer is 1 key
    secretOrKey: `${env.JWT_SECRET}`,
}

//data has 3 things header,payload,and signature
passport.use(new JWTStrategy(opts, async function (jwtPayload, done) {
    let user = await User.findById(jwtPayload._id)

    if (user) {
        return done(null, user);
    }
    else {
        return done(null, false);
    }
}));

module.exports = passport;