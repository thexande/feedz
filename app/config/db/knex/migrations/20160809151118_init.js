exports.up = function(knex, Promise) {
return Promise.all([
  knex.schema.createTable('feedz_users', function(table){
    table.increments('id').primary()
    table.string('username')
    table.string('password')
 
])}
exports.down = function(knex, Promise) {}