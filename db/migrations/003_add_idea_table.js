/**
 * Add idea table
 * Keeps a history of all updates
 */
exports.up = knex => (
  knex.schema
    .createTableIfNotExists('idea', table => {
        table.increments('id').primary();
        table.text('title').notNullable();
        table.text('description');
        table.decimal('budget');
        table.boolean('isReadyForComments');
        table.integer('peopleNeeded');
        table.date('creationDate');
        table.dateTime('lastModified');
        table.integer('categoryId');
    })
);
  
  
/**
 * Delete the terms of service table
 */
exports.down = knex => (
  knex.schema
      .table.dropTableIfExists('idea')
);