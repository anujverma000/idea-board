var mongoose = require('mongoose');
const uuid = require('uuid/v4');

var Schema = mongoose.Schema;

var IdeaSchema = new Schema({
  _id: {type: mongoose.Types.ObjectId, auto: true},
  id: { type: String, default: uuid, index: true, unique: true},
  created_date: { type: Date, required: true, default: Date.now },
  title: { type: String, maxlength: 140 }, 
  body: { type: String, maxlength: 140 }
});

module.exports = mongoose.model('Idea', IdeaSchema);