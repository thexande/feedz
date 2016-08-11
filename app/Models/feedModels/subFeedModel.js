'use strict'

const db = require('../../config/db/knex/knexConfig')
const bcrypt = require('bcrypt')

module.exports = class subFeedModel {
  constructor() {}
  getAllSubFeeds() {
    return db.knex.raw(`select sf.*, fu.username from feedz_sub_feeds as sf join feedz_users as fu on sf.created_by_user = fu.id`)
  }
  createSubFeed(subfeed) {
    return db.knex('feedz_sub_feeds').insert(subfeed)
  }
}