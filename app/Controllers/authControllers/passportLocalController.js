const passport = require('passport')
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy;
const userModelClass = require('../../Models/authModels/userModel')
const userModel = new userModelClass


passport.use(
  new LocalStrategy({
      usernameField: 'username',
      passwordField: 'password',
      session: true },
    (username, password, done) => {
        process.nextTick(() => {
          userQueries.userLoginCheck({e2e_username: username})
            .catch((e) => done(null, false))
            .then((collection) => {
            if(collection.length > 0){
              if(bcrypt.compareSync(password, collection[0].e2e_password)){
                return done(null,
                  { status:true,
                    id: collection[0].id,
                    username: collection[0].e2e_username,
                    firstname: collection[0].e2e_firstname,
                    lastname: collection[0].e2e_lastname,
                    email: collection[0].e2e_email
                  })
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
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});