const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const TravellersSchema = new Schema({
  title: { type: String, required: true},
  author: { type: String, required: true},
  pages: { type: String },
  lastAccess: { type: Date, required: false, default: Date.now },
  genres: Schema.Types.Mixed,
  rating: { type: Number },
  reviews: Schema.Types.Mixed
});

module.exports = mongoose.model('traveller', TravellersSchema);