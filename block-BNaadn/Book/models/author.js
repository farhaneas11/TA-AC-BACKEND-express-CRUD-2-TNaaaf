var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var authorSchema = new Schema({
    author_name : String,
    author_email : String,
    author_country:String,
    bookId : {type:Schema.Types.ObjectId , ref : 'Book'}
},{timestamps:true});

var Author = mongoose.model('Author' , authorSchema);
module.exports = Author;