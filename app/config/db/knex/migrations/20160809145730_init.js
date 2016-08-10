exports.up = function(knex, Promise) {
return Promise.all([
  knex.schema.createTable('feedz_users', function(table){
    table.increments('id').primary()
    table.string('username')
    table.string('password')
    table.string('email')
  }),
  knex.schema.createTable('feedz_sub_feeds', function(table){
    table.increments('id')
    table.integer('created_by_user').references("feedz_users.id")
    table.string('feed_content', 1000)
    table.string('feed_title')
    table.string('feed_identifier')
  }),
  knex.schema.createTable('feedz_posts', function(table){
    table.increments('id')
    table.integer('created_by_user').references("feedz_users.id")
    table.integer('belongs_to_sub_feed').references("feedz_sub_feeds.id")
    table.string('feed_content', 1000)
    table.string('feed_title')
    table.string('feed_identifier')
  })
])}
exports.down = function(knex, Promise) {}