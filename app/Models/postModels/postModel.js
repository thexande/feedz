'use strict'

const db = require('../../config/db/knex/knexConfig')
const bcrypt = require('bcrypt')

module.exports = class subFeedModel {
  constructor() {}
  getAllPosts() {
    return db.knex('feedz_posts')
  }
  createPost(post) {
    console.log(post)
    return db.knex('feedz_posts').insert(post).returning("*")
  }
  getPostsBySubFeedId(id) {
    return db.knex('feedz_posts').where('belongs_to_sub_feed', id)
  }
  getAllCommentsByPostId(post_id) {
    return db.knex.raw(`select fc.*, fp.post_title, fu.username from feedz_comments as fc 
    join feedz_posts as fp on fc.post_id = fp.id
    join feedz_users as fu on fc.created_by_user = fu.id
    where fp.id = ${post_id}`)
  }
}