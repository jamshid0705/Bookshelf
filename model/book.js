const mongoose=require('mongoose')

const bookSchema = new mongoose.Schema({
  isbn: {
    type: String,
    required: [true, "Siz isbn kiriting!"],
  },
  title: {
    type: String,
    required: [true, "Siz title kiriting"],
  },
  author: {
    type: Array,
    required: [true, "Siz auther kiriting"],
  },
  first_publishing_year: {
    type: Number,
    required: true,
  },
  number_of_page:{
    type:Number,
  },
  status:{
    type:Number,
    enum:[0,1,2],
    default:0
  }
});

const Book=mongoose.model('books',bookSchema)
module.exports=Book