import knex from '../../utils/db';

const ideaFields = ['id', 'title', 'description', 'budget', 'isReadyForComments', 'peopleNeeded', 
'creationDate', 'lastModified', 'categoryId'];

export const dbGetIdeas = () =>
  knex('idea').select(ideaFields);
export const dbGetIdeasById = () =>
  knex('idea', 'id').select(ideaFields);
export const dbGetIdeasCommentById = () =>
  knex('idea', 'id', 'isReadyForComments').select(ideaFields);
