import {
  dbGetIdeas,
} from '../models/idea';

export const getIdeas = (req, res) => dbGetIdeas().then(data => res.json(data));
export const getIdeasById = (req, res) => dbGetIdeasId(req.param.id).then(data => res.json(data));
export const postIdeas = (req, res) => dbPostIdeas().then(data => res.json(data));
export const deleteIdeasById = (req, res) => dbDeleteIdeasById(req.param.id).then(data => res.json(data));
export const getIdeasCommentById = (req, res) => dbGetIdeasCommentById(req.param.id).then(data => res.json(data));
export const putIdeasById = (req, res) => dbPutIdeasById(req.param.id).then(data => res.json(data));
