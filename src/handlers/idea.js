import {
  dbGetIdeas,
} from '../models/idea';

export const getIdeas = (req, res) => dbGetIdeas().then(data => res.json(data));
export const getIdeasById = (req, res) => dbGetIdeasId().then(data => res.json(data));
export const getIdeasById = (req, res) => dbGetIdeasId().then(data => res.json(data));
export const getIdeasById = (req, res) => dbGetIdeasId().then(data => res.json(data));
