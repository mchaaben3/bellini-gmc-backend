const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const Users = require('../models/Users.model')
const jwt = require('jsonwebtoken')

module.exports = function (passport) {
    passport.use(
      new GoogleStrategy(
        {
          clientID: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          callbackURL: '/auth/google/callback',
        },
        async  function(accessToken, refreshToken, profile, cb) {
          try {
            let user = await Users.findOne({ googleId: profile.id })
  
            if (user) {
              cb(null, user)
            } else {
              user = await Users.create({ displayName: profile.displayName , googleId:profile.id})
              cb(null, user)
            }
          } catch (err) {
            console.error(err)
          }
   const token = jwt.sign(
    { googleId:profile.id,
      },
    process.env.TOKEN_KEY
  );
  console.log(token) 
          }
      )
    )
  
    passport.serializeUser((user, done) => {
      done(null, user.id)
    })
  
    passport.deserializeUser((id, done) => {
      Users.findById(id, (err, user) => done(err, user))
    })
  }