const passport = require('passport')
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;
const userModelClass = require('../../Models/authModels/userModel')
const userModel = new userModelClass

module.exports = (passport) => {
  passport.use(
  new LocalStrategy({
      usernameField: 'username',
      passwordField: 'password',
      session: true },
    (username, password, done) => {
      console.log(username)
      console.log(password)
        process.nextTick(() => {
          userModel.checkUserLogin({username})
            .catch((e) => done(null, false))
            .then((collection) => {
              console.log(collection)
            if(collection.length > 0){
              if(bcrypt.compareSync(password, collection[0].password)){
                return done(null, { status: true, token: collection[0].token})
              } else {
                return done(null, false)
              }
            } else {
              return done(null, false)
            }
        })
      })
    }
  )
)
passport.use(new BearerStrategy(
  (token, done) => {

      return done(null, user, { scope: 'all' });

  }
))

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
}