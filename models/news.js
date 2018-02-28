const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const newsSchema = new Schema({
  title: { type: String, required: true },
  shortDescription: { type: String, required: true },
  url: { type: String, required: true },
  date: { type: Date, default: Date.now },
  tag: String,
});

const News = mongoose.model('News', newsSchema);

module.exports = News;
