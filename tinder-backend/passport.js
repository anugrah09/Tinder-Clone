// const ExtractJwt = require("passport-jwt").ExtractJwt;
import pkg from 'passport-jwt'
// const JwtStrategy = require("passport-jwt").Strategy;
// const {ExtractJwt} = ExtractJwt;
const {JwtStrategy, ExtractJwt} = pkg;
const User = mongoose.model("users");
import mongoose from 'mongoose'

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

function passport() {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
export default passport