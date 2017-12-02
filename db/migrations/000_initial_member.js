exports.up = knex =>
  knex.schema
    /**
     * Users table
     *
     * Contains info on all users in the system
     */
    .createTableIfNotExists('members', (table) => {
      table.increments('id').primary();
      table.timestamp('createdAt').defaultTo(knex.fn.now());
      table
        .text('email')
        .notNullable()
        .unique();
      table.text('username').notNullable().unique();
    })

exports.down = knex => knex.schema.dropTableIfExists('users');
