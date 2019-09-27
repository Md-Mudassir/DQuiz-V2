const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  correct_answer: {
    type: String,
    required: true
  },
  incorrect_answers: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model("Posts", PostSchema);
