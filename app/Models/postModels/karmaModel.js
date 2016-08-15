'use strict'

const db = require('../../config/db/knex/knexConfig')
const bcrypt = require('bcrypt')

module.exports = class karmaModel {
  constructor() {}
  getAllKarma() {
    return db.knex('feedz_karma')
  }
  setKarma(post_id, user_id) {
    db.knex('feedz_karma').where('feedz_user_id', user_id).where('feedz_post_id', post_id)
    .then((karmaRecord) => {
      if(karmaRecord){
        console.log("has karma")
         db.knex('feedz_karma')
          .where('feedz_user_id', user_id)
          .where('feedz_post_id', post_id)
          .update('upvote', !karmaRecord.upvote)
          .update('downvote', !karmaRecord.downvote)
      } else {
        console.log("no karma")
      }
    })
  }

}