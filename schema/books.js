var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var booksSchema = Schema ({
	_id: Number,
	book_name :String
});

exports.books = mongoose.model('books', booksSchema);