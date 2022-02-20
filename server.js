const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require('express-session')

const app = express();

dotenv.config();
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("db connected")
);
app.use(express.json());

require('./passportConfig/passportGoogle')(passport)
require('./passportConfig/passportFacebook')(passport)
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
  
  // Passport middleware
  app.use(passport.initialize())
  app.use(passport.session())
  










const bookingRoutes = require("./routes/booking.route");
const spaceRoutes = require("./routes/space.route");


app.use("/api/booking", bookingRoutes)
app.use("/api/space", spaceRoutes)

app.get('/auth/google',passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback',passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

  app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


// Server connection
app.listen(process.env.PORT, (err) => {
    err
      ? console.log("Server connection failed", err)
      : console.log(`💻 is connected on 🚪 ${process.env.PORT}`);
  });