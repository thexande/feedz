const knex = require('../../config/db/knex/knexConfig')
module.exports = class userModel {
  constructor() {}
  getUser() {
    return knex('feedz_users')
  }
}
