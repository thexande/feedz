module.exports = {
  user: require('./jsonApi/userRoutes'),
  f: require('./jsonApi/subFeedRoutes'),
  posts: require('./jsonApi/postsRoutes'),
  comments: require('./jsonApi/commentsRoutes')
}