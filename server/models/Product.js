const mongoose = require('mongoose');

const { Schema } = mongoose;

const Product = new Schema({
  description: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Product', Product);
