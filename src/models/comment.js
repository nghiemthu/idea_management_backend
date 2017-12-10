import knex from '../../utils/db';

const commentFields = ['comment.id', 'ideaId', 'timestamp', 'memberId', 'commentLine'];

export const dbGetIdeasCommentById = (id) =>
  knex('comment').select(commentFields)
  	.join('idea', 'idea.id', 'comment.ideaId');