exports.up = knex =>
    knex.schema
        .createTableIfNotExists('comment', (table) => {
            table.increments('id').primary();
            table.integer('ideaId');
            table.timestamp('timestamp');
            table.integer('memberId');
            table.text('commentLine');
        });

exports.down = knex =>
    knex.schema
        .table.dropTableIfExists('comment');