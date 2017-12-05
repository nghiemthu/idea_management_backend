import knex from '../../utils/db';

const ideaFields = ['id', 'title', 'description', 'budget', 'isReadyForComments', 'peopleNeeded', 
'creationDate', 'lastModified', 'categoryId'];

export const dbGetIdeas = () =>
  knex('idea').select('title');
export const dbGetIdeasById = (id) =>
  knex('idea').select('title', 'id');
export const dbGetIdeasCommentById = () =>
  knex('idea').select('title', 'id', 'isReadyForComments');
export const dbDeleteIdeasById = () =>
  knex('idea').where( 'id', id).del();
export const dbPostIdeasById = () =>
  knex('idea').select('title', 'id', 'isReadyForComments');
export const dbPutIdeasById = () =>
  knex('idea').select('title', 'id', 'isReadyForComments');
