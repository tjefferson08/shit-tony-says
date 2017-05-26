
exports.up = function(knex, Promise) {
  return knex.schema.createTable('quotes', function (table) {
    table.increments();
    table.string('body');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('quotes');
};
