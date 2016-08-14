'use strict'

const db = require('../../config/db/knex/knexConfig')
const bcrypt = require('bcrypt')

// bookshelf relations
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

module.exports = class commentModel {
  constructor() {}
  createComment(comment) {
    return db.knex('feedz_comments').insert(comment).returning('*')
  }
}