const db = require('../../config/db/knex/knexConfig')
const bcrypt = require('bcrypt')
module.exports = class userModel {
  constructor() {}
  getUser() {
    return db.knex('feedz_users')
  }
  createUserIfNotExists(user) {
    console.log(user)
     return db.knex('feedz_users').where('username', user.username)
      .then((userResponse) => {
        if(userResponse.length == 0){
          return db.knex('feedz_users').insert({
            username: user.username, 
            password: user.password, 
            email:user.email
          })
        }
      })
  }
}