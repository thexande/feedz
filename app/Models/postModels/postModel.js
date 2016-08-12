'use strict'

const db = require('../../config/db/knex/knexConfig')
const bcrypt = require('bcrypt')

module.exports = class subFeedModel {
  constructor() {}
  getAllPosts() {
    return db.knex('feedz_posts')
  }
  createPost(post) {
    return db.knex('feedz_posts').insert(post)
  }
  getPostsBySubFeedId(id) {
    return db.knex('feedz_posts').where('belongs_to_sub_feed', id)
  }
}