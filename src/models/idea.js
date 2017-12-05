import knex from '../../utils/db';

const ideaFields = ['id', 'title', 'description', 'budget', 'isReadyForComments', 'peopleNeeded', 
'creationDate', 'lastModified', 'categoryId'];

export const dbGetIdeas = () =>
  knex('idea').select('title');
export const dbGetIdeasById = (id) =>
  knex('idea').select('title');
export const dbGetIdeasCommentById = () =>
  knex('idea', 'id', 'isReadyForComments').select(idea);
export const dbDeleteIdeasById = () =>
  knex('ideaFields).where( id, 'id');
export const dbGetIdeasCommentById = () =>
  knex('idea', 'id', 'isReadyForComments').select(idea);
export const dbGetIdeasCommentById = () =>
  knex('idea', 'id', 'isReadyForComments').select(idea);
