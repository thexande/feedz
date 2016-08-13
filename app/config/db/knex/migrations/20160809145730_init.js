exports.up = function(knex, Promise) {
return Promise.all([
  knex.schema.createTable('feedz_users', function(table){
    table.increments('id').primary()
    table.string('username')
    table.string('password')
    table.string('email')
    table.string('token')
    table.integer('created_at')
  }),
  knex.schema.createTable('feedz_sub_feeds', function(table){
    table.increments('id').primary()
    table.integer('feedz_user_id').references("feedz_users.id")
    table.string('feed_content', 1000)
    table.string('feed_title')
    table.string('feed_identifier')
    table.integer('created_at')    
  }),
  knex.schema.createTable('feedz_posts', function(table){
    table.increments('id').primary()
    table.integer('feedz_user_id').references("feedz_users.id")
    table.integer('feedz_sub_feed_id').references("feedz_sub_feeds.id")
    table.string('post_content', 1000)
    table.string('post_title')
    table.string('post_image_url')
    table.string('post_external_url')
    table.integer('created_at')
  }),
  knex.schema.createTable('feedz_comments', function(table){
    table.increments('id').primary()
    table.integer('feedz_user_id').references("feedz_users.id")
    table.integer('feedz_post_id').references("feedz_posts.id")
    table.string('comment_title')
    table.string('comment_content')
    table.integer('created_at')
  }),
  knex.schema.createTable('feedz_favorite_posts', function(table){
    table.increments('id').primary()
    table.integer('feedz_user_id').references("feedz_users.id")
    table.integer('feedz_post_id').references("feedz_posts.id")
    table.integer('created_at')
  }),
  knex.schema.createTable('feedz_karma', function(table){
    table.increments('id').primary()
    table.integer('feedz_user_id').references("feedz_users.id")
    table.integer('feedz_post_id').references("feedz_posts.id")
    table.boolean('upvote')
    table.boolean('downvote')
    table.integer('created_at')
  }),
])}
exports.down = function(knex, Promise) {}