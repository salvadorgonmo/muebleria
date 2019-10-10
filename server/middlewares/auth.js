const config = require('../../config')
const passport = require('passport')
const User = require('../models/users')
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt')

const options = {
  secretOrKey: config.secretOrKey,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

module.exports = {
  bootPassport: () => {
    passport.use(new JwtStrategy(options, (jwtPayload, done) => {
      User.findOne({ id: jwtPayload.sub })
        .then(user => {
          if (user) {
            return done(null, user)
          } else {
            return done(null, false)
          }
        })
        .catch(error => done(error))
    }))
  },
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
