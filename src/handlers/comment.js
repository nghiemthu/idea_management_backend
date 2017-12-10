import {
  dbGetIdeasCommentById,
} from '../models/comment';

export const getIdeasCommentById = (req, res) => 
	dbGetIdeasCommentById(req.params.id).then(data => res.json(data));
