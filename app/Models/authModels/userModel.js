const db = require('../../config/db/knex/knexConfig')
module.exports = class userModel {
  constructor() {}
  getUser() {
    return db.knex('feedz_users')
  }
}
