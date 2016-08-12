exports.up = function(knex, Promise) {
return Promise.all([
  knex.schema.createTable('feedz_posts', function(table){
    table.increments('id')
    table.integer('created_by_user').references("feedz_users.id")
    table.integer('belongs_to_sub_feed').references("feedz_sub_feeds.id")
    table.string('post_content', 1000)
    table.string('post_title')
  })
])}
exports.down = function(knex, Promise) {}