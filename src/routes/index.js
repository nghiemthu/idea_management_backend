var express = require("express");
var router = express.Router();

import {
  getIdeas,
} from '../handlers/idea';

router.get('/api/ideas', getIdeas);
router.get('/api/ideas/:id', getIdeasById);
router.get('/api/ideas/:id/comments', getIdeasCommentById); 
router.get('/api/ideas', getIdeas);
router.post('/api/ideas', postIdeas);
router.put('/api/ideas/:id', putIdeasById);
router.delete('/api/ideas/:id', deleteIdeasbById);


module.exports = router;
