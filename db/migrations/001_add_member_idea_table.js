/**
 * Add memberIdea table
 * Keeps a history of all updates
 */
exports.up = knex => (
    knex.schema
      .createTableIfNotExists('memberIdea', table => {
          table.integer('memberId');
          table.integer('ideaId');
      })
  );
  
  
  /**
   * Delete memberIdea service table
   */
  exports.down = knex => (
    knex.schema
        .table.dropTableIfExists('memberIdea')
  );