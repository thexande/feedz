const db = require('../../config/db/knex/knexConfig')
const userTableBS = require('bookshelf-modelbase')(db.bookshelf).extend({tableName: 'feedz_users'})
const bcrypt = require('bcrypt')

module.exports = class userModel {
  constructor() {}
  getUser() {
    return db.knex('feedz_users')
  }
  createUserIfNotExists(user) {
     return userTableBS.findOrCreatByProperty({
      username: user.username,
      password: bcrypt.hashSync(user.password, 10),
      email: user.email
    }, {
      username: user.username
    }).catch((e) => console.log(e))
  }
}