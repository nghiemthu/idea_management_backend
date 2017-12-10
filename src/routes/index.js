var express = require("express");
var router = express.Router();

import {
  getIdeas,
  getIdeasById,
  postIdea,
  deleteIdeaById,
  updateIdeaById,
} from '../handlers/idea';

import {
  getIdeasCommentById,
} from '../handlers/comment';

router.get('/api/ideas', getIdeas);
router.get('/api/ideas/:id', getIdeasById);
router.get('/api/ideas/:id/comments', getIdeasCommentById); 

router.post('/api/ideas', postIdea);
router.delete('/api/ideas/:id', deleteIdeaById);

router.put('/api/ideas/:id', updateIdeaById);


module.exports = router;
