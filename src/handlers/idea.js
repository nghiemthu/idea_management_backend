import {
  dbGetIdeas,
  dbGetIdeasById,
  dbGetIdeasCommentById,
  dbCreateIdea,
  dbDeleteIdeaById,
  dbUpdateIdeaById,
} from '../models/idea';

export const getIdeas = (req, res) => 
	dbGetIdeas().then(data => res.json(data));

export const getIdeasById = (req, res) => 
	dbGetIdeasById(req.params.id).then(data => res.json(data));

export const getIdeasCommentById = (req, res) => 
	dbGetIdeasCommentById(req.params.id).then(data => res.json(data));

export const postIdea = (req, res) => {
  return dbCreateIdea({
    title: req.body.title,
    description: req.body.description,
    budget: req.body.budget,
    isReadyForComments: req.body.isReadyForComments,
    peopleNeeded: req.body.peopleNeeded,
    creationDate: new Date(),
    lastModified: new Date(),
    categoryId: req.body.categoryId,
  })
    .then((data) => res.json(data))
    .catch((err) => {
      res.send(err);
    });
};

export const deleteIdeaById = (req, res) => 
	dbDeleteIdeaById(req.params.id).then(() => res.send("Deleted"));

export const updateIdeaById = (req, res) => 
	dbUpdateIdeaById(req.params.id, {
    title: req.body.title,
    description: req.body.description,
    budget: req.body.budget,
    isReadyForComments: req.body.isReadyForComments,
    peopleNeeded: req.body.peopleNeeded,
    lastModified: new Date(),
    categoryId: req.body.categoryId,
  }).then(() => res.send("Updated"));
