import knex from '../../utils/db';

const ideaFields = ['id', 'title', 'description', 'budget', 'isReadyForComments', 'peopleNeeded', 
'creationDate', 'lastModified', 'categoryId'];

export const dbGetIdeas = () =>
  knex('idea').select('title');
export const dbGetIdeasById = (id) =>
  knex('idea').select('title', 'id').where({id});
export const dbGetIdeasCommentById = (id) =>
  knex('idea').select('title', 'id', 'isReadyForComments').where({id});
export const dbDeleteIdeasById = (id) =>
  knex('idea').where({id}).del();
export const dbPostIdeas = () =>
  knex('idea').insert('id', 'title', 'description', 'budget', 'isReadyForComments', 'peopleNeeded', 
'creationDate', 'lastModified', 'categoryId');
export const dbPutIdeasById = (id) =>
  knex('idea').where({id}).update('id', 'title', 'description', 'budget', 'isReadyForComments', 'peopleNeeded', 
'creationDate', 'lastModified', 'categoryId');
