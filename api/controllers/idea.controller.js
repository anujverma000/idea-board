const Idea = require('../models/idea.model');

exports.getAll = function (req, res) {
    Idea.find({}, function(err, ideas) {
      if(!err){
        res.send(ideas.map(i => getIdeaResponse(i)));
      } else {
        res.status(500).send(err);
      }
    });
};

exports.create = function(req, res){
  let idea = new Idea();
  idea.save(function (err, newIdea) {
    if (!err) {
      res.send(getIdeaResponse(newIdea));
    } else {
      res.status(500).send(err);
    }
  });
};

exports.update = function(req, res){
  Idea.findOneAndUpdate(
    { id: req.body.id }, 
    { $set: { title: req.body.title, body: req.body.body } }, 
    { returnNewDocument: true }, 
    function (err, updatedIdea) {
    if (!err){
      res.send(getIdeaResponse(updatedIdea));
    } else {
      res.status(500).send(err);
    }
  });
};

exports.delete = function(req, res){
  Idea.remove({ id: req.body.id }, function (err, deletedIdea) {
    if (!err){
      res.send(getIdeaResponse(deletedIdea));
    } else {
      res.status(500).send(err);
    }
  });
};

function getIdeaResponse (model) {
  return {
    id: model.id,
    created_date: model.created_date,
    title: model.title || '',
    body: model.body || ''
  }
}