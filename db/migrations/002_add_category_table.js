/**
 * Add category table
 * Keeps a history of all updates
 */
exports.up = knex => (
    knex.schema
      .createTableIfNotExists('category', table => {
          table.increments('id').primary();
          table.text('title').notNullable();
          table.float('budgetLimit');
          table.boolean('isActive');
      })
  );
  
  
/**
 * Delete category service table
 */
exports.down = knex => (
  knex.schema
      .table.dropTableIfExists('category')
);