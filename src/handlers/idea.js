import {
  dbGetIdeas,
} from '../models/idea';

export const getIdeasById = (req, res) => dbGetIdeasId().then(data => res.json(data));
