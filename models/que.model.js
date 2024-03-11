const mongoose = require("mongoose");

const queSchema = new mongoose.Schema({
    type: { type: String, required: true },
    difficulty: { type: String, required: true },
    category: { type: String, required: true },
    question: { type: String, required: true },
    correct_answer: { type: String, required: true },
    incorrect_answers: [{ type: String, required: true }],
  }, {
    versionKey: false
  });
  
const QuesModel = new mongoose.model("question", queSchema);

module.exports = {
  QuesModel
};
