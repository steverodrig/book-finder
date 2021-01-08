const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  author: { type: String, required: true },
  description: { type: String, required: true },
  imageURL: { data: Buffer, contentType: String }, 
  linkURL: { type: String, required: true },
  title: { type: String, required: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
