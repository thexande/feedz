exports.up = function(knex, Promise) {
return Promise.all([
  knex.schema.createTable('e2e_users', function(table){
    table.increments('id').primary()
    table.string('')
  ])}
exports.down = function(knex, Promise) {
}