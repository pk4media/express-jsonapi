'use strict';

module.exports = function(knex) {
  return knex.schema.dropTableIfExists('user_roles').then(function() {
    return knex.schema.createTable('user_roles', function(t) {
      t.integer('user_id').unsigned().references('id').inTable('users');
      t.integer('role_id').unsigned().references('id').inTable('roles');
    });
  });
};
