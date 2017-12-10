import knex from '../../utils/db';

const ideaFields = ['id', 'title', 'description', 'budget', 'isReadyForComments', 'peopleNeeded', 
'creationDate', 'lastModified', 'categoryId'];

export const dbGetIdeas = () =>
  knex('idea').select(ideaFields);

export const dbGetIdeasById = (id) =>
  knex('idea').select(ideaFields).where({id});

export const dbCreateIdea = ({ ...fields }) =>
	knex('idea')
	  .insert(fields)
	  .returning('*')
	  .then(results => results[0]); // return only first result

export const dbDeleteIdeaById = (id) =>
  knex('idea').where({id}).del();

export const dbUpdateIdeaById = (id, payload) =>
  knex('idea').where({id}).update(payload);
