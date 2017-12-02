var express = require("express");
var router = express.Router();

import {
  getIdeas,
} from '../handlers/idea';

router.get('/api/ideas', getIdeas);

module.exports = router;