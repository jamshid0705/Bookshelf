const Book = require("../model/book");
const catchError = require("../utility/catchError");
const axios=require('axios');
const appError = require("./appError");

const responseFunction = (res, statusCode, data) => {
  if (Array.isArray(data)) {
    res.status(statusCode).json({
      status: "success",
      results: data.length,
      data: data,
    });
  } else {
    res.status(statusCode).json({
      status: "success",
      data: data,
    });
  }
};

///////////// get all book ////////////////
const getAllBook = catchError(async (req, res) => {
  const book = await Book.find();

  responseFunction(res, 200, book);
});

////////////// add book //////////////////
const addBook = catchError(async (req, res,next) => {
  const isbn = req.params.isbn;
  const url=`https://openlibrary.org/books/${isbn}.json`
  const data=await axios(url)
  console.log(data.data)
  if(!data){
    return next(new appError('Bunday malumot yoq',404))
  }
  const auther=await axios(`https://openlibrary.org/${data.data.authors[0].key}.json`)
  console.log(auther.data.alternate_names)
  const book = await Book.create({
    isbn: req.params.isbn,
    title: data.data.title,
    author: auther.data.alternate_names,
    first_publishing_year: data.data.publish_date,
    number_of_page: data.data.number_of_pages,
  });
  responseFunction(res, 200, book);
});
///////////// update book ///////////////
const updateBook = catchError(async (req, res) => {
  const book = await Book.findOne({isbn:req.body.isbn})
  book.status=req.body.status
  book.save({validateBeforeSave:true})
  responseFunction(res, 201, book);
});



module.exports={getAllBook,addBook,updateBook}