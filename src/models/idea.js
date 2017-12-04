import knex from '../../utils/db';

const ideaFields = ['id', 'title', 'description', 'budget', 'isReadyForComments', 'peopleNeeded', 
'creationDate', 'lastModified', 'categoryId'];

export const dbGetIdeas = () =>
  knex.select('idea').from(idea);
export const dbGetIdeasById = (id) =>
  knex('idea', 'id').select(idea);
export const dbGetIdeasCommentById = () =>
  knex('idea', 'id', 'isReadyForComments').select(idea);
export const dbDeleteIdeasById = () =>
  knex('ideaFields).where( id, 'id');
export const dbGetIdeasCommentById = () =>
  knex('idea', 'id', 'isReadyForComments').select(idea);
export const dbGetIdeasCommentById = () =>
  knex('idea', 'id', 'isReadyForComments').select(idea);
