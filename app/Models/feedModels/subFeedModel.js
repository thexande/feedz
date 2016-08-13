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
  getFeedById(feed_id) {
    return db.knex('feedz_sub_feeds').where('id', feed_id)
  }
  getAllCommentsAndFeeds() {


    var Post = db.bookshelf.Model.extend({
      tableName: 'feedz_posts',
        comments: function(){
          return this.hasMany(Comment);
        }
    });
    var Comment = db.bookshelf.Model.extend({
      tableName: 'feedz_comments',
      posts: function() {
        return this.belongsToMany(Post);
      }
    });

    return Post.forge().fetch({withRelated: ['comments']})

    // var SubFeeds = db.bookshelf.Model.extend({
    //   tableName: 'feedz_sub_feeds',
    //   tags: () => this.hasMany(Tag)
    // })
 
  }
}