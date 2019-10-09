const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt')
const config = require('../config')
const User = require('./models/users')
const passport = require('passport')

const authenticate = () => {
  const options = {
    secretOrKey: config.secretOrKey,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  }
  passport.use(new JwtStrategy(options, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    })
  }))
  return {
    initialize: () => {
      return passport.initialize()
    },
    authenticate: () => {
      return passport.authenticate('jwt', {
        secretOrKey: config.secretOrKey,
        session: false
      })
    }
  }
}



module.exports = authenticate