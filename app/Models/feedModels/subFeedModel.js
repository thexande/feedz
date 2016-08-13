'use strict'

const db = require('../../config/db/knex/knexConfig')
const bcrypt = require('bcrypt')


// bookshelf

const User = db.bookshelf.Model.extend({
  tableName: 'feedz_users',
  comments: function(){
      return this.hasMany(Comments)
    },
  posts: () => this.hasMany(Posts)

})
const Post = db.bookshelf.Model.extend({
  tableName: 'feedz_posts',
  user: function() {
    return this.belongsTo(User)
  },
  comments: function(){
    return this.hasMany(Comment);
  }
})
const Comment = db.bookshelf.Model.extend({
  tableName: 'feedz_comments',
  user: function() {
    return this.belongsTo(User)
},
  posts: function() {
    return this.belongsToMany(Post)
  }
})
  
const Feed = db.bookshelf.Model.extend({
  tableName: 'feedz_sub_feeds',
  posts: function() {
    return this.hasMany(Post)
  }
})

module.exports = class subFeedModel {
  constructor() {}
  getAllSubFeeds() {
    return db.knex.raw(`select sf.*, fu.username from feedz_sub_feeds as sf join feedz_users as fu on sf.feedz_user_id = fu.id`)
  }
  createSubFeed(subfeed) {
    console.log(subfeed )
    return db.knex('feedz_sub_feeds').insert(subfeed)
  }
  getFeedById(feed_id) {
    return db.knex('feedz_sub_feeds').where('id', feed_id)
  }
  getAllCommentsAndFeeds(id) {
    return Feed.forge({id}).fetch({withRelated: ['posts.comments.user', 'posts.user']}) 
  }
}